import {useState} from 'react'
import { BrowserRouter } from 'react-router-dom'

/* Components */
import Home from './containers/Home/Home'
import OptionsBar from './components/OptionsBar/OptionsBar'

/* LANGUAGES */
import es from './languages/es.json'
import en from './languages/en.json'

function App() {
  /* Language Selector */
  const [language, setLanguage] = useState(true)

  return (
    <BrowserRouter basename="/resume/">
      <Home 
        es={es}
        en={en}
        language = {language} 
      />

      <OptionsBar
        language={language}
        setLanguage={setLanguage}
      />
    </BrowserRouter>
  )
}

export default App