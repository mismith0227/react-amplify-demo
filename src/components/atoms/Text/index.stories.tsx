import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs'

import Text from '.'

const components = storiesOf('Components/Atoms', module)
components
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Text', () => <Text>{text('テキスト', 'ああああ')}</Text>)
