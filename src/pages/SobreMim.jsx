import { useState, useEffect } from 'react';
import TypeWriter from "../utils/TypeWritter";
import minhafoto from '../assets/minha-foto.png'
import curriculo from '../assets/Currículo João Pedro.pdf'
import { useTheme } from '../context/ThemeContext';
import MinhasInfos from '../components/MinhasInfos';
import Habilidades from '../components/Habilidades';
import Projetos from '../components/Projetos';

function SobreMim() {
    const [showPhoto, setShowPhoto] = useState(false);
    const [showText, setShowText] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setTimeout(() => {
            setShowPhoto(true);
        }, 100);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setShowText(true);
        }, 3500);
    }, []);

    return (
        <>
            <div className="mt-10 ml-4 flex flex-col lg:flex-row-reverse justify-center lg:justify-between items-center">
                <div className={`mt-8 mb-4 rounded-[50%] lg:mr-48 lg:mt-24 overflow-hidden transition-opacity duration-1000 ${showPhoto ? 'opacity-100' : 'opacity-0'} lg:${showPhoto ? 'lg:opacity-100' : 'lg:opacity-0'}`}>
                    <img src={minhafoto} className='w-44 lg:w-80 bg-blue-800' alt="Minha foto" />
                </div>
                <div className="lg:ml-32 flex flex-col items-center">
                    <span className="text-lg lg:text-5xl">
                        <TypeWriter text="Olá, meu nome é" hideCursor />
                    </span>
                    <span className="text-4xl font-bold text-blue-800 lg:text-6xl items-center">
                        <TypeWriter text="João Pedro" delay={2000} />
                    </span>
                    <div className={`lg:mt-5 text-[10px] mt-1 lg:text-sm transition-opacity duration-700 lg:duration-1000 ${showText ? 'opacity-100' : 'opacity-0'} text-center w-full`}>
                        Estudante de desenvolvimento web
                        <br />
                        Desenvolvedor Frontend
                        <br />
                        <a href={curriculo} download>
                            <button className={`mt-7 border border-blue-800 rounded-md text-base mr-4 py-2 px-4 lg:text-lg bg-blue-800 ${theme === 'light' ? 'text-white hover:bg-white hover:text-blue-800' : 'text-black hover:bg-black hover:text-white'} transform hover:scale-95 transition-transform`}>
                                Baixar CV
                            </button>
                        </a>
                        <button className={`border border-blue-800 text-base py-2 px-4 rounded-md lg:text-lg lg:mt-7 ${theme === 'light' ? 'hover:bg-white hover:text-blue-800' : 'hover:bg-black hover:text-white'} transform hover:scale-95 transition-transform`}>
                            Entre em contato
                        </button>
                    </div>
                </div>
            </div>
            <div className={`transition-opacity duration-700 lg:duration-1000 ${showText ? 'opacity-100' : 'opacity-0'}`}>
                <MinhasInfos />
            </div>
            <div>
                <Habilidades />
            </div>
            <div>
                <Projetos />
            </div>
        </>
    );
}

export default SobreMim;
