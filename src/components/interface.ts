export interface InputInterface {
  name: string
  placeholder: string
  type: string
}

export interface FormDataRegister {
  email: string
  password: string
  confirmPassword: string
}

export interface FormDataLogin {
  email: string
  password: string
}
