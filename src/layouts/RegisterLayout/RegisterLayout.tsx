import Footer from 'src/components/Footer'
import RegisterHeader from 'src/components/RegisterHeader'
import bg from 'src/assets/images/bg.jpg'

interface Props {
  children?: React.ReactNode
}

export default function RegisterLayout({ children }: Props) {
  return (
    <div>
      <RegisterHeader />
      <div className='relative md:bg-red-100'>
        <div className='h-[600px]  mx-auto '>
          <img alt='' src={bg} className='hidden mx-auto  object-cover w-full max-w-[1040px] h-full md:flex' />
        </div>
        <div className='absolute w-full left-1/2 top-[10%] transform -translate-x-1/2 max-w-[1040px] flex justify-center md:justify-end   mx-auto'>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}
