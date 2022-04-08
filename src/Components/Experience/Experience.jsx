import * as S from './styled-experience'

function Experience({position, company, date, description}){
    return(
        <S.ExperienceItem>
            <h3>{position} <S.LightTxt>{company}</S.LightTxt></h3>
            <S.Date>{date}</S.Date>

            <p>{description}</p>
        </S.ExperienceItem>
    )
}

export default Experience