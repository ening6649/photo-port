import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
  // making currentCategory an object
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      {/* for category template literal to work in photolist */}
      <PhotoList category={currentCategory.name} />
    </section>
  );
}
export default Gallery;
