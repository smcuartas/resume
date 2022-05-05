import * as i from '../Icons/Icons'
import useSound from 'use-sound'

import * as S from './styled-project'
import bubbleSound from '../../assets/audio/bubble.wav'

function Project({ title, status, repo, ghp, pos, language }) {
  const [bubble] = useSound(bubbleSound, { volume: 0.2 })

  return (
    <S.ProjectContainer pos={pos}>
      <S.ProjectContent>
        <a href={ghp} target="_blank" onMouseEnter={bubble}>
          <i.HtmlPage />
        </a>

        <a href={repo} target="_blank" onMouseEnter={bubble}>
          <i.Github />
        </a>

        <S.Title>
          <h3>{title}</h3>
        </S.Title>
      </S.ProjectContent>
      {status ? (
        <S.Active>
          {language ? 'Status: Finished' : 'Estado: Finalizado'}
        </S.Active>
      ) : (
        <S.Progress>
          {language ? 'Status: In Progress' : 'Estado: En proceso'}
        </S.Progress>
      )}
    </S.ProjectContainer>
  )
}

export default Project
