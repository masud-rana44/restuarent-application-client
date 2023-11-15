export const PageBanner = ({title, description, bgImg}) => {
  return (
    <div style={{backgroundImage: `url(${bgImg})`}} className='relative bg-center min-h-screen bg-cover p-20 pt-40 z-0'>
      <div className='py-36 px-28 font-cinzel bg-black/60 text-center text-white z-20'>
        <h4  className="text-7xl font-bold  capitalize">{title}</h4>
        <p className=" text-xl">{description}</p>
      </div>
    </div>
  )
}