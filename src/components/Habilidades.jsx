import minhasHabilidades from '../utils/minhasHabilidades';
import './Habilidades.css'
import { useRef } from 'react';
import { motion } from 'framer-motion'

function Habilidades() {
    const ref = useRef();

    return (
        <div

            ref={ref}
            id="habilidades"
        >
            <h1
                className='text font-bold text-xl text-center lg:text-3xl'
            >
                Habilidades
            </h1>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2.5 }}
                className='mt-10 flex justify-center mb-10'
            >
                <div
                    className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:w-full gap-5 w-auto max-w-5xl'
                >
                    {minhasHabilidades.map((habilidade) => (
                        <div
                            className='flex flex-col items-center justify-center border-2 shadows border-blue-800 rounded-xl h-36 lg:h-52 lg:w-44 bg-gray-900 lg:mb-4 hover:scale-110'
                            key={habilidade.name}
                        >
                            <h3 className='text-lg font-bold text-blue-800 lg:text-2xl'>
                                {habilidade.name}
                            </h3>
                            <span className='text-blue-800 text-5xl w-auto pt-2 lg:text-7xl'>
                                {habilidade.icon}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div >
    );
}

export default Habilidades;
