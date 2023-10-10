import Link from "@/node_modules/next/link";
import { Badge } from "../ui/badge";

interface Props {
    tag: {
        _id: string;
        name: string;
        questions: object[];
    }
}

export const TagCard = ({ tag }: Props) => {
  return (
    <Link 
    href={`/profile/${tag._id}`} 
    className="shadow-light100_darknone w-full max-sm:min-w-full sm:w-[260px]"
>
    <div className="background-light900_dark200 light-border flex w-full flex-col rounded-2xl border p-8">
        <div className="mt-4">
            <div className='background-light800_dark400 w-fit rounded-sm px-5 py-1.5'>
               <p className="paragraph-semibold text-dark300_light900">{tag.name}</p> 
            </div>
            {/* <p className="small-regular text-dark500_light700 mt-4">
            JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS
            </p> */}
        </div>

        <p className="small-medium text-dark400_light500 mt-3.5">
            <span className="body-semibold primary-text-gradient mr-2.5">{tag.questions.length}+</span>
            Questions
        </p>
    </div>
</Link>
  )
}
