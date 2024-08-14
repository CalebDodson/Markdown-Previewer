import { useState } from "react";
import { marked } from "marked";
import { TextField, Container, Typography, Paper, Box, ThemeProvider, createTheme } from '@mui/material';
import "./App.css";

function App() {
  const [text, setText] = useState(`# H1

## H2

[title](https://www.example.com)

\`code\`

\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

- First item
- Second item
- Third item

> blockquote

![alt text](image.jpg)

**bold text**
    `)

    const theme = createTheme({
      palette: {
        primary: {
          main: "#f3d2c1"  // dark beige
        },
        secondary: {
          main: "#8bd3dd",  // light blue
        },
        background: {
          default: "#fef6e4",  // beige
        },
        text: {
          primary: '#001858',  // navy
        },
      },
    })
  return (
      <Container maxWidth="md">
        <Typography 
          variant="h3" 
          component="h1" 
          align="center" 
          gutterBottom
          style={{ color: theme.palette.text.primary, fontFamily: "Ultra, sans-serif" }}
          sx={{
            marginTop: "40px"
          }}
        >
          Markdown Previewer
        </Typography>
        <TextField 
          id="editor" 
          label="Markdown Input"
          multiline
          rows={10}
          variant="outlined"
          fullWidth
          margin="normal"
          value={text}
          onChange={(event) => {setText(event.target.value);}}
          style={{ backgroundColor: theme.palette.primary.main, fontFamily: "PT Serif, serif" }}
          sx={{
            '& .MuiInputBase-input': {
              color: theme.palette.text.primary,
              fontFamily: "PT Serif, serif"
            }
          }}
          />

        <Box mt={4}>
          <Paper 
            elevation={3} 
            style={{ padding: "16px", backgroundColor: theme.palette.secondary.main, color: theme.palette.text.primary }}
            sx={{
              marginBottom: "40px",
              minHeight: 'calc(10rem + 2px)'
            }}
          >
            <Typography 
              id="preview"
              component="div"
              dangerouslySetInnerHTML={{
                __html: marked(text),
              }}
              sx={{
              fontFamily: "PT Serif, serif"
              }}
              />
          </Paper>
        </Box>
      </Container>
  );
}

export default App;
