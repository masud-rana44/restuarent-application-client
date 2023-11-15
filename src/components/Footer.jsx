import { Facebook, Instagram, Twitter } from "lucide-react"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div className="mt-28 text-white">
      <div className="grid md:grid-cols-2">
        <div className="bg-[#1F2937] p-20 text-center">
        <h3 className="text-[22px] font-medium uppercase mb-4">Contact Us</h3>
        <div className="text-sm space-y-1">
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>
      </div>
      <div className="bg-[#111827] p-20 text-center">
         <h3 className="text-[22px] font-medium uppercase mb-4">Follow Us</h3>
        <div className="text-sm space-y-4">
          <p>Join us on social media</p>
          <ul className="flex space-x-6 items-center justify-center">
            <li>
              <Link to="/facebook">
              <Facebook fill="#fff" size={22}/>
              </Link>
            </li>
            <li>
              <Link to="/facebook">
              <Instagram size={22}/>
              </Link>
            </li>
            <li>
              <Link to="/facebook">
              <Twitter fill="#fff" size={22}/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      </div>
      <div className="py-4 bg-black text-center text-sm">
        Copyright ©{new Date().getFullYear()} Bistro Boss. All rights reserved.
      </div>
    </div>
  )
}
