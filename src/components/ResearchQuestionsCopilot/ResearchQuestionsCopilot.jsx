import React from "react";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import Button from "./Button";

function ResearchQuestionsCopilot() {
  return (
    <main className="box-border flex relative flex-col items-center justify-center h-screen bg-center bg-no-repeat bg-cover bg-[background-color:#c3cbdc] bg-[linear-gradient(147deg,#c3cbdc_0%,#edf1f4_74%)]">
      <section className="flex flex-col pt-14 pr-20 pb-20 pl-16 m-auto w-full bg-white rounded-3xl shadow-2xl max-w-[70vw] max-sm:px-8 max-sm:mt-2.5 max-sm:max-w-[95vw]">
        <header className="self-center pt-5 w-full text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 leading-normal max-sm:text-3xl max-sm:leading-normal">
          <h1>Research Questions Copilot</h1>
        </header>
        <div className="flex gap-5 justify-between mt-16 text-neutral-400 max-sm:mt-10">
          <div className="text-base font-bold leading-9 mb-2">User Details</div>
          <div className="text-s font-medium leading-9 text-right">
            Step 1 of 3
          </div>
        </div>
        <hr className="shrink-0 mt-3.5 h-px bg-gray-200 border border-gray-200 border-solid mb-8" />
        <form className="space-y-6">
          <FormInput
            label="Name"
            id="name"
            placeholder="John Doe"
            value="John Doe"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <FormInput
            label="Email"
            id="email"
            type="email"
            placeholder="name@mail.com"
            value="name@mail.com"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <FormSelect
            label="Academic Level"
            id="academicLevel"
            options={[
              { value: "Undergraduate", name: "Undergraduate" },
              { value: "Masters", name: "Masters" },
              { value: "PHD", name: "phd" },
            ]}
            defaultValue="Undergraduate"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="flex justify-center gap-3.5 mt-12 text-base font-bold leading-6 text-center whitespace-nowrap">
            <Button variant="secondary">Back</Button>
            <Button variant="primary">Next</Button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default ResearchQuestionsCopilot;