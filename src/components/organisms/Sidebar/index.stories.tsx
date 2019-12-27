import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Sidebar, { SidebarItem } from '.'
import DocumentIcon from 'components/atoms/Icon/DocumentIcon'
import AccountIcon from 'components/atoms/Icon/AccountIcon'

const components = storiesOf('Components/Organisms', module)
components
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Sidebar', () => {
    const props = {
      isOpen: boolean('isOpen', true),
    }
    return (
      <Sidebar {...props}>
        <SidebarItem
          {...props}
          onClick={action('menu1')}
          icon={<DocumentIcon />}
        >
          menu1
        </SidebarItem>
        <SidebarItem
          {...props}
          onClick={action('menu2')}
          icon={<AccountIcon />}
        >
          menu2
        </SidebarItem>
        <SidebarItem
          {...props}
          onClick={action('menu3')}
          icon={<AccountIcon />}
        >
          menu3
        </SidebarItem>
      </Sidebar>
    )
  })
