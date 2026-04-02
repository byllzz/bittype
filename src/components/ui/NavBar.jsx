import React from 'react';
import Logo from './Logo';
import Links from './NavLinks';

export default function NavBar() {
  return (
    <nav className="flex w-full max-w-full h-10 justify-between flex-row flex-nowrap items-center px-2">
      <div className="flex items-center gap-2 relative">
        <Logo />
        <h1 className="text-1xl font-bold absolute top-0 italic -right-10">
          Bit<span className="text-blue-900">Type</span>{' '}
        </h1>
      </div>
      <Links />
    </nav>
  );
}
