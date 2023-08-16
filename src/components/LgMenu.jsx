function LgMenu() {
    return (
        <div className='hidden lg:flex lg:flex-row lg:justify-between lg:items-center lg:space-x-4 lg:ml-auto'>
            <a href='#/' className='block text-center hover:text-gray-400 px-2 py-4 text-xl'>Início</a>
            <a href='#sobre-mim' className='block text-center hover:text-gray-400 px-2 py-4 text-xl'>Sobre mim</a>
            <a href='#contatos' className='block text-center hover:text-gray-400 px-2 py-4 text-xl'>Contatos</a>
        </div>
    )
}


export default LgMenu;
