
export const Button = ({ label,children, className, type,  ...rest}) => {

  if(type === 'primary')  {
    return  <button className={`py-2 px-6 flex items-center space-x-2 hover:opacity-75 transition bg-gradient-to-r from-[#835D23] to-[#B58130] font-medium  rounded-sm text-white font-inter ${className}`} {...rest}>
      {children}
    </button>
  }

  return (
    <button className={`py-2 px-4 text-dark1 border-b-[3px] border-dark1 font-medium uppercase rounded-md ${className}`} {...rest}>
      {label}
    </button>
  )
}
