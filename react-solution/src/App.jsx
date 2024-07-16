import "./scss/style.scss"
import Header from "./components/Header/Header"
import MainContent from "./components/MainContent/MainContent"
import Footer from "./components/Footer/Footer"
import { ContextProvider } from "./context/AppContext"

function App() {
  return (
    <>
      <ContextProvider>
        <Header />
        <MainContent />
        <Footer />
      </ContextProvider>
    </>
  )
}

export default App
