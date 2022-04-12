/* Components */
import Header from '../../components/Header/Header'
import Item from '../../components/Item/Item'
import Experience from '../../components/Experience/Experience'
import Social from '../../components/Social/Social'
import AnimateBox from '../../components/AnimateBox/AnimateBox'

/* Styles & assets */
import enCV from "../../assets/pdf/CV-SantiagoMC(en).pdf"
import esCV from "../../assets/pdf/CV-SantiagoMC(es).pdf"
import GlobalStyle from '../../components/Global/styled-global'
import * as S from './styled-home'
import * as i from '../../components/Icons/Icons'

function Home({language, en, es}){
    const actualLanguage = language ? en : es;

    return(
        <>
            <GlobalStyle/>
            <S.Mask>
                {/* Circles */}
                <AnimateBox />

                {/* Begin Content */}
                <S.Container>
                <Header 
                    title='Santiago Mejía Cuartas'
                    position='JR Frontend Developer'
                    mobile= {actualLanguage.mobile}
                />

                <S.Content>
                    <S.ContentRow>
                    <h2>{actualLanguage['languages-title']}</h2>

                    <div>
                        {
                        actualLanguage.languages.map( (e, index) => (
                            <Item
                            key={index}
                            item={e}
                            />
                        ))
                        }
                    </div>
                    </S.ContentRow>

                    <S.ContentRow>
                    <h2>{actualLanguage['skills-title']}</h2>

                    <div>
                        {actualLanguage.skills.map( (e, index) => (
                        <Item
                            key={index}
                            item={e}
                        />
                        ))}
                    </div>
                    </S.ContentRow>

                    <S.ContentRow>
                    <h2>{actualLanguage['about-title']}</h2>

                    <div>
                        <p className="mb-15">{actualLanguage['about-me']}</p>

                        <p>{actualLanguage['about-me-2']}</p>
                    </div>
                    </S.ContentRow>

                    <S.ContentRow>
                    <h2>{actualLanguage['experience-title']}</h2>

                    <div>
                        {actualLanguage.experience.map( (e, index) => (
                        <Experience
                            key={index}
                            position={e.position}
                            company={e.company}
                            date={e.date}
                            description={e.description}
                        />
                        ))}
                    </div>
                    </S.ContentRow>
                </S.Content>

                <S.DownloadRow>
                    <h2>{actualLanguage['download-text']}</h2>
                    <S.DownloadButton href={language ? enCV : esCV} download>
                        <span>{actualLanguage['download-button']}</span>
                        <span><i.downloadIcon/></span>
                    </S.DownloadButton>
                </S.DownloadRow>

                <S.Content>
                    <S.ContentRow>
                        <h2>{actualLanguage['social-title']}</h2>

                        <div>
                        <Social
                            hoverColor='#FAC0D1'
                            github='https://github.com/smcuartas'
                            linkedin='https://www.linkedin.com/in/santiago-mejia-cuartas/'
                            instagram='https://www.instagram.com/artbydubx/'
                        />
                        </div>
                    </S.ContentRow>
                </S.Content>
                </S.Container>
            </S.Mask>
        </>
    )
}

export default Home