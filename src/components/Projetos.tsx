import { useRef } from 'react';
import { Projetos as ProjetosFeitos } from '../components/Projects/index'
import { motion } from 'framer-motion';

function Projetos() {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5 }}
            className="flex flex-col justify-center items-center"
            ref={ref}
            id="projetos"
        >
            <h1
                className="font-bold text-xl text-center mb-3 lg:text-3xl"
            >
                Projetos
            </h1>

            <span
                className="text-sm text-center mb-10"
            >
                🚧 Essa seção está em construção... 🚧
            </span>
            <div
                className="flex flex-wrap justify-start gap-4 lg:justify-center items-stretch w-[80%] lg:w-[90%]"
            >
                {/* <ProjetoStarWars />
<ProjetoPixelsArt /> */}
                <ProjetosFeitos />
            </div>
        </motion.div>
    );
}

export default Projetos;
