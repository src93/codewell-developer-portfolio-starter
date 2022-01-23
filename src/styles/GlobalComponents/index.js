import styled from 'styled-components';

export const Button = styled.button`
  background-color: #FBE850;
  border-radius: 0.3125rem;
  width: 10rem;
  height: 2rem;
  color: #100E05;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const ContainerImage = styled.div`
  ${props => {
    return `
      width: ${props.width};
    `;
  }}
`;

export const Paragraph = styled.p`
  ${props => {
    return `
      font-family: ${props.theme.fonts.body};
    `;
  }}
`;