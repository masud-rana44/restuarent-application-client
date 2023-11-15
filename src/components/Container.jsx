export const Container = ({ children, className }) => {
  return <div className={`max-w-[1160px] mx-auto ${className}`}>{children}</div>;
};
