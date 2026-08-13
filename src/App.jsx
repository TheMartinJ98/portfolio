import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { routes } from './Routes.jsx'


function App() {
  return (
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={<route.element />} />
                ))}
            </Routes>
              <main>
                <p style={{ padding: 48 }}>Obsah stránok príde neskôr.</p>
              </main>
            <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
