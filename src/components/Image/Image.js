import React from 'react';

export const Image = ({ data: { image, caption } }) => {
  const styles = {
    height: image.dimensions.height,
    width: image.dimensions.width,
  };

  return (
    <figure>
      <img src={image.url} alt={image.alt} style={styles} />
      <figcaption>{caption.text}</figcaption>
    </figure>
  );
};
