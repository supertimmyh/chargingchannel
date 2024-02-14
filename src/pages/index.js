import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Features from '../../components/Features'
import Demo from '../../components/Demo'
import Benefits from '../../components/Benefits'
import Updates from '../../components/Updates'
import Footer from '../../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Charging Channel</title>
        <meta name="description" content="This is the product landing page of Charging Channel, an innovative home charging solution across the sidewalk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <div className="bg-gray-50">
          <Navbar />
          <Hero />
          <Features/>
          <Demo/>
          <Benefits />
          <Updates/>
          <Footer/>
        </div>

      </main>
    </>
  )
}
