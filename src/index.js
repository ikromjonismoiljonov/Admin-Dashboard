import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import Admin from './container/admin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './container/page1';
import Page2 from './container/page2';
import Page3 from './container/page3';


export default function App() {
 return (
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Admin/>}/>
              <Route path='/Saff' element={<Page1/>}/>
              <Route path='/CRM' element={<Page2/>}/>
              <Route path='/Saff' element={<Page3/>}/>
          </Routes>
        </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
