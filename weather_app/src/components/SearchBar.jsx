import React,{useState} from 'react'

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    if (location.trim() !== "") {
      onSearch(location);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
