import * as S from './styled-header'

function Header({title, position, mobile, email}){
    return(
        <S.Header>
            <S.HeaderCol>
                <h1>{title}</h1>
                <S.Position>{position}</S.Position>
            </S.HeaderCol>

            <S.HeaderCol className="align-right">
                <p>Mobile: {mobile}</p>
                <p>Email: {email}</p>
            </S.HeaderCol>
        </S.Header>
    )
}

export default Header