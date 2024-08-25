import React from "react";
import Header from "./Header";
import SearchForm from "./SearchForm";
import UploadButton from "./UploadButton";

function ResearchPage() {
  return (
    <main className="box-border flex relative flex-col shrink-0 self-stretch px-5 pt-10 pb-5 h-screen bg-center bg-no-repeat bg-cover bg-zinc-950 max-md:h-screen">
      <section className="box-border flex relative flex-col grow shrink-0 self-stretch px-5 pt-10 pb-5 mx-auto w-full h-screen bg-center bg-no-repeat bg-cover bg-zinc-950 max-w-[1200px] max-md:h-screen">
        <Header />
        <SearchForm />
        <UploadButton />
      </section>
    </main>
  );
}

export default ResearchPage;
