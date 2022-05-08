import { useState } from 'react'

const Humburger = ({ children }, ...restProps) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <div
        className="absolute top-0 right-5 my-5 flex cursor-pointer flex-col sm:hidden"
        onClick={() => setOpen(!isOpen)}
      >
        <div
          className={`my-[3px] h-[5px] w-[35px] bg-black duration-300 ${
            isOpen ? ' translate-y-[13.5px] rotate-[-45deg]' : ''
          }`}
        ></div>
        <div
          className={`my-[3px] h-[5px] w-[35px] bg-black duration-500 ${
            isOpen ? 'opacity-0' : ''
          }`}
        ></div>
        <div
          className={`my-[3px] h-[5px] w-[35px] bg-black duration-300 ${
            isOpen ? ' translate-y-[-8px] rotate-[45deg]' : ''
          }`}
        ></div>
      </div>
      <div
        className={`${
          !isOpen ? 'hidden' : ''
        } absolute right-5 my-5 bg-neutral-800 p-5  sm:hidden`}
      >
        {children}
      </div>
    </>
  )
}

export default Humburger
