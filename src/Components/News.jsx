import React from 'react'
import { Link } from 'react-router-dom'
import { useGetNewsQuery } from '../services/CovidNews'
function News() {
  const { data, isFetching } = useGetNewsQuery()
  console.log(data)
  if (isFetching) {
    return <div>Loading...</div>
  }
  
  if (!data) {
    return <div>No data found</div>
  }
  return (
    <div>
          <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          <div className="px-4 py-6 sm:px-0 flex justify-start flex-wrap ">
            
             {data.articles.map((covidStats)=>(
                            <div className="flex justify-center p-2">
                            <div className="block max-w-sm bg-yellow-600 rounded-xl text-center shadow-lg dark:bg-neutral-100">

                              <div
                                className="border-b-2 border-neutral-100 py-3 px-6 dark:border-neutral-100 text-white">
                                {covidStats.topic}
                              </div>
                              <img
                                className="object-cover w-full h-48"
                                src='https://images.unsplash.com/flagged/photo-1584036561584-b03c19da874c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvdmlkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                                alt="image"
                            />
                              <div className="p-6">
                                <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-100 dark:text-neutral-50'>{covidStats.title}</h5>
                                <p className='mb-4 text-base text-neutral-100 dark:text-neutral-200 cursor-pointer'>
                                {covidStats.link}
                                </p>
                               
                                <button
                                type='button'
                                className='inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]'
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                >Read More</button>
                               
                                

                              </div>
                              <div className="border-t-2 border-neutral-100 py-3 px-6 dark:border-neutral-100 text-white">
                                {covidStats.published_date}
                              </div>
                              </div>
                            </div>
             ))}
               


           
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </div>
  )
}

export default News