import styled from 'styled-components';
import {
  ContainerImage,
  Image,
  Paragraph,
  Title
} from 'styles/GlobalComponents/index';

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  ${props => {
    return `
      background-color: ${props.theme.colors.backgroundColorBlack};
    `;
  }}

  @media ${props => props.theme.breakpoints.lg} {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const CustomTitle = styled(Title)`
  margin-right: .5rem;
`;

export const CustomParagraph = styled(Paragraph)`
  margin-bottom: 3rem;
  ${props => {
    return `
      color: ${props.theme.colors.fontColorDescription1};
    `
  }}
`;

export const ContainerDescription = styled.div`
  max-width: 42.5rem;
  margin: 0 auto;
`;

export {
  ContainerImage,
  Image
};