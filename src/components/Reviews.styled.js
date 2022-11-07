import styled from '@emotion/styled';

export const Container = styled.div`
  padding: ${p => p.theme.space[3]}px;
`;

export const ReviewsList = styled.ul`
  list-style: none;
`;

export const ReviewsItem = styled.li`
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const ReviewAuthor = styled.h3`
  font-size: ${p => p.theme.fontSizes.s};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const ReviewContent = styled.p`
  font-size: ${p => p.theme.fontSizes.xs};
  padding-left: ${p => p.theme.space[3]}px;
`;

export const ReviewError = styled.p`
  font-size: ${p => p.theme.fontSizes.xs};
`;
