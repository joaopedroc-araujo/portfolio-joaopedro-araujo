/* eslint-disable react/jsx-key */
import { ProjetosFeitos } from './ProjetosFeitos';
import starwarslogo from '../../assets/Starwars.png';
import pixelsartlogo from '../../assets/pixelsArt.png';
import pokedexstatelogo from '../../assets/pokedexstate.png';
import solarSystemlogo from '../../assets/solarsystem.png';
import shoppingcartlogo from '../../assets/shoppingcart.png';
import tfclogo from '../../assets/tfc.png';
import { pixelsArtIcons, pokedexStateIcons, shoppingCartIcons, solarSystemIcons, starWarsIcons, tfcIcons } from '../../utils/projectIcons';

export const Projetos = () => {
    return (
        <>
            <ProjetosFeitos
                titulo='Projeto Star Wars Planet Search'
                imagem={starwarslogo}
                icones={[...starWarsIcons]}
            />
            <ProjetosFeitos
                titulo='Projeto Pixels Art'
                imagem={pixelsartlogo}
                icones={[...pixelsArtIcons]}
            />
            <ProjetosFeitos
                titulo='Projeto Pokedex State'
                imagem={pokedexstatelogo}
                icones={[...pokedexStateIcons]}
            />
            <ProjetosFeitos
                titulo='Projeto Solar System'
                imagem={solarSystemlogo}
                icones={[...solarSystemIcons]}
            />
            <ProjetosFeitos
                titulo='Projeto Shopping Cart'
                imagem={shoppingcartlogo}
                icones={[...shoppingCartIcons]}
            />
            <ProjetosFeitos
                titulo='Projeto TFC'
                imagem={tfclogo}
                icones={[...tfcIcons]}
            />
        </>
    )
}