import useSound from 'use-sound'

import * as S from './styled-item'
import boop from '../../Resources/boop2.wav'

function CardItem({item}){
    const [play] = useSound(boop, {volume:0.15})

    return(
        <S.ItemCard onMouseEnter={play}>{item}</S.ItemCard>   
    )
}

export default CardItem