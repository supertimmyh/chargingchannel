import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div>
        <section className="py-16 bg-gray-50 text-center lg:text-left sm:py-16 lg:py-24">
            <div className="px-4 mt-16 lg:mt-0 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <h1 className="text-2xl font-bold text-black sm:text-4xl lg:text-5xl">
                             Channel
                        </h1>

                        <p className="mt-8 text-base text-gray-600">
                            A better and safe charging soultion for EV owners without private off-street parking. Charging an electric vehicle at home is the most convenient and cost-effective method, but it has been limited to those with a driveway, leading others to rely on costlier public chargers and contend with cable-related trip hazards, a challenge we've addressed with our innovative cross pavement charging solution for those without driveway access.
                        </p>

                        <div className="mt-10 ">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email address..."
                                className="block w-full px-4 py-4 bg-white text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 rounded-full caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 drop-shadow-xl"
                                required
                            />
                            <br/>
                            <a href="#" title="" class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-700 hover:bg-blue-800 focus:bg-blue-800 rounded-full" role="button"> Sign Up Now </a>
                        </div>
                    </div>

                    <div className='hidden lg:block'>
                        <Image width={400} height={200} className="w-full" src="/images/hero-img.jpeg" alt="img" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero
