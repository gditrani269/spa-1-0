import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Home } from './Home'
import { UserForm } from './components/auth/pages/UseForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <UserForm />
  </React.StrictMode>,
)
