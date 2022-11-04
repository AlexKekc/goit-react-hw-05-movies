import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AppBarHeader = styled.header`
  padding: ${p => p.theme.space[4]}px;
  width: 100vw;
  border-bottom: 1px solid white;
  box-shadow: 3px 5px 5px 3px rgba(0, 0, 0, 0.3), 5px 5px 5px rgba(0, 0, 0, 0.1);
`;

export const AppBarNav = styled.nav`
  display: flex;
`;

export const AppBarNavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: 6px;
  text-decoration: none;
  color: ${p => p.theme.colors.primaryText};

  &.active {
    background-color: ${p => p.theme.colors.orange};
    color: ${p => p.theme.colors.white};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.orange};
  }
`;
