import styled from 'styled-components';
import {
  Paragraph,
  Title,
  Button,
  MaxLimit
} from 'styles/GlobalComponents/index';

export const Section = styled.section`
  display: flex;
  justify-content: center;

  ${props => {
    return `
      background-color: ${props.theme.colors.backgroundColorBlack};
      padding: ${props.theme.paddings.sections};
    `;
  }}
`;

export const CustomMaxLimit = styled(MaxLimit)`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
`;

export const CustomParagraph = styled(Paragraph)`
  ${props => {
    return `
      color: ${props.theme.colors.fontColorDescription1};
    `
  }}
`;

export {
  Title,
  Button
};