import React from 'react'
// import Fade from 'react-reveal';

function Demo() {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20 relative">
                <div className="relative">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/bR5MO9-tDbs?si=1TC1YNdTbmKZvzii" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div className="flex flex-col items-start xl:pl-16 relative">
                    <div className='bg-blue-50 w-[10rem] h-[8rem] left-0 absolute rounded-br-[5rem]' />
                    {/* <Fade right> */}
                        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight text-gray-800 z-10">See how Charging Channel work</h2>
                        {/* <p className="mt-4 text-base leading-relaxed text-gray-600 z-10">Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements.</p> */}

                    {/* </Fade> */}

                </div>
            </div>
        </div>
    </section>
  )
}

export default Demo
