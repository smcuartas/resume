import * as S from './styled-header'

function Header({title, position, mobile}){

    return(
        <S.Header>
            <S.HeaderCol>
                <h1>{title}</h1>
                <S.Position>{position}</S.Position>
            </S.HeaderCol>

            <S.HeaderCol className="align-right">
                <p>{mobile}: <a href='https://wa.me/573046016382' target="_blank">(+57) 304 601 6382</a></p>

                <p>Email: <a href="mailto:santiagomejc@gmail.com">santiagomejc@gmail.com</a></p>
            </S.HeaderCol>
        </S.Header>
    )
}

export default Header