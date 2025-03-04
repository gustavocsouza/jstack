import React from "react";

import Post from "./Post";

function App({ name }) {
  return (
    <>
      <h1>Componente App</h1>
      <h2>Posts da semana</h2>

      <hr />

      <Post 
        likes={1}
        title="Título da notícia 01" 
        subtitle="Subtítulo da notícia 01"
      />
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </>
  );
}

export default App;
