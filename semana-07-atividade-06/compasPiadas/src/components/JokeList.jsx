function JokeList({posts,onDelete,isRequesting,showResponse,toggleResponse, blockButton,}) {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.joke}</p>
          {showResponse[post.id] && <p className="response">{post.response}</p>}
          <button
            disabled={isRequesting || blockButton}
            onClick={() => toggleResponse(post.id)}
          >
            {showResponse[post.id] ? "Ocultar" : "Mostrar"}
          </button>
          <button
            disabled={isRequesting || blockButton}
            onClick={() => onDelete(post.id)}
          >
            Apagar
          </button>
        </div>
      ))}
    </>
  );
}

export default JokeList;
