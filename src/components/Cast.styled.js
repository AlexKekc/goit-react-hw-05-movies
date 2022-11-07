import styled from '@emotion/styled';

export const Container = styled.div`
  padding: ${p => p.theme.space[3]}px;
`;

export const ActorsList = styled.ul`
  list-style: none;
`;

export const ActorsItem = styled.li`
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const ActorImage = styled.img`
  display: block;
  margin-bottom: ${p => p.theme.space[2]}px;
  max-width: 120px;
  height: 178px;
  border-radius: ${p => p.theme.radii.normal};
`;

export const ActorData = styled.p`
  font-size: ${p => p.theme.fontSizes.xs};
`;

export const ActorError = styled.p`
  font-size: ${p => p.theme.fontSizes.xs};
`;
