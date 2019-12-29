import * as React from 'react'
import NoteForm from 'components/organisms/NoteForm'

import { Wrap } from './styles'

const About: React.FC = () => {
  return (
    <Wrap>
      <NoteForm mode="new" />
    </Wrap>
  )
}

export default About
