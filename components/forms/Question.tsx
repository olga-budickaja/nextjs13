"use client"

import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "@/node_modules/zod/lib/index"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import { useForm } from 'react-hook-form';
import { QuestionsSchema } from "@/lib/validation"
import { Badge } from '../ui/badge';
import Image from '@/node_modules/next/image';
import { createQuestion } from '@/lib/actions/question.action';
import { usePathname, useRouter } from '@/node_modules/next/navigation';

const type: any = 'create';

interface Props {
    mongoUserId: string;
}

const Question = ({ mongoUserId }: Props) => {
    const editorRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const router = useRouter();
    const pathName = usePathname();

    const form = useForm<z.infer<typeof QuestionsSchema>>({
        resolver: zodResolver(QuestionsSchema),
        defaultValues: {
            title: "",
            explanation: "",
            tags: [],
        },
        })

        // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof QuestionsSchema>) {
        setIsSubmitting(true);
        
        try {
            // make an assync call to your API -> create a question
            // contain all form data

            await createQuestion({
                title: values.title,
                content: values.explanation,
                tags: values.tags,
                author: JSON.parse(mongoUserId),
            });

            // navigate to home page
            router.push('/');
        } catch (error) {
            console.log(error)
        } finally {
            setIsSubmitting(false);
        }
    }

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, field: any): void => {
        if (e.key === 'Enter' && field.name === 'tags')  {
            e.preventDefault();

            const tagInput = e.target as HTMLInputElement;
            const tagValue = tagInput.value.trim();

            if (tagValue !== '') {
                if (tagValue.length > 15) {
                    return form.setError('tags', {
                        type: 'required',
                        message: 'Tag must be less than 15 characters!'
                    })
                }

                if (!field.value.includes(tagValue as never)) {
                    form.setValue('tags', [...field.value, tagValue]);
                    tagInput.value = '';
                    form.clearErrors('tags');
                } else {
                    form.trigger();
                }
            }
        } 
    }


    const handleTagDelete = (tag: string, field: any) => {
        const newTags = field.value.filter((t: string) => t !== tag);

        form.setValue('tags', newTags);
    }

  return (
    <Form {...form}>
    <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="flex w-full flex-col gap-10"
    >
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem className="flex w-full flex-col">
            <FormLabel className="paragraph-semibold text-dark400_light800">
                Question Title
                <span className="ml-1 text-primary-500">*</span>
            </FormLabel>
            <FormControl className="mt-3.5">
              <Input 
                className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                {...field} 
              />
            </FormControl>
            <FormDescription className="body-regular mt-2.5 text-light-500">
              Be specific and imagine you&apos;re asking a question to another person.
            </FormDescription>
            <FormMessage className="text-red-500"/>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="explanation"
        render={({ field }) => (
          <FormItem className="flex w-full flex-col">
            <FormLabel className="paragraph-semibold text-dark400_light800">
                Detailed explanation of your problem?
                <span className="ml-1 text-primary-500">*</span>
            </FormLabel>
            <FormControl>
                <Editor
                apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                onInit={(evt, editor) => {
                    // @ts-ignore
                    editorRef.current = editor
                }}
                onBlur={field.onBlur}
                onEditorChange={(content) => field.onChange(content)}
                initialValue=""
                init={{
                height: 350,
                menubar: false,
                plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor',
                    'searchreplace', 'visualblocks', 'codesample', 'fullscreen',
                    'insertdatetime', 'media', 'table'
                ],
                toolbar: 
                'undo redo | ' +
                'codesample | bold italic forecolor | alignleft aligncenter |' +
                'alignright alignjustify | bullist numlist',
                content_style: 'body { font-family:Inter; font-size:16px }'
                }}
            />
            </FormControl>
            <FormDescription className="body-regular mt-2.5 text-light-500">
                Introduce the problem and expand on what you put in the title. Minimum 20 characters.
            </FormDescription>
            <FormMessage className="text-red-500"/>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="tags"
        render={({ field }) => (
          <FormItem className="flex w-full flex-col">
            <FormLabel className="paragraph-semibold text-dark400_light800">
                Tags
                <span className="text-primary-500">*</span>
            </FormLabel>
            <FormControl className="mt-3.5">
                <>
                    <Input 
                        className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                        placeholder="Add tags..."
                        onKeyDown={(e) => handleInputKeyDown(e, field)}
                    />

                    {field.value.length > 0 && (
                        <div className='flex-start mt-3.5 gap-2.5'>
                            {field.value.map((tag) => (
                                <Badge 
                                    key={tag}
                                    className='subtle-medium background-light800_dark300 text-light400_light500 flex items-center justify-center gap-2 rounded-md border-none px-4 py-2 capitalize'
                                    onClick={() => handleTagDelete(tag, field)}
                                >
                                    {tag}
                                    <Image
                                        src="/assets/icons/close.svg"
                                        alt="Close"
                                        width={12}
                                        height={12}
                                        className="cursor-pointer object-contain invert-0 dark:invert"
                                    />
                                </Badge>
                            ))}
                        </div>
                    )}  
                </>

            </FormControl>
            <FormDescription className="body-regular mt-2.5 text-light-500">
                Add up to 5 tags to describe what your question is about. Start typing to see suggestions.
            </FormDescription>
            <FormMessage className="text-red-500"/>
          </FormItem>
        )}
      />
      <Button 
        type="submit"
        className='primary-gradient w-fit !text-light-900'
        disabled={isSubmitting}
      >
        {isSubmitting 
            ? (
                <>
                    {type === 'edit' ? 'Editing...' : 'Posting...'}
                </>
            ) : (
                <>
                    {type === 'edit' ? 'Editing Question' : 'Ask a Question'}
                </>
            )
        }
    </Button>
    </form>
  </Form>
  )
}

export default Question
