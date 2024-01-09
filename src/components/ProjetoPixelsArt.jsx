import './ProjetoStarWars.css';
import { useState } from "react";
import image from '../assets/pixelsArt.png'
import DetalhesPixelsArt from '../utils/DetalhesPixelsArt';
import { BiLogoJavascript } from "react-icons/bi";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from "react-icons/di";

function ProjetoPixelsArt() {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <>
            <div
                className="relative border-b-4 border-blue-800 lg:w-[40%] w-[100%] justify-center align-middle rounded-md h-64 mb-10 cursor-pointer transform hover:scale-110 transition duration-300"
                onClick={() => setShowDetails(true)}
            >
                <div
                    style={{
                        backgroundImage: `url(${image})`
                    }}
                    className="absolute z-0 inset-0 bg-center w-full bg-no-repeat bg-cover rounded-md" />
                <div className="relative z-20 flex flex-col justify-center items-center text-center h-full">
                    <span className="text-xl text-center align-middle justify-center font-bold text-blue-800 lg:text-2xl">
                        Projeto Pixels Art
                    </span>
                    <span className='text-2xl text-blue-800 flex flex-row justify-center align-middle mt-2 text-center lg:text-4xl font-bold'>
                        <AiFillHtml5 className='mr-2' />
                        <DiCss3 className='mr-2' />
                        <BiLogoJavascript className='mr-2' />
                        <FaGitAlt className='mr-2' />
                        <FaGithub />
                    </span>
                </div>
            </div>
            <div>
                <DetalhesPixelsArt
                    show={showDetails}
                    onClose={() => setShowDetails(false)}
                />
            </div>
        </>
    );
}

export default ProjetoPixelsArt;