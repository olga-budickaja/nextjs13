import React from 'react'
import Image from '@/node_modules/next/image'
import Link from '@/node_modules/next/link'


type Props = {
    isActive?: boolean;
    route: string;
    imgUrl: string;
    label: string;
    sidebarLeft?: boolean;
}

export const NavLink = ({ isActive, route, imgUrl, label, sidebarLeft  }: Props) => {
  return (
    <Link 
        href={route}
        className={`${
            isActive 
            ? 'primary-gradient rounded-lg text-light-900' 
            : 'text-dark300_light900'
        } flex items-center justify-start gap-4 bg-transparent p-4`}
    >
        <Image
            src={imgUrl}
            alt={label}
            width={20}
            height={20}
            className={`${isActive ? "" : "invert-colors"}`}
        />
        <p className={`
            ${isActive ? 'base-bold' : 'base-medium'} 
            ${sidebarLeft ? 'max-lg:hidden' : ''}
        `}>
            {label}
        </p>
    </Link>
  )
}
