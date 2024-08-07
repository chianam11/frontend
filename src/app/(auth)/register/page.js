"use client"
import { useState } from "react";
import instance from "@/setup/axios";
import { toast } from "react-toastify";
const Register = () => {
  const [formData,setFormdata] = useState({
    first_name:null,
    last_name:null,
    email:null,
    username:null,
    phone:null,
    password:null,
    passwordVerify:null
  })
  const handleSubmit =async (e)=>{ 
    e.preventDefault();
    try{
const response =await instance.post('/api/v1/admin/auth/register',formData)
toast.success(response.message)
    }catch(err){
const {message,errors} = err.response.data;
toast.error(message)
if(errors.length){
toast.error("Vui lòng nhập đủ các trường")

}
    }
   

  }
  const handleInput = (e)=>{
setFormdata({...formData,[e.target.name]:e.target.value})
  }
  return (
    
      <section className="h-screen ">
    <div className="container h-full px-6 py-24">

      <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
        {/* Left column container with background*/}
        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="w-full"
            alt="Phone image"
          />
        </div>
        {/* Right column container with form */}
        <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
          <form onSubmit={handleSubmit}>
          <div className="relative mb-6 flex justify-between" data-twe-input-wrapper-init="">
              <div>
                 <label
                htmlFor="exampleFormControlInput3"
                className=""
              >
                Firstname
              </label>
              <input
                type="text"
                name="first_name"
                className="w-full"
                id="exampleFormControlInput3"
                placeholder="Email address"
                onChange={handleInput}
              />
              </div>
              <div>
                 <label
                htmlFor="exampleFormControlInput3"
                className=""
              >
                Lastname
              </label>
              <input
                type="text"
                name="last_name"
                className="w-full"
                id="exampleFormControlInput3"
                placeholder="Email address"
                onChange={handleInput}
              />
              </div>
            
            </div>
            {/* Email input */}
            <div className="relative mb-6" data-twe-input-wrapper-init="">
               <label
                htmlFor="exampleFormControlInput3"
                className=""
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                className="w-full"
                id="exampleFormControlInput3"
                placeholder="Email address..."
                onChange={handleInput}
              />
             
            </div>
            <div className="relative mb-6" data-twe-input-wrapper-init="">
               <label
                htmlFor="exampleFormControlInput3"
                className=""
              >
                Your number phone
              </label>
              <input
                type="text"
                name="phone"
                className="w-full"
                id="exampleFormControlInput3"
                placeholder="Email address..."
                onChange={handleInput}
              />
             
            </div>
            <div className="relative mb-6" data-twe-input-wrapper-init="">
               <label
                htmlFor="exampleFormControlInput3"
                className=""
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                className="w-full"
                id="exampleFormControlInput3"
                placeholder="Email address..."
                onChange={handleInput}
              />
             
            </div>
            {/* Password input */}
            <div className="relative mb-6" data-twe-input-wrapper-init=""> <label
                htmlFor="exampleFormControlInput33"
                className=""
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full"
                id="exampleFormControlInput33"
                placeholder="Password"
                onChange={handleInput}
              />
             
            </div>
            <div className="relative mb-6" data-twe-input-wrapper-init=""> <label
                htmlFor="exampleFormControlInput33"
                className=""
              >
              Confirm Password
              </label>
              <input
                type="password"
                name="passwordVerify"
                className="w-full"
                id="exampleFormControlInput33"
                placeholder="Password"
                onChange={handleInput}
              />
             
            </div>
            {/* Remember me checkbox */}
          
            {/* Submit button */}
            <button
              type="submit"
              className="w-full"
              style={{
                background:"#DC4237",
                color:"white",
                padding:"4px"
              }}
            
            >
              SEND
            </button>
            {/* Divider */}
          <p className="pt-2"> Bạn đã có tài khoản? <a href="/login" style={{
            color:"blue"
          }}>Đăng nhập tại đây</a></p>
          </form>
        </div>
      </div>
    </div>
  </section>
 
  );
};

export default Register;
