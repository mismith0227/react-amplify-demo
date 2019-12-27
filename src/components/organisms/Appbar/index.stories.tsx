import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs'

import Appbar from '.'

const components = storiesOf('Components/Organisms', module)
components
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Appbar', () => {
    return <Appbar>{text('テキスト', '送信')}</Appbar>
  })
