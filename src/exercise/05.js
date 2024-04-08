// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'


function Box(props) {
  return <div {...props} />
}

const smallBox = <Box style={{backgroundColor:'skyblue', fontStyle:'italic'}} className="box box--small" >small lightblue box</Box>
const mediumBox = <Box style={{backgroundColor:'pink', fontStyle:'italic'}} className="box box--medium">medium pink box</Box>
const largeBox = <Box style={{backgroundColor:'orange', fontStyle:'italic'}} className="box box--large" >large orange box</Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box />
    </div>
  )
}

export default App
