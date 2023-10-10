import HeaderPage from '@/components/header/HeaderPage'
import React from 'react'

const Community = () => {
  return (
    <>
        <HeaderPage 
            title='All Users'
            urlLink='/community'
            routeSearch='/community'
            iconPositionSearch='left'
            placeholderSearch='Search by Username...'
            otherClassesSearch='flex-1'
            filterComponent='user'
            otherClassesFilter='min-h-[56px] sm:min-w-[170px]'
            containerClassesFilter='hidden max-md:flex'
            placeholderFilter='Select a Filters'
        />
    </>
  )
}

export default Community
