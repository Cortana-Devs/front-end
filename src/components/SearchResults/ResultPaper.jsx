import React from "react";

function ResultPaper({ title }) {
  return (
    <div className="box-border relative pt-5 pb-8 mt-5 h-auto text-center text-white rounded-lg bg-neutral-900">
      <span className="bg-neutral-600 bg-opacity-0">{title}</span>
    </div>
  );
}

export default ResultPaper;
