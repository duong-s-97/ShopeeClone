import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className='w-[400px] md:mr-10  rounded-md shadow-md h-[480px]  bg-white'>
      <div className='flex items-center justify-between w-full p-8'>
        <div className='text-xl text-black max-w-32 shrink-0'>Đăng nhập</div>
        <div className='flex items-center justify-end ml-5'>
          <div className='bg-[#fefaec] border-[2px] text-sm font-bold mr-4 relative border-[#ffbf00] rounded-sm py-[.6875rem] px-[.875rem]'>
            <div className='after:border-r-[2px] text-sm font-bold after:bg-[#fefaec] after:border-[#ffbf00] after:border-t-[2px] after:w-[.75rem] after:absolute after:transform after:rotate-45 text-[#ffbf00] after:-right-[.45rem] after:top-[40%] after:h-[.75rem]'>
              Đăng nhập với mã QR
            </div>
          </div>
          <Link to='#' className='w-10 h-10'>
            <svg width='40' height='40' fill='none'>
              <g clipPath='url(#clip0)'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M18 0H0v18h18V0zM3 15V3h12v12H3zM18 22H0v18h18V22zm-3 15H3V25h12v12zM40 0H22v18h18V0zm-3 15H25V3h12v12z'
                  fill='#EE4D2D'
                ></path>
                <path d='M37 37H22.5v3H40V22.5h-3V37z' fill='#EE4D2D'></path>
                <path
                  d='M27.5 32v-8h-3v8h3zM33.5 32v-8h-3v8h3zM6 6h6v6H6zM6 28h6v6H6zM28 6h6v6h-6z'
                  fill='#EE4D2D'
                ></path>
                <path fill='#fff' d='M-4.3 4l44 43.9-22.8 22.7-43.9-44z'></path>
              </g>
              <defs>
                <clipPath id='clip0'>
                  <path fill='#fff' d='M0 0h40v40H0z'></path>
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </div>
      <div className='px-8 pb-8'>
        <div>
          <div className='mb-2'>
            <div className='border-[#00000024] h-10 w-full overflow-hidden flex justify-center border focus-within:border-[#0000008a] '>
              <input
                type='email'
                placeholder='Email/Số điện thoại/Tên đăng nhập'
                className='border-none  flex-1 outline-none p-[.75rem] shrink-0'
              />
            </div>
            <div className='pt-[.25rem] text-[#ff424f] text-[.75rem] min-h-4'></div>
          </div>
          <div className='mb-2'>
            <div className='border-[#00000024] h-10 w-full overflow-hidden flex justify-center border focus-within:border-[#0000008a] '>
              <input
                type='password'
                placeholder='Mật khẩu'
                className='border-none  flex-1 outline-none p-[.75rem] shrink-0'
              />
              <Link
                to='#'
                onClick={() => setShowPassword(!showPassword)}
                className='flex items-center outline-none border-none bg-transparent mr-[.9375rem] ml-[.75rem]'
              >
                {showPassword ? (
                  <svg fill='none' height={12} width={20} viewBox='0 0 20 12'>
                    <path
                      stroke='none'
                      fill='#000'
                      fillOpacity='.54'
                      fillRule='evenodd'
                      d='M19.975 5.823V5.81 5.8l-.002-.008v-.011a.078.078 0 01-.002-.011v-.002a.791.791 0 00-.208-.43 13.829 13.829 0 00-1.595-1.64c-1.013-.918-2.123-1.736-3.312-2.368-.89-.474-1.832-.867-2.811-1.093l-.057-.014a2.405 2.405 0 01-.086-.02L11.884.2l-.018-.003A9.049 9.049 0 0010.089 0H9.89a9.094 9.094 0 00-1.78.197L8.094.2l-.016.003-.021.005a1.844 1.844 0 01-.075.017l-.054.012c-.976.226-1.92.619-2.806 1.09-1.189.635-2.3 1.45-3.31 2.371a13.828 13.828 0 00-1.595 1.64.792.792 0 00-.208.43v.002c-.002.007-.002.015-.002.022l-.002.01V5.824l-.002.014a.109.109 0 000 .013L0 5.871a.206.206 0 00.001.055c0 .01 0 .018.002.027 0 .005 0 .009.003.013l.001.011v.007l.002.01.001.013v.002a.8.8 0 00.208.429c.054.067.11.132.165.197a13.9 13.9 0 001.31 1.331c1.043.966 2.194 1.822 3.428 2.48.974.52 2.013.942 3.09 1.154a.947.947 0 01.08.016h.003a8.864 8.864 0 001.596.16h.2a8.836 8.836 0 001.585-.158l.006-.001a.015.015 0 01.005-.001h.005l.076-.016c1.079-.212 2.118-.632 3.095-1.153 1.235-.66 2.386-1.515 3.43-2.48a14.133 14.133 0 001.474-1.531.792.792 0 00.208-.43v-.002c.003-.006.003-.015.003-.022v-.01l.002-.008c0-.004 0-.009.002-.013l.001-.012.001-.015.001-.019.002-.019a.07.07 0 01-.01-.036c0-.009 0-.018-.002-.027zm-6.362.888a3.823 3.823 0 01-1.436 2.12l-.01-.006a3.683 3.683 0 01-2.178.721 3.67 3.67 0 01-2.177-.721l-.009.006a3.823 3.823 0 01-1.437-2.12l.014-.01a3.881 3.881 0 01-.127-.974c0-2.105 1.673-3.814 3.738-3.816 2.065.002 3.739 1.711 3.739 3.816 0 .338-.047.662-.128.975l.011.009zM8.145 5.678a1.84 1.84 0 113.679 0 1.84 1.84 0 01-3.679 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                ) : (
                  <svg height={16} width={20} fill='#000' viewBox='0 0 20 10' className=' pt-[.375rem] '>
                    <path
                      stroke='none'
                      fill='#000'
                      fillOpacity='.54'
                      d='M19.834 1.15a.768.768 0 00-.142-1c-.322-.25-.75-.178-1 .143-.035.036-3.997 4.712-8.709 4.712-4.569 0-8.71-4.712-8.745-4.748a.724.724 0 00-1-.071.724.724 0 00-.07 1c.07.106.927 1.07 2.283 2.141L.631 5.219a.69.69 0 00.036 1c.071.142.25.213.428.213a.705.705 0 00.5-.214l1.963-2.034A13.91 13.91 0 006.806 5.86l-.75 2.535a.714.714 0 00.5.892h.214a.688.688 0 00.679-.535l.75-2.535a9.758 9.758 0 001.784.179c.607 0 1.213-.072 1.785-.179l.75 2.499c.07.321.392.535.677.535.072 0 .143 0 .179-.035a.714.714 0 00.5-.893l-.75-2.498a13.914 13.914 0 003.248-1.678L18.3 6.147a.705.705 0 00.5.214.705.705 0 00.499-.214.723.723 0 00.036-1l-1.82-1.891c1.463-1.071 2.32-2.106 2.32-2.106z'
                    ></path>
                  </svg>
                )}
              </Link>
            </div>
            <div className='pt-[.25rem] text-[#ff424f] text-[.75rem] min-h-4'></div>
          </div>
          <button className='bg-[#ee4d2d] flex justify-center items-center h-10 w-full text-white uppercase rounded-[.125rem] px-[.625rem] opacity-75'>
            Đăng nhập
          </button>
          <div className='flex items-center justify-between w-full py-2'>
            <Link to='#' className='text-[#05a] text-[.75rem]'>
              Quên mật khẩu
            </Link>
            <Link to='#' className='text-[#05a] text-[.75rem]'>
              Đăng nhập với SMS
            </Link>
          </div>
          <div>
            <div className='flex items-center pb-3'>
              <div className='bg-[#dbdbdb] flex-1 w-full h-[1px] '></div>
              <div className='uppercase text-[#ccc] text-[.75rem] px-4 '>hoặc</div>
              <div className='bg-[#dbdbdb] flex-1 w-full h-[1px] '></div>
            </div>
            <div className='flex flex-wrap justify-between -mx-1'>
              <Link
                to='#'
                className='flex justify-center items-center flex-1 m-1 pr-2 pl-0.5 h-10 border border-[#00000042] rounded-sm'
              >
                <div className='flex items-center justify-center w-9 h-9'>
                  <svg width={22} height={22} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                    <path
                      fill='#005cfa'
                      d='M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z'
                    />
                  </svg>
                </div>
                <div className='flex items-center justify-center'>Facebook</div>
              </Link>
              <Link
                to='#'
                className='flex justify-center items-center flex-1 m-1 pr-2 pl-0.5 h-10 border border-[#00000042] rounded-sm'
              >
                <div className='flex items-center justify-center w-9 h-9'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={22}
                    height={22}
                    preserveAspectRatio='xMidYMid'
                    viewBox='0 0 256 262'
                    id='google'
                  >
                    <path
                      fill='#4285F4'
                      d='M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027'
                    ></path>
                    <path
                      fill='#34A853'
                      d='M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1'
                    ></path>
                    <path
                      fill='#FBBC05'
                      d='M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782'
                    ></path>
                    <path
                      fill='#EB4335'
                      d='M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251'
                    ></path>
                  </svg>
                </div>
                <div className='flex items-center justify-center'>Google</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-8'>
        <div className='text-[.875rem] text-[#00000042] pr-1 flex justify-center items-center w-full'>
          Bạn mới biết đến Shopee?
          <Link to='#' className='text-[#ee4d2d] font-medium '>
            Đăng ký
          </Link>
        </div>
      </div>
    </div>
  )
}
