import styled from '@emotion/styled';

export const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const SearchForm = styled.form`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  width: 500px;

  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;

  border-bottom: ${p => p.theme.borders.normal};
`;

export const SubmitButton = styled.button`
  width: 70px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;

  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3), 5px 5px 5px rgba(0, 0, 0, 0.1),
    2px 2px 2px rgba(0, 0, 0, 0.3);

  text-align: center;

  color: ${p => p.theme.colors.primaryText};
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.orange};
    color: ${p => p.theme.colors.white};
  }
`;

export const SearchFormInput = styled.input`
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  border: ${p => p.theme.borders.bold};
  border-color: ${p => p.theme.colors.transparentGray};
  border-radius: ${p => p.theme.radii.normal};
  outline: none;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    border-color: ${p => p.theme.colors.orange};
  }
`;
