import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { login } from '../../api/auth';

export default function Login() {
  const [open, setOpen] = React.useState(false);

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      login({
        email,
        password,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        color='inherit'
      >
        Login
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: onLogin,
        }}
      >
        <DialogTitle>
          Login to javarzone
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
