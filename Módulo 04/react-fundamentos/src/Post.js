import React from 'react'
import PropTypes from 'prop-types';

function Post({ title, subtitle, likes }) {
  return (
   <>
      <article>
        <strong>{title ?? "Titulo default"}</strong> <br />
        <small>{subtitle ?? "Subtitulo default"}</small>
        <p>{likes}</p>
      </article>
      <br />
   </>
  );
}

export default Post;

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
  }).isRequired,
};