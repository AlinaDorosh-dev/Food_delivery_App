import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  return (
    <div className='mt-24 md:mt-32 '>
      <div className='bg-white shadow-md w-full max-w-3xl mx-auto mb-10 p-6 text-justify text-slate-600'>
        <h4 className='text-center mb-4 text-2xl font-bold text-orange-500'>
          Contact
        </h4>

        <h6 className='mt-1 text-center mb-4 block font-medium text-lg '>
          Project author: Alina Dorosh
        </h6>
        <p className='text-base text-center font-semibold mb-4'>
          Feel free to contact me via email or social media:
        </p>
        <ul className=' mt-2 text-base leading-10 mx-auto sm:w-[70%]'>
          <li className='mb-4'>
            <SiGmail size={30} className='inline-block text-orange-600 mr-3' />
            <Link
              href='mailto: alina.dorosh@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              alina.dorosh@gmail.com
            </Link>
          </li>
          <li className='mb-4'>
            <FaLinkedin
              size={30}
              className='inline-block text-orange-600 mr-3'
            />
            <Link
              href='https://www.linkedin.com/in/alina-dorosh'
              target='_blank'
              rel='noreferrer'
            >
              linkedin.com/in/alina-dorosh
            </Link>
          </li>
          <li className='mb-6'>
            <FaGithub size={30} className='inline-block text-orange-600 mr-3' />
            <Link
              href='https://github.com/AlinaDorosh-dev'
              target='_blank'
              rel='noreferrer'
            >
              github.com/AlinaDorosh-dev
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
