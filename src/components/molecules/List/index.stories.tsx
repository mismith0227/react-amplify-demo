import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import List, { ListItem } from '.'
import DocumentIcon from 'components/atoms/Icon/DocumentIcon'
import AccountIcon from 'components/atoms/Icon/AccountIcon'

const components = storiesOf('Components/Molecules', module)
components
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('List', () => {
    return (
      <List>
        <ListItem key={'aaa'} onClick={action('list1')}>
          list1
        </ListItem>
        <ListItem key={'bbb'} onClick={action('list2')}>
          list2
        </ListItem>
        <ListItem key={'ccc'} onClick={action('list3')}>
          list3
        </ListItem>
      </List>
    )
  })
