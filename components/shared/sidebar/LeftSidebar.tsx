"use client"

import { sidebarLinks } from '@/constants/index';
import { usePathname } from '@/node_modules/next/navigation';
import { NavLink } from '../navbar/NavLink';
import { Button } from '@/components/ui/button';
import Link from '@/node_modules/next/link';
import { SignedOut } from "@clerk/nextjs";
import Image from '@/node_modules/next/image';


const LeftSidebar = () => {
  const pathname = usePathname();

  return (
      <section className='flex h-full flex-col gap-6'>
          {sidebarLinks.map((item) => {
              const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;

              return (
                  <div key={item.route}>
                      <NavLink
                          isActive={isActive}
                          route={item.route}
                          imgUrl={item.imgURL}
                          label={item.label}
                          sidebarLeft={true}
                      />
                  </div> 
              )

              
          })}

          <SignedOut>
            <Link href="/sign-in" className='pt-10'>
              <Button className='small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none max-lg:hidden'>
                  <span className='primary-text-gradient'>Log In</span>
              </Button>

              <div className='btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 lg:hidden'>
                <Image
                  src="/assets/icons/account.svg"
                  alt="Log In"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </div>

            </Link>

            <Link href="/sign-up">
              <Button className='small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none max-lg:hidden'>
                    Sign Up
              </Button>

              <div className='btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none lg:hidden'>
                <Image
                  src="/assets/icons/sign-up.svg"
                  alt="Log In"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </div>
            </Link>
          </SignedOut>



      </section>
  )
}

export default LeftSidebar
