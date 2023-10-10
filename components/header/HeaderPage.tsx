import Link from '@/node_modules/next/link'
import Filter from '../shared/filters/Filter'
import FiltersButton from '../shared/filters/FiltersButton'
import LocalSearchbar from '../shared/search/LocalSearchbar'
import { Button } from '../ui/button'

interface HeaderProps {
    title: string;
    urlLink?: string;
    button?: boolean;
    buttonName?: string;
    placeholderSearch: string;
    placeholderFilter: string;
    iconPositionSearch: string;
    otherClassesSearch?: string;
    otherClassesFilter?: string;
    containerClassesFilter?: string;
    routeSearch: string;
    filterComponent: string;
    filters: {
      name: string,
      value: string
    }[],
}

const HeaderPage = ({
    title,
    button,
    buttonName,
    placeholderSearch,
    placeholderFilter,
    iconPositionSearch,
    otherClassesSearch,
    otherClassesFilter,
    containerClassesFilter,
    routeSearch,
    filterComponent,
    filters,
} : HeaderProps) => {

  return (
    
    <>
    <div className='flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center'>
        <h1 className='h1-bold text-dark100_light900'>{title}</h1>
        {button && (
            <Link 
            href="/ask-question"
            className='flex justify-end max-sm:w-full'
            >
            <Button className='primary-gradient min-h-[46px] px-4 py-3 !text-light-900'>
                {buttonName}
            </Button>
            </Link> 
        )}

      </div>

      <div className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'>
        <LocalSearchbar 
          route={routeSearch}
          iconPosition={iconPositionSearch}
          imgSrc="/assets/icons/search.svg"
          placeholder={placeholderSearch}
          otherClasses={otherClassesSearch}
        />
        
        <Filter
          filters={filters}
          otherClasses={otherClassesFilter}
          containerClasses={containerClassesFilter}
          placeholder={placeholderFilter}
        />
    </div>

      <FiltersButton 
        filters={filters}
      />
    </>
  )
}

export default HeaderPage
