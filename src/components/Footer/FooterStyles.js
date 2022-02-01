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
    `;
  }}
`;

export const ContainerIcons = styled.div`
  display: flex;
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