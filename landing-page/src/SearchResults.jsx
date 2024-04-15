import React from "react";

const SearchResults = ({ results }) => {
  return (
    <div
      className="max-h-[300px] overflow-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {results.slice(0, 4).map((result, index) => {
        return (
          <div key={index}>
            <button
              key={result.id}
              className="my-2 w-full rounded-xl border-2 border-black bg-orange-200 p-2 hover:bg-orange-300"
            >
              <div>
                <p>{result.title}</p>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
