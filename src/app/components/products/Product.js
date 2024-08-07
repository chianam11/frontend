"use client"
import instance from "@/setup/axios"
import { useState,useEffect } from "react";
import { toast } from "react-toastify";
const Product = () => {
  const [products,setProducts] = useState([]);
  console.log(products);
  const getProduct = async()=>{
try{
const response = await instance.get("/api/v1/admin/products");
setProducts(response);
}catch(e){
toast.error("Đã có lỗi xảy ra")
}
  }
  useEffect(()=>{
getProduct();
  },[])
  return (
   

    <div className="px-3 my-2 flex-col items-center justify-between rounded-lg bg-white  py-4 max-md:my-1 max-md:bg-bgddv max-md:py-2">
   
    <div className="px-0 flex w-full items-center justify-between">
      <h2 className="text-24  font-bold text-ddv ">
        <a title="iPhone VN/A Chính Thống" href="/dien-thoai-iphone">
          iPhone VN/A Chính Thống
        </a>
      </h2>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-end max-md:hidden">
          <a href="/iphone-15" title="iPhone 15 Series">
            <p className="border-1 mx-2 rounded-lg  px-2 py-1 text-sm font-medium text-brow hover:border-ddv hover:bg-ddv hover:text-white">
              iPhone 15 Series
            </p>
          </a>
          <a href="/iphone-14" title="iPhone 14 Series">
            <p className="border-1 mx-2 rounded-lg  px-2 py-1 text-sm font-medium text-brow hover:border-ddv hover:bg-ddv hover:text-white">
              iPhone 14 Series
            </p>
          </a>
          <a href="/iphone-13" title="iPhone 13 Series">
            <p className="border-1 mx-2 rounded-lg  px-2 py-1 text-sm font-medium text-brow hover:border-ddv hover:bg-ddv hover:text-white">
              iPhone 13 Series
            </p>
          </a>
          <a href="/iphone-11-vna" title="iPhone 11 Series">
            <p className="border-1 mx-2 rounded-lg  px-2 py-1 text-sm font-medium text-brow hover:border-ddv hover:bg-ddv hover:text-white">
              iPhone 11 Series
            </p>
          </a>
          <a href="/dien-thoai-iphone" title="Xem tất cả">
            <p className="border-1 mx-2 rounded-lg  px-2 py-1 text-sm font-medium text-brow hover:border-ddv hover:bg-ddv hover:text-white">
              Xem tất cả
            </p>
          </a>
        </div>
      </div>
    </div>
    //
    <div className="mt-4 grid grid-cols-5 gap-4 max-md:grid-cols-2 max-md:gap-2">
      {/* iphone */}
      <>
    {!products.length?<h1>Không còn sản phẩm</h1>:<>{products.map(({id,price,image_url,phone_id,description},index)=>{


const priceProduct = parseInt(price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });



      return <div key={index}>
      <a
        title="iPhone 11 64GB Chính Hãng (VN/A)"
        className="item-slider-mobile md:item-slider border-1 col-span-1 h-full flex-col items-center justify-start rounded border-borderprod p-2 hover:border-white hover:drop-shadow-xl max-md:border-0"
        href={`/products/product-details/`+id+"/"+phone_id}
      >
        <div
          style={{ height: 30 }}
          className="pb-2 flex w-full items-center justify-start"
        >
          <p className="border-1 m-1 items-center whitespace-nowrap rounded border-ddv bg-ddv px-2 py-1 text-11 text-white max-md:text-10">
            Giảm {/* */}45{/* */}%
          </p>
          <p className="border-1 m-1 whitespace-nowrap rounded border-ddv bg-white px-2 py-1 text-11 font-medium text-ddv max-md:text-10">
            Trả góp 0%
          </p>
        </div>
        <div className="relative w-full">
          <div
            className="h-[250px] w-full  max-md:h-[auto]"
            style={{
              width: "100%",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div className="imgmobileproduct imgproduct transition  duration-200 ease-in-out hover:scale-105 md:h-[200px] md:w-[200px]">
              <img
                loading="lazy"
                style={{
                  width:"100%",
                  height:"100%"
                }}
                src={image_url}
                alt={id}
              />
            </div>
          </div>
        </div>
        <h3 className="w-full px-2 py-2.5 text-left text-sm max-md:text-13">
          {id}
        </h3>
        <div className="flex w-full items-center justify-start px-2">
          <div className="w-full flex-col items-start justify-start">
            <p className="text-left text-16 font-bold text-ddv ">
             {priceProduct}
            </p>
            
          </div>
        </div>
        <div className="flex w-full items-start justify-start overflow-hidden px-1 py-2">
          <div className=" max-md:promotion-mobile w-full rounded bg-comment p-1">
            <div className="comment text-left text-10 leading-4 antialiased">
              <p className="p1" style={{ textAlign: "center" }}>
                <img
                  src="https://cdn-v2.didongviet.vn/files/default/2024/6/4/0/1720066506609_label_03.jpg"
                  alt=""
                />
              </p>
              <p className="p1" style={{ textAlign: "center" }}>
                &nbsp;
              </p>
              <p className="p1" style={{ textAlign: "center" }}>
                <span style={{ fontSize: "10.6667px" }}>
                  Bảo hành pin đến{" "}
                  <span style={{ color: "#e03e2d" }}>
                    <strong>3 năm</strong>
                  </span>
                </span>
              </p>
              <p className="p1" style={{ textAlign: "center" }}>
                <span style={{ fontSize: "10.6667px", color: "#000000" }}>
                  + 3 ưu đãi khác
                </span>
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
    })}</>}
    </>
      
    </div>
    //
  </div>
   
  )
}

export default Product