import minhasHabilidades from '../utils/minhasHabilidades';

function Habilidades() {
    return (
        <div>
            <h1 className='font-bold text-xl text-center'>
                Habilidades
            </h1>
            <div className='mt-4 flex justify-center mb-20'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 lg:w-[500px] gap-4 w-auto max-w-5xl'>
                    {minhasHabilidades.map((habilidade) => (
                        <div className='flex flex-col items-center justify-center p-2 border-2 border-blue-800 rounded-xl h-36 bg-gray-900 ' key={habilidade.name}>
                            <h3 className='text-lg font-bold text-blue-800'>
                                {habilidade.name}
                            </h3>
                            <span className='text-blue-800 text-5xl w-auto'>
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
