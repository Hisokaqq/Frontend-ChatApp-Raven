import React from 'react'
import styled from 'styled-components'

import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const ErrorMessage = ({open, setOpen, message, type}) => {
  return (
    <StyledErrorMessage>
       <Collapse in={open}>
        <Alert severity={type}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {message}
        </Alert>
      </Collapse>
    </StyledErrorMessage>
  )
}

const StyledErrorMessage = styled.div`
    position: absolute;
    top: 1rem;
`
export default ErrorMessage