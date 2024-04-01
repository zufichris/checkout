"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
const Form = () => {
  const data = {
    step: 1,
    value: "",
    type: "text",
    placeholder: "Enter Your Full Name",
  };
const date=new Date()

const [current, setcurrent] = useState(data);
  const [disabled, setdisabled] = useState(true);
  const [name, setname] = useState(false);
  const [email, setemail] = useState(false);
  const [address, setaddress] = useState(false);
  const [procx, setprocx] = useState(false);
  const [qual, setqual] = useState(false);
  const [load, setload] = useState(false);

  const handleChange = (value: string) => {
    switch (current.step) {
      case 1:
        value?.length > 4 ? setname(true) : setname(false);
        value?.length > 4 ? setdisabled(false) : setname(true);
        break;
      case 2:
        value?.includes("@" && ".com") ? setemail(true) : setemail(false);
        break;
      case 3:
        setaddress(true);
        break;
      case 4:
        setprocx(true);
        break;
      case 5:
        setqual(true);
        break;
      default:
        break;
    }
  };
  const next = (value: string) => {
    switch (current.step) {
      case 1:
        setcurrent({
          placeholder: "Enter Your Email",
          step: 2,
          type: "email",
          value: "",
        });

        break;
      case 2:
        if (value?.includes("@" && ".com"))
          setcurrent({
            placeholder: "Enter Your Address",
            step: 3,
            type: "address",
            value: "",
          });

        break;
      case 3:
        setcurrent({
          placeholder: "We Are Processing Your Order",
          step: 4,
          type: "process",
          value: "",
        });
        setprocx(true)
      case 4:
        setload(true);
        setTimeout(() => {
          setcurrent({
            placeholder: "We Are Checking Product Quality",
            step: 5,
            type: "process",
            value: "",
          });
        }, 4000);
        setqual(true)
        break;
      case 5:
        break;
      default:
        break;
    }
  };
  return (
    <div className="fixed sm:text-sm flex  flex-col  gap-4 items-center justify-center   z-50 h-screen w-screen bg-transparent">
      <ul className="steps overflow-hidden mt-6">
        <li
          data-content={name ? "✓" : "?"}
          className={`step sm:text-sm  ${name ? "step-success" : "step-neutral"}`}
        >
        Name
        </li>
        <li
          data-content={email ? "✓" : "?"}
          className={`step  ${email ? "step-success" : "step-neutral"}`}
        >
        Email
        </li>

        <li
          data-content={address ? "✓" : "?"}
          className={`step  ${address ? "step-success" : "step-neutral"}`}
        >
          Address
        </li>
        <li data-content={procx ? "✓" : "?"}
          className={`step  ${procx ? "step-success" : "step-neutral"}`}>
          Processing Order
        </li>
        <li data-content={qual ? "✓" : "?"}
          className={`step  ${qual ? "step-success" : "step-neutral"}`}>
          Quality Check
        </li>
        <li  data-content={ "?"}
          className={`step  ${Number(email)===Math.random() ? "step-success" : "step-neutral"}`}>
          Dispatch Item
        </li>
        <li data-content={  "?"}
          className={`step  ${Number(email)===Math.random()? "step-success" : "step-neutral"}`}>
          Product Delivered
        </li>
      </ul>

      {
        <>
          {" "}
          <input
            onChange={(e) => {
              handleChange(e.target.value);
              setcurrent((c) => ({
                ...c,
                value: e.target.value,
              }));
            }}
            type={current?.type}
            placeholder={current?.placeholder}
            className={`input border-neutral-700 focus:bg-transparent ${load ? "hidden" : ""}`}
            value={current.value}
          />
          <button
            onClick={() => next(current.value)}
            className={`btn disabled:bg-transparent border-neutral-700 border-2  ${
              load ? "hidden" : ""
            }`}
            disabled={disabled}
          >
            Next
          </button>
        </>
      }

      {load && (
        <>
          <h6 className="font-bold sm:text-2xl">{current?.placeholder}</h6>
          <p className="text-neutral-300">Please Wait...</p>
          <ClipLoader size={50} loading={load} color="white" />
        </>
      )}
      
      <footer className="flex flex-col items-center justify-center gap-2">
        <div>copyright {date.getFullYear()} Pet Delivery </div>
        <div>Developed by <Link href={'https://zufi-techm.github.io/portfolio'} className="font-bold text-primary">IQtech</Link></div>
         </footer>
    </div>
  );
};

export default Form;
