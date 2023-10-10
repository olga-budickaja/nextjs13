import UserCard from '@/components/cards/UserCard';
import HeaderPage from '@/components/header/HeaderPage'
import { UserFilters } from '@/constants/filters';
import { getAllUsers } from '@/lib/actions/user.action'
import Link from '@/node_modules/next/link';


const Community = async () => {
  const result = await getAllUsers({});

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
            filters={UserFilters}
            otherClassesFilter='min-h-[56px] sm:min-w-[170px]'
            containerClassesFilter='hidden max-md:flex'
            placeholderFilter='Select a Filters'
        />
        <section className='mt-12 flex flex-wrap gap-4'>
          {result.users.length > 0 
            ? result.users.map((user: any) => (
              <UserCard 
                key={user._id}
                user={user}
              />
            )) : (
              <div className='paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center'>
                <p>No users yet</p> 
                <Link href="/sign-up" className='mt-2 font-bold text-accent-blue'>
                  Join to be first!
                </Link>
              </div>
            )
          }

        </section>
    </>
  )
}

export default Community
