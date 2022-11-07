import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${p => p.theme.space[4]}px;
`;

export const MoviesList = styled.ul`
  padding-left: ${p => p.theme.space[3]}px;
  list-style: none;
`;

export const MoviesItem = styled.li`
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.colors.primaryText};

  :hover,
  :focus {
    color: ${p => p.theme.colors.orange};
  }
`;
