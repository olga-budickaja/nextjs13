import Image from '@/node_modules/next/image'
import Link from '@/node_modules/next/link'
import React from 'react'
import { RenderTag } from '../RenderTag';

export const RightSidebar = () => {
    const hotQuestions = [
        {
            _id: 1,
            title: 'Would it be appropriate to point out an error in another paper during a referee report?'
        },
        {
            _id: 2,
            title: 'How can an airconditioning machine exist?'
        },
        {
            _id: 3,
            title: 'Interrogated every time crossing UK Border as citizen'
        },
        {
            _id: 4,
            title: 'Low digit addition generator'
        },
        {
            _id: 5,
            title: 'What is an example of 3 numbers that do not make up a vector?'
        },
    ];

    const popularTag = [
        {
            _id: '1',
            name: 'Javascript',
            totalQuestions: 3,
        },
        {
            _id: '1',
            name: 'Next.js',
            totalQuestions: 5,
        },
        {
            _id: '1',
            name: 'React.js',
            totalQuestions: 2,
        },
        {
            _id: '1',
            name: 'Node.js',
            totalQuestions: 10,
        },
        {
            _id: '1',
            name: 'Python',
            totalQuestions: 7,
        },
        {
            _id: '1',
            name: 'PostgreSql',
            totalQuestions: 2,
        },
        {
            _id: '1',
            name: 'Machine Learning',
            totalQuestions: 1,
        },
    ]

  return (
    <>
    <div>
        <h3 className='h3-bold text-dark200_light900'>Hot Network</h3>
        <div className='flex flex-col gap-[30px] pt-7'>
            {hotQuestions && hotQuestions.map((question) => (
                <Link 
                    key={question._id}
                    href={`/tag/${question._id}`} 
                    className='flex cursor-pointer justify-between gap-7'
                >
                    <p className='body-medium text-dark500_light700'>
                        {question?.title}
                    </p>
                    <Image
                        src='/assets/icons/chevron-right.svg'
                        alt='Listen more'
                        width={20}
                        height={20}
                        className='invert-colors'
                    />
                </Link> 
            ))}
        </div>
    </div>

    <div className='mt-16'>
        <h3 className='h3-bold text-dark200_light900'>Popular Tags</h3>
        <div className='mt-7 flex flex-col gap-4'>
            {popularTag && popularTag.map((tag) => (
                <RenderTag 
                    key={tag._id}
                    _id={tag._id}
                    name={tag.name}
                    showCount
                    totalQuestions={tag.totalQuestions}
                />
            ))}
        </div>
    </div>
    </>

  )
}
