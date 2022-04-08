import * as i from '../../Resources/Icons/Icons'
import useSound from 'use-sound'

import * as S from './styled-social'
import bubbleSound from '../../Resources/bubble.wav'

function Social({hoverColor, github, linkedin, instagram}){
    const [bubble] = useSound(bubbleSound, {volume:0.2})

    return(
        <>
            <a href={github} onMouseEnter={bubble} target="_blank">
                <S.SocialIcon hoverColor={hoverColor}>
                    <i.Github />
                </S.SocialIcon>
            </a>

            <a href={linkedin} onMouseEnter={bubble} target="_blank">
                <S.SocialIcon hoverColor={hoverColor}>
                    <i.Linkedin />
                </S.SocialIcon>
            </a>

            <a href={instagram} onMouseEnter={bubble} target="_blank">
                <S.SocialIcon hoverColor={hoverColor}>
                    <i.Instagram />
                </S.SocialIcon>
            </a>
        </>
    )
}

export default Social