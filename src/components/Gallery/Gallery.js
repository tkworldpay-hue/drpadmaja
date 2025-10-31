import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const Gallery = () => {
  return (
    <GalleryContainer>
      <h2>Our Gallery</h2>
      <GalleryGrid>
        {/* Add gallery items here */}
      </GalleryGrid>
    </GalleryContainer>
  );
};

export default Gallery;