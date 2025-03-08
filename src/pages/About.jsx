import React from 'react'
import Title from '../components/Title'
import SubscribeBox from '../components/SubscribeBox'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16 '>
        <img className='w-full md:max-w-[450px] max-h-[500px] ' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p> ONLINE SHOPPING MADE EASY AT VASTRA
          If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Vastra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Vastra from the comfort of your home and get your favourites delivered right to your doorstep.</p>
          <p> The world wide web is evolving at a relentless pace, and with an accelerated growth each passing year, there is bound to be an overwhelming surge of online content. It was for this very reason that personalisation of search feeds was proposed as a solution to combat the overload of irrelevant information.
          Several social media platforms such as Facebook and Instagram along with various online shopping websites have chosen to help filter content,increasing user engagement, retention and customer loyalty.
          Vastra is one such online shopping website that joins the list of platforms that help curate a personalised fashion feed. Named the Vastra Studio, this personalised search feed brings you the latest men and women's fashion trends, celebrity styles, branded content and daily updates               from your favourite fashion labels.
          If you are wondering how impactful Vastra Studio can be, we are listing out five perks of having a rich, meaningful, and personalised fashion feed in your life. lorem10</p>

            <div className='text-center'>
                <b className='text-gray-800'>Our Mission</b>
                <p>Our mission is to make everyone wear our clothes, "By any means necessary" 😊</p>
            </div>
        </div>
      </div>
        <div className='text-xl py-4 text-center'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-lg hover:bg-gray-600 hover:text-white transition-all duration-500 group'>
            <b>Quality Insurance</b>
            <p className='text-gray-600 group-hover:text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam vero, alias odit provident eius amet illo numquam non porro quaerat.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-lg hover:bg-gray-600 hover:text-white transition-all duration-500 group'>
            <b>Convenience</b>
            <p className='text-gray-600 group-hover:text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam vero, alias odit provident eius amet illo numquam non porro quaerat.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-lg hover:bg-gray-600 hover:text-white transition-all duration-500 group'>
            <b>Exceptional Customer Service</b>
            <p className='text-gray-600 group-hover:text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam vero, alias odit provident eius amet illo numquam non porro quaerat.</p>
          </div>
        </div>
        <SubscribeBox/>
    </div>
  )
}

export default About