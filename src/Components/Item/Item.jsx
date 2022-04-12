import useSound from 'use-sound'

import * as S from './styled-item'
import boop from '../../assets/audio/boop2.wav'

function Item({item}){
    const [play] = useSound(boop, {volume:0.05})

    return(
        <S.ItemCard onMouseEnter={play}>{item}</S.ItemCard>   
    )
}

export default Item