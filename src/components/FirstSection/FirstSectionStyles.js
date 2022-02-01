import styled from 'styled-components';
import {
  ContainerImage,
  Image,
  Paragraph,
  Title
} from 'styles/GlobalComponents/index';

export const Section = styled.section`
  ${props => {
    return `
      background-color: ${props.theme.colors.backgroundColorBlack};
    `;
  }}
`;

export const ListImages = styled.ul`
  list-style: none;
  position: relative;
  height: 16.25rem;
  margin: 0;

  @media ${props => props.theme.breakpoints.md} {
    height: 14.375rem;
  }

  @media ${props => props.theme.breakpoints.lg} {
    height: 14.375rem;
    position: initial;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const Item = styled.li`
  position: absolute;

  &:nth-of-type(1) {
    left: 20%;
    top: 50px;
  }

  &:nth-of-type(2) {
    left: 52%;
    top: 50px;
  }

  &:nth-of-type(3) {
    left: 26%;
    top: 100px;
  }

  &:nth-of-type(4) {
    left: 46%;
    top: 100px;
  }

  &:nth-of-type(5) {
    left: 15%;
    top: 150px;
  }

  &:nth-of-type(6) {
    left: 60%;
    top: 150px;
  }

  @media ${props => props.theme.breakpoints.md} {
    &:nth-of-type(1) {
      left: 20%;
      top: 75px;
    }

    &:nth-of-type(2) {
      left: 42%;
      top: 75px;
    }

    &:nth-of-type(3) {
      left: 70%;
      top: 75px;
    }

    &:nth-of-type(4) {
      left: 10%;
      top: 120px;
    }

    &:nth-of-type(5) {
      left: 38%;
      top: 120px;
    }

    &:nth-of-type(6) {
      left: 71%;
      top: 120px;
    }
  }

  @media ${props => props.theme.breakpoints.lg} {
    position: initial;
  }
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
  Image,
  Title
}
