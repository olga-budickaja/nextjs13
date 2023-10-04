import React from 'react'
import NoResult from '../shared/NoResult'
import QuestionCard from './QuestionCard'

const questions = [
    {
      _id: "1",
      title: "How to write TypeScript interfaces?",
      tags: [
        { _id: "tag1", name: "TypeScript" },
        { _id: "tag2", name: "Programming" },
      ],
      author: {
        _id: "author1",
        name: "John Doe",
        picture: "https://github.com/shadcn.png",
      },
      createdAt: new Date("2023-09-01T12:00:00.000Z"),
      upvotes: 10,
      answers: [
        {
          answerId: "answer1",
          text: "You can write TypeScript interfaces like this.",
          author: {
            _id: "author2",
            name: "Jane Smith",
            picture: "https://github.com/shadcn.png",
          },
        },
      ],
      views: 100,
    },
    {
      _id: "2",
      title: "How to use interfaces in TypeScript?",
      tags: [
        { _id: "tag1", name: "TypeScript" },
        { _id: "tag3", name: "Web Development" },
      ],
      author: {
        _id: "author3",
        name: "Alice Johnson",
        picture: "https://github.com/shadcn.png",
      },
      createdAt: new Date("2023-09-01T13:00:00.000Z"),
      upvotes: 597078,
      answers: [
        {
          answerId: "answer2",
          text: "Interfaces are essential for defining object shapes.",
          author: {
            _id: "author4",
            name: "Bob Wilson",
            picture: "https://github.com/shadcn.png",
          },
        },
        {
          answerId: "answer3",
          text: "You can also extend interfaces in TypeScript.",
          author: {
            _id: "author5",
            name: "Eva Martinez",
            picture: "https://github.com/shadcn.png",
          },
        },
      ],
      views: 50,
    },
  ];
  

const QuestionCards = () => {
  return (
    <div className='mt-10 flex w-full flex-col gap-6'>
        {questions.length > 0 
            ? questions.map((item) => (
                <QuestionCard 
                    key={item._id}
                    _id={item._id}
                    title={item.title}
                    tags={item.tags}
                    author={item.author}
                    createdAt={item.createdAt}
                    upvotes={item.upvotes}
                    answers={item.answers}
                    views={item.views}
                />
            )) : (
            <NoResult 
                title='There’s no question to show'
                description='Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡'
                link="/ask-question"
                linkTitle="Ask a Question"
            />
        )}
    </div>
  )
}

export default QuestionCards
