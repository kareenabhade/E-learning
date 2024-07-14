import { Box } from '@mui/material';
import { HashLoader } from 'react-spinners';

export function Load() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <HashLoader color="#000000" />
    </Box>
  );
}
