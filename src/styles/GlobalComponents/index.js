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

  ${props => {
    return `
      width: ${props.width};
      height: ${props.fullHeight ? '100%' : 'auto'};
      object-fit: ${props.contain ? 'contain' : 'initial'};
    `;
  }}
`;

export const ContainerImage = styled.div`
  ${props => {
    return `
      width: ${props.width};
      height: ${props.height || '100%'};
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

export const Title = styled.h2`
  margin: 0;
  ${props => {
    return `
      color: ${props.theme.colors.fontColorHeaders};
      font-family: ${props.theme.fonts.headings};
    `;
  }}
`;