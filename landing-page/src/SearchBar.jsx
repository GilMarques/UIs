import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = ({ setResults, searchVisible }) => {
  const [input, setInput] = useState("");
  const ref = useRef(null);
  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
      response.json().then((data) => {
        const results = data.filter((item) => {
          return (
            value && item.title.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(results);
      });
    });
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    fetchData(e.target.value);
  };

  useEffect(() => {
    if (searchVisible) {
      setInput("");
      setResults([]);
      ref.current.focus();
    }
  }, [searchVisible, setResults]);
  return (
    <div
      className="mx-auto flex w-[70%] items-center rounded-2xl border-2 border-black bg-white px-4 py-2"
      onClick={(e) => e.stopPropagation()}
    >
      <FaSearch />
      <input
        ref={ref}
        type="text"
        placeholder="Type to search"
        className="ml-4 h-full w-full border-none bg-transparent focus:outline-none"
        value={input}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
