import Image from "next/image";
import Link from "next/link";
import logo from "../assets/1293490.svg"
const Navbar = () => {
  return (
    <nav className="flex justify-between h-10 px-3 py-1 shadow-sm my-3">
      <Link href="/" >
        <Image className="w-10 h-7 ml-2 " src={logo} alt="logo"/>
      </Link>
      <ul className="flex justify-around ">
        <li>
          <Link href="/signIn">SGIN IN</Link>
        </li>
        <li>
          <Link href="/shop" className="mx-5">
            SHOP
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
