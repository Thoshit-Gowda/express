import Link from "next/link";

export default function Home() {
  return (
    <>
    <main className="flex flex-col items-center justify-center h-screen bg-slate-600">
      <container className="h-auto w-auto bg-gradient-to-br from-indigo-600 to-violet-800 pt-5 pb-5 rounded ">
        <section className=" h-auto w-auto flex flex-col justify-evenly p-5  ">
          <div className="flex flex-col m-2">
            <input type="text" className=" h-10 w-80 border rounded text-xl p-2 "></input>
            <p className="text-xl text-white">Name</p>
          </div>
          <div className="flex flex-col m-2">
            <input type="password" className=" h-10 w-80 border rounded text-xl p-2 "></input>
            <p className="text-xl text-white">Create Password</p>
          </div>
          <div className="flex flex-col m-2">
            <input type="password" className=" h-10 w-80 border rounded text-xl p-2 "></input>
            <p className="text-xl text-white">Confirm Password</p>
          </div>
        </section>
        <section className="h-auto w-auto flex itmes-center justify-center">
          <Link href="/ForgotPassword" className=" text-white absolute translate-x-28 -translate-y-7 underline" > Forgot Password</Link>
          <button type="submit" className="h-auto w-60 p-2 text-2xl text-white rounded-xl shadow bg-purple-700">Sign In</button>
        </section>
      </container>
      <Link href="/" className=" relative left-16 text-white">Don't have an Account? Sign up</Link>
    </main>
    </>
  );
}
