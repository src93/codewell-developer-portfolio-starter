import styled from 'styled-components';
import {
  ContainerImage,
  Image,
  Paragraph
} from 'styles/GlobalComponents/index';

export const Section = styled.section`
  ${props => {
    return `
      background-color: ${props.theme.colors.backgroundColorBlack};
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

export const ListImages = styled.ul`
  /* display: flex;
  list-style: none;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 500px));
`;

export const CustomParagraph = styled(Paragraph)`
  ${props => {
    return `
      color: ${props.theme.colors.fontColorDescription1};
    `
  }}
`;

export {
  ContainerImage,
  Image
}
