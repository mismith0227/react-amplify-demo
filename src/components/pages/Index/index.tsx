import * as React from 'react'
import { Link } from 'react-router-dom'

const Index: React.FC = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <div>Index</div>
    </div>
  )
}

export default Index
