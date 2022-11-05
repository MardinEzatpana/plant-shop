import {useEffect, useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/1331030.svg";
import shCart from "../assets/297750.svg";
import { fetchJson } from "../lib/api";
const Navbar = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    (async () => {
      try {
        const user = await fetchJson('/api/user');
        setUser(user);
      } catch (err) {
        // not signed in
      }
    })();
  }, []);

  const handleSignOut = async () => {
    await fetchJson('/api/logout');
    setUser(undefined);
  };
  return (
    <nav className="flex justify-between h-10 px-3 py-1 shadow-lg my-3 bg-gray-100">
      <Link href="/">
        <Image className="w-10 h-7 ml-2 " src={logo} alt="logo" />
      </Link>
      <ul className="flex justify-around ">
        {user ? (
          <>
          <li >
            {user.name}
          </li>
          <li>
            <button className="pr-10 pl-2 text-sm" onClick={handleSignOut}>SIGN OUT</button>
          </li>
          </>
        ) : (
          <li>
            <Link href="/sign-in" className="px-10 text-sm">
              SIGN IN
            </Link>
          </li>
        )}
        <li>
          <Link href="/shop">
            <Image className="w-10 h-7 ml-2 pr-5" src={shCart} alt="shCart" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
