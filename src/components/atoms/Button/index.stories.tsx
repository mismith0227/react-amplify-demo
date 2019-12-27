import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Button from '.'

const components = storiesOf('Components/Atoms', module)
components
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Button', () => {
    const props = {
      onClick: action('onClick'),
      level: select('level', [1, 2, 3], 1),
      disabled: boolean('disabled', false),
    }
    return <Button {...props}>{text('テキスト', '送信')}</Button>
  })
