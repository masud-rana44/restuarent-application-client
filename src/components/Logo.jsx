import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="font-cinzel">
      <h1 className="text-xl lg:text-2xl font-extrabold">BISTRO BOSS</h1>
      <h2 className="text-md lg:text-xl tracking-[5px]">RESTAURANT</h2>
    </Link>
  );
};
