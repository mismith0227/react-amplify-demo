import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Text from '.'

const components = storiesOf('Components', module)
components
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Atoms/Text', () => <Text>{text('テキスト', 'ああああ')}</Text>)