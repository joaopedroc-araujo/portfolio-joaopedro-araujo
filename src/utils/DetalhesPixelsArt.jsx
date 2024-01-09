import { animated, useTransition } from 'react-spring';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function DetalhesPixelsArt({ show, onClose }) {
    const transitions = useTransition(show, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    return transitions(
        (styles, item) =>
            item && (
                <animated.div style={styles}>
                    <Modal
                        show={show}
                        onHide={onClose}
                        className='z-50 overflow-auto text-center p-4 h-[100vh] lg:h-auto lg:border-2 lg:border-blue-800 lg:rounded-md bg-gray-900 text-white lg:overflow-hidden lg:w-[60%] w-full lg:fixed lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 '
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title className='mt-3 font-bold lg:text-3xl'>
                                Projeto Pixels Art
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <span className='text-sm flex text-justify ml-3 mb-3 lg:w-[90%] lg:mx-5 lg:text-base'>
                                Projeto feito durante curso, no módulo de funadmento, e foi utilizado apenas HTML, Javascript e CSS. O objetivo era o aprendizado de manipulação DOM, uso de eventos e Web Storage. As informações como cores, o tamanho e quais partes do grid estão pintadas estão todas salvas no localStorage. O deploy foi feito utilizando Surge.
                            </span>
                        </Modal.Body>
                        <div className='flex justify-center'>
                            <button className='border border-blue-800 bg-blue-800 rounded-md p-3 mr-2 text-white'>
                                <a
                                    href='https://github.com/joaopedroc-araujo/projeto-pixels-art'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Veja no GitHub
                                </a>
                            </button>
                            <button className='border border-blue-800 bg-blue-800 rounded-md p-3 mr-2 text-white'>
                                <a
                                    href='https://projetopixelsart.surge.sh/'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Veja o site
                                </a>
                            </button>
                        </div>
                        <Modal.Footer>
                            <div className='flex justify-center'>
                                <Button
                                    variant="secondary"
                                    onClick={onClose}
                                    className='bg-red-700 rounded-md text-white mt-2 p-3'
                                >
                                    Fechar
                                </Button>
                            </div>
                        </Modal.Footer>
                    </Modal>
                </animated.div>
            )
    );
}

export default DetalhesPixelsArt;
