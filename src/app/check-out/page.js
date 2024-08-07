"use client"
import { useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import {  addToCart, removeFromCart, decrementQuantity,clearCart } from "@/redux/slice/cartSlice"
import { toast } from "react-toastify"
import { jwtDecode } from "jwt-decode"
import instance from "@/setup/axios"
const page = () => {
  const [total,setTotal] = useState(0);
  const cart = useSelector((state) => state.cartReducer.cart);
  const onLogin = useSelector((state) => state.authLogin.onLogin);
  const access_Token = useSelector((state) => state.setToken.token);
  const [render,setRender] = useState(false)
  const dispatch = useDispatch();
  
  
  useEffect(()=>{
if(cart.length){
  
 const totalAll =   cart.reduce((total,cart) => total + cart.quantity * cart.price, 0);
 setTotal(totalAll)
    }else{
      setTotal(0)
    }
  },[total,cart.length,render])
  
  
 const handleOrder =async ()=>{
if(!onLogin){
toast.warning("Vui lòng đăng nhập để mua hàng");
return 0;
}
if(!access_Token){
  toast.warning("Vui lòng đăng nhập để mua hàng");
  return 0;
  }
if(!cart.length){
  toast.warning("Vui lòng thêm sản phẩm để thanh toán");
  return 0;
}
try{
const accessToken = jwtDecode(access_Token)
const user_id = accessToken?.user_id;

const response = await instance.post("/api/v1/admin/products/checkout",{

  data:cart,
  user_id:user_id,
});

if(!response){
  toast.error("Đặt hàng thất bại vui lòng thử lại sau")
  return 0;
}
toast.success("Đặt hàng thành công");
dispatch(clearCart())
}catch(e){
  toast.error("Đặt hàng thất bại vui lòng thử lại sau")
}

 }
  return (
    <div className="grid grid-cols-3 items-start justify-start gap-4">
    <div className="col-span-2 my-3 flex-col rounded-lg bg-white py-3 px-4">
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={25}
          height={25}
          fill="none"
        >
          <g clipPath="url(#cart_svg__a)">
            <path
              fill="#BE1E2D"
              d="M22.896 1.334v5.238c0 .23-.186.416-.416.416h-1.517a.417.417 0 0 1-.416-.416v-.707a2.113 2.113 0 0 0-2.113-2.113h-1.17a.42.42 0 0 1-.413-.36 2.107 2.107 0 0 0-2.085-1.798h-.552a.418.418 0 0 1-.406-.51c.157-.703.65-1.03 1.227-1.03h6.581c.707 0 1.28.573 1.28 1.28Zm-6.975 1.83a1.27 1.27 0 0 0-1.155-.736h-4.532a1.28 1.28 0 0 0-1.28 1.28v2.864c0 .23.187.416.417.416h2.595c.23 0 .417-.186.417-.416v-.707c0-1.167.946-2.113 2.113-2.113h1.045a.416.416 0 0 0 .38-.588Zm2.513 1.421h-3.938a1.28 1.28 0 0 0-1.28 1.28v.707c0 .23.187.416.417.416h5.664c.23 0 .416-.186.416-.416v-.707a1.28 1.28 0 0 0-1.28-1.28ZM7.618 19.767h13.25c.792 0 1.476-.537 1.663-1.307l2.457-10.123a.417.417 0 0 0-.405-.515H6.901l-.1-.774a1.715 1.715 0 0 0-1.697-1.492h-3.42C.756 5.556 0 6.312 0 7.24c0 .93.756 1.685 1.684 1.685h1.474c.92 0 1.667-.748 1.667-1.667V6.39h.28c.44 0 .814.33.87.766l1.52 11.782a2.227 2.227 0 0 0-2.1 2.22c0 1.227.997 2.224 2.223 2.224h.356a1.984 1.984 0 0 0 1.937 1.565c.949 0 1.744-.672 1.936-1.565h6.916a1.984 1.984 0 0 0 1.936 1.565 1.983 1.983 0 0 0 1.981-1.981 1.983 1.983 0 0 0-1.98-1.981c-.95 0-1.745.671-1.937 1.564h-6.916a1.984 1.984 0 0 0-1.936-1.564c-.95 0-1.745.671-1.937 1.564h-.356c-.767 0-1.39-.624-1.39-1.39 0-.767.623-1.39 1.39-1.39Z"
            />
          </g>
          <defs>
            <clipPath id="cart_svg__a">
              <path fill="#fff" d="M0 0h25v25H0z" />
            </clipPath>
          </defs>
        </svg>
        <p className="px-3 text-24 font-bold">Giỏ hàng {`(${cart.length} sản phẩm)`}</p>
      </div>
      <div className="flex w-full flex-col">
        <div className="w-full">
          <div className="grid grid-cols-7">
            <div className="col-span-3 px-2 py-2  text-left text-sm font-medium text-gray-900">
              Tên sản phẩm
            </div>
            <div className="col-span-1 px-2 py-2 text-right text-sm font-medium text-gray-900">
              Đơn giá
            </div>
            <div className="col-span-1 px-2 py-2 text-right text-sm font-medium text-gray-900">
              Số lượng
            </div>
            <div className="col-span-1 px-2 py-2 text-right text-sm font-medium text-gray-900">
              Thành tiền
            </div>
            <div className="col-span-1 px-2 py-2 text-right text-sm font-medium text-gray-900">
              Thao tác
            </div>
          </div>
          <div className="h-px w-full bg-border" />
         {cart.length?<>{cart.map(({description,id,image_url,price,quantity,phone_id})=>{
          
          return  <div className="grid w-full grid-cols-7 items-center max-md:hidden">
          <div className="col-span-3 flex w-full flex-col items-center justify-start  overflow-hidden  px-2 py-2 text-sm text-gray-900">
            <div className="flex w-full items-center justify-start">
              <div style={{ width: "20%" }}>
                <img
                  src={image_url}
                  width={61}
                  height={64}
                  alt="di động việt"
                  style={{ height: 64, objectFit: "contain" }}
                />
              </div>
              <div style={{ width: "79%" }}>
                <p className="px-3 text-left text-14">
                  SAMSUNG GALAXY A05 SM-A055F/DS 4GB/128GB (CTY) (ĐÃ KÍCH HOẠT)
                  - Xanh - New
                </p>
              </div>
            </div>
          </div>
          <div className="whitespace-nowrap px-2 py-4 text-right text-sm font-bold text-gray-900">
            {parseInt(price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
          </div>
          <div className="whitespace-nowrap px-2 py-4 text-right text-sm font-light text-gray-900">
            <div className="flex items-end justify-center">
            
  <button
    id="decrement-btn"
    className="flex justify-center items-center w-10 h-10 rounded-full text-white focus:outline-none bg-gray-400 hover:bg-gray-500"
   onClick={()=>{
    if(quantity<=1){
const del = confirm("bạn có muốn xóa sản phẩm này?")
if(del){
  dispatch(decrementQuantity(phone_id,1))
  setRender(!render)
}else{
  return 0;
}
    }
    dispatch(decrementQuantity(phone_id,1));
  setRender(!render)

   }}
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 12H4"
      />
    </svg>
  </button>
  <span id="counter" className="text-4xl font-bold mx-4">
   {quantity}
  </span>
  <button
    id="increment-btn"
    className="flex justify-center items-center w-10 h-10 rounded-full text-white focus:outline-none bg-indigo-500 hover:bg-indigo-600"
    onClick={()=>{
dispatch(addToCart(phone_id,1))
setRender(!render)

    }}
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6v12M6 12h12"
      />
    </svg>
  </button>
            </div>
          </div>
          <div className="whitespace-nowrap px-2 py-4 text-right text-sm font-medium text-ddv">
            <p className="text-right text-14"> {parseInt(price*quantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
          </div>
          <div className="flex  justify-end whitespace-nowrap px-2 py-4 text-sm font-light text-gray-900">
            <button
              className="mantine-UnstyledButton-root mantine-ActionIcon-root text-center mantine-8snsl"
              type="button"
              onClick={()=>{
              const del = confirm(`Bạn đã chắc chắn xóa sản phẩm  ${id} khỏi giỏ hàng?`);
              console.log(del);
              if(del){
dispatch(removeFromCart(phone_id))
toast.success("Xóa thành công")}
            
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={26}
                height={26}
                fill="none"
              >
                <rect
                  width={25}
                  height={25}
                  x="0.5"
                  y="0.5"
                  fill="#fff"
                  stroke="#808A94"
                  rx="1.5"
                />
               
                <path
                  fill="#808A94"
                  d="M16.678 19.457h-6.74a.669.669 0 0 1-.667-.624l-.579-8.598a.669.669 0 0 1 .668-.713h7.896a.67.67 0 0 1 .668.713l-.578 8.598a.67.67 0 0 1-.668.625Zm1.906-11.19H8.116c-.01 0-.016-.006-.016-.015V6.42c0-.01.006-.016.016-.016h10.468c.01 0 .016.006.016.016V8.25c0 .01-.007.018-.016.018Z"
                />
                <path
                  fill="#808A94"
                  d="M16.136 7.305H10.54c-.01 0-.016-.006-.016-.016V5.21c0-.01.007-.017.016-.017h5.595c.009 0 .015.007.015.016V7.29a.016.016 0 0 1-.015.016Z"
                />
              </svg>
            </button>
          </div>
        </div>
         })}</>:<h1>Chưa có sản phẩm trong giỏ hàng của bạn</h1>}
          <div className="grid grid-cols-4 items-center gap-4 py-2 md:hidden">
            <div className="col-span-1 flex w-full items-start justify-center">
              <div style={{ width: "100%", height: "100%" }}>
                <img
                  src="https://cdn-v2.didongviet.vn/files/products/2023/10/16/1/1700128695942_samsung_a05_xanh_didongviet.png"
                  width={61}
                  height={64}
                  alt="di động việt"
                  style={{ height: 64, objectFit: "contain" }}
                />
              </div>
            </div>
            <div className="col-span-3 w-full flex-col items-start justify-start">
              <p className="text-14 ">
                SAMSUNG GALAXY A05 SM-A055F/DS 4GB/128GB (CTY) (ĐÃ KÍCH HOẠT) -
                Xanh - New
              </p>
              <p className="text-left text-14 font-medium text-ddv">2.530.000</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-start">
                  <button
                    className="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-8snsl"
                    type="button"
                    style={{
                      borderTopLeftRadius: 3,
                      borderBottomLeftRadius: 3,
                      height: 30,
                      borderRightWidth: 0
                    }}

                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={19}
                      height={19}
                      fill="none"
                    >
                      <rect
                        width="11.793"
                        height="2.081"
                        x="3.551"
                        y="8.306"
                        fill="#ADB4BB"
                        rx="1.041"
                      />
                    </svg>
                  </button>
                  <div
                    className="mantine-Input-wrapper bg-white font-bold text-black opacity-100 mantine-12sbrde"
                    style={{ width: 30, opacity: 1, color: "black" }}
                  >
                    <input
                      className="mantine-Input-input mantine-Input-disabled mantine-4a4ojd"
                      disabled=""
                      defaultValue={1}
                    />
                  </div>
                  <button
                    className="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-8snsl"
                    type="button"
                    style={{
                      borderTopRightRadius: 3,
                      borderBottomRightRadius: 3,
                      height: 30,
                      borderLeftWidth: 0
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={19}
                      fill="none"
                    >
                      <path
                        fill="#ADB4BB"
                        fillRule="evenodd"
                        d="M9.83 4.491a1.04 1.04 0 0 0-2.082 0v3.815H3.933a1.04 1.04 0 1 0 0 2.081h3.815v3.816a1.04 1.04 0 1 0 2.082 0v-3.816h3.815a1.04 1.04 0 1 0 0-2.08H9.83V4.49Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <button
                  className="mantine-UnstyledButton-root mantine-ActionIcon-root text-center mantine-8snsl"
                  type="button"
                >
                  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={26}
                    height={26}
                    fill="none"
                  >
                    <rect
                      width={25}
                      height={25}
                      x="0.5"
                      y="0.5"
                      fill="#fff"
                      stroke="#808A94"
                      rx="1.5"
                    />
                  
                    <path
                      fill="#808A94"
                      d="M16.678 19.457h-6.74a.669.669 0 0 1-.667-.624l-.579-8.598a.669.669 0 0 1 .668-.713h7.896a.67.67 0 0 1 .668.713l-.578 8.598a.67.67 0 0 1-.668.625Zm1.906-11.19H8.116c-.01 0-.016-.006-.016-.015V6.42c0-.01.006-.016.016-.016h10.468c.01 0 .016.006.016.016V8.25c0 .01-.007.018-.016.018Z"
                    />
                    <path
                      fill="#808A94"
                      d="M16.136 7.305H10.54c-.01 0-.016-.006-.016-.016V5.21c0-.01.007-.017.016-.017h5.595c.009 0 .015.007.015.016V7.29a.016.016 0 0 1-.015.016Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="min-w-full py-2 ">
            <div className="overflow-hidden">
              <table className="w-full text-left">
                <thead />
                <tbody className="w-full divide-y">
                  <tr className="w-full grid-cols-7" />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-span-1">
      <div className="my-3 w-full flex-col rounded-lg bg-white py-3 px-4">
        <div className="flex items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={25}
            fill="none"
          >
            <path
              fill="#BE1E2D"
              d="M16.943 8.887c-4.442 0-8.056 3.614-8.056 8.056C8.887 21.386 12.5 25 16.943 25 21.386 25 25 21.386 25 16.943c0-4.442-3.614-8.056-8.057-8.056Zm0 7.324a2.2 2.2 0 0 1 2.198 2.197c0 .954-.614 1.76-1.465 2.063v1.6H16.21v-1.6a2.194 2.194 0 0 1-1.465-2.063h1.465a.733.733 0 1 0 .732-.732 2.2 2.2 0 0 1-2.197-2.197c0-.954.614-1.76 1.465-2.063v-1.6h1.465v1.6a2.194 2.194 0 0 1 1.465 2.063h-1.465a.733.733 0 1 0-.733.732ZM8.154 8.887c4.518 0 8.057-1.93 8.057-4.395C16.21 2.028 12.67 0 8.154 0S0 2.028 0 4.492s3.637 4.395 8.154 4.395ZM0 16.482v1.194c0 2.464 3.637 4.394 8.154 4.394.257 0 .505-.023.757-.036a9.461 9.461 0 0 1-1.227-2.911c-3.267-.09-6.104-1.094-7.684-2.64ZM7.457 17.639c-.017-.23-.035-.461-.035-.696 0-.763.1-1.502.27-2.214-3.27-.089-6.11-1.093-7.692-2.641v1.193c0 2.334 3.284 4.167 7.457 4.357ZM8.154 13.281h.003a9.553 9.553 0 0 1 2.057-3.067c-.662.083-1.345.138-2.06.138-3.477 0-6.497-1.037-8.154-2.659v1.194c0 2.464 3.637 4.394 8.154 4.394Z"
            />
          </svg>
          <p className="px-3 text-24 font-bold">Tạm tính</p>
        </div>
        <div className="line-ngang my-3 w-full" />
        <div className="flex items-center justify-between py-2">
          <p className="text-sm">Tổng cộng:</p>
          <p className="text-sm font-bold text-ddv">{total?<>{parseInt(total).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</>:<>0 đ</>}</p>
        </div>
        <button className="border-1 relative flex w-full items-center justify-center rounded bg-ddv py-2"
        onClick={handleOrder}
        >
          <p className="text-14 font-bold text-white">Đặt hàng </p>
        </button>
      </div>
    </div>
  </div>
  

  )
}

export default page