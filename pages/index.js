import Image from 'next/image'
import { Inter } from 'next/font/google'
import Banner from '@/Components/HomePage/Banner/Banner'
import About from '@/Components/HomePage/About/About'
import Skill from '@/Components/HomePage/Skill/Skill'
import SmallBanner from '@/Components/HomePage/SmallBanner/SmallBanner'
import Cards from '@/Components/HomePage/CardsProject/Cards'
import EmailContactForm from '@/Components/HomePage/EmailContactForm/EmailContactForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main>
    <Banner></Banner>
    <About></About>
    <Skill></Skill>
    <SmallBanner></SmallBanner>
    <Cards></Cards>
    <EmailContactForm></EmailContactForm>
   </main>
  )
}
