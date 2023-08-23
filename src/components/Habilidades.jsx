import minhasHabilidades from '../utils/minhasHabilidades';
import './Habilidades.css'

function Habilidades() {
    return (
        <div>
            <h1 className='font-bold text-xl text-center'>
                Habilidades
            </h1>
            <div className='mt-10 flex justify-center mb-10'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-full gap-4 w-auto max-w-5xl'>
                    {minhasHabilidades.map((habilidade) => (
                        <div className='flex flex-col items-center justify-center border-2 shadows border-blue-800 rounded-xl h-36 lg:h-52 lg:w-44 bg-gray-900 grow' key={habilidade.name}>
                            <h3 className='text-lg font-bold text-blue-800 lg:text-2xl'>
                                {habilidade.name}
                            </h3>
                            <span className='text-blue-800 text-5xl w-auto pt-2 lg:text-7xl'>
                                {habilidade.icon}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Habilidades;
