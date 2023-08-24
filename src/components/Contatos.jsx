import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

function Contatos() {
    const ref = useRef();
    const isVisible = useIntersectionObserver(ref, { thresholdUp: 0.5, thresholdDown: 0.4 });

    return (
        <>
            <div
                ref={ref}
                id="contatos"
            >
                <h1
                    className="text-center text-xl font-bold mb-5 lg:text-3xl"
                    style={{
                        transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
                        opacity: isVisible ? 1 : 0,
                        transition: 'transform 1s, opacity 1s',
                    }}
                >
                    Contatos
                </h1>
                <div
                    className="flex justify-center"
                    style={{
                        transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
                        opacity: isVisible ? 1 : 0,
                        transition: 'transform 1s, opacity 1s',
                    }}
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
            </div>
            <div className='h-11'></div>
        </>
    )
}

export default Contatos;