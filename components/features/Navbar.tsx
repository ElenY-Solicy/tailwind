import Image from "next/image";
import Link from "next/link";
import Button from "../shared/Button";
import { navLinks } from "@/constants";

const Navbar = () => {
  return (
    <nav className="padding-container-header max-container flexBetween relative py-8">
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={154}
          height={30}
          className="object-contain"
        />
      </Link>
      <ul className="hidden w-full justify-center gap-12 lg:flex">
        {navLinks.map((el) => (
          <Link
            href={el.href}
            key={el.key}
            className="font-inter text-base text-black no-underline"
          >
            {el.label}
          </Link>
        ))}
      </ul>
      <div className="hidden lg:flex">
        <Button text="Login" className="btn_white font-inter" />
        <Button
          text="Sign Up"
          className="btn_white_text whitespace-nowrap font-inter"
        />
      </div>
      <Image
        src="/images/menu.png"
        width={32}
        height={32}
        alt="menu"
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
