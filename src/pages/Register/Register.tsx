import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { inputRegister } from 'src/components/constants'
import { FormDataRegister, InputInterface } from 'src/components/interface'

// validate register form
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Vui lòng điền vào mục này.')
    .matches(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, 'Email không hợp lệ.'),
  password: Yup.string()
    .required('Vui lòng điền vào mục này.')
    .matches(/^[\w!@#$%^&*]{6,160}$/, 'Mật khẩu không hợp lệ.'),
  confirmPassword: Yup.string()
    .required('Vui lòng điền vào mục này.')
    .oneOf([Yup.ref('password')], 'Mật khẩu không hợp lệ.')
})

export default function Register() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormDataRegister>({
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = handleSubmit((data) => {
    console.log('data: ', data)
  })

  const email = watch('email')
  const password = watch('password')
  const confirmPassword = watch('confirmPassword')

  const isAllFieldsFilled = email && password && confirmPassword

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
            name={input.name as 'email' | 'password' | 'confirmPassword'}
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
          {inputRegister.map((item) => RENDER_INPUT(item, errors))}
          <button
            type='submit'
            disabled={!isAllFieldsFilled}
            className={`bg-[#ee4d2d] flex justify-center items-center h-10 w-full text-white uppercase rounded-[.125rem] px-[.625rem]  ${
              !isAllFieldsFilled ? 'opacity-75' : ''
            }`}
          >
            Đăng ký
          </button>
        </form>
      </div>
      <div className='mb-8'>
        <div className='text-[.875rem] text-[#00000042] pr-1 flex justify-center items-center w-full'>
          Bạn đã có tài khoản Shopee?
          <Link to='/login' className='text-[#ee4d2d] font-medium '>
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  )
}
