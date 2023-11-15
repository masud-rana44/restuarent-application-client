
export const Cover = ({title, description, bgImg, bgColor }) => {
  return (
    <div style={{backgroundImage: `url(${bgImg})`}} className='relative bg-center bg-cover py-20 px-28 '>
      <div className="absolute w-full h-full inset-y-0 bg-black/20 z-10"/>
      <div style={{ backgroundColor: bgColor}} className='p-16 text-center z-20'>
        <h4 className="text-2xl text-dark1 font-cinzel capitalize">{title}</h4>
        <p className="text-dark">{description}</p>
      </div>
    </div>
  )
}
