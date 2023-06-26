import { Button, Github, Link, Linkedin, Pill, Stack } from '@components'

import en from '@langs/en.json'

const Home = () => {
  return (
    <Stack spacing={62}>
      <Stack hasColumns spacing={32}>
        <h2>{en.languages.label}</h2>
        <div>
          {en.languages.languages.map((language, index) => (
            <Pill key={index} label={language} />
          ))}
        </div>
      </Stack>

      <Stack hasColumns spacing={32}>
        <h2>{en.skills.label}</h2>
        <Stack spacing={32}>
          <Stack spacing={8}>
            <h3>{en.skills['hard-label']}</h3>
            <div>
              {en.skills.skills.hard.map((skill, index) => (
                <Pill key={index} label={skill} />
              ))}
            </div>
          </Stack>

          <Stack spacing={8}>
            <h3>{en.skills['soft-label']}</h3>
            <div>
              {en.skills.skills.soft.map((skill, index) => (
                <Pill key={index} label={skill} />
              ))}
            </div>
          </Stack>

          <Stack spacing={8}>
            <h3>{en.skills['aditional-label']}</h3>
            <div>
              {en.skills.skills.aditional.map((skill, index) => (
                <Pill key={index} label={skill} />
              ))}
            </div>
          </Stack>
        </Stack>
      </Stack>

      <Stack hasColumns spacing={32}>
        <h2>{en['about-me'].label}</h2>
        <Stack spacing={32}>
          <Stack spacing={8}>
            <h3>{en['about-me']['professional-label']}</h3>
            <p>{en['about-me'].text.profesional}</p>
          </Stack>

          <Stack spacing={8}>
            <h3>{en['about-me']['personal-label']}</h3>
            <p>{en['about-me'].text.personal}</p>
          </Stack>
        </Stack>
      </Stack>

      <Stack hasColumns spacing={32}>
        <h2>{en.experience.label}</h2>
        <Stack spacing={32}>
          {en.experience.experience.map((item, index) => (
            <Stack key={index} spacing={16}>
              <Stack>
                <h3>{item.position}</h3>
                <span>
                  {item.company} - {item.date}
                </span>
              </Stack>
              <p>{item.description}</p>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Stack hasColumns spacing={32}>
        <h2>Downloads & Social</h2>
        <Stack spacing={32}>
          <div>
            <Button href='/cv-santiagomc-en.pdf'>
              {en.downloads['button-en']}
            </Button>
            <Button href='/cv-santiagomc-es.pdf'>
              {en.downloads['button-es']}
            </Button>
          </div>
          <Stack spacing={8}>
            <Link
              icon={<Github size={30} />}
              label='Github'
              href='https://github.com/smcuartas'
              target='_blank'
            />
            <Link
              icon={<Linkedin size={30} />}
              label='Linkedin'
              href='https://www.linkedin.com/in/santiago-mejia-cuartas/'
              target='_blank'
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Home
