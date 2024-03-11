"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "Our Bikes", path: "/our-bikes" },
];

interface INav {
  containerStyles: string;
}

const Nav = ({ containerStyles }: INav) => {
  const pathname = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link: any, index: number) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${
              link.path === pathname
                ? "text-primary dark:hover:text-white "
                : "text-black hover:text-black dark:text-white dark:hover:text-white"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
