import React from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { FormControl, FormLabel } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import '../styles/BookingSite.css';

function Formcomp() {
  return (
    <div>
      <div className='formx'>
        <div>
          <FormControl>
            <FormLabel>Adults</FormLabel>
            <div className="input-with-icons">
              <TextField type="number" size='small' inputProps={{ min: 0 }} />
              <IconButton>
                <Remove />
              </IconButton>
              <IconButton>
                <Add />
              </IconButton>
            </div>
          </FormControl>
          <FormControl>
            <FormLabel>Children</FormLabel>
            <div className="input-with-icons">
              <TextField type="number" size='small' inputProps={{ min: 0 }} />
              <IconButton>
                <Remove />
              </IconButton>
              <IconButton>
                <Add />
              </IconButton>
            </div>
          </FormControl>
          <TextField type="date" />
        </div>
        <div>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <TextField type="text" />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <TextField type="email" />
          </FormControl>
        </div>
        <Button>Submit</Button>
      </div>
    </div>
  )
}

export default Formcomp;
