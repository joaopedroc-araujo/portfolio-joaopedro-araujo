/* eslint-disable react/jsx-key */
import { ProjetosFeitos } from './ProjetosFeitos';
import { pixelsArtIcons, pokedexStateIcons, shoppingCartIcons, solarSystemIcons, starWarsIcons, tfcIcons } from '../../utils/projectIcons';

export const Projetos = () => {
    return (
        <>
            <ProjetosFeitos
                titulo='Projeto Star Wars Planet Search'
                imagem="/Starwars.png"
                icones={[...starWarsIcons]}
            />
            <ProjetosFeitos
                titulo='Projeto Pixels Art'
                imagem="/pixelsArt.png"
                icones={[...pixelsArtIcons]}
            />
            <ProjetosFeitos
                titulo='Projeto Pokedex State'
                imagem="/pokedexstate.png"
                icones={[...pokedexStateIcons]}
            />
            <ProjetosFeitos
                titulo='Projeto Solar System'
                imagem="/solarsystem.png"
                icones={[...solarSystemIcons]}
            />
            <ProjetosFeitos
                titulo='Projeto Shopping Cart'
                imagem="/shoppingcart.png"
                icones={[...shoppingCartIcons]}
            />
            <ProjetosFeitos
                titulo='Projeto TFC'
                imagem="/tfc.png"
                icones={[...tfcIcons]}
            />
        </>
    )
}