import { getQuestionById } from '@/lib/actions/question.action'
import Link from '@/node_modules/next/link'
import Image from "@/node_modules/next/image";
import Metric from '@/components/shared/Metric';
import { formatNumberWithExtension, getTimestamp } from '@/lib/utils';
import ParseHTML from '@/components/shared/ParseHTML';
import { RenderTag } from '@/components/shared/RenderTag';

interface QuestionDetailsProps {
    params: {
        id: string
    },
    searchParams: any
}
const QuestionDetails = async ({ params, searchParams }: QuestionDetailsProps) => {

  const result = await getQuestionById({questionId: params.id})
 
  return (
    <>
      <div className='flex-start w-full flex-col'>
        <div className='flex w-full flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2'>
          <div>
            <Link
              href={`/profile/${result.author.clerkId}`}
              className='flex items-center justify-start gap-2'
            >
              <Image 
                  src={result.author.picture}
                  alt="Profile"
                  className='rounded-full'
                  width={22}
                  height={22}
              />
              <p className='paragraph-semibold text-dark300_light700'>
                {result.author.name}
              </p>
            </Link>
          </div>  
          <div className='flex justify-end'>
                Voiting
            </div>
        </div>
        <h2 className='h2-semibold text-dark200_light900 mt-3.5 w-full text-left'>
          {result.title}
        </h2>
      </div>

      <div className='mb-10 mt-5 flex flex-wrap gap-4'>
        <Metric 
            imgUrl="/assets/icons/clock.svg"
            alt="Click icon"
            value={` asked ${getTimestamp(result.createdAt)}`}
            title=" Asked"
            textStyles="small-medium text-dark400_light800"
        />
        <Metric 
            imgUrl="/assets/icons/message.svg"
            alt="Answers"
            value={formatNumberWithExtension(result.answers.length)}
            title=" Answers"
            textStyles="small-medium text-dark400_light800"
        />
        <Metric 
            imgUrl="/assets/icons/eye.svg"
            alt="Views"
            value={formatNumberWithExtension(result.views.length)}
            title=" Views"
            textStyles="small-medium text-dark400_light800"
        />
      </div>

      <ParseHTML data={result.content}/>

      <div className='mt-10 flex flex-wrap gap-2'>
        {result.tags.map((tag) => (
          <RenderTag 
            key={tag._id}
            _id={tag._id}
            name={tag.name}
            showCount={false}
          />
        ))}
      </div>
    </>
  )
}

export default QuestionDetails

