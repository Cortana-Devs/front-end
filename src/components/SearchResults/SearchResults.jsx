import React from "react";
import { useLocation } from "react-router-dom";
import ResultPaper from "./ResultPaper";
import Header from "../Header/Header";

const searchResults = [
  { id: 1, title: "Result Paper 1" },
  { id: 2, title: "Result Paper 2" },
  { id: 3, title: "Result Paper 3" },
  { id: 4, title: "Result Paper 4" },
  { id: 5, title: "Result Paper 5" },
  { id: 6, title: "Result Paper 6" },
  { id: 7, title: "Result Paper 7" },
];

function SearchResults() {
  const location = useLocation();
  const { searchTerm } = location.state || {};

  return (
    <div className="box-border flex relative flex-col shrink-0 self-stretch px-5 pt-10 pb-5 h-screen bg-center bg-no-repeat bg-cover bg-zinc-950 max-md:h-screen">
      <main className="box-border flex relative flex-col grow shrink-0 self-stretch px-5 pt-10 pb-5 mx-auto w-full h-screen bg-center bg-no-repeat bg-cover bg-zinc-950 max-w-[1200px] max-md:h-screen">
      <Header />
        <h1 className="mx-auto mt-7 text-2xl font-light tracking-normal text-center max-w-[860px] text-stone-300 max-md:text-base">
          Results for {searchTerm ? `"${searchTerm}"` : "%Search%"}
        </h1>
        <section className="box-border flex relative flex-col shrink-0 mx-5 mt-5">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              {searchResults.slice(0, 4).map((result) => (
                <ResultPaper key={result.id} title={result.title} />
              ))}
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              {searchResults.slice(4).map((result) => (
                <ResultPaper key={result.id} title={result.title} />
              ))}
            </div>
          </div>
        </section>
        <div className="flex flex-col justify-start items-start mx-auto mt-9 max-w-[860px]">
          <div className="box-border flex relative flex-row shrink-0 gap-4 self-center pt-4 mx-auto w-auto" />
        </div>
      </main>
    </div>
  );
}

export default SearchResults;
