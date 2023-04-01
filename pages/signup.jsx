import Image from "next/image";
import React,{useState,useRef} from "react";
import Link from "next/link";
import {useDispatch} from "react-redux"
import {AiFillGoogleCircle} from "react-icons/ai"
import { userSignup } from "@/redux/authRedux/action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';




const Signup = () => {
  const router=useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch=useDispatch()
  const nameRef=useRef(null)
  const emailRef=useRef(null)
  const passwordRef=useRef(null)
  
  
  const handleBlur=(e)=>{
   console.log(e.target)
  }

  const handleSignup=(e)=>{
    e.preventDefault();

    if(name && email && password){
      const payload={
       name:name,
       email:email,
       password:password
      }
      dispatch(userSignup(payload)).then((res)=>{
        if(res.status===200){
          setName("")
          setPassword("")
          setEmail("")

          toast.success(res.payload.mesg, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });

           router.push("/")
        }
        if(res.status===409){
          toast.warn(res.mesg, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        }
        else{
          toast.error(res.mesg, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        }
      })
    }

  }

  return (
    <div className=" pt-[25px] pb-[50px] mb-[50px] border-[1px] rounded-[13px] shadow-md m-auto w-[60%] mt-[50px] ">
      {/* <div className="text-center mb-[27px]">
        <p className="text-[22px] text-red-600 font-bold">Sign Up</p>
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
              <p className="text-[17px] tracking-[0.5px]">Sign up with</p>
            
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
                ref={nameRef}
                type="text"
                className="focus:border-[2px] focus:border-blue-600 border-[1px] outline-none pl-[10px] border-slate-300 rounded-[5px] mt-[8px] mb-[15px] w-[100%] h-[40px]"
              value={name} onChange={(e)=>setName(e.target.value)} onBlur={handleBlur}/>
              <br />
              <label htmlFor="name" className="text-sm text-slate-500">
                Email
              </label>
              <br />
              <input
               ref={emailRef}
               value={email} onChange={(e)=>setEmail(e.target.value)}
                type="text"
                className="focus:border-[2px] focus:border-blue-600 border-[1px] outline-none pl-[10px] border-slate-300 rounded-[5px] mt-[8px] mb-[15px] w-[100%] h-[40px]"
                onBlur={handleBlur}/>
              <br />
              <label htmlFor="name" className="text-sm text-slate-500">
                Password
              </label>
              <br />
              <input
               ref={passwordRef}
               value={password} onChange={(e)=>setPassword(e.target.value)}
                type="text"
                className="focus:border-[2px] focus:border-blue-600 border-[1px] outline-none pl-[10px] border-slate-300 rounded-[5px] mt-[8px] mb-[15px] w-[100%] h-[40px]"
                onBlur={handleBlur}/>
              <br />
              <button className=" mt-[20px] bg-[rgb(59,113,202)] text-white pt-[8px] pb-[8px] pl-[15px] font-bold pr-[15px] rounded-[3px] text-sm" onClick={handleSignup}>
                REGISTER
              </button>
            </form>
            <p className="mt-2 mb-0 pt-1 text-sm font-semibold">
              Have an account?
              <span className="ml-[3px]"> <Link
                href="/login"
                className="text-red-600 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
              >
                Login
              </Link></span>
            </p>
           
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Signup;
