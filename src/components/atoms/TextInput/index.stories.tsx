import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import TextInput from '.'

const components = storiesOf('Components/Atoms', module)
components
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('TextInput', () => (
    <TextInput
      type={text('type', 'text')}
      name={text('name', 'name')}
      value={text('value', 'value')}
      isError={boolean('isError', false)}
      isEdited={boolean('isEdited', false)}
      onChange={action('onChange')}
      onBlur={action('onBlur')}
      onFocus={action('onFocus')}
      disabled={boolean('disabled', false)}
    />
  ))
