import React from "react";
import SoundBoard from "../components/SoundBoard";
import Lead from "../components/Lead";

const page = () => {
  return (
    <div className="flex flex-row justify-end gap-10 p-5">
      <SoundBoard />
      <Lead />
    </div>
  );
};

export default page;
