import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-center border-t border-gray-200 bg-white pt-5 text-left max-md:hidden">
      <div className="container">
        <div className="flex w-full items-start justify-between">
          <div className="w-1/4">
            <div className="flex flex-col">
              <p className="my-2 text-sm font-bold text-ddv">Hỗ trợ khách hàng</p>
              <Link href="/dich-vu-khach-hang-doanh-nghiep" title="Khách hàng doanh nghiệp (B2B)">
                <p className="py-1 text-14 font-normal text-black">Khách hàng doanh nghiệp (B2B)</p>
              </Link>
              <Link href="/cua-hang-gan-ban" title="Danh sách cửa hàng">
                <div className="my-1 text-sm font-normal text-black hover:text-ddv">Danh sách cửa hàng</div>
              </Link>
              <Link href="/mua-hang-tra-gop" title="Mua hàng trả góp">
                <div className="my-1 text-sm font-normal text-black hover:text-ddv">Mua hàng trả góp</div>
              </Link>
              <Link href="/members">
                <div className="my-1 text-sm font-normal text-black hover:text-ddv">Tra cứu điểm thành viên</div>
              </Link>
              <div
                href="https://didongviet.vn/dchannel/muc-tuyen-dung/"
                target="_blank"
                rel="noopener noreferrer"
                className="my-1 text-sm font-normal text-black hover:text-ddv"
                title="Tuyển dụng mới nhất"
              >
                Tuyển dụng mới nhất
              </div>
              <div
                href="https://didongviet.vn/dchannel/huong-dan-mua-hang-online-tai-di-dong-viet/"
                className="my-1 text-sm font-normal text-black hover:text-ddv"
              >
                Hướng dẫn mua hàng Online
              </div>
              <Link href="/chinh-sach/trung-tam-bao-hanh-apple-tai-viet-nam" title="Trung tâm bảo hành Apple tại Việt Nam">
                <div className="my-1 text-sm font-normal text-black hover:text-ddv">Trung tâm bảo hành Apple tại Việt Nam</div>
              </Link>
            </div>
          </div>
          <div className="w-1/4">
            <div className="flex flex-col">
              <p className="my-2 text-sm font-bold text-ddv">Chính sách</p>
              <Link href="/chinh-sach/chinh-sach-bao-hanh" title="Chính sách bảo hành">
                <div className="my-1 text-sm font-normal text-black hover:text-ddv">Chính sách bảo hành</div>
              </Link>
              <Link href="/chinh-sach/chinh-sach-doi-tra" title="Chính sách đổi trả">
                <div className="my-1 text-sm font-normal text-black hover:text-ddv">Chính sách đổi trả</div>
              </Link>
              <Link href="/chinh-sach/chinh-sach-ban-hang" title="Chính sách bán hàng">
                <div className="my-1 text-sm font-normal text-black hover:text-ddv">Chính sách bán hàng</div>
              </Link>
              <Link href="/chinh-sach/chinh-sach-bao-mat" title="Chính sách bảo mật">
                <div className="my-1 text-sm font-normal text-black hover:text-ddv">Chính sách bảo mật</div>
              </Link>
              <Link href="/chinh-sach/chinh-sach-su-dung" title="Chính sách sử dụng">
                <div className="my-1 text-sm font-normal text-black hover:text-ddv">Chính sách sử dụng</div>
              </Link>
              <Link href="/chinh-sach/chinh-sach-kiem-hang" title="Chính sách kiểm hàng">
                <div className="my-1 text-sm font-normal text-black hover:text-ddv">Chính sách kiểm hàng</div>
              </Link>
            </div>
          </div>
          <div className="w-1/4">
            <div className="flex flex-col" style={{ width: '100%' }}>
              <p className="my-2 text-sm font-bold text-ddv">Liên hệ</p>
              <div className="flex flex-col" style={{ width: '100%' }}>
                <div className="flex items-center justify-between py-1" style={{ width: '90%' }}>
                  <p className="text-14 font-medium">Mua ngay: </p>
                  <div className="flex items-center justify-center pl-4">
                    <p className="text-16 font-bold text-link">
                      <div href="tel:18006018">1800.6018</div>
                    </p>
                    <p className="pl-2 text-14 font-normal text-black">(07:30 – 21:30)</p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-1" style={{ width: '90%' }}>
                  <p className="text-14 font-medium">Kỹ thuật: </p>
                  <div className="flex items-center justify-end pl-4">
                    <p className="text-16 font-bold text-link">
                      <div href="tel:18006729">1800.6729</div>
                    </p>
                    <p className="pl-2 text-14 font-normal text-black">(08:30 – 21:30)</p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-1" style={{ width: '90%' }}>
                  <p className="text-14 font-medium">Bảo hành: </p>
                  <div className="flex items-center justify-end pl-4">
                    <p className="text-16 font-bold text-link">
                      <div href="tel:18006729">1800.6729</div>
                    </p>
                    <p className="pl-2 text-14 font-normal text-black">(09:00 – 21:00)</p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-1" style={{ width: '90%' }}>
                  <p className="text-14 font-medium">Góp ý: </p>
                  <div className="flex items-center justify-center pl-4">
                    <p className="text-16 font-bold text-link">
                      <div href="tel:18006306">1800.6306</div>
                    </p>
                    <p className="pl-2 text-14 font-normal text-black">(08:30 – 21:30)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="flex flex-col">
          
             
            
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
