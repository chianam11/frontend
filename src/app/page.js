import Product from "./components/products/Product";

export default function Home() {
  return <main
  style={{ minHeight: 600 }}
  className="flex w-full flex-col items-center justify-start py-1"
>
  <div className="container w-full" style={{ opacity: 1 }}>
    <div className="container z-0 antialiased">
      <h1 className="hidden">
        Didongviet.vn - Điện thoại, Laptop, Tablet, Phụ kiện Chính Hãng
      </h1>
     
     
      <div className="no-scrollbar my-2 w-full rounded-lg bg-white p-4 max-md:hidden max-md:overflow-x-scroll md:grid md:grid-cols-12 md:gap-4">
        <div className="max-md:mx-1 max-md:hidden  max-md:flex-nowrap">
          <div
            rel="dofollow"
            className="flex flex-col items-center justify-start max-md:w-[102px] md:col-span-1 "
          >
            <div
              className="w-full rounded "
              style={{ position: "relative", height: 64 }}
            >
              <img
              src="https://cdn-v2.didongviet.vn/files/page/2023/11/31/0/1703995954489_logo.png"
                alt="iPhone 15 Pro Max"
                loading="lazy"
                className="brandcover overflow-visible transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="case pt-2 text-center text-13 font-medium text-line hover:text-ddv md:antialiased">
              iPhone 15 Pro Max
            </p>
          </div>
        </div>
        <div className="max-md:mx-1 max-md:hidden  max-md:flex-nowrap">
          <div
            className="flex flex-col items-center justify-start max-md:w-[102px] md:col-span-1 "
          >
            <div
              className="w-full rounded "
              style={{ position: "relative", height: 64 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2024/0/18/0/1705547345439_thumb_17_01_01.png"
                alt="Samsung Galaxy S24 Ultra"
                loading="lazy"
                className="brandcover overflow-visible transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="case pt-2 text-center text-13 font-medium text-line hover:text-ddv md:antialiased">
              Samsung Galaxy S24 Ultra
            </p>
          </div>
        </div>
        <div className="max-md:mx-1 max-md:hidden  max-md:flex-nowrap">
          <div
            className="flex flex-col items-center justify-start max-md:w-[102px] md:col-span-1 "
          >
            <div
              className="w-full rounded "
              style={{ position: "relative", height: 64 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2024/6/3/0/1719977868194_1.png"
                alt="Redmi Note 13"
                loading="lazy"
                className="brandcover overflow-visible transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="case pt-2 text-center text-13 font-medium text-line hover:text-ddv md:antialiased">
              Redmi Note 13
            </p>
          </div>
        </div>
        <div className="max-md:mx-1 max-md:hidden  max-md:flex-nowrap">
          <div
            className="flex flex-col items-center justify-start max-md:w-[102px] md:col-span-1 "
          >
            <div
              className="w-full rounded "
              style={{ position: "relative", height: 64 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2024/1/5/0/1707128274173_thumb_04.png"
                alt="iPhone Cũ"
                loading="lazy"
                className="brandcover overflow-visible transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="case pt-2 text-center text-13 font-medium text-line hover:text-ddv md:antialiased">
              iPhone Cũ
            </p>
          </div>
        </div>
        <div className="max-md:mx-1 max-md:hidden  max-md:flex-nowrap">
          <div
            className="flex flex-col items-center justify-start max-md:w-[102px] md:col-span-1 "
          >
            <div
              className="w-full rounded "
              style={{ position: "relative", height: 64 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2024/6/2/0/1719913400484_icon_menu_phuaa_17.png"
                alt="iPad Air 6"
                loading="lazy"
                className="brandcover overflow-visible transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="case pt-2 text-center text-13 font-medium text-line hover:text-ddv md:antialiased">
              iPad Air 6
            </p>
          </div>
        </div>
        <div className="max-md:mx-1 max-md:hidden  max-md:flex-nowrap">
          <div
            className="flex flex-col items-center justify-start max-md:w-[102px] md:col-span-1 "
          >
            <div
              className="w-full rounded "
              style={{ position: "relative", height: 64 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2024/6/3/0/1719977890245_2.png"
                alt="Samsung Galaxy A55"
                loading="lazy"
                className="brandcover overflow-visible transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="case pt-2 text-center text-13 font-medium text-line hover:text-ddv md:antialiased">
              Samsung Galaxy A55
            </p>
          </div>
        </div>
        <div className="max-md:mx-1 max-md:hidden  max-md:flex-nowrap">
          <div
            className="flex flex-col items-center justify-start max-md:w-[102px] md:col-span-1 "
          >
            <div
              className="w-full rounded "
              style={{ position: "relative", height: 64 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2024/6/3/0/1719977941177_3.png"
                alt="Redmi A3"
                loading="lazy"
                className="brandcover overflow-visible transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="case pt-2 text-center text-13 font-medium text-line hover:text-ddv md:antialiased">
              Redmi A3
            </p>
          </div>
        </div>
        <div className="max-md:mx-1 max-md:hidden  max-md:flex-nowrap">
          <div
            className="flex flex-col items-center justify-start max-md:w-[102px] md:col-span-1 "
          >
            <div
              className="w-full rounded "
              style={{ position: "relative", height: 64 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2024/1/5/0/1707108380181_thumb_03.png"
                alt="iPhone 13 cũ"
                loading="lazy"
                className="brandcover overflow-visible transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="case pt-2 text-center text-13 font-medium text-line hover:text-ddv md:antialiased">
              iPhone 13 cũ
            </p>
          </div>
        </div>
        <div className="max-md:mx-1 max-md:hidden  max-md:flex-nowrap">
          <div
            className="flex flex-col items-center justify-start max-md:w-[102px] md:col-span-1 "
          >
            <div
              className="w-full rounded "
              style={{ position: "relative", height: 64 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2024/5/18/0/1718707200774_icon_menu_phaaa.png"
                alt="Macbook Air M3"
                loading="lazy"
                className="brandcover overflow-visible transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="case pt-2 text-center text-13 font-medium text-line hover:text-ddv md:antialiased">
              Macbook Air M3
            </p>
          </div>
        </div>
        <div className="max-md:mx-1 max-md:hidden  max-md:flex-nowrap">
          <div
            className="flex flex-col items-center justify-start max-md:w-[102px] md:col-span-1 "
          >
            <div
              className="w-full rounded "
              style={{ position: "relative", height: 64 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2024/6/3/0/1719978062825_icon_menu_phuaa_31.png"
                alt="Samsung Galaxy A35"
                loading="lazy"
                className="brandcover overflow-visible transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="case pt-2 text-center text-13 font-medium text-line hover:text-ddv md:antialiased">
              Samsung Galaxy A35
            </p>
          </div>
        </div>
        <div className="max-md:mx-1 max-md:hidden  max-md:flex-nowrap">
          <div
            className="flex flex-col items-center justify-start max-md:w-[102px] md:col-span-1 "
          >
            <div
              className="w-full rounded "
              style={{ position: "relative", height: 64 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2024/6/3/0/1719978077229_4.png"
                alt="OPPO A18"
                loading="lazy"
                className="brandcover overflow-visible transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="case pt-2 text-center text-13 font-medium text-line hover:text-ddv md:antialiased">
              OPPO A18
            </p>
          </div>
        </div>
        <div className="max-md:mx-1 max-md:hidden  max-md:flex-nowrap">
          <div
            className="flex flex-col items-center justify-start max-md:w-[102px] md:col-span-1 "
          >
            <div
              className="w-full rounded "
              style={{ position: "relative", height: 64 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2024/4/27/0/1716796934948_icon_menu_phaaa_5.png"
                alt="Samsung cũ"
                loading="lazy"
                className="brandcover overflow-visible transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="case pt-2 text-center text-13 font-medium text-line hover:text-ddv md:antialiased">
              Samsung cũ
            </p>
          </div>
        </div>
        <div className="max-md:mx-1 max-md:hidden  max-md:flex-nowrap">
          <div
            className="flex flex-col items-center justify-start max-md:w-[102px] md:col-span-1 "
          >
            <div
              className="w-full rounded "
              style={{ position: "relative", height: 64 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2024/6/2/0/1719914579874_icon_menu_phuaa_25.png"
                alt="Đồng hồ Kieslect"
                loading="lazy"
                className="brandcover overflow-visible transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="case pt-2 text-center text-13 font-medium text-line hover:text-ddv md:antialiased">
              Đồng hồ Kieslect
            </p>
          </div>
        </div>
        <div className="max-md:mx-1 max-md:hidden  max-md:flex-nowrap">
          <div
            className="flex flex-col items-center justify-start max-md:w-[102px] md:col-span-1 "
          >
            <div
              className="w-full rounded "
              style={{ position: "relative", height: 64 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2024/6/2/0/1719914963423_icon_menu_phuaa_27.png"
                alt="Loa Bluetooth JBL Clip 5"
                loading="lazy"
                className="brandcover overflow-visible transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="case pt-2 text-center text-13 font-medium text-line hover:text-ddv md:antialiased">
              Loa Bluetooth JBL Clip 5
            </p>
          </div>
        </div>
        <div className="max-md:mx-1 max-md:hidden  max-md:flex-nowrap">
          <div
            className="flex flex-col items-center justify-start max-md:w-[102px] md:col-span-1 "
          >
            <div
              className="w-full rounded "
              style={{ position: "relative", height: 64 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2024/6/2/0/1719915640002_icon_menu_phuaa_28.png"
                alt="Quạt cầm tay mini 3in1 Jisulife"
                loading="lazy"
                className="brandcover overflow-visible transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="case pt-2 text-center text-13 font-medium text-line hover:text-ddv md:antialiased">
              Quạt cầm tay mini 3in1 Jisulife
            </p>
          </div>
        </div>
        <div className="max-md:mx-1 max-md:hidden  max-md:flex-nowrap">
          <div
            className="flex flex-col items-center justify-start max-md:w-[102px] md:col-span-1 "
          >
            <div
              className="w-full rounded "
              style={{ position: "relative", height: 64 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2024/6/2/0/1719915783694_icon_menu_phuaa_29.png"
                alt="Máy cạo râu Enchen"
                loading="lazy"
                className="brandcover overflow-visible transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="case pt-2 text-center text-13 font-medium text-line hover:text-ddv md:antialiased">
              Máy cạo râu Enchen
            </p>
          </div>
        </div>
        <div className="max-md:mx-1 max-md:hidden  max-md:flex-nowrap">
          <div
            className="flex flex-col items-center justify-start max-md:w-[102px] md:col-span-1 "
          >
            <div
              className="w-full rounded "
              style={{ position: "relative", height: 64 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2024/6/2/0/1719913603232_icon_menu_phuaa_18.png"
                alt="iPhone 13"
                loading="lazy"
                className="brandcover overflow-visible transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="case pt-2 text-center text-13 font-medium text-line hover:text-ddv md:antialiased">
              iPhone 13
            </p>
          </div>
        </div>
        <div className="max-md:mx-1 max-md:hidden  max-md:flex-nowrap">
          <div
            className="flex flex-col items-center justify-start max-md:w-[102px] md:col-span-1 "
          >
            <div
              className="w-full rounded "
              style={{ position: "relative", height: 64 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2024/6/2/0/1719914751532_icon_menu_phuaa_26.png"
                alt="Garmin"
                loading="lazy"
                className="brandcover overflow-visible transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="case pt-2 text-center text-13 font-medium text-line hover:text-ddv md:antialiased">
              Garmin
            </p>
          </div>
        </div>
        <div className="max-md:mx-1 max-md:hidden  max-md:flex-nowrap">
          <div
            className="flex flex-col items-center justify-start max-md:w-[102px] md:col-span-1 "
          >
            <div
              className="w-full rounded "
              style={{ position: "relative", height: 64 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2024/5/18/0/1718707799435_icon_menu_phaaa_4.png"
                alt="Loa Bluetooth Marshall"
                loading="lazy"
                className="brandcover overflow-visible transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="case pt-2 text-center text-13 font-medium text-line hover:text-ddv md:antialiased">
              Loa Bluetooth Marshall
            </p>
          </div>
        </div>
        <div className="max-md:mx-1 max-md:hidden  max-md:flex-nowrap">
          <div
            className="flex flex-col items-center justify-start max-md:w-[102px] md:col-span-1 "
          >
            <div
              className="w-full rounded "
              style={{ position: "relative", height: 64 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2024/6/2/0/1719915920774_icon_menu_phuaa_30.png"
                alt="Combo củ cáp 9Fit"
                loading="lazy"
                className="brandcover overflow-visible transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="case pt-2 text-center text-13 font-medium text-line hover:text-ddv md:antialiased">
              Combo củ cáp 9Fit
            </p>
          </div>
        </div>
        <div className="max-md:mx-1 max-md:hidden  max-md:flex-nowrap">
          <div
            className="flex flex-col items-center justify-start max-md:w-[102px] md:col-span-1 "
          >
            <div
              className="w-full rounded "
              style={{ position: "relative", height: 64 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2024/5/18/0/1718707333527_icon_menu_phaaa_1.png"
                alt="AirPods Pro 2"
                loading="lazy"
                className="brandcover overflow-visible transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="case pt-2 text-center text-13 font-medium text-line hover:text-ddv md:antialiased">
              AirPods Pro 2
            </p>
          </div>
        </div>
        <div className="max-md:mx-1 max-md:hidden  max-md:flex-nowrap">
          <div
            className="flex flex-col items-center justify-start max-md:w-[102px] md:col-span-1 "
          >
            <div
              className="w-full rounded "
              style={{ position: "relative", height: 64 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2024/5/25/0/1719312377468_icon_menu_phuaa_15.png"
                alt="Củ sạc Anker"
                loading="lazy"
                className="brandcover overflow-visible transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="case pt-2 text-center text-13 font-medium text-line hover:text-ddv md:antialiased">
              Củ sạc Anker
            </p>
          </div>
        </div>
        <div className="max-md:mx-1 max-md:hidden  max-md:flex-nowrap">
          <div
            className="flex flex-col items-center justify-start max-md:w-[102px] md:col-span-1 "
          >
            <div
              className="w-full rounded "
              style={{ position: "relative", height: 64 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2024/4/27/0/1716798334599_icon_menu_phaaa_9.png"
                alt="Lên đời siêu hời"
                loading="lazy"
                className="brandcover overflow-visible transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="case pt-2 text-center text-13 font-medium text-line hover:text-ddv md:antialiased">
              Lên đời siêu hời
            </p>
          </div>
        </div>
        <div className="max-md:mx-1 max-md:hidden  max-md:flex-nowrap">
          <div
            className="flex flex-col items-center justify-start max-md:w-[102px] md:col-span-1 "
          >
            <div
              className="w-full rounded "
              style={{ position: "relative", height: 64 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2024/5/25/0/1719312454317_icon_menu_phuaa_16.png"
                alt="Galaxy Z Fold6"
                loading="lazy"
                className="brandcover overflow-visible transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <p className="case pt-2 text-center text-13 font-medium text-line hover:text-ddv md:antialiased">
              Galaxy Z Fold6
            </p>
          </div>
        </div>
      </div>
     
    
    <Product/>
     
     
    
    
     
    
     
     
     
    
    
    
      <div className="relative my-2 max-md:my-1 flex h-[300px] w-full flex-col items-start justify-center rounded-lg max-md:rounded bg-ddv  py-2 max-md:h-[224px]">
        <div className="flex w-full items-center justify-start px-4 py-2 max-md:hidden">
          <p className="pl-2 text-left text-24 font-bold text-white max-md:text-center">
            Cảm ơn HÀNG NGÀN người nổi tiếng cùng HÀNG TRIỆU khách hàng đã và
            đang ủng hộ Di Động Việt
          </p>
        </div>
        <div className="flex justify-start items-center w-full px-3 pb-4 md:hidden">
          <p className="text-white text-sm   pl-2 text-center">
            Cảm ơn HÀNG NGÀN người nổi tiếng cùng HÀNG TRIỆU khách hàng đã và
            đang ủng hộ Di Động Việt
          </p>
        </div>
        <div className="no-scrollbar relative flex w-full items-center justify-between overflow-hidden   max-md:overflow-x-scroll max-md:pb-1 md:px-4 ">
          <div className="flex max-md:mx-1 max-md:flex-nowrap max-md:justify-start md:hidden">
            <div
              className="overflow-hidden rounded "
              style={{ position: "relative", height: 114, width: 180 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2023/9/19/0/1697704370996_csr_08.jpg"
                loading="lazy"
                alt="KOLs 2"
                style={{ height: 114, objectFit: "contain", width: 180 }}
                className="transition duration-300 ease-in-out hover:scale-110 "
              />
            </div>
            <div
              className="overflow-hidden rounded "
              style={{ position: "relative", height: 114, width: 180 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2023/9/19/0/1697704317090_csr_10.jpg"
                loading="lazy"
                alt="KOLs"
                style={{ height: 114, objectFit: "contain", width: 180 }}
                className="transition duration-300 ease-in-out hover:scale-110 "
              />
            </div>
            <div
              className="overflow-hidden rounded "
              style={{ position: "relative", height: 114, width: 180 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2023/9/19/0/1697705434098_csr_11.jpg"
                loading="lazy"
                alt="KOLs 4"
                style={{ height: 114, objectFit: "contain", width: 180 }}
                className="transition duration-300 ease-in-out hover:scale-110 "
              />
            </div>
            <div
              className="overflow-hidden rounded "
              style={{ position: "relative", height: 114, width: 180 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2023/9/19/0/1697705371443_csr_09.jpg"
                loading="lazy"
                alt="KOLs 3"
                style={{ height: 114, objectFit: "contain", width: 180 }}
                className="transition duration-300 ease-in-out hover:scale-110 "
              />
            </div>
            <div
              className="overflow-hidden rounded "
              style={{ position: "relative", height: 114, width: 180 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2023/9/19/0/1697705453862_csr_07.jpg"
                loading="lazy"
                alt="KOLs 5"
                style={{ height: 114, objectFit: "contain", width: 180 }}
                className="transition duration-300 ease-in-out hover:scale-110 "
              />
            </div>
            <div
              className="overflow-hidden rounded "
              style={{ position: "relative", height: 114, width: 180 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2023/9/19/0/1697703581020_csr_01.jpg"
                loading="lazy"
                alt=""
                style={{ height: 114, objectFit: "contain", width: 180 }}
                className="transition duration-300 ease-in-out hover:scale-110 "
              />
            </div>
            <div
              className="overflow-hidden rounded "
              style={{ position: "relative", height: 114, width: 180 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2023/9/19/0/1697703948869_csr_02.jpg"
                loading="lazy"
                alt=""
                style={{ height: 114, objectFit: "contain", width: 180 }}
                className="transition duration-300 ease-in-out hover:scale-110 "
              />
            </div>
            <div
              className="overflow-hidden rounded "
              style={{ position: "relative", height: 114, width: 180 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2023/9/19/0/1697704177564_csr_03.jpg"
                loading="lazy"
                alt=""
                style={{ height: 114, objectFit: "contain", width: 180 }}
                className="transition duration-300 ease-in-out hover:scale-110 "
              />
            </div>
            <div
              className="overflow-hidden rounded "
              style={{ position: "relative", height: 114, width: 180 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2023/9/19/0/1697704207611_csr_06.jpg"
                loading="lazy"
                alt=""
                style={{ height: 114, objectFit: "contain", width: 180 }}
                className="transition duration-300 ease-in-out hover:scale-110 "
              />
            </div>
            <div
              className="overflow-hidden rounded "
              style={{ position: "relative", height: 114, width: 180 }}
            >
              <img
                src="https://cdn-v2.didongviet.vn/files/page/2023/9/19/0/1697704220555_csr_05.jpg"
                loading="lazy"
                alt=""
                style={{ height: 114, objectFit: "contain", width: 180 }}
                className="transition duration-300 ease-in-out hover:scale-110 "
              />
            </div>
          </div>
          <div
            className="swiper swiper-initialized swiper-horizontal swiper-pointer-events max-md:hidden swiper-backface-hidden"
            style={{ height: "100%" }}
          >
            <div
              className="swiper-wrapper"
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
            </div>
            <div className="swiper-button-prev swiper-button-disabled" />
            <div className="swiper-button-next" />
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
              <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
              <span className="swiper-pagination-bullet" />
              <span className="swiper-pagination-bullet" />
              <span className="swiper-pagination-bullet" />
              <span className="swiper-pagination-bullet" />
              <span className="swiper-pagination-bullet" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

}
