import LeftSidebar from '@/components/shared/sidebar/LeftSidebar';
import Navbar from '@/components/shared/navbar/Navbar';
import React from 'react';
import { RightSidebar } from '@/components/shared/sidebar/RightSidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <section className='custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-fit flex-col justify-between  overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]'
        >
          <LeftSidebar />
        </section>
        
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14 ">
          <div className="mx-auto w-full max-w-5xl">
            {children}
            </div>
        </section>

        <section className='custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden'>
          <RightSidebar />
        </section>
      </div>

      Toaster
    </main>
  );
};

export default Layout;
