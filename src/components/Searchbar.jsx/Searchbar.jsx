import { SearchbarStyled } from './Searchbar.styled';

export const Searchbar = ({handleSubmit}) => {
  return (
    <SearchbarStyled onSubmit={handleSubmit}>
      <button type="submit">find</button>
      <input type="text" name="query" />
    </SearchbarStyled>
  );
};
