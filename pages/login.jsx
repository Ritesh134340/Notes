import Image from "next/image";
import React from "react";
import Link from "next/link";
import {AiFillGoogleCircle} from "react-icons/ai"

const Login = () => {
  return (
    <div className=" pt-[25px] pb-[50px] mb-[50px] border-[1px] rounded-[13px] shadow-md m-auto w-[60%] mt-[50px] ">
      {/* <div className="text-center mb-[27px]">
        <p className="text-[22px] text-red-600 font-bold">Sign In</p>
      </div> */}

      <div className="flex  items-center justify-between">
        <div className="w-[50%]">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="register"
          />
        </div>
     
        <div className="w-[50%] ">
          <div className="w-[85%] m-auto">
            <div className="flex items-center justify-center w-[100%]">
              <p className="text-[17px] tracking-[0.5px]">Sign in with</p>
            
              <div><AiFillGoogleCircle className=" cursor-pointer h-[35px] w-[35px] rounded-full text-[rgb(59,113,202)] ml-[10px] "/></div>
            </div>
            <div className="border-b-[1px] relative h-[40px] mb-[35px] ">
              <div className=" p-[10px] font-bold absolute flex items-center justify-center left-[44%] h-[40px] w-[40px] bottom-[-48%] m-0 bg-white rounded-[50%]">
                or
              </div>
            </div>

            <form>
              <label htmlFor="name" className="text-sm text-slate-500">
                Name
              </label>
              <br />
              <input
                type="text"
                className="focus:border-blue-600 focus:border-[2px] border-[1px] outline-none pl-[10px] border-slate-300 rounded-[5px] mt-[8px] mb-[15px] w-[100%] h-[40px]"
              />
              <br />
              
             
              <label htmlFor="name" className="text-sm text-slate-500">
                Password
              </label>
              <br />
              <input
                type="text"
                className="focus:border-blue-600 focus:border-[2px] border-[1px] outline-none pl-[10px] border-slate-300 rounded-[5px] mt-[8px] mb-[15px] w-[100%] h-[40px]"
              />
              <br />
              <button className=" mt-[20px] bg-[rgb(59,113,202)] text-white pt-[8px] pb-[8px] pl-[15px] font-bold pr-[15px] rounded-[3px] text-sm">
                LOGIN
              </button>
            </form>
            <p className="mt-2 mb-0 pt-1 text-sm font-semibold">
             Don&apos;t have an account?
              <span className="ml-[3px]"> <Link
                href="/signup"
                className="text-red-600 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
              >
                Register
              </Link></span>
            </p>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login