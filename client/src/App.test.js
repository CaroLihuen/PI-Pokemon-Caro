import { render, screen } from '@testing-library/react';
//import Create from '../Components/Create.jsx';
//import {Landing} from '../Components/Landing.jsx';
//import App from './App.js';
import userEvent from '@testing-library/user-event'
import {createMemoryHistory} from 'history'
import React from 'react'
import {Routes} from 'react-router-dom'

import '@testing-library/jest-dom'

import {App} from './App.js'

test('full app rendering/navigating', () => {
  const history = createMemoryHistory();
  render(
    <Routes history={history}>
     <Home/>
    </Routes>
  )
  expect(<Home/>).toBeInTheDocument()
});
