import Image from "next/image";
import Link from "next/link";
import logo from "../assets/3259589.svg";
const Navbar = () => {
  return (
    <nav className="flex justify-between h-10 px-3 py-1 shadow-sm my-3">
      <Link href="/">
        <Image className="w-10 h-7 ml-2 " src={logo} alt="logo" />
      </Link>
      <ul className="flex justify-around ">
        <li>
          <Link href="/shop">SHOP</Link>
        </li>
        <li>
          <Link href="/signIn" className="mx-5">
            SGIN IN
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
