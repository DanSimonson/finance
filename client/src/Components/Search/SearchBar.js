import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchBar.module.css";

const SearchBar = ({ results, setSearchResults }) => {
  
  const handleSearchChange = (e) => {
    if (!e.target.value) {
      return setSearchResults(results);
    }
    const resultArray = results.filter(result => result.email.includes(e.target.value) || result.name.includes(e.target.value))

    setSearchResults(resultArray)
  };
  const handleSubmit = () => {};
  return (
    <header className={styles.header}>
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          className={styles.search__input}
          type="text"
          id="search"
          onChange={handleSearchChange}
        />
        <button className={styles.search__button}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
