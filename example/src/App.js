import React, { useCallback, useState, useRef } from 'react'
import { RWhiteboard } from 'whiteboard-react'
import 'whiteboard-react/dist/index.css'
import './index.css'
// import InputDefault from './components/Input';

const BASIC = 'basic_map';
const SEARCH_MAP = 'search_map';
const MULTIPLE_MARKER = 'marker_map';

const App = () => {
  const mapOptions = {
    zoom: 15
  };

  return (
  <>
    <RWhiteboard />
  </>
  )
}

export default App
