import { animated, useTransition } from 'react-spring';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalDetalheSTP({ show, onClose }) {
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
                                Projeto Star Wars Planet Search
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <span className='text-sm flex text-justify ml-3 mb-3 lg:w-[90%] lg:mx-5 lg:text-base'>
                                Esse foi um projeto obrigatório do curso de Desenvolvimento Full Stack da Trybe, onde foi utilizado React e Tailwind CSS para criar uma interface de pesquisa de planetas do universo Star Wars. O objetivo do projeto era criar uma aplicação que consumisse uma API externa e exibisse os dados de forma organizada e responsiva, utilizando hooks do React para fazer as filtragens e contextAPI para compartilhar as informações entre componentes. No projeto original, os resultados eram dispostos em uma tabela, mas foi de minha preferencia utilizar cards para exibir os dados.
                                A estilização e a responsividade foram feitas utilizando Tailwind CSS e Bootstrap, que é uma ferramenta que eu não tinha tanto conhecimento, mas que me ajudou muito a agilizar o processo de estilização.
                                Foi um projeto desafiador no começo, já que era a primeira vez em que tive contato com os hooks e contextAPI, mas ao longo do desenvolvimento, fui me familiarizando com as ferramentas e consegui entregar o projeto dentro do prazo, principalmente por estar utilizando o método Kanban para me organizar em relação ao tempo.
                                O deploy foi feito utilizando o site Netlify.
                            </span>
                        </Modal.Body>
                        <div className='flex justify-center'>
                            <button className='border border-blue-800 bg-blue-800 rounded-md p-3 mr-2 text-white'>
                                <a
                                    href='https://github.com/joaopedroc-araujo/Projeto-Planet-Search'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    Veja no GitHub
                                </a>
                            </button>
                            <button className='border border-blue-800 bg-blue-800 rounded-md p-3 mr-2 text-white'>
                                <a
                                    href='https://starwarssearchproject.netlify.app/'
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

export default ModalDetalheSTP;
