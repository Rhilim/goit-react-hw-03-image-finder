import { SearchbarStyled } from './Searchbar.styled';

export const Searchbar = ({ handleSubmit }) => {
  return (
    <header className="searchbar">
      <SearchbarStyled
        onSubmit={evt => {
          evt.preventDefault();
          if (evt.target.elements.queryInput.value === '') {
            alert('Please enter search criteria');
          }
          handleSubmit(evt.target.elements.queryInput.value);
          evt.target.reset();
        }}
      >
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
        <input
          type="text"
          name="queryInput"
          className="input"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchbarStyled>
    </header>
  );
};
