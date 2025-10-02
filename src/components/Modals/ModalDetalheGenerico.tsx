import { animated, useTransition } from 'react-spring';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalDetalheGenerico({ show, onClose, title, bodyContent, links }) {
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
                                {title}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <span className='text-sm flex text-justify ml-3 mb-3 lg:w-[90%] lg:mx-5 lg:text-base'>
                                {bodyContent}
                            </span>
                        </Modal.Body>
                        <div className='flex justify-center'>
                            {links.map((link, index) => (
                                <button key={index} className='border border-blue-800 bg-blue-800 rounded-md p-3 mr-2 text-white'>
                                    <a
                                        href={link.url}
                                        target='_blank'
                                        rel="noreferrer"
                                    >
                                        {link.text}
                                    </a>
                                </button>
                            ))}
                        </div>
                        <Modal.Footer>
                            <div className='flex justify-center mt-4'>
                                <Button variant="secondary" onClick={onClose}>
                                    Fechar
                                </Button>
                            </div>
                        </Modal.Footer>
                    </Modal>
                </animated.div>
            )
    );
}

export default ModalDetalheGenerico;
