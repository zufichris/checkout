import { GlobeDemo } from "@/components/demo";
import React from "react";

 
import Form from "@/components/form";
const index = () => {
  return (
    <main className="h-full w-full relative overflow-hidden">
      <Form />
      <GlobeDemo />
    </main>
  );
};

export default index;
