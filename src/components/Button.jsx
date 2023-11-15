
export const Button = ({ label, ...rest}) => {
  return (
    <button className="py-2 px-4 text-dark1 border-b-[3px] border-dark1 font-medium uppercase rounded-md" {...rest}>
      {label}
    </button>
  )
}
