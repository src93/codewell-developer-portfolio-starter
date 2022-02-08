import styled from 'styled-components';
import {
  Paragraph,
  Title
} from 'styles/GlobalComponents/index';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  align-items: center;

  ${props => {
    return `
      background-color: ${props.theme.colors.backgroundColorGrey};
      padding: ${props.theme.paddings.sections};
    `;
  }}

  @media ${props => props.theme.breakpoints.lg} {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const ContainerText = styled.div`
  max-width: 42.5rem;
  margin: 2rem 0 1rem;
`;

export const CustomParagraph = styled(Paragraph)`
  ${props => {
    return `
      color: ${props.theme.colors.fontColorDescription2};
    `;
  }}
`;

export {
  Title
};

