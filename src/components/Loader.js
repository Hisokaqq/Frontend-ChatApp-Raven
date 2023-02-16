import React from 'react'
import styled from 'styled-components'
import { CircularProgress } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress';
const Loader = () => {
  
  return (
    <StyledLoader>
        <LinearProgress color="inherit" />
    </StyledLoader>
  )
}

const StyledLoader = styled.div`
    width: 100%;
    height: 30px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;
    
`

export default Loader