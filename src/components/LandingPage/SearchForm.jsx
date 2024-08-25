import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate("/search-results", { state: { searchTerm } });
    }
  };

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <label htmlFor="search" className="sr-only">
        Search by keyword, topic, or research area
      </label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search by keyword, topic, or research area..."
        className="box-border flex relative flex-col shrink-0 p-2.5 mx-auto mt-5 text-center rounded border border-solid border-stone-300 w-[30vw] max-sm:w-[75vw]"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        required
      />
      <button
        type="submit"
        className="box-border relative shrink-0 px-6 py-4 mx-auto mt-5 text-center text-black bg-white rounded appearance-none cursor-pointer w-[30vw] max-sm:w-[50vw]"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
