import styled from 'styled-components';

export const Main = styled.main`
  ${props => {
    return `
      background-color: ${props.theme.colors.backgroundColorBlack};
    `;
  }}
`;