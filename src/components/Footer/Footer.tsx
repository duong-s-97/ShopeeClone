import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-gray-100'>
      <div className='m-auto lg:w-1200'>
        <div className='flex flex-wrap items-start justify-between py-10 '>
          <div className='mr-6  shrink-0 leading-5 text-[#0000008a] text-sm'>
            © 2024 Shopee. Tất cả các quyền được bảo lưu.
          </div>
          <div className='flex flex-wrap justify-center leading-5 text-[#0000008a] text-sm'>
            <div className='flex-1 text-center md:text-right min-w-[320px] md:min-w-[130px] '>Quốc gia & Khu vực:</div>
            <div className='px-1 border-r border-[#00000033]'>Singapore</div>
            <div className='px-1 border-r border-[#00000033]'>Indonesia</div>
            <div className='px-1 border-r border-[#00000033]'>Thái Lan</div>
            <div className='px-1 border-r border-[#00000033]'>Malaysia</div>
            <div className='px-1 border-r border-[#00000033]'>Việt Nam</div>
            <div className='px-1 border-r border-[#00000033]'>Philippines</div>
            <div className='px-1 border-r border-[#00000033]'>Brazil</div>
            <div className='px-1 border-r border-[#00000033]'>México</div>
            <div className='px-1 border-r border-[#00000033]'>Colombia</div>
            <div className='px-1 border-r border-[#00000033]'>Chile</div>
            <div className='px-1 '>Đài Loan</div>
          </div>
        </div>
        <div className='py-[2.625rem] w-full mx-auto'>
          <div className='flex items-center justify-center mb-10 uppercase text-[#000000a6] text-[.75rem]'>
            <div className='border-r border-[#00000017] text-[.75rem] px-6'>CHÍNH SÁCH BẢO MẬT</div>
            <div className='border-r border-[#00000017] text-[.75rem] px-6'>QUY CHẾ HOẠT ĐỘNG</div>
            <div className='border-r border-[#00000017] text-[.75rem] px-6'>CHÍNH SÁCH VẬN CHUYỂN</div>
            <div className=' text-[.75rem] px-6'>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</div>
          </div>
          <div className='mt-2 w-ful text-center text-[#000000a6] text-[.75rem]'>Công ty TNHH Shopee</div>
          <div className='mt-2 w-ful text-center text-[#000000a6] text-[.75rem]'>
            Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành
            phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
          </div>
          <div className='mt-2 w-ful text-center text-[#000000a6] text-[.75rem]'>
            Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Bùi Anh Tuấn
          </div>
          <div className='mt-2 w-ful text-center text-[#000000a6] text-[.75rem]'>
            Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015
          </div>
          <div className='mt-2 w-ful text-center text-[#000000a6] text-[.75rem]'>
            © 2015 - Bản quyền thuộc về Công ty TNHH Shopee
          </div>
        </div>
      </div>
    </footer>
  )
}
