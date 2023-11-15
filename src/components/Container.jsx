export const Container = ({ children, className }) => {
  return <div className={`container mx-auto ${className}`}>{children}</div>;
};
