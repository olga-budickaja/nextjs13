import { TagCard } from '@/components/cards/TagCard'
import HeaderPage from '@/components/header/HeaderPage'
import NoResult from '@/components/shared/NoResult'
import { TagFilters } from '@/constants/filters'
import { getAllTags } from '@/lib/actions/tag.action'
import Link from '@/node_modules/next/link'
import React from 'react'

const TagsPage = async () => {
  const result = await getAllTags({});

  return (
    <>
        <HeaderPage 
            title='Tags'
            urlLink='/tags'
            routeSearch='/tags'
            iconPositionSearch='left'
            placeholderSearch='Search by tag name...'
            otherClassesSearch='flex-1'
            filters={TagFilters}
            filterComponent='tags'
            otherClassesFilter='min-h-[56px] sm:min-w-[170px]'
            containerClassesFilter='hidden max-md:flex'
            placeholderFilter='Select a Filters'
        />
        <section className='mt-12 flex flex-wrap gap-4'>
          {result.tags.length > 0
            ? (
              result.tags.map((tag) => (
                <TagCard 
                  key={tag._id}
                  tag={tag}
                />
              ))
            ) : (
              <NoResult 
                title="No Tags Found"
                description='It looks like there are no tags found.'
                link='/ask-question'
                linkTitle='Ask a question'
              />
            )
          }
        </section>
    </>
  )
}

export default TagsPage
