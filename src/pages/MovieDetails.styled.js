import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: ${p => p.theme.space[5]}px;
`;

export const MovieWrapper = styled.div`
  display: flex;
  padding-bottom: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  border-bottom: ${p => p.theme.borders.bold};
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  color: ${p => p.theme.colors.primaryText};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus-visible {
    background-color: ${p => p.theme.colors.orange};
    color: ${p => p.theme.colors.white};
  }
`;

export const MoviePoster = styled.img`
  display: block;
  max-width: 240px;
  height: 356px;
  border-radius: ${p => p.theme.radii.normal};
`;

export const MovieDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${p => p.theme.space[5]}px;
`;

export const MovieTitle = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const MovieSubtitle = styled.h4`
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const MovieData = styled.p`
  padding-left: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const GenresList = styled.ul`
  padding-left: ${p => p.theme.space[3]}px;
  list-style: none;
`;

export const GenresItem = styled.li`
  list-style: none;
`;

export const AdditionalInfoList = styled.ul`
  padding-left: ${p => p.theme.space[3]}px;
  list-style: none;
`;

export const AdditionalInfoItem = styled.li`
  text-decoration: underline;
`;

export const AdditionalInfoLink = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.colors.primaryText};

  :hover,
  :focus {
    color: ${p => p.theme.colors.orange};
  }
`;
