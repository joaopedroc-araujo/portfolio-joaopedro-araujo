import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";

function Contatos() {
    return (
        <div className='mb-20'>
            <h1
                className="text-center text-xl font-bold mb-5"
            >
                Contatos
            </h1>
            <div className="flex justify-center">
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
        </div >
    )
}

export default Contatos;