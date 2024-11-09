 
import Image from "next/image";
 
import React, { useState } from "react";
 
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CachedIcon from '@mui/icons-material/Cached';
import { useRouter } from "next/router";
export default function Page() {
  const [showPW, setShowPW] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState(false);
  const router = useRouter();

  // const login = async () => {
   
  //   const res = await fetch(`http://localhost:3000/api/login`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ username, password }),
  //   });
  //   setVerify(false);
  //   if (res.ok) {
  //     router.push("/Dashboard");
  //   } else {
  //     const data = await res.json();
  //     console.error(data.message)
  //     setError(data.message);
  //   }
  // };
 
 
 
  const login = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (data.success) {
      router.push('/Dashboard');
    } else {
      setError('Invalid credentials');
    }
  };
  return (
    <div className="bg-gray-700 h-screen flex justify-center items-center">
      <div className="bg-white p-10 w-10/12 lg:w-4/12 rounded-lg">
        <div className="bg-primary p-3 rounded w-fit m-auto">
          {/* <div className="relative h-[50px] w-[100px]">
            <Image src={"/images/logo-1.png"} fill alt="" />
          </div> */}
        </div>

        <div className="mt-6 grid gap-4 relative">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className= 
              "placeholder:text-gray-500  rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-2 text-black outline-none transition focus:border-[#64b846] active:border-[#64b846] disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input "
             
          />
          <div
            className= 
              "placeholder:text-gray-500 relative rounded-lg border-[1.5px] border-stroke bg-transparent  text-black outline-none transition focus:border-[#64b846] active:border-[#64b846] disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input   "
           
          >
            <input
              className="bg-white outline-none w-full px-5 py-2 rounded-lg"
              type={!showPW ? "password" : "text"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!showPW ? (
              <RemoveRedEyeIcon
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShowPW(true)}
              />
            ) : (
              <VisibilityOffIcon
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShowPW(false)}
              />
            )}
          </div>
          <p className="absolute   text-red-600 bottom-9">{error}</p>
          <div className="flex mt-3">
            <button
              onClick={login}
              className="m-auto  bg-gray-700 text-white h-10 flex justify-center items-center w-20 rounded"
            >
              {/* Login */}

              {verify ? <CachedIcon className=" animate-spin" /> : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


// react-responsive-carousel