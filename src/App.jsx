import React, { useState } from 'react';
import Box from '@mui/material/Box';
import axios from 'axios';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress'; 
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto Condensed',
    fontSize: 12,
    ErrorStack: {
      fontFamily: 'Roboto Condensed',
      fontSize: 8,
      color: 'red'
    },
    SuccessStack: {
      fontFamily: 'Roboto Condensed',
      fontSize: 8,
      color: 'green'
    }
  },
});

function App() {
  const [databaseId, setDatabaseId] = useState('');
  const [api, setApi] = useState('');
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [isError, setIsError] = useState(false);
    
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append('notion_db_id', databaseId);
    formData.append('notion_api_key', api);
    formData.append('file', file);

    const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080';
  
    try {
      const response = await axios.post(backendUrl + '/process_file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      setResponseMessage("Successfully sent to Notion!");
      setIsError(false);
    } catch (error) {
      console.error(error);
      setResponseMessage('Error sending to Notion! ' + error.response.data.error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Box component="img" src="/logo.png" height="70%" width="70%" alt="logo"/>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} autoComplete="off">
            <TextField
              margin="normal"
              required
              fullWidth
              id="notion_api_key"
              label="notion api key"
              variant="outlined"
              onChange={event => setApi(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="notion_db_id"
              label="notion db id"
              variant="outlined"
              onChange={event => setDatabaseId(event.target.value)}
            />
            {fileName && (
              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
                {fileName}
              </Box>
            )}
            <Button fullWidth variant="contained" component="label" sx={{ mt: 1, mb: 1 }}>select file<input type="file" hidden onChange={handleFileChange}/></Button>
            {isLoading ? (
              <Stack alignItems="center"><CircularProgress size={24}/></Stack>
              ) : (
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 1 }} disabled={isLoading}>Send to Notion</Button>
            )}
            {responseMessage && 
            <Typography variant={isError ? "ErrorStack" : "SuccessStack"}><Stack alignItems="center">{responseMessage}</Stack></Typography>
            }            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;