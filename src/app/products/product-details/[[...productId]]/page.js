"use client"
import instance from "@/setup/axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { addToCart } from "@/redux/slice/cartSlice";
import { useSelector,useDispatch } from "react-redux";
import { initialState } from "@/redux/slice/cartSlice";

const Page = ({params}) => {
  const [counter,setCounter] = useState(1);
  const cart = useSelector((state) => state.cartReducer.cart);
console.log(cart);
  const dispatch = useDispatch()
  const [data,setData] = useState([])
  const id = params.productId[1];
  const router = useRouter();
 
  const handleAddCart = async()=>{
    dispatch(addToCart(data?.phone_id,counter,{
      ...data
    }))

toast.success("Thêm vào giỏ hàng thành công")
  }
 const handleDetail =async ()=>{
  try{
const response = await instance.get(`/api/v1/admin/products/product-details/${id}`);
if(!response){
toast.error("Sản phẩm không tồn tại!");
return router.push("/");
}
setData(response);
  }catch(e){
toast("Đã có lỗi xảy ra vui lòng thử lại sau ít phút");
  }


 }

useEffect(()=>{
  handleDetail();
},[])
  return (
    <div
  className="my-3 grid grid-cols-2 gap-4 rounded-lg bg-white py-3 px-3 max-md:my-2 max-md:grid-cols-1"
  style={{ minHeight: 600 }}
>
  <div className="overflow-hidden">
    <div>
      <div style={{ minHeight: 600 }}>
        <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events mySwiper2">
          <div
            className="swiper-wrapper"
            style={{
              transitionDuration: "0ms",
              transform: "translate3d(-551px, 0px, 0px)"
            }}
          >
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-prev"
              data-swiper-slide-index={8}
              style={{ width: 541, marginRight: 10 }}
            >
              <div
                className="max-md:h-[250px] md:h-[500px]"
                style={{ width: "100%" }}
              >
                <img
                  loading="lazy"
                  src="https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546085860_7_thumb_iphone_15_pro_didongviet.jpg"
                  height={500}
                  className="imgslide max-md:h-[250px] md:h-[500px]"
                  alt="iPhone 15 Pro Max 256GB Chính hãng (VN/A)"
                />
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-active"
              data-swiper-slide-index={0}
              style={{ width: 541, marginRight: 10 }}
            >
              <div
                className="max-md:h-[250px] md:h-[500px]"
                style={{ width: "100%" }}
              >
                <img
                  loading="lazy"
                  src={data?.image_url}
                  height={500}
                  className="imgslide max-md:h-[250px] md:h-[500px]"
                  alt="iPhone 15 Pro Max 256GB Chính hãng (VN/A)"
                />
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-next"
              data-swiper-slide-index={1}
              style={{ width: 541, marginRight: 10 }}
            >
              <div
                className="max-md:h-[250px] md:h-[500px]"
                style={{ width: "100%" }}
              >
                <img
                  loading="lazy"
                  src="https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546055406_2_iphone_15_pro_xam_didongviet.jpg"
                  height={500}
                  className="imgslide max-md:h-[250px] md:h-[500px]"
                  alt="iPhone 15 Pro Max 256GB Chính hãng (VN/A)"
                />
              </div>
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={2}
              style={{ width: 541, marginRight: 10 }}
            >
              <div
                className="max-md:h-[250px] md:h-[500px]"
                style={{ width: "100%" }}
              >
                <img
                  loading="lazy"
                  src="https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546059509_3_iphone_15_pro_xam_didongviet.jpg"
                  height={500}
                  className="imgslide max-md:h-[250px] md:h-[500px]"
                  alt="iPhone 15 Pro Max 256GB Chính hãng (VN/A)"
                />
              </div>
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={3}
              style={{ width: 541, marginRight: 10 }}
            >
              <div
                className="max-md:h-[250px] md:h-[500px]"
                style={{ width: "100%" }}
              >
                <img
                  loading="lazy"
                  src="https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546061910_4_iphone_15_pro_xam_didongviet.jpg"
                  height={500}
                  className="imgslide max-md:h-[250px] md:h-[500px]"
                  alt="iPhone 15 Pro Max 256GB Chính hãng (VN/A)"
                />
              </div>
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={4}
              style={{ width: 541, marginRight: 10 }}
            >
              <div
                className="max-md:h-[250px] md:h-[500px]"
                style={{ width: "100%" }}
              >
                <img
                  loading="lazy"
                  src="https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546068227_5_thumb_iphone_15_pro_didongviet.jpg"
                  height={500}
                  className="imgslide max-md:h-[250px] md:h-[500px]"
                  alt="iPhone 15 Pro Max 256GB Chính hãng (VN/A)"
                />
              </div>
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={5}
              style={{ width: 541, marginRight: 10 }}
            >
              <div
                className="max-md:h-[250px] md:h-[500px]"
                style={{ width: "100%" }}
              >
                <img
                  loading="lazy"
                  src="https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546074481_5_iphone_15_pro_xam_didongviet.jpg"
                  height={500}
                  className="imgslide max-md:h-[250px] md:h-[500px]"
                  alt="iPhone 15 Pro Max 256GB Chính hãng (VN/A)"
                />
              </div>
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={6}
              style={{ width: 541, marginRight: 10 }}
            >
              <div
                className="max-md:h-[250px] md:h-[500px]"
                style={{ width: "100%" }}
              >
                <img
                  loading="lazy"
                  src="https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546082810_8_thumb_iphone_15_pro_didongviet.jpg"
                  height={500}
                  className="imgslide max-md:h-[250px] md:h-[500px]"
                  alt="iPhone 15 Pro Max 256GB Chính hãng (VN/A)"
                />
              </div>
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={7}
              style={{ width: 541, marginRight: 10 }}
            >
              <div
                className="max-md:h-[250px] md:h-[500px]"
                style={{ width: "100%" }}
              >
                <img
                  loading="lazy"
                  src="https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546088730_9_thumb_iphone_15_pro_didongviet.jpg"
                  height={500}
                  className="imgslide max-md:h-[250px] md:h-[500px]"
                  alt="iPhone 15 Pro Max 256GB Chính hãng (VN/A)"
                />
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate-prev"
              data-swiper-slide-index={8}
              style={{ width: 541, marginRight: 10 }}
            >
              <div
                className="max-md:h-[250px] md:h-[500px]"
                style={{ width: "100%" }}
              >
                <img
                  loading="lazy"
                  src="https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546085860_7_thumb_iphone_15_pro_didongviet.jpg"
                  height={500}
                  className="imgslide max-md:h-[250px] md:h-[500px]"
                  alt="iPhone 15 Pro Max 256GB Chính hãng (VN/A)"
                />
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
              data-swiper-slide-index={0}
              style={{ width: 541, marginRight: 10 }}
            >
              <div
                className="max-md:h-[250px] md:h-[500px]"
                style={{ width: "100%" }}
              >
                <img
                  loading="lazy"
                  src={data?.image_url}
                  height={500}
                  className="imgslide max-md:h-[250px] md:h-[500px]"
                  alt="iPhone 15 Pro Max 256GB Chính hãng (VN/A)"
                />
              </div>
            </div>
          </div>
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
        <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-watch-progress mySwiper my-4 swiper-thumbs swiper-backface-hidden">
          <div
            className="swiper-wrapper"
            style={{
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "0ms"
            }}
          >
            <div
              className="swiper-slide swiper-slide-thumb-active swiper-slide-visible swiper-slide-active"
              style={{ width: "81.8333px", marginRight: 10 }}
            >
              <div className="z-50 flex cursor-pointer items-center justify-center py-1">
                <img
                  loading="lazy"
                  src={data?.image_url}
                />
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-visible swiper-slide-next"
              style={{ width: "81.8333px", marginRight: 10 }}
            >
              <div className="z-50 flex cursor-pointer items-center justify-center py-1">
                <img
                  loading="lazy"
                  src="https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546055406_2_iphone_15_pro_xam_didongviet.jpg"
                />
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-visible"
              style={{ width: "81.8333px", marginRight: 10 }}
            >
              <div className="z-50 flex cursor-pointer items-center justify-center py-1">
                <img
                  loading="lazy"
                  src="https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546059509_3_iphone_15_pro_xam_didongviet.jpg"
                />
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-visible"
              style={{ width: "81.8333px", marginRight: 10 }}
            >
              <div className="z-50 flex cursor-pointer items-center justify-center py-1">
                <img
                  loading="lazy"
                  src="https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546061910_4_iphone_15_pro_xam_didongviet.jpg"
                />
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-visible"
              style={{ width: "81.8333px", marginRight: 10 }}
            >
              <div className="z-50 flex cursor-pointer items-center justify-center py-1">
                <img
                  loading="lazy"
                  src="https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546068227_5_thumb_iphone_15_pro_didongviet.jpg"
                />
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-visible"
              style={{ width: "81.8333px", marginRight: 10 }}
            >
              <div className="z-50 flex cursor-pointer items-center justify-center py-1">
                <img
                  loading="lazy"
                  src="https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546074481_5_iphone_15_pro_xam_didongviet.jpg"
                />
              </div>
            </div>
            <div
              className="swiper-slide"
              style={{ width: "81.8333px", marginRight: 10 }}
            >
              <div className="z-50 flex cursor-pointer items-center justify-center py-1">
                <img
                  loading="lazy"
                  src="https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546082810_8_thumb_iphone_15_pro_didongviet.jpg"
                />
              </div>
            </div>
            <div
              className="swiper-slide"
              style={{ width: "81.8333px", marginRight: 10 }}
            >
              <div className="z-50 flex cursor-pointer items-center justify-center py-1">
                <img
                  loading="lazy"
                  src="https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546088730_9_thumb_iphone_15_pro_didongviet.jpg"
                />
              </div>
            </div>
            <div
              className="swiper-slide"
              style={{ width: "81.8333px", marginRight: 10 }}
            >
              <div className="z-50 flex cursor-pointer items-center justify-center py-1">
                <img
                  loading="lazy"
                  src="https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546085860_7_thumb_iphone_15_pro_didongviet.jpg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-start justify-start py-2.5">
          <div className="w-full rounded">
            <div className="text-left text-10 antialiased">
             
              <p className="p1" style={{ textAlign: "center" }}>
                &nbsp;
              </p>
              <p className="p1" style={{ textAlign: "center" }}>
                <span style={{ fontSize: "10.6667px" }}>
                  Bảo hành đến
                  <span style={{ color: "#e03e2d" }}>
                    <strong>2.5 năm</strong>
                  </span>
                </span>
              </p>
              <p className="p1" style={{ textAlign: "center" }}>
                <span style={{ fontSize: "10.6667px" }}>
                  Bảo hành pin đến
                  <span style={{ color: "#e03e2d" }}>
                    <strong>3 năm</strong>
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="max-md:hidden">
         
        </div>
        <div className="p-2 max-md:hidden ">
          <div className="relative my-2 text-justify text-16 leading-7 antialiased">
            <p>
              <span style={{ fontWeight: 400 }}>
                <strong>iPhone 15 Pro Max 256GB Chính hãng (VN/A)</strong>{" "}
                <strong>chính thống</strong> giá rẻ chỉ có tại Di Động Việt -{" "}
                <strong>Đại lý uỷ quyền chính thức của Apple</strong> tại Việt
                Nam. Với thiết kế đầy sang trọng đẳng cấp, cùng với những trang
                bị chất lượng như camera chính<strong> 48MP</strong>, 2 ống kính
                phụ <strong>12MP, </strong>khả năng zoom quang học
                <strong> 5x</strong>. Cùng với nâng cấp hiệu năng ấn tượng với
                con chip mới nhất đầy mạnh mẽ <strong>Apple A17 Pro.</strong>{" "}
                Cùng với viên pin lớn kết hợp cùng hệ điều hành mới nhất
                <strong> iOS 17</strong> mang đến thời lượng pin bền bỉ, ấn
                tượng.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="" id="blockPrice">
    <div className="relative w-full flex-col justify-start">
      <h1 className="productmobile text-20 font-bold max-md:text-16 max-md:font-bold">
        iPhone 15 Pro Max 256GB Chính hãng (VN/A)
      </h1>
      
      <div className="flex items-center box-rating justify-start max-md:pt-2">
        <span style={{ display: "inline-block", direction: "ltr" }}>
          <span
            style={{
              cursor: "inherit",
              display: "inline-block",
              position: "relative"
            }}
          >
            <span style={{ visibility: "hidden" }}>
              <svg
                width={16}
                height={16}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m4.183 10.226-.77 4.72a.456.456 0 0 0 .67.472l4.005-2.213 4.005 2.214a.462.462 0 0 0 .483-.027.457.457 0 0 0 .188-.446l-.77-4.72 3.257-3.339a.457.457 0 0 0-.257-.769l-4.484-.685-2.01-4.28c-.15-.32-.674-.32-.824 0l-2.01 4.28-4.483.685a.455.455 0 0 0-.258.769l3.258 3.339Zm1.862-3.929a.455.455 0 0 0 .343-.256l1.7-3.623 1.7 3.622a.454.454 0 0 0 .344.257l3.848.588-2.799 2.868a.455.455 0 0 0-.124.392l.656 4.021-3.404-1.881a.459.459 0 0 0-.441 0l-3.405 1.881.657-4.021a.456.456 0 0 0-.124-.392L2.197 6.885l3.848-.587Z"
                  fill="#F2994A"
                />
              </svg>
            </span>
            <span
              style={{
                display: "inline-block",
                position: "absolute",
                overflow: "hidden",
                top: 0,
                left: 0,
                width: "100%"
              }}
            >
              <svg
                width={16}
                height={16}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m3.839 10.216-.77 4.727a.456.456 0 0 0 .67.473L7.744 13.2l4.005 2.218a.456.456 0 0 0 .67-.473l-.77-4.728 3.258-3.344a.457.457 0 0 0-.258-.77l-4.483-.685-2.01-4.288c-.15-.32-.675-.32-.825 0L5.322 5.416l-4.484.686a.456.456 0 0 0-.257.77l3.258 3.344Z"
                  fill="#F2994A"
                />
              </svg>
            </span>
          </span>
          <span
            style={{
              cursor: "inherit",
              display: "inline-block",
              position: "relative"
            }}
          >
            <span style={{ visibility: "hidden" }}>
              <svg
                width={16}
                height={16}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m4.183 10.226-.77 4.72a.456.456 0 0 0 .67.472l4.005-2.213 4.005 2.214a.462.462 0 0 0 .483-.027.457.457 0 0 0 .188-.446l-.77-4.72 3.257-3.339a.457.457 0 0 0-.257-.769l-4.484-.685-2.01-4.28c-.15-.32-.674-.32-.824 0l-2.01 4.28-4.483.685a.455.455 0 0 0-.258.769l3.258 3.339Zm1.862-3.929a.455.455 0 0 0 .343-.256l1.7-3.623 1.7 3.622a.454.454 0 0 0 .344.257l3.848.588-2.799 2.868a.455.455 0 0 0-.124.392l.656 4.021-3.404-1.881a.459.459 0 0 0-.441 0l-3.405 1.881.657-4.021a.456.456 0 0 0-.124-.392L2.197 6.885l3.848-.587Z"
                  fill="#F2994A"
                />
              </svg>
            </span>
            <span
              style={{
                display: "inline-block",
                position: "absolute",
                overflow: "hidden",
                top: 0,
                left: 0,
                width: "100%"
              }}
            >
              <svg
                width={16}
                height={16}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m3.839 10.216-.77 4.727a.456.456 0 0 0 .67.473L7.744 13.2l4.005 2.218a.456.456 0 0 0 .67-.473l-.77-4.728 3.258-3.344a.457.457 0 0 0-.258-.77l-4.483-.685-2.01-4.288c-.15-.32-.675-.32-.825 0L5.322 5.416l-4.484.686a.456.456 0 0 0-.257.77l3.258 3.344Z"
                  fill="#F2994A"
                />
              </svg>
            </span>
          </span>
          <span
            style={{
              cursor: "inherit",
              display: "inline-block",
              position: "relative"
            }}
          >
            <span style={{ visibility: "hidden" }}>
              <svg
                width={16}
                height={16}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m4.183 10.226-.77 4.72a.456.456 0 0 0 .67.472l4.005-2.213 4.005 2.214a.462.462 0 0 0 .483-.027.457.457 0 0 0 .188-.446l-.77-4.72 3.257-3.339a.457.457 0 0 0-.257-.769l-4.484-.685-2.01-4.28c-.15-.32-.674-.32-.824 0l-2.01 4.28-4.483.685a.455.455 0 0 0-.258.769l3.258 3.339Zm1.862-3.929a.455.455 0 0 0 .343-.256l1.7-3.623 1.7 3.622a.454.454 0 0 0 .344.257l3.848.588-2.799 2.868a.455.455 0 0 0-.124.392l.656 4.021-3.404-1.881a.459.459 0 0 0-.441 0l-3.405 1.881.657-4.021a.456.456 0 0 0-.124-.392L2.197 6.885l3.848-.587Z"
                  fill="#F2994A"
                />
              </svg>
            </span>
            <span
              style={{
                display: "inline-block",
                position: "absolute",
                overflow: "hidden",
                top: 0,
                left: 0,
                width: "100%"
              }}
            >
              <svg
                width={16}
                height={16}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m3.839 10.216-.77 4.727a.456.456 0 0 0 .67.473L7.744 13.2l4.005 2.218a.456.456 0 0 0 .67-.473l-.77-4.728 3.258-3.344a.457.457 0 0 0-.258-.77l-4.483-.685-2.01-4.288c-.15-.32-.675-.32-.825 0L5.322 5.416l-4.484.686a.456.456 0 0 0-.257.77l3.258 3.344Z"
                  fill="#F2994A"
                />
              </svg>
            </span>
          </span>
          <span
            style={{
              cursor: "inherit",
              display: "inline-block",
              position: "relative"
            }}
          >
            <span style={{ visibility: "hidden" }}>
              <svg
                width={16}
                height={16}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m4.183 10.226-.77 4.72a.456.456 0 0 0 .67.472l4.005-2.213 4.005 2.214a.462.462 0 0 0 .483-.027.457.457 0 0 0 .188-.446l-.77-4.72 3.257-3.339a.457.457 0 0 0-.257-.769l-4.484-.685-2.01-4.28c-.15-.32-.674-.32-.824 0l-2.01 4.28-4.483.685a.455.455 0 0 0-.258.769l3.258 3.339Zm1.862-3.929a.455.455 0 0 0 .343-.256l1.7-3.623 1.7 3.622a.454.454 0 0 0 .344.257l3.848.588-2.799 2.868a.455.455 0 0 0-.124.392l.656 4.021-3.404-1.881a.459.459 0 0 0-.441 0l-3.405 1.881.657-4.021a.456.456 0 0 0-.124-.392L2.197 6.885l3.848-.587Z"
                  fill="#F2994A"
                />
              </svg>
            </span>
            <span
              style={{
                display: "inline-block",
                position: "absolute",
                overflow: "hidden",
                top: 0,
                left: 0,
                width: "100%"
              }}
            >
              <svg
                width={16}
                height={16}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m3.839 10.216-.77 4.727a.456.456 0 0 0 .67.473L7.744 13.2l4.005 2.218a.456.456 0 0 0 .67-.473l-.77-4.728 3.258-3.344a.457.457 0 0 0-.258-.77l-4.483-.685-2.01-4.288c-.15-.32-.675-.32-.825 0L5.322 5.416l-4.484.686a.456.456 0 0 0-.257.77l3.258 3.344Z"
                  fill="#F2994A"
                />
              </svg>
            </span>
          </span>
          <span
            style={{
              cursor: "inherit",
              display: "inline-block",
              position: "relative"
            }}
          >
            <span>
              <svg
                width={16}
                height={16}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m4.183 10.226-.77 4.72a.456.456 0 0 0 .67.472l4.005-2.213 4.005 2.214a.462.462 0 0 0 .483-.027.457.457 0 0 0 .188-.446l-.77-4.72 3.257-3.339a.457.457 0 0 0-.257-.769l-4.484-.685-2.01-4.28c-.15-.32-.674-.32-.824 0l-2.01 4.28-4.483.685a.455.455 0 0 0-.258.769l3.258 3.339Zm1.862-3.929a.455.455 0 0 0 .343-.256l1.7-3.623 1.7 3.622a.454.454 0 0 0 .344.257l3.848.588-2.799 2.868a.455.455 0 0 0-.124.392l.656 4.021-3.404-1.881a.459.459 0 0 0-.441 0l-3.405 1.881.657-4.021a.456.456 0 0 0-.124-.392L2.197 6.885l3.848-.587Z"
                  fill="#F2994A"
                />
              </svg>
            </span>
            <span
              style={{
                display: "inline-block",
                position: "absolute",
                overflow: "hidden",
                top: 0,
                left: 0,
                width: "0%"
              }}
            >
              <svg
                width={16}
                height={16}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m3.839 10.216-.77 4.727a.456.456 0 0 0 .67.473L7.744 13.2l4.005 2.218a.456.456 0 0 0 .67-.473l-.77-4.728 3.258-3.344a.457.457 0 0 0-.258-.77l-4.483-.685-2.01-4.288c-.15-.32-.675-.32-.825 0L5.322 5.416l-4.484.686a.456.456 0 0 0-.257.77l3.258 3.344Z"
                  fill="#F2994A"
                />
              </svg>
            </span>
          </span>
        </span>
        <div className="mx-2 h-4 w-px bg-ddv max-md:hidden" />
        <p className="text-sm max-md:px-2 max-md:pb-1 max-md:text-12">
          <span className=" font-bold text-ddv">2 </span>Đánh giá
        </p>
        <div className="mx-2 h-4 w-px bg-ddv max-md:hidden" />
        <p className="text-sm max-md:hidden">SKU: 3960000006961</p>
      </div>
      <div className="flex items-center justify-between md:hidden">
        <div className="flex items-baseline max-md:flex-col">
          <p className="text-24 font-bold text-ddv">28.690.000 đ</p>
          <span className=" text-sm font-normal text-[#555555] line-through">
            38.990.000 đ
          </span>
        </div>
        <p className="text-right text-sm">
          Trả trước chỉ từ <br />
          <span className="text-sm font-bold">8.607.000đ </span>
        </p>
      </div>
      <div className="my-2 grid grid-cols-4 gap-4 max-md:grid-cols-3 max-md:gap-2 ">
        <a title="256GB" >
          <div className="">
            <div
              className="item-center cursor-pointer
           border-1 item relative flex w-full flex-col justify-center rounded-lg border-ddv hover:border-ddv"
              style={{ width: "100%", height: 45 }}
            >
              <p className="font-bold text-ddv text-center text-13">256GB</p>
              <div className="checked-product" />
            </div>
          </div>
        </a>
        <a
          title="512GB"
          
        >
          <div className="">
            <div
              className="item-center cursor-pointer
           border-1 item relative flex w-full flex-col justify-center rounded-lg border-border hover:border-ddv"
              style={{ width: "100%", height: 45 }}
            >
              <p className="text-black text-center text-13">512GB</p>
            </div>
          </div>
        </a>
        <a
          title="1TB"
          
        >
          <div className="">
            <div
              className="item-center cursor-pointer
           border-1 item relative flex w-full flex-col justify-center rounded-lg border-border hover:border-ddv"
              style={{ width: "100%", height: 45 }}
            >
              <p className="text-black text-center text-13">1TB</p>
            </div>
          </div>
        </a>
      </div>
      <p className="jsx-be3ccf3e036176f3 text-sm text-brow">
        Chọn màu để xem giá chi tiết:
      </p>
      <div className="jsx-be3ccf3e036176f3 my-2 grid w-full grid-cols-4 gap-4 md:grid-cols-5 max-md:grid-cols-4 max-md:gap-2">
        <div className="jsx-be3ccf3e036176f3">
          <div className="jsx-be3ccf3e036176f3 ">
            <div
              className="jsx-be3ccf3e036176f3 border-1 relative flex cursor-pointer items-center justify-start rounded-lg   active:drop-shadow-2xl
                              
                              
                              border-ddv hover:border-ddv"
              style={{ width: "100%", height: 35 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694662388795_thumb_iphone_15_pro_xanh_didongviet.png"
                width={34}
                height={34}
                alt="iPhone 15 Pro Max 256GB Chính hãng (VN/A)"
                className="jsx-be3ccf3e036176f3 hidden max-md:hidden"
                style={{ height: 34, objectFit: "contain" }}
              />
              <div className="jsx-be3ccf3e036176f3  px-1 w-full">
                <p
                  className="jsx-be3ccf3e036176f3 w-full truncate text-center text-13 max-md:text-13 
                
                
                text-black
                
                text-ddv font-bold
                "
                >
                  Titan Xanh
                </p>
              </div>
              <div className="jsx-be3ccf3e036176f3 checked-product" />
            </div>
          </div>
        </div>
        <div className="jsx-be3ccf3e036176f3">
          <div className="jsx-be3ccf3e036176f3 ">
            <div
              className="jsx-be3ccf3e036176f3 border-1 relative flex cursor-pointer items-center justify-start rounded-lg   active:drop-shadow-2xl
                              
                              
                              border-border hover:border-ddv"
              style={{ width: "100%", height: 35 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/products/2023/8/14/1/1694662335556_thumb_iphone_15_pro_xam_didongviet.png"
                width={34}
                height={34}
                alt="iPhone 15 Pro Max 256GB Chính hãng (VN/A)"
                className="jsx-be3ccf3e036176f3 hidden max-md:hidden"
                style={{ height: 34, objectFit: "contain" }}
              />
              <div className="jsx-be3ccf3e036176f3  px-1 w-full">
                <p
                  className="jsx-be3ccf3e036176f3 w-full truncate text-center text-13 max-md:text-13 
                
                
                text-black
                
                
                "
                >
                  Titan Tự Nhiên
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="jsx-be3ccf3e036176f3">
          <div className="jsx-be3ccf3e036176f3 ">
            <div
              className="jsx-be3ccf3e036176f3 border-1 relative flex cursor-pointer items-center justify-start rounded-lg   active:drop-shadow-2xl
                              
                              
                              border-border hover:border-ddv"
              style={{ width: "100%", height: 35 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546936133_thumb_iphone_15_pro_trang_didongviet.png"
                width={34}
                height={34}
                alt="iPhone 15 Pro Max 256GB Chính hãng (VN/A)"
                className="jsx-be3ccf3e036176f3 hidden max-md:hidden"
                style={{ height: 34, objectFit: "contain" }}
              />
              <div className="jsx-be3ccf3e036176f3  px-1 w-full">
                <p
                  className="jsx-be3ccf3e036176f3 w-full truncate text-center text-13 max-md:text-13 
                
                
                text-black
                
                
                "
                >
                  Titan Trắng
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="jsx-be3ccf3e036176f3">
          <div className="jsx-be3ccf3e036176f3 ">
            <div
              className="jsx-be3ccf3e036176f3 border-1 relative flex cursor-pointer items-center justify-start rounded-lg   active:drop-shadow-2xl
                              
                              
                              border-border hover:border-ddv"
              style={{ width: "100%", height: 35 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/products/2023/8/13/1/1694546927478_thumb_iphone_15_pro_den_didongviet.png"
                width={34}
                height={34}
                alt="iPhone 15 Pro Max 256GB Chính hãng (VN/A)"
                className="jsx-be3ccf3e036176f3 hidden max-md:hidden"
                style={{ height: 34, objectFit: "contain" }}
              />
              <div className="jsx-be3ccf3e036176f3  px-1 w-full">
                <p
                  className="jsx-be3ccf3e036176f3 w-full truncate text-center text-13 max-md:text-13 
                
                
                text-black
                
                
                "
                >
                  Titan Đen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-16 max-md:hidden">Giá bán</p>
        <div className="flex items-center justify-between  max-md:hidden">
          <div className="flex items-baseline max-md:flex-col">
            <p className="text-36 font-bold text-ddv">{parseInt(data?.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
          
          </div>
         
        </div>
        <button
          className="mantine-UnstyledButton-root mt-4 flex w-full items-center justify-start mantine-e0gmla"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="mantine-rd-dropdown"
          id="mantine-rd-target"
        >
          <div className="mantine-Text-root text-16 font-bold text-orange mantine-1pbxw0k">
            Còn hàng:{data?.stock_quantity}
          </div>
        </button>
        <button
          className="mantine-UnstyledButton-root mantine-ActionIcon-root mantine-1yfh4qk"
          type="button"
        >
          <svg
            width={21}
            height={21}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#a)">
              <path
                d="M.84 7.14 2.1.84h16.38l1.68 6.3-.84 2.52v2.94l-.42 7.56H2.1l-.42-10.5-.84-2.52Z"
                fill="#BFE8FF"
              />
              <path
                d="M4.047 11.123a4.02 4.02 0 0 0 3.27-1.684 3.902 3.902 0 0 0 6.414.008 4.009 4.009 0 0 0 3.259 1.676c2.573 0 4.52-2.494 3.891-4.99L19.654 1.26A1.662 1.662 0 0 0 18.04.004H2.95c-.763 0-1.427.517-1.613 1.257L.117 6.103c-.347 1.381.11 2.584.917 3.68v9.55c0 .917.74 1.663 1.658 1.663h15.613a1.66 1.66 0 0 0 1.658-1.663V13.14a.738.738 0 0 0-.74-.728.738.738 0 0 0-.74.728v6.193c0 .115-.064.227-.178.227h-4.577v-5.68a.733.733 0 0 0-.729-.734H7.998a.733.733 0 0 0-.729.733v5.681H2.692c-.114 0-.177-.112-.177-.227v-8.516c.448.2.99.306 1.532.306ZM14.446 1.44h3.594c.096 0 .178.074.202.166l1.226 4.876c.4 1.584-.835 3.183-2.472 3.183a2.551 2.551 0 0 1-2.55-2.554V1.44Zm-6.37 0h4.934V7.11c0 1.37-1.07 2.557-2.47 2.557-1.42 0-2.463-1.2-2.463-2.58V1.44Zm.673 13.187h3.499v4.933H8.749v-4.933ZM1.53 6.457l1.22-4.852a.217.217 0 0 1 .202-.166h3.645v5.648a2.576 2.576 0 0 1-2.57 2.58c-1.655-.001-2.901-1.606-2.497-3.21Z"
                fill="#2D9CDB"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h21v21H0z" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <div className="mantine-Text-root text-16 font-medium text-linkkhac mantine-1pbxw0k">
          Xem <span className="font-bold">44</span> chi nhánh còn hàng
        </div>
        <button
          className="mantine-UnstyledButton-root mantine-ActionIcon-root mt-3 mantine-1yfh4qk"
          type="button"
        >
          <svg
            width={15}
            height={15}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 10.407a.712.712 0 0 1-.505-.209L2.609 5.812a.714.714 0 1 1 1.01-1.01l3.88 3.88 3.881-3.88a.714.714 0 1 1 1.01 1.01l-4.385 4.386a.712.712 0 0 1-.505.21Z"
              fill="#2D9CDB"
            />
          </svg>
        </button>
        <div className="border-1 mt-3 flex w-full flex-col rounded border-bordercam">
          <div className="flex items-center justify-start bg-bordercam p-2">
            <p className="mx-2 text-16 font-bold text-ddv">Khuyến mãi</p>
          </div>
        
        </div>
        <div className="flex items-center justify-center m-4">
    <button onClick={handleAddCart} className="bg-yellow-300text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 text-[white]">Thêm vào giỏ hàng :{counter}</button>
  <button
    id="decrement-btn"
    className="flex justify-center items-center w-10 h-10 rounded-full text-white focus:outline-none bg-gray-400 hover:bg-gray-500"
    onClick={()=>{
      if(counter>1){
setCounter(counter-1)
      }
      
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
   {counter}
  </span>
  <button
    id="increment-btn"
    className="flex justify-center items-center w-10 h-10 rounded-full text-white focus:outline-none bg-indigo-500 hover:bg-indigo-600"
    onClick={()=>{
      if(counter<10){
setCounter(counter+1)
      }
      
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

        <button
          className="relative mt-3 flex cursor-pointer items-center justify-center rounded-lg bg-ddv overflow-hidden"
          style={{ width: "100%", height: 64 }}
          onClick={()=>{
            dispatch(addToCart(data.phone_id,1,data));
            router.push("/check-out")
          }}
        >
          <div className="flex cursor-pointer flex-col items-center justify-center rounded-lg">
            <p className="text-center text-20 font-bold text-white">ĐẶT NGAY</p>
            <p className="text-center text-sm text-white">
              Giao tận nơi hoặc nhận tại cửa hàng
            </p>
          </div>
          
        </button>
        <div className="grid-cols-2 my-4 grid  gap-4">
          <button>
            <div
              className="border-1 flex flex-col items-center justify-center rounded-lg border-bgtragop bg-bgtragop"
              style={{ width: "100%", height: 64 }}
            >
              <p className="text-center text-20 font-bold text-white max-md:text-18">
                TRẢ GÓP 0%
              </p>
              <p className="text-center text-sm text-white max-md:text-12">
                Duyệt nhanh qua điện thoại
              </p>
            </div>
          </button>
          <button>
            <div
              className="border-1 flex flex-col items-center justify-center rounded-lg border-bgtragop bg-bgtragop"
              style={{ width: "100%", height: 64 }}
            >
              <p className="text-center text-20 font-bold text-white max-md:text-18">
                TRẢ GÓP 0% QUA THẺ
              </p>
              <p className="text-center text-sm text-white max-md:text-12">
                Visa, MasterCard, JCB
              </p>
            </div>
          </button>
        </div>
        <p className="text-center text-sm text-black">
          Gọi đặt mua{" "}
          <span className="font-bold text-ddv">
            <a >1800.6018</a>{" "}
          </span>
          (7:30 - 22:00)
        </p>
        <div className="my-2 md:hidden">
          <div className="box-cmt-info w-full rounded bg-pink p-2">
            <div>
              <div className="flex items-center">
                <svg
                  width={17}
                  height={15}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.964 5.563v-.036c-.036-.035-.036-.071-.072-.071L8.787.542C8.75.506 8.715.506 8.679.506L.287.076C.143.076.072.148 0 .256V2.73c0 .108.036.18.143.215l2.08 1.291L.396 5.42a.326.326 0 0 0-.108.25l.108 3.695c0 .072.035.18.107.215l8.034 5.308c.036 0 .072.036.107.036.036 0 .072 0 .108-.036l8.034-5.308c.072-.036.107-.143.107-.215L17 5.671c0-.036 0-.072-.036-.108ZM8.572 1.044l7.209 4.304-7.424-.18L1.29.65l7.28.394Zm7.316 4.842-1.937 1.22H9.432l-.717-1.4 7.173.18Zm-15.35-3.3V.83l7.28 4.663-.968.932L.538 2.586Zm2.224 1.937 1.614 1.04-1.65 1.112-1.65-1.04 1.686-1.112Zm5.63 9.648L.897 9.186.825 6.137l7.567 4.698v3.336Zm.287-3.802L3.228 6.998l1.685-1.112 1.865 1.148c.108.071.252.036.323-.036l1.112-1.076.825 1.614c.036.107.143.143.251.143h3.802l-4.412 2.69Zm7.747-1.183L8.93 14.17v-3.336l7.568-4.698-.072 3.049Z"
                    fill="#BE1E2D"
                  />
                </svg>
                <p className="px-2 text-14 font-bold">Bộ sản phẩm bao gồm</p>
              </div>
              <div className="relative my-2 text-justify text-14 antialiased">
                <div className="info-content flex  flex-middle">
                  <div className="info-desc">
                    <p>Máy mới nguyên seal 100%, chính hãng Apple Việt Nam</p>
                    <p>
                      Di Động Việt là đại lý uỷ quyền chính thức của Apple Việt
                      Nam
                    </p>
                    <p>&nbsp;</p>
                  </div>
                </div>
                <div className="info-content flex flex-middle">
                  <div className="info-desc">
                    <p>
                      <strong>Bộ sản phẩm:</strong>&nbsp;Thân máy, Hộp, Cáp, Cây
                      lấy sim, Sách hướng dẫn, Túi giấy cao cấp Di Động Việt
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <svg
                  width={17}
                  height={18}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.262 2.915 8.755.054a.63.63 0 0 0-.51 0l-6.507 2.86a.705.705 0 0 0-.41.65v3.478c0 4.789 2.734 9.096 6.921 10.906.16.07.341.07.502 0 4.187-1.81 6.92-6.117 6.92-10.906V3.564a.705.705 0 0 0-.409-.65Zm-.918 4.127c0 4.07-2.258 7.818-5.844 9.491-3.49-1.628-5.844-5.31-5.844-9.491V4.033L8.5 1.464l5.844 2.57v3.008Zm-6.578 2.37L10.62 6.39a.638.638 0 0 1 .94 0c.259.274.259.72 0 .994l-3.324 3.52a.638.638 0 0 1-.94 0L5.441 8.937a.733.733 0 0 1 0-.994.638.638 0 0 1 .939 0l1.386 1.468Z"
                    fill="#BE1E2D"
                  />
                </svg>
                <p className="px-2 text-14 font-bold">Bảo hành</p>
              </div>
              <div className="box-info relative my-2 text-justify text-14 antialiased">
                <div className="rich-text-paragraph" data-eleid={30}>
                  <span className="text-only" data-eleid={31}>
                    Độc quyền tại Di Động Việt: Bảo hành Hư lỗi - Đổi mới trong
                    vòng&nbsp;<strong>33 ngày</strong>. Bảo hành chính
                    hãng&nbsp;<strong>12 tháng&nbsp;</strong>
                  </span>
                  (
                  <a
                    
                    target="_blank"
                    rel="noopener"
                  >
                    Xem chi tiết
                  </a>
                  )<div>&nbsp;</div>
                </div>
                <div className="rich-text-paragraph" data-eleid={32}>
                  <span className="text-only" data-eleid={33}>
                    Bảo hành Hư lỗi - Đổi mới&nbsp;<strong>12 tháng</strong>,
                    rơi vỡ với D.Care (
                    <a
                      
                      target="_blank"
                      rel="noopener"
                    >
                      Xem chi tiết
                    </a>
                    )
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-1 mt-3 flex w-full flex-col overflow-hidden rounded-lg border-Accent_Color_1">
          <div className="flex items-center justify-start bg-Accent_Color_1 p-2">
            <p className="mx-2 text-14 font-bold text-white">Ưu đãi dịch vụ</p>
          </div>
          <div className="flex w-full flex-col items-start justify-start bg-white p-2">
            <div className="flex items-center py-2">
              
              <p className="pl-2 text-left text-14">
                Miễn phí Giao hàng siêu tốc trong{" "}
                <span className="font-bold">1 giờ </span>
                <a
                  target="_blank"
                  
                  className="text-linkxanh"
                >
                  (Xem chi tiết)
                </a>
              </p>
            </div>
            <div className="flex items-center py-2">
            
              <p className="pl-2 text-left text-14">
                Giảm thêm tới <span className="font-bold">1.5%</span> cho thành
                viên của Di Động Việt.{" "}
                <a
                  
                  target="_blank"
                  className="text-linkxanh"
                >
                  (Xem chi tiết)
                </a>
              </p>
            </div>
            <div className="flex items-center py-2">
             
              <p className="pl-2 text-left text-14 font-bold">
                Mua kèm bảo hành hư lỗi đổi mới{" "}
                <a
                  
                  target="_blank"
                  className="text-linkxanh"
                >
                  (Xem chi tiết)
                </a>{" "}
              </p>
            </div>{" "}
            <ul className="ml-8 text-[14px] list-disc ">
              <li className="pb-1">
                Tặng ngay gói bảo hành đến 2,5 năm&nbsp;
                <a
                  title="Mua kèm bảo hành hư lỗi đổi mới, tặng ngay gói bảo hành đến 2,5 năm"
                  target="_blank"
                  
                  className="text-linkxanh"
                >
                  (Xem chi tiết)
                </a>
              </li>
              <li className="pb-1">
                Tặng ngay gói bảo hành thay pin miễn phí 3 năm&nbsp;
                <a
                  target="_blank"
                  
                  className="text-linkxanh"
                >
                  (Xem chi tiết)
                </a>
              </li>
            </ul>
            <div className="flex items-center py-2">
              
              <p className="pl-2 text-left text-14">
                Giảm ngay <span className="font-bold">500,000đ</span> khi Trả
                góp thẻ OCB&nbsp;
                <a
                  target="_blank"
                  
                  className="text-linkxanh"
                >
                  (Xem chi tiết)
                </a>
              </p>
            </div>
            <div className="flex items-center py-2">
            
              <p className="pl-2 text-left text-14">
                Giảm thêm <span className="font-bold">500.000đ</span> mở thẻ qua
                VIB{" "}
                <a
                  target="_blank"
                  
                  className="text-linkxanh"
                >
                  (Xem chi tiết)
                </a>
              </p>
            </div>
            <div className="flex items-center py-2">
            
              <p className="pl-2 text-left text-14">
                Giảm <span className="font-bold">5%</span> đơn hàng thanh toán
                Home Paylater{" "}
                <a
                  target="_blank"          
                  className="text-linkxanh"
                >
                  (Xem chi tiết)
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="relative my-2 p-1 text-justify text-14 leading-6 antialiased md:hidden">
          <p>
            <span style={{ fontWeight: 400 }}>
              <strong>iPhone 15 Pro Max 256GB Chính hãng (VN/A)</strong>{" "}
              <strong>chính thống</strong> giá rẻ chỉ có tại Di Động Việt -{" "}
              <strong>Đại lý uỷ quyền chính thức của Apple</strong> tại Việt
              Nam. Với thiết kế đầy sang trọng đẳng cấp, cùng với những trang bị
              chất lượng như camera chính<strong> 48MP</strong>, 2 ống kính phụ{" "}
              <strong>12MP, </strong>khả năng zoom quang học<strong> 5x</strong>
              . Cùng với nâng cấp hiệu năng ấn tượng với con chip mới nhất đầy
              mạnh mẽ <strong>Apple A17 Pro.</strong> Cùng với viên pin lớn kết
              hợp cùng hệ điều hành mới nhất<strong> iOS 17</strong> mang đến
              thời lượng pin bền bỉ, ấn tượng.
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Page