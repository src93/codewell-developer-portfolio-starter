import styled from 'styled-components';
import {
  ContainerImage,
  Image,
  Paragraph,
  Title,
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

  @media ${props => props.theme.breakpoints.lg} {
    flex-direction: row;
    justify-content: space-between;
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

export const CustomContainerImage = styled(ContainerImage)`
  max-height: 378px;

  @media ${props => props.theme.breakpoints.md} {
    height: 378px;
  }
`;

export {
  Image,
};