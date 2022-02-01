import styled from 'styled-components';
import {
  Button,
  ContainerImage,
  Image
} from 'styles/GlobalComponents/index';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 0;

  ${props => {
    return `
      background-color: ${props.theme.colors.backgroundColorBlack};
    `;
  }}
`;

export const Nav = styled.nav`
  display: none;
  visibility: hidden;

  @media ${props => props.theme.breakpoints.lg} {
    display: block;
    visibility: visible;
  }
`;

export const ListLinks = styled.ul`
  list-style: none;
  display: flex;
`;

export const Link = styled.li`
  margin-right: 1rem;
  cursor: pointer;

  ${props => {
    return `
      color: ${props.theme.colors.fontColorDescription1};
      font-family: ${props.theme.fonts.headings};
    `
  }}
`;

export const CustomButton = styled(Button)`
  display: none;
  visibility: hidden;

  @media ${props => props.theme.breakpoints.lg} {
    display: block;
    visibility: visible;
  }
`;

export const CustomContainerImage = styled(ContainerImage)`
  @media ${props => props.theme.breakpoints.lg} {
    display: none;
    visibility: hidden;
  }
`;

export const HeaderThree = styled.h3`
  ${props => {
    return `
      color: ${props.theme.colors.fontColorHeaders};
      font-family: ${props.theme.fonts.headings};
    `;
  }}
`;

export {
  Image
};