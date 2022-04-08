import {useState} from 'react'

import Header from './Components/Header/Header'
import CardItem from './Components/Item/CardItem'
import Experience from './Components/Experience/Experience'
import Social from './Components/Social/Social'

import * as S from './Components/Global/global-styled'
import OptionsBar from './Components/OptionsBar/OptionsBar'

/* LANGUAGES */
import spanish from './Languages/Spanish.json'
import english from './Languages/English.json'

function App() {
  const languages = ['English - Basic (Listening/Speaking)', 'English - Medium (Written)', 'Spanish - Native']
  const skills = ['CSS3', 'HTML5', 'ReactJS', 'Responsive', 'WordPress', 'Elementor', 'Crocoblock Suite', 'Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Styled Components']
  const experience = [
    {
      position: 'Web Designer & UI Dev',
      company: '@Freelance',
      date: 'January 2017 - Present',
      description: 'Design & UI development using WordPress templates, CSS and JavaScript. '
    },

    {
      position: 'Web Designer & UI Dev',
      company: '@LWA Marketing Digital',
      date: 'January 2019 - December 2020',
      description: 'Design & UI development using WordPress templates, grid/flex CSS, JavaScript and PHP (basic). I’ve made adjustements to websites like Colanta, Argos, Mayorca Mall Center, Flamingo, and other ones.'
    },

    {
      position: 'Web Designer',
      company: '@Interficto',
      date: 'July 2018 - October 2018',
      description: 'Website developments using WordPress templates, CSS and JavaScript. I’ve made e-commerce websites using WooCommerce, and migrations with cPanel and WHM.'
    },

    {
      position: 'Multimedia Producer',
      company: '@SENA',
      date: 'December 2017 - June 2018',
      description: 'Frontend support in projects. Design & development on websites with HTML, CSS, jQuery, PHP and some libraries like Semantic UI. Character design and basic animations with Toonboom, Adobe Illustrator and Photoshop.'
    }
  ]

  /* Language Selector */
  const [language, setLanguage] = useState(true)
  const actualLanguage = language ? english : spanish

  return (
    <>
      <S.GlobalStyle/>
      <S.Mask>
        {/* Circles */}
        <S.AnimateBox>
          <S.Animate1 />
          <S.Animate2 />
          <S.Animate3 />
        </S.AnimateBox>

        {/* Begin Content */}
        <S.Container>
          <Header 
            title='Santiago Mejía Cuartas'
            position='JR Frontend Developer'
            mobile='(+57) 304 601 6382'
            email='santiagomejc@gmail.com'
          />

          <S.Content>
            <S.ContentRow>
              <h2>{language ? english['languages-title'] : spanish['languages-title']}</h2>

              <div>
                {
                  actualLanguage.languages.map( e => (
                    <CardItem item={e} />
                  ))
                }
              </div>
            </S.ContentRow>

            <S.ContentRow>
              <h2>{actualLanguage['skills-title']}</h2>

              <div>
                {actualLanguage.skills.map( e => (
                  <CardItem item={e} />
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
                {actualLanguage.experience.map( e => (
                  <Experience
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
            <S.DownloadButton>
              <span>{actualLanguage['download-button']}</span>
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

      <OptionsBar
        language={language}
        setLanguage={setLanguage}
      />
    </>
  )
}

export default App