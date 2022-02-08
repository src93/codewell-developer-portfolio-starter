import styled from 'styled-components';
import {
  Paragraph,
  ContainerImage,
  Image
} from 'styles/GlobalComponents/index';

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${props => {
    return `
      background-color: ${props.theme.colors.backgroundColorGrey};
      padding: ${props.theme.paddings.sections};
    `;
  }}
`;

export const ContainerIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 6rem;
`;

export const CustomParagraph = styled(Paragraph)`
  font-size: 1.5rem;
  
  ${props => {
    return `
      color: ${props.theme.colors.fontColorHeaders};
    `
  }}
`;

export {
  ContainerImage,
  Image
}