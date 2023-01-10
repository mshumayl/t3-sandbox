import Link from 'next/link'
import NavLogIn from './NavLogIn'

const NavBar: React.FC = () => {
  
  return (
      <div className="container flex col-auto min-w-full">
        <div className="container flex px-10 py-10">
          <Link
            className=""
            href=""
            target=""
          >
            <div className="text-md font-sans mx-5 tracking-widest">Services</div>
          </Link>
          <Link
            className=""
            href=""
            target=""
          >
            <div className="text-md font-sans mx-5 tracking-widest">Contact</div>
          </Link>
          <Link
            className=""
            href=""
            target=""
          >
            <div className="text-md font-sans mx-5 tracking-widest">About</div>
          </Link>
        </div>
        <div className="container flex justify-end">
          <NavLogIn />
        </div>
      </div>
    )
  }

export default NavBar