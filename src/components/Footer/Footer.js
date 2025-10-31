import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #2c5282;
  color: white;
  padding: 2rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} Dr. Padmaja Health. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;