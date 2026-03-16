import React from "react";

interface Props {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const Filter: React.FC<Props> = ({ filter, setFilter }) => {
  const [inputValue, setInputValue] = React.useState(filter);
  // const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
  //   setFilter(e.target.value);
  // };
  return (
    <div className="filter-container">
      <input
        className="filter-input"
        type="text"
        placeholder="Search organization members..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        // onChange={handleOnChange}
      />
      <button className="search-button" onClick={() => setFilter(inputValue)}>
        Search
      </button>
    </div>
  );
};
