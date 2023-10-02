import Image from '@/node_modules/next/image'
import Link from '@/node_modules/next/link'
import React from 'react'

export const RightSidebar = () => {
  return (
    <>
    <div>
        <h3 className='h3-bold text-dark200_light900'>Hot Network</h3>
        <div className='flex flex-col gap-[30px] pt-7'>
            <Link href='/question' className='flex cursor-pointer justify-between gap-7'>
                <p className='body-medium text-dark500_light700'>
                    Would it be appropriate to point out an error in another paper during a referee report?
                </p>
                <Image
                    src='/assets/icons/chevron-right.svg'
                    alt='Listen more'
                    width={20}
                    height={20}
                    className='invert-colors'
                />
            </Link>
            <Link href='/question' className='flex cursor-pointer justify-between gap-7'>
                <p className='body-medium text-dark500_light700'>
                    How can an airconditioning machine exist?
                </p>
                <Image
                    src='/assets/icons/chevron-right.svg'
                    alt='Listen more'
                    width={20}
                    height={20}
                    className='invert-colors'
                />
            </Link>
            <Link href='/question' className='flex cursor-pointer justify-between gap-7'>
                <p className='body-medium text-dark500_light700'>
                    Interrogated every time crossing UK Border as citizen
                </p>
                <Image
                    src='/assets/icons/chevron-right.svg'
                    alt='Listen more'
                    width={20}
                    height={20}
                    className='invert-colors'
                />
            </Link>
            <Link href='/question' className='flex cursor-pointer justify-between gap-7'>
                <p className='body-medium text-dark500_light700'>
                    Low digit addition generator
                </p>
                <Image
                    src='/assets/icons/chevron-right.svg'
                    alt='Listen more'
                    width={20}
                    height={20}
                    className='invert-colors'
                />
            </Link>
            <Link href='/question' className='flex cursor-pointer justify-between gap-7'>
                <p className='body-medium text-dark500_light700'>
                    What is an example of 3 numbers that do not make up a vector?
                </p>
                <Image
                    src='/assets/icons/chevron-right.svg'
                    alt='Listen more'
                    width={20}
                    height={20}
                    className='invert-colors'
                />
            </Link>
        </div>
    </div>

    <div className='mt-16'>
        <h3 className='h3-bold text-dark200_light900'>Popular Tags</h3>
        <div className='mt-7 flex flex-col gap-4'>
            <Link href='/tag/id' className='flex justify-between gap-2'>
                <div className='subtle-medium background-light800_dark300 text-light400_light500 inline-flex items-center rounded-md border border-none border-transparent bg-slate-900 px-4 py-2 text-xs font-semibold uppercase shadow transition-colors hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 dark:focus:ring-slate-300'>
                    Javascript
                </div>
                <div className='body-medium text-dark500_light700'>20152+</div>
            </Link>
            <Link href='/tag/id' className='flex justify-between gap-2'>
                <div className='subtle-medium background-light800_dark300 text-light400_light500 inline-flex items-center rounded-md border border-none border-transparent bg-slate-900 px-4 py-2 text-xs font-semibold uppercase shadow transition-colors hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 dark:focus:ring-slate-300'>
                    Next.js
                </div>
                <div className='body-medium text-dark500_light700'>18493+</div>
            </Link>
            <Link href='/tag/id' className='flex justify-between gap-2'>
                <div className='subtle-medium background-light800_dark300 text-light400_light500 inline-flex items-center rounded-md border border-none border-transparent bg-slate-900 px-4 py-2 text-xs font-semibold uppercase shadow transition-colors hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 dark:focus:ring-slate-300'>
                    React.js
                </div>
                <div className='body-medium text-dark500_light700'>15121+</div>
            </Link>
            <Link href='/tag/id' className='flex justify-between gap-2'>
                <div className='subtle-medium background-light800_dark300 text-light400_light500 inline-flex items-center rounded-md border border-none border-transparent bg-slate-900 px-4 py-2 text-xs font-semibold uppercase shadow transition-colors hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 dark:focus:ring-slate-300'>
                    Node.js
                </div>
                <div className='body-medium text-dark500_light700'>20152+</div>
            </Link>
            <Link href='/tag/id' className='flex justify-between gap-2'>
                <div className='subtle-medium background-light800_dark300 text-light400_light500 inline-flex items-center rounded-md border border-none border-transparent bg-slate-900 px-4 py-2 text-xs font-semibold uppercase shadow transition-colors hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 dark:focus:ring-slate-300'>
                    Python
                </div>
                <div className='body-medium text-dark500_light700'>14431+</div>
            </Link>
            <Link href='/tag/id' className='flex justify-between gap-2'>
                <div className='subtle-medium background-light800_dark300 text-light400_light500 inline-flex items-center rounded-md border border-none border-transparent bg-slate-900 px-4 py-2 text-xs font-semibold uppercase shadow transition-colors hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 dark:focus:ring-slate-300'>
                    Microsoft Azure
                </div>
                <div className='body-medium text-dark500_light700'>9429+</div>
            </Link>
            <Link href='/tag/id' className='flex justify-between gap-2'>
                <div className='subtle-medium background-light800_dark300 text-light400_light500 inline-flex items-center rounded-md border border-none border-transparent bg-slate-900 px-4 py-2 text-xs font-semibold uppercase shadow transition-colors hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 dark:focus:ring-slate-300'>
                    PostgreSql
                </div>
                <div className='body-medium text-dark500_light700'>9429+</div>
            </Link>
            <Link href='/tag/id' className='flex justify-between gap-2'>
                <div className='subtle-medium background-light800_dark300 text-light400_light500 inline-flex items-center rounded-md border border-none border-transparent bg-slate-900 px-4 py-2 text-xs font-semibold uppercase shadow transition-colors hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 dark:focus:ring-slate-300'>
                    Machine Learning
                </div>
                <div className='small-medium text-dark500_light700'>9429+</div>
            </Link>
        </div>
    </div>
    </>

  )
}
