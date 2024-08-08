"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faBox,
  faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import loginSlice from "@/redux/slice/authSlice";
import { tokenSlice } from "@/redux/slice/token";
import { toast } from "react-toastify";
import Link from "next/link";
const { login } = loginSlice.actions;
const { setRefreshToken, setToken } = tokenSlice.actions;
const Nav = () => {
  const [user,setUser] = useState({
    name:null,
    email:null,
    phone:null
  });
  const router = useRouter();
  const dispatch = useDispatch()
  const onLogin = useSelector((state) => state.authLogin.onLogin);
  const cart = useSelector((state) => state.cartReducer.cart);
  const access_Token = useSelector((state) => state.setToken.token);
  const refresh_token = useSelector((state) => state.setToken.refreshToken);
  
  const hanleLogout = ()=>{
    setUser("")
    dispatch(setRefreshToken(""));
    dispatch(setToken(""));
    dispatch(login(false));

    toast.success("Đăng xuất thành công") 
    router.refresh();
  } 

useEffect(()=>{
if(access_Token){
    const data = jwtDecode(access_Token);
    const {name,email,phone}= data?.user;
    console.log(data);
    setUser({name:name,email:email,phone:phone})
  }
},[onLogin,access_Token])
  
  
  
  return (
    <header className="page-header flex  h-[100px] w-full min-w-full items-center justify-center max-md:h-[100px]">
    <div className="container">
      <div className="w-full items-center py-2 flex md:gap-x-8">
        <div className="hidden max-md:w-1/6 pl-1">
          <a>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAaea9tJdXSdjYW7HNa7oIsQfdmgFJlHOitg&s" />
          </a>
        </div>
        <div className="md:hidden max-md:w-1/6 pl-1">
          
        </div>
        <div className=" max-md:w-4/6 md:w-2/6">
        
          <a
            title="Di Động Việt - Hệ thống bán lẻ Điện thoại, Macbook, Phụ kiện chính hãng"
            href="/"
          >
            <div className="md:hidden text-center">
              
            </div>
            <div className="max-md:hidden">
              <img
                style={
                  {
                    width:"100px",
                    height:"100%"
                  }
                }
                src="https://cnvloyalty.com/storage/app/didongviet/logo.webp"
                alt="Di Động Việt - Chuyển giao giá trị vượt trội"
              />
            </div>
          </a>
        </div>
        <div className="md:hidden pr-1 text-right max-md:w-1/6">
          <Link href="/check-out">
           
          </Link>
        </div>
        <div className="max-md:col-span-5 max-md:hidden md:w-2/6">
          <div className="md:mt-5 relative w-full flex  flex-col items-end   justify-end antialiased">
            <div className="mx-auto w-full text-gray-600 md:pt-2">
              <input
                className="h-10 w-full rounded-lg border-2 border-gray-300 bg-white px-4 pr-16 text-sm focus:outline-none"
                placeholder="Siêu phẩm iPhone 15 Series"
                defaultValue=""
              />
              <span className="absolute right-0 top-4 mr-4 max-md:top-2">
                <button
                  aria-label="search"
                  className="flex items-center justify-center"
                  type="button"
                >
                  <svg
                    width={24}
                    height={24}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m23.233 21.86-5.712-5.94a9.66 9.66 0 0 0 2.273-6.23c0-5.343-4.347-9.69-9.69-9.69C4.763 0 .415 4.347.415 9.69c0 5.343 4.348 9.69 9.69 9.69a9.586 9.586 0 0 0 5.552-1.753l5.755 5.985c.241.25.565.388.911.388a1.265 1.265 0 0 0 .91-2.14ZM10.104 2.528c3.95 0 7.163 3.213 7.163 7.162 0 3.95-3.213 7.162-7.162 7.162-3.95 0-7.163-3.213-7.163-7.162 0-3.95 3.213-7.162 7.162-7.162Z"
                      fill="#BE1E2D"
                    />
                  </svg>
                </button>
              </span>
            </div>
            <div
              className="flex w-full items-center justify-center py-2 max-md:hidden"
              style={{ minHeight: 20 }}
            >
              <a href="#">
                <p className="px-2 text-10 font-bold  text-white hover:underline">
                  iPhone 15 Pro Max
                </p>
              </a>
              <a href="#">
                <p className="px-2 text-10 font-bold  text-white hover:underline">
                  Galaxy S24 Ultra
                </p>
              </a>
              <a href="#">
                <p className="px-2 text-10 font-bold  text-white hover:underline">
                  Xiaomi 14
                </p>
              </a>
              <a href="#">
                <p className="px-2 text-10 font-bold  text-white hover:underline">
                  iPad Air 6
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="max-md:hidden max-md:col-span-1 md:w-3/6">
          <div className="flex w-full items-center justify-between max-md:hidden">
            <div className="w-1/5">
              <a href="tel:18006018">
                <div className="flex items-center justify-start menuhover">
                  <div className="w-1/4 relative">
                   <FontAwesomeIcon className="text-[white]" icon={faCartShopping}></FontAwesomeIcon>
                  </div>
                  <div className="w-3/4 pl-2">
                    <div className="justify-center items-center">
                      <p className="sub text-lg text-white ">Đặt hàng</p>
                      <p className="title text-lg text-white">1800.6018</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
           
            <div className="w-1/5">
              <a href="/tra-cuu">
                <div className="flex items-center justify-start menuhover">
                  <div className="w-1/4 relative">
                  <FontAwesomeIcon className="text-[white]" icon={faBox}></FontAwesomeIcon>
                  </div>
                  <div className="w-3/4 pl-2">
                    <div className="justify-center items-center">
                      <p className="sub text-lg text-white ">Tra cứu</p>
                      <p className="title text-lg text-white">đơn hàng</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/5">
              <a href="/check-out">
                <div className="flex items-center justify-start menuhover">
                  <div className="w-1/4 relative">
                  <FontAwesomeIcon className="text-[white]" icon={faCartShopping}></FontAwesomeIcon>
                    
                  </div>
                  <div className="w-3/4 pl-2">
                    <div className="justify-center items-center">
                      <p className="sub text-lg text-white ">Giỏ</p>
                      <p className="title text-lg text-white">hàng</p>
                   <span className=" bg-neutral-600 bloc rounded-[999px] inline-block w-[20px] h-[20px] text-center text-[14px] text-[white]">{cart.length}</span> </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-1/5">
              <div className="flex items-center justify-start">
                <div className="w-1/4">
                <FontAwesomeIcon className="text-[white]" icon={faUser}></FontAwesomeIcon>
                </div>
                <div className="w-3/4 pl-2">
                {user.name?<span className="text-[white]">{user.name}</span>  :<div className="items-center justify-start ">
                    <div className=" cursor-pointer pb-1 text-sm text-white">
                     
                      <p className="sub text-lg text-white" > <a href="/login" className="hover:text-[#22d3ee]">Đăng nhập</a></p>
                      
                      
                    </div>
                    <div className=" cursor-pointer text-sm text-white">
                    <p className="sub text-lg text-white " ><a href="/register" className="hover:text-[#22d3ee]"> Đăng ký</a></p>

                      
                     
                    </div>
                  </div>}
                  
                </div>
              </div>
            </div>
            {access_Token&&onLogin? <button className="w-1/5" onClick={hanleLogout}>
                <div className="flex items-center justify-start menuhover">
                  <div className="w-1/4 relative">
                  <FontAwesomeIcon className="text-[white]" icon={faRightFromBracket}></FontAwesomeIcon>
                  </div>
                  <div className="w-3/4 pl-2">
                    <div className="justify-center items-center">
                      
                      <p className="sub text-lg text-white " >Đăng</p>
                      <p className="sub text-lg text-white " > xuất</p>
                    
                    </div>
                  </div>
                </div>
            </button>:<></>}
           
          </div>
          <a className="md:hidden" aria-label="tra cứu" href="/tra-cuu">
            <div
              className="relative flex items-center justify-center"
              style={{ height: 50 }}
            >
              <svg
                width={27}
                height={27}
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.7079 25.6496L23.8712 23.8129C24.7178 22.8081 25.2288 21.5117 25.2288 20.0981C25.2288 16.9145 22.6388 14.3245 19.4553 14.3245C16.2717 14.3245 13.6816 16.9145 13.6816 20.0981C13.6816 23.2817 16.2717 25.8717 19.4553 25.8717C20.6553 25.8717 21.7709 25.5035 22.6954 24.8743L24.5893 26.7682C24.7437 26.9227 24.9462 27 25.1486 27C25.351 27 25.5535 26.9227 25.7079 26.7682C26.0168 26.4594 26.0168 25.9585 25.7079 25.6496ZM19.4552 24.2895C17.144 24.2895 15.2637 22.4093 15.2637 20.098C15.2637 17.7868 17.144 15.9065 19.4552 15.9065C21.7665 15.9065 23.6467 17.7868 23.6467 20.098C23.6467 22.4093 21.7664 24.2895 19.4552 24.2895Z"
                  fill="white"
                />
                <path
                  d="M5.65883 0C5.15775 0 4.69089 0.269684 4.44061 0.703846L1.64453 5.6574H10.3554V0H5.65883Z"
                  fill="white"
                />
                <path
                  d="M17.806 0.702053C17.5554 0.269051 17.0891 0 16.5888 0H11.9375V5.65734H20.6308L17.806 0.702053Z"
                  fill="white"
                />
                <path
                  d="M1.06152 7.13892V21.0177C1.06152 22.0953 1.93823 22.972 3.01575 22.972H12.8095C12.4218 22.0838 12.2062 21.104 12.2062 20.0747C12.2063 16.0674 15.4663 12.8073 19.4736 12.8073C20.0632 12.8073 20.6365 12.8784 21.1857 13.0116V7.13892H1.06152Z"
                  fill="white"
                />
              </svg>
            </div>
          </a>
        </div>
        <div className="col-span-1 max-md:hidden md:hidden">
          <a href="/check-out">
            <div
              className="relative flex items-center justify-center"
              style={{ height: 50 }}
            >
              
              <div className="absolute" style={{ top: 20, left: 20 }}>
                <p className="text-14 font-bold tracking-wide text-ddv subpixel-antialiased">
                  1
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="md:hidden px-2 w-full">
        <div className="md:mt-5 relative w-full flex  flex-col items-end   justify-end antialiased">
          <div className="mx-auto w-full text-gray-600 md:pt-2">
            <input
              className="h-10 w-full rounded-lg border-2 border-gray-300 bg-white px-4 pr-16 text-sm focus:outline-none"
              placeholder="Siêu phẩm iPhone 15 Series"
              defaultValue=""
            />
            <span className="absolute right-0 top-4 mr-4 max-md:top-2">
              <button
                aria-label="search"
                className="flex items-center justify-center"
                type="button"
              >
                <svg
                  width={24}
                  height={24}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m23.233 21.86-5.712-5.94a9.66 9.66 0 0 0 2.273-6.23c0-5.343-4.347-9.69-9.69-9.69C4.763 0 .415 4.347.415 9.69c0 5.343 4.348 9.69 9.69 9.69a9.586 9.586 0 0 0 5.552-1.753l5.755 5.985c.241.25.565.388.911.388a1.265 1.265 0 0 0 .91-2.14ZM10.104 2.528c3.95 0 7.163 3.213 7.163 7.162 0 3.95-3.213 7.162-7.162 7.162-3.95 0-7.163-3.213-7.163-7.162 0-3.95 3.213-7.162 7.162-7.162Z"
                    fill="#BE1E2D"
                  />
                </svg>
              </button>
            </span>
          </div>
          <div
            className="flex w-full items-center justify-center py-2 max-md:hidden"
            style={{ minHeight: 20 }}
          >
            <a href="#">
              <p className="px-2 text-10 font-bold  text-white hover:underline">
                iPhone 15 Pro Max
              </p>
            </a>
            <a href="#">
              <p className="px-2 text-10 font-bold  text-white hover:underline">
                Galaxy S24 Ultra
              </p>
            </a>
            <a href="#">
              <p className="px-2 text-10 font-bold  text-white hover:underline">
                Xiaomi 14
              </p>
            </a>
            <a href="#">
              <p className="px-2 text-10 font-bold  text-white hover:underline">
                iPad Air 6
              </p>
            </a>
          </div>

        </div>
      
      </div>
    </div>
  </header>
  
  );
};

export default Nav;
