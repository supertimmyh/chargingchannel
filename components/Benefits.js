import React from 'react'
// import Fade from 'react-reveal';

function Benefits() {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="leading-tight text-black font-bold text-xl md:text-2xl lg:text-4xl">Benefits</h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Charging Channel is a better and low cost solution for charging at a sidewalk</p>
            </div>

            <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
                {/* <Fade left> */}
                    <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md">
                        <div className="p-8 xl:px-12">
                            {/* <div className="inline-block px-4 py-2 bg-gray-100 rounded-full">
                                <h3 className="text-sm font-semibold text-gray-900">Standard</h3>
                            </div> */}
                            <p className="text-5xl font-bold text-black mt-7">Local Authorities</p>
                            {/* <p className="mt-3 text-base text-gray-600">One-time payment</p> */}

                            <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9" style={{ minHeight: '485px' }}>
                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="text-base font-medium text-gray-900"> Privately funded - zero cost to Local Authorities </span>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="text-base font-medium text-gray-900"> Easy licensing model </span>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="text-base font-medium text-gray-900"> Contribute to meeting climate and net zero targets </span>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="text-base font-medium text-gray-900"> No more dangerous trailing cables, bumpy protector cover or DIY overhead attempts </span>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="pb-0.5 text-base font-medium text-gray-900"> Reduce the conversion of front gardens into driveways leading to the loss of flood protection, wildlife habitat and public parking space </span>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="pb-0.5 text-base font-medium text-gray-900"> No need to provide new expensive grid connections </span>
                                </li>
                            </ul>

                            <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-700 hover:opacity-80 focus:opacity-80" role="button"> View Information Package </a>
                            <p className="mt-4 text-sm text-gray-500">7 Year Warranty</p>
                        </div>
                    </div>
                {/* </Fade> */}
                {/* <Fade bottom> */}
                    <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md">
                        <div className="p-8 xl:px-12">
                            {/* <div className="inline-block px-4 py-2 bg-blue-100 rounded-full">
                                <h3 className="text-sm font-semibold text-blue-600">Premium</h3>
                            </div> */}
                            <p className="text-5xl font-bold text-black mt-7">Local residents</p>
                            {/* <p className="mt-3 text-base text-gray-600">One-time payment</p> */}

                            <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9" style={{ minHeight: '485px' }}>
                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="text-base font-medium text-gray-900"> Extends convenience of home charging currently only reserved for residents who have off-street parking </span>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="text-base font-medium text-gray-900"> Provides access to ultra cheap domestic electricity tariff </span>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="text-base font-medium text-gray-900"> Avoids third-party liability risks using cable protectors that still leave you exposed (even if the method of charging is allowed by your Council) </span>
                                </li>
                            </ul>

                            <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-700 hover:opacity-80 focus:opacity-80" role="button"> View Information Package </a>
                            <p className="mt-4 text-sm text-gray-500">7 Year Warranty</p>
                        </div>
                    </div>
                {/* </Fade>
                <Fade right> */}
                    <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md">
                        <div className="p-8 xl:px-12">
                            {/* <div className="inline-block px-4 py-2 bg-gray-100 rounded-full">
                                <h3 className="text-sm font-semibold text-gray-900">Exclusive</h3>
                            </div> */}
                            <p className="text-5xl font-bold text-black mt-7">Community</p>
                            {/* <p className="mt-3 text-base text-gray-600">One-time payment</p> */}

                            <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9" style={{ minHeight: '532px' }}>
                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="text-base font-medium text-gray-900"> Reduces the loss of public parking space due to dropped kerb conversions </span>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="text-base font-medium text-gray-900"> Expands resident driven EV charging network through Peer-to-Peer sharing of chargers </span>
                                </li>

                                <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="text-base font-medium text-gray-900"> Promotes more equitable neighbourhoods by unlocking cheap domestic charging for on-street households in denser areas affected the most by air quality issues </span>
                                </li>

                                {/* <li className="inline-flex items-center space-x-2">
                                    <svg className="flex-shrink-0 w-5 h-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                    </svg>
                                    <span className="pb-0.5 text-base font-medium text-gray-900 border-b border-black border-dashed"> Premium Support </span>
                                </li> */}
                            </ul>

                            <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 mt-10 text-base font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-700 hover:opacity-80 focus:opacity-80" role="button"> View Information Packages </a>
                            <p className="mt-4 text-sm text-gray-500">7 Year Warranty</p>
                        </div>
                    </div>
                {/* </Fade> */}
            </div>
        </div>
    </section>


  )
}

export default Benefits
