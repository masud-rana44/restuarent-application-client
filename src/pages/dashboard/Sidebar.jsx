import { CalendarCheck2, CalendarDays, Home, Mail, Menu, MessageSquare, ShoppingBag, ShoppingCart, Wallet } from "lucide-react"
import { Logo } from "../../components/Logo"
import { NavLink } from "react-router-dom"

export const Sidebar = () => {
  const links = [
    {
      label: 'User Home',
      to: '/dashboard/user-home',
      Icon: Home
    },
    {
      label: 'Reservation',
      to: '/dashboard/reservations',
      Icon: CalendarDays
    },
    {
      label: 'Payment History',
      to: '/dashboard/payment',
      Icon: Wallet
    },
    {
      label: 'My Cart',
      to: '/dashboard/cart',
      Icon: ShoppingCart
    },
    {
      label: 'Add Review',
      to: '/dashboard/reviews',
      Icon: MessageSquare
    },
    {
      label: 'My Booking',
      to: '/dashboard/bookings',
      Icon: CalendarCheck2
    },
  ]

    const navLinks = [
    {
      label: "Home",
      to: "/",
      Icon: Home
    },
        {
      label: "Our Menu",
      to: "/menu",
      Icon: Menu
    },
    {
      label: "Our Shop",
      to: "/shop",
      Icon: ShoppingBag
    },
    {
      label: "Contact Us",
      to: "/contact",
      Icon: Mail
    },

  ];

  return (
    <div className="min-h-screen w-[260px] fixed top-0 left-0 bg-primary p-8">
      <Logo/>
      <nav className="mt-8">
        <ul className="flex flex-col space-y-3">
          {links.map(link => <li key={link.to} >
            <NavLink to={link.to} className="uppercase font-medium flex items-center space-x-4 hover:text-gray-200 transition"><link.Icon className="h-6 w-6"/> <span>{link.label}</span></NavLink>
          </li>)}
        </ul>
        <hr className="my-6"/>
        <ul className="flex flex-col space-y-3">
          {navLinks.map(link => <li key={link.to} >
            <NavLink to={link.to} className="uppercase font-medium flex items-center space-x-4 hover:text-gray-200 transition"><link.Icon className="h-6 w-6"/> <span>{link.label}</span></NavLink>
          </li>)}
        </ul>
      </nav>
    </div>
  )
}
