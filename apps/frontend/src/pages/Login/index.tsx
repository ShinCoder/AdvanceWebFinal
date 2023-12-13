import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { login } from '../../services/auth';

const Login = () => {
  return (
    <Box>
      <Button
        type="button"
        onClick={async () => {
          const data = await login({ username: 'abc' });
          console.log(data);
        }}
        variant="contained"
      >
        login
      </Button>
    </Box>
  );
};

export default Login;
