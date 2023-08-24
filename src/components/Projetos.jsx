import ProjetoStarWars from "./ProjetoStarWars";
import { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

function Projetos() {
    const ref = useRef();
    const isVisible = useIntersectionObserver(ref, { thresholdUp: 0.5, thresholdDown: 0.4 });

    return (
        <div
            className="flex flex-col justify-center items-center"
            ref={ref}
            id="projetos"
        >
            <h1
                style={{
                    transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
                    opacity: isVisible ? 1 : 0,
                    transition: 'transform 1s, opacity 1s',
                }}
                className="font-bold text-xl text-center mb-3 lg:text-3xl"
            >
                Projetos
            </h1>
            <span
                className="text-sm text-center mb-6"
                style={{
                    transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
                    opacity: isVisible ? 1 : 0,
                    transition: 'transform 1s, opacity 1s',
                }}
            >
                🚧 Essa seção está em construção... 🚧
            </span>
            <div
                className="lg:w-[80%] lg:ml-5 mt-3 lg:mt-10 lg:grid-cols-5 lg:justify-start justify-center"
                style={{
                    transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
                    opacity: isVisible ? 1 : 0,
                    transition: 'transform 1s, opacity 1s',
                }}
            >
                <ProjetoStarWars />
            </div>
        </div>
    );
}

export default Projetos;
