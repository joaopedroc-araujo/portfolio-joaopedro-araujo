import { BiLogoJavascript, BiLogoReact } from "react-icons/bi";
import { SiJest, SiTailwindcss } from "react-icons/si";
import { FaGitAlt, FaGithub, FaBootstrap } from "react-icons/fa";
import { BsFillKanbanFill } from "react-icons/bs";
import image from '../assets/Starwars.png';
import './ProjetoStarWars.css';
import { useState } from "react";
import ModalDetalheSTP from "./ModalDetalheSTP";

function ProjetoStarWars() {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <>
            <div
                className="relative border-b-4 border-blue-800 lg:w-[30%] grid grid-cols-1 w-[90%] justify-center align-middle gow rounded-md h-64 mb-10 cursor-pointer transform hover:scale-110 transition duration-300"
                onClick={() => setShowDetails(true)}
            >
                <div
                    style={{ backgroundImage: `url(${image})` }}
                    className="absolute inset-0 bg-center w-full bg-no-repeat bg-cover rounded-md" />
                <div className="z-10 flex flex-col justify-center items-center text-center">
                    <span className="text-xl text-center align-middle justify-center font-bold text-blue-800 lg:text-2xl">
                        Projeto Star Wars Planet Search
                    </span>
                    <span className='text-xl text-blue-800 flex flex-row justify-center align-middle mt-2 text-center lg:text-2xl'>
                        <BiLogoReact className='mr-2' />
                        <SiTailwindcss className='mr-2' />
                        <FaGithub className='mr-2' />
                        <BiLogoJavascript className='mr-2' />
                        <SiJest className='mr-2' />
                        <BsFillKanbanFill className='mr-2' />
                        <FaBootstrap className='mr-2' />
                        <FaGitAlt className='mr-2' />
                    </span>
                </div>
            </div>
            <div>
                <ModalDetalheSTP
                    show={showDetails}
                    onClose={() => setShowDetails(false)}
                />
            </div>
        </>
    );
}

export default ProjetoStarWars;