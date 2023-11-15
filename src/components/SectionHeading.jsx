
export const SectionHeading = ({ title, subtitle}) => {
  return (
    <div className="text-center">
      <h3 className="text-yellow-500 mb-2">---{subtitle}---</h3>
        <h2 className="text-2xl font-medium uppercase py-[6px] border-y-2  w-fit px-4 mx-auto">{title}</h2>
    </div>
  )
}
