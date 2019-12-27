import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, number } from '@storybook/addon-knobs'
import { px2rem } from 'styles/utils'
import AccountIcon from './AccountIcon'
import ArrowIcon from './ArrowIcon'
import DocumentIcon from './DocumentIcon'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Item = styled.div`
  width: 33%;
  margin-bottom: ${px2rem(36)};
  text-align: center;
`

const ItemTitle = styled.h4`
  margin-bottom: ${px2rem(12)};
  font-size: ${px2rem(16)};
  font-weight: normal;
`

const renderIcon = (RenderIcon: any) => (
  <Item>
    <ItemTitle>
      &lt;
      {RenderIcon.name} /&gt;
    </ItemTitle>
    <div style={{ marginBottom: `${px2rem(20)}` }}>
      <RenderIcon angle={number('angle', 0) || 0} />
    </div>
  </Item>
)

const components = storiesOf('Components/Atoms', module)
components
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Icon', () => {
    return (
      <Wrapper>
        {renderIcon(AccountIcon)}
        {renderIcon(ArrowIcon)}
        {renderIcon(DocumentIcon)}
      </Wrapper>
    )
  })
