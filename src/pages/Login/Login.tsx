import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { inputLogin } from 'src/components/constants'
import { FormDataLogin, InputInterface } from 'src/components/interface'

// validate register form
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Vui lòng điền vào mục này.')
    .matches(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, 'Email không hợp lệ.'),
  password: Yup.string()
    .required('Vui lòng điền vào mục này.')
    .matches(/^[\w!@#$%^&*]{6,160}$/, 'Mật khẩu không hợp lệ.')
})

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormDataLogin>({
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = handleSubmit((data) => {
    console.log('data: ', data)
  })

  const email = watch('email')
  const password = watch('password')

  const isAllFieldsFilled = email && password

  const RENDER_INPUT = (input: InputInterface, errors: any) => {
    const errorMessage = errors[input.name]?.message
    return (
      <div className='mb-2' key={input.name}>
        <div
          className={` ${errorMessage ? 'bg-[#fff6f7] border-[#ff424f] shadow-sm shadow-rose-300' : 'border-[#00000024]'} h-10 w-full overflow-hidden flex justify-center border focus-within:border-[#0000008a]`}
        >
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  onChange={onChange}
                  value={value == null ? '' : value}
                  className='border-none  flex-1 outline-none p-[.75rem] shrink-0'
                />
              )
            }}
            name={input.name as 'email' | 'password'}
          />
        </div>
        <div className='pt-[.25rem] text-[#ff424f] text-[.75rem] h-4'>{errorMessage ? errorMessage : null}</div>
      </div>
    )
  }
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
        <form onSubmit={onSubmit} noValidate>
          {inputLogin.map((item) => RENDER_INPUT(item, errors))}
          <button
            type='submit'
            disabled={!isAllFieldsFilled}
            className={`bg-[#ee4d2d] flex justify-center items-center h-10 w-full text-white uppercase rounded-[.125rem] px-[.625rem]  ${
              !isAllFieldsFilled ? 'opacity-75' : ''
            }`}
          >
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
        </form>
      </div>
      <div className='mb-8'>
        <div className='text-[.875rem] text-[#00000042] pr-1 flex justify-center items-center w-full'>
          Bạn mới biết đến Shopee?
          <Link to='/register' className='text-[#ee4d2d] font-medium '>
            Đăng ký
          </Link>
        </div>
      </div>
    </div>
  )
}
