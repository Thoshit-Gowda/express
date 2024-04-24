"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  let pas1 = "";
  let pas2 = "";

  const SignUp = () => {
    if(pas1 === pas2){
      setPassword(pas2);
    }
    fetch("http://localhost:300/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name: name, password: password})
    }).then(response => response.json).then(data => {
      alert(data)
    }).catch(error => alert(error))
  }

  const editName = (e) => {
    setName(e.target.value);
  }

  const editPassword1 = (e) => {
    pas1 = e.target.value;
  }
  
  const editPassword2 = (e) => {
    pas2 = e.target.value;
  }

  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen bg-slate-600">
        <container className="h-auto w-auto bg-gradient-to-br from-indigo-600 to-violet-800 pt-5 pb-5 rounded ">
          <section className=" h-auto w-auto flex flex-col justify-evenly p-5  ">
            <div className="flex flex-col m-2">
              <input type="text" onChange={editName} required className=" h-10 w-80 border rounded text-xl p-2 "></input>
              <p className="text-xl text-white">Name</p>
            </div>
            <div className="flex flex-col m-2">
              <input type="password" onChange={editPassword1} className=" h-10 w-80 border rounded text-xl p-2 "></input>
              <p className="text-xl text-white">Create Password</p>
            </div>
            <div className="flex flex-col m-2">
              <input type="password" onChange={editPassword2} className=" h-10 w-80 border rounded text-xl p-2 "></input>
              <p className="text-xl text-white">Confirm Password</p>
            </div>
          </section>
          <section className="h-auto w-auto flex itmes-center justify-center">
            <Link href="/ForgotPassword" className=" text-white absolute translate-x-28 -translate-y-7 underline" > Forgot Password</Link>
            <button type="submit" className="h-auto w-60 p-2 text-2xl text-white rounded-xl shadow bg-purple-700" onClick={SignUp} >Sign Up</button>
          </section>
        </container>
        <Link href="./SignIn" className=" relative left-20 text-white">Have an Account? Sign In</Link>
      </main>
    </>
  );
}
