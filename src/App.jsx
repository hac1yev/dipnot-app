import { BrowserRouter } from "react-router-dom"
import Dashboard from "./components/Dashboard/Dashboard"
import { ThemeProvider } from "@mui/material"
import theme from "./components/theme"

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
