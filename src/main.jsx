import React from 'react'
import ReactDOM from 'react-dom/client'
import reportAccessibility from './components/utils/reportAccessibility'
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'
import './index.css' 

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// ) 
 
const root = ReactDOM.createRoot(
  document.getElementById('root')
)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
 
reportAccessibility(React)