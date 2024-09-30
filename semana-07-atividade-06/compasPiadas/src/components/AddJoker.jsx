import { useState } from "react";
import axios from "axios";
import LoadingRequest from "./LoadingRequest";
import "../styles/AddJoker.css";

function AddJoker({ onAdd, isRequesting, setBlockButton,posts }) {
  const [newJoke, setNewJoke] = useState("");
  const [newResponse, setNewResponse] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (posts.length >=10){
      return alert("limites de piada, apague uma para continuar!")
    }
    const jokeData = { id:`${posts.length + 1}`,joke: newJoke, response: newResponse };
    if (!newJoke.trim() || !newResponse.trim()) {
      return alert("Preencha ambos os campos!!");
    }
    setIsSubmitting(true);
    setBlockButton(true);
    try {
      const response = await axios.post(
        "http://localhost:3100/Jokes",
        jokeData,
      );
      onAdd(response.data);
      setNewJoke("");
      setNewResponse("");
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsSubmitting(false);
      setBlockButton(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma nova piada"
        value={newJoke}
        onChange={(e) => setNewJoke(e.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a resposta da piada"
        value={newResponse}
        onChange={(e) => setNewResponse(e.target.value)}
      />
      <button
        disabled={isSubmitting || isRequesting || !newJoke || !newResponse}
        className="button-enviar"
      >
        Enviar
      </button>
      {isSubmitting && <LoadingRequest message="Enviando piada..." />}
    </form>
  );
}

export default AddJoker;
