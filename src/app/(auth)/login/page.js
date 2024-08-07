"use client"
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation'
import loginSlice from "@/redux/slice/authSlice";
import { tokenSlice } from "@/redux/slice/token";
const { login } = loginSlice.actions;
const { setRefreshToken, setToken } = tokenSlice.actions;
import axios from "axios";
const Login = () => {
  const onLogin = useSelector((state) => state.authLogin.onLogin);
  const access_Token = useSelector((state) => state.setToken.token);
  const refresh_token = useSelector((state) => state.setToken.refreshToken);
  const dispatch = useDispatch();
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Tên đăng nhập bắt buộc phải nhập")
        .max(100, "Tên đăng nhập không được nhập quá 100 ký tự"),
      password: Yup.string()
        .required("Mật khẩu không được để trống")
        .max(100, "Mật khẩu không được nhập quá 100 ký tự"),
    }),
    onSubmit: async (values) => {
      try {
        if (formik.values.username.includes(" ")) {
          return;
        }

        const response = await axios.post(
          process.env.SERVER_API + "/api/v1/admin/auth/login",
          {
            username: values.username,
            password: values.password,
          },
          {
            withCredentials: true,
          }
        );

        const { data } = response;

        const { accessToken, refreshToken: refreshTK } = data?.data;

        if (!accessToken) {
          toast.error("Đăng nhập không thành công");
        }

        if (data.status === 200) {
          dispatch(setRefreshToken(refreshTK));
          dispatch(setToken(accessToken));
          dispatch(login(true));
          toast.success("Đăng nhập thành công!");
         return router.push('/');
         
        }
        if (response.status!=200) {
          formik.errors.err = "Tài khoản hoặc mật khẩu không chính xác";
        }

        // Xử lý phản hồi từ máy chủ ở đây
      } catch (error) {
        if(error?.response?.status===401){
          formik.errors.err = "Tài khoản hoặc mật khẩu không chính xác";

return 0;
        }
toast.error("Đăng nhập thất bại vui lòng thử lại sau")
      }
    },
  });
  useEffect(()=>{
if(onLogin){
  router.push("/")
}
  },[onLogin])

  return (
    <div ><section className="h-screen ">
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
          <form   className="space-y-4 xl:space-y-6"
              onSubmit={formik.handleSubmit}>
            {/* Email input */}
           
            <div className="relative mb-6" data-twe-input-wrapper-init=""> 
            {formik.errors.err&&<h1 className="bg-red-100 border border-red-400 text-red-700 rounded relative text-[14px] text-center">{formik.errors.err}</h1>}
               <label
                htmlFor="exampleFormControlInput3"
                className=""
              >
                Email address
              </label>
              <p>
                {formik.touched.username && formik.errors.username ? (
                  <span className="bg-red-100 border border-red-400 text-red-700 rounded relative text-[14px]">
                    {formik.errors.username}
                  </span>
                ) : null}
              </p>
              
              <input
                type="text"
                name="username"
                className="w-full"
                id="exampleFormControlInput3"
                placeholder="Email address"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
             
            </div>
            {/* Password input */}
            <div className="relative mb-6" data-twe-input-wrapper-init=""> <label
                htmlFor="exampleFormControlInput33"
                className=""
              >
                Password
              </label>
             <p>{formik.touched.password && formik.errors.password ? (
                  <span className="bg-red-100 border border-red-400 text-red-700 rounded relative text-[14px]">
                    {formik.errors.password}
                  </span>
                ) : null}
              </p> 
              <input
                type="password"
                name="password"
                className="w-full"
                id="exampleFormControlInput33"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
             
            </div>
            {/* Remember me checkbox */}
            <div className="mb-6 flex items-center justify-between">
              <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
                <input
                  className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                  type="checkbox"
                  defaultValue=""
                  id="exampleCheck3"
                  defaultChecked=""
                />
                <label
                  className="inline-block ps-[0.15rem] hover:cursor-pointer"
                  htmlFor="exampleCheck3"
                >
                  Remember me
                </label>
              </div>
              {/* Forgot password link */}
              <a
                href="#!"
                className="text-primary focus:outline-none dark:text-primary-400"
              >
                Forgot password?
              </a>
            </div>
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
              Sign in
            </button>
            {/* Divider */}
          <p className="pt-2"> Bạn chưa có tài khoản? <a href="/register" style={{
            color:"blue"
          }}>Đăng kí tại đây</a></p>
          </form>
        </div>
      </div>
    </div>
  </section>
  </div>
  );
};

export default Login;
