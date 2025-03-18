/* eslint-disable react/prop-types */
import {  useEffect, useState } from 'react';
import ModalDetalheGenerico from '../Modals/ModalDetalheGenerico';
import { arrayModais } from '../../utils/arrayModais';

export const ProjetosFeitos = ({ imagem, titulo, icones }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [currentModal, setCurrentModal] = useState('');

    useEffect(() => {
        if (currentModal) {
            setShowDetails(true);
        } else {
            setShowDetails(false);
        }
    }, [currentModal]);

    const handleShowDetails = async (titulo) => {
        const modal = arrayModais.find(modal => modal.title === titulo);
        if (currentModal !== modal) {
            setCurrentModal(modal);
        } else {
            setCurrentModal('');
        }
    };

    return (
        <>
            <div
                className="relative border-b-4 border-blue-800 w-[400px] justify-center align-middle rounded-md h-64 mb-10 cursor-pointer transform hover:scale-110 transition duration-300"
                onClick={() => {
                    handleShowDetails(titulo)
                }}
            >
                <div
                    style={{ backgroundImage: `url(${imagem})` }}
                    className="absolute z-0 inset-0 bg-center w-full bg-no-repeat bg-cover rounded-md" />
                <div className="relative z-20 flex flex-col justify-center items-center text-center h-full">
                    <span className="text-2xl text-center align-middle justify-center font-black rounded bg-blue-700 p-1 text-white lg:text-xl">
                        {titulo}
                    </span>
                    <span className='text-2xl text-white rounded p-1 bg-blue-700 flex flex-row justify-center align-middle mt-2 text-center lg:text-4xl'>
                        {icones.map((Icon, index) => <Icon key={index} className='mr-2 lg:mx-1 font-black lg:w-7' />)}
                    </span>
                </div>
            </div>
            <div>
                {showDetails && currentModal && <ModalDetalheGenerico onClose={() => setShowDetails(false)} {...currentModal} show={showDetails} />}
            </div>
        </>
    );
}