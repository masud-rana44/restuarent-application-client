
export const Cover = ({title, description, bgImg, bgColor, textColor, className }) => {
  return (
    <div style={{backgroundImage: `url(${bgImg})`}} className={`relative bg-center bg-cover p-20 z-0 ${className}`}>
      {/* <div className="absolute w-full h-full inset-0 bg-black/30 z-10"/> */}
      <div style={{ backgroundColor: bgColor}} className='p-16 px-28  text-center z-20'>
        <h4 style={{ color: textColor}} className="text-2xl font-cinzel capitalize mb-2">{title}</h4>
        <p className={textColor === '#fff' ? 'text-white' : "text-dark"}>{description}</p>
      </div>
    </div>
  )
}
