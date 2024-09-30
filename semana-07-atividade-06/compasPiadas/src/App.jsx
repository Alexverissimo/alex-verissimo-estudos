import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import AddJoker from "./components/AddJoker";
import JokeList from "./components/JokeList";
import LoadingRequest from "./components/LoadingRequest";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isRequesting, setIsRequesting] = useState(false);
  const [blockButton, setBlockButton] = useState(false);
  const [showResponse, setShowResponse] = useState({});

  useEffect(() => {
    const fetchJokes = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3100/Jokes");
        setPosts(response.data.slice(0, 10));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    fetchJokes();
  }, []);

  const handleAddPost = (newPost) => setPosts([newPost, ...posts]);

  const handleDelete = async (id) => {
    setIsRequesting(true);
    setBlockButton(true);
    try {
      await axios.delete(`http://localhost:3100/Jokes/${id}`);
      setPosts((currentPosts) => currentPosts.filter((p) => p.id !== id));
    } catch (error) {
      console.log(error);
    } finally {
      setIsRequesting(false);
      setBlockButton(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleResponse = (id) => {
    setShowResponse((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="jokes">
      {error && <p>{error}</p>}
      {!loading ? (
        <div>
          <AddJoker
            setBlockButton={setBlockButton}
            isRequesting={isRequesting}
            onAdd={handleAddPost}
            posts={posts}
          />
          {isRequesting && <LoadingRequest message="Apagando piada..." />}
          <JokeList
            blockButton={blockButton}
            showResponse={showResponse}
            toggleResponse={toggleResponse}
            posts={posts}
            onDelete={handleDelete}
            isRequesting={isRequesting}
          />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
