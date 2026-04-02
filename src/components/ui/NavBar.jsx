import React from 'react';
import Logo from './Logo';
import Links from './NavLinks';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="flex w-full justify-between flex-row z-10 items-center px-2">
      <Link to="/" className="flex items-center gap-2 relative cursor-pointer">
        <Logo />
        <h1 className="text-1xl font-bold absolute top-0 italic -right-10">
          Bit<span className="text-[#e6b38a]">Type</span>{' '}
        </h1>
      </Link>
      <Links />
    </nav>
  );
}
