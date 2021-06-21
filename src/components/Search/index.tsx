import { useState, useEffect } from "react";

import "./styles.css";

interface Props {
  onSubmit(): void;
  search(string: string): void;
}

const Search: React.FC<Props> = ({ onSubmit, search }) => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    search(searchInput);
  }, [searchInput]);

  const handleSubmit = () => {
    onSubmit();
  }

  return (
    <div className="search">
      <input
        type="text"
        className="search-layout search-font"
        placeholder="Search characters"
        value={searchInput}
        onChange={(event) => {
          setSearchInput(event.target.value);
        }}
      />
      <button className="search-layout search-font" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};

export default Search;
