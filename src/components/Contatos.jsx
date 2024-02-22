import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import { useRef } from 'react';
import { motion } from 'framer-motion'

function Contatos() {
    const ref = useRef();

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                ref={ref}
                id="contatos"
            >
                <h1
                    className="text-center text-xl font-bold mb-5 lg:text-3xl"
                >
                    Contatos
                </h1>
                <div
                    className="flex justify-center"
                >
                    <a
                        href='https://github.com/joaopedroc-araujo'
                        target='_blank'
                        rel="noreferrer"
                        className='text-4xl mx-2 text-blue-800 lg:text-6xl cursor-pointer transform hover:scale-110 transition duration-300'
                    >
                        <FaGithub />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/jpcostaaraujo/'
                        target='_blank'
                        rel="noreferrer"
                        className='text-4xl mx-2 lg:text-6xl text-blue-800 cursor-pointer transform hover:scale-125 transition duration-300'
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href='mailto:costaaraujojoaopedro@gmail.com'
                        target='_blank'
                        rel="noreferrer"
                        className='text-4xl mx-2 lg:text-6xl text-blue-800 cursor-pointer transform hover:scale-125 transition duration-300'
                    >
                        <BiLogoGmail />
                    </a>
                    <a
                        href='https://api.whatsapp.com/send?phone=31994472593'
                        target='_blank'
                        rel="noreferrer"
                        className='text-4xl mx-2 lg:text-6xl text-blue-800 cursor-pointer transform hover:scale-125 transition duration-300'
                    >
                        <FaWhatsapp />
                    </a>
                </div>
            </motion.div>
            <div className='h-11'></div>
        </>
    )
}

export default Contatos;