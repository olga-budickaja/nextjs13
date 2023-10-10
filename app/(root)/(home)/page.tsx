import { getQuestions } from '@/lib/actions/question.action'
import QuestionCard from '@/components/cards/QuestionCard'
import NoResult from '@/components/shared/NoResult'
import HeaderPage from '@/components/header/HeaderPage'
import { HomePageFilters } from '@/constants/filters';


export default async function Home() {
  const result = await getQuestions({});

  return (
    <>
      <HeaderPage 
        title='All Questions'
        urlLink='/ask-question'
        button
        buttonName='Ask a Question'
        routeSearch='/'
        iconPositionSearch='left'
        placeholderSearch='Search for questions...'
        otherClassesSearch='flex-1'
        filterComponent='home'
        filters={HomePageFilters}
        otherClassesFilter='min-h-[56px] sm:min-w-[170px]'
        containerClassesFilter='hidden max-md:flex'
        placeholderFilter='Select a Filters'
      />

      <div className='mt-10 flex w-full flex-col gap-6'>
        {result.questions.length > 0 
            ? result.questions.map((item: any) => (
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
    </>
  )
}