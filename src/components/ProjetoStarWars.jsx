import { BiLogoJavascript, BiLogoReact } from "react-icons/bi";
import { SiJest, SiTailwindcss } from "react-icons/si";
import { FaGitAlt, FaGithub, FaBootstrap } from "react-icons/fa";
import { BsFillKanbanFill } from "react-icons/bs";
import image from '../assets/Starwars.png';

function ProjetoStarWars() {
    return (
        <div className="relative border-b-4 border-blue-800 grid grid-cols-1 w-[90%] justify-center align-middle rounded-md h-64">
            <div
                style={{ backgroundImage: `url(${image})` }}
                className="absolute inset-0 bg-center w-full bg-no-repeat bg-cover rounded-md"
            />
            <div className="z-10 flex flex-col justify-center items-center text-center">
                <span className="text-xl text-center align-middle justify-center font-bold text-blue-800">
                    Projeto Star Wars Planet Search
                </span>
                <span className='text-xl text-blue-800 flex flex-row justify-center align-middle mt-2 text-center'>
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
    );
}

export default ProjetoStarWars;