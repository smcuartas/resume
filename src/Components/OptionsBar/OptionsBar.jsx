import * as S from './styled-optionsbar'
import * as i from '../../Resources/Icons/Icons'

function OptionsBar({language, setLanguage}){
    const turnLanguage= () => {
        if(language){
            setLanguage(false)
        } else{
            setLanguage(true)
        }
    }

    return(
        <S.OptionBar>
            <S.selectLanguage>
                <span onClick={language ? null : turnLanguage} className={language ? "activeLanguage" : null}>{language ? 'English' : 'Inglés'}</span>
                <i.turnIcon/>
                <span onClick={language ? turnLanguage : null} className={language ? null : "activeLanguage"}>{language ? 'Spanish' : 'Español'}</span>
            </S.selectLanguage>
        </S.OptionBar>
    )
}

export default OptionsBar