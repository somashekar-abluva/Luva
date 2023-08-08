
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { SearchBar } from '@/components/SearchBar';
import Avatar from '@/components/Avatar';
import { NavLinks } from '@/constant';

export const Header = () => {

  return (
    <div className='headerlink'>

      {/* company logo */}
      <Link href='/'>
        <Image
          className='logoCss w-12 h-12'
          src='/luva.png'
          width={50}
          height={40}
          alt='logo'
        />
      </Link>

      {/* nav links and search bar */}
      <div className='grow'>
        <div className='navLink'>
          {NavLinks.map(nav => (
            <Link href={nav.key}>{nav.name}</Link>
          ))}
          <SearchBar />
        </div>
      </div>

      {/* profiles */}
      <div className='avatarSection'>
        <Avatar />
      </div>
      <div className='avatarSection'>
        <Avatar />
      </div>

    </div>
  )
}
