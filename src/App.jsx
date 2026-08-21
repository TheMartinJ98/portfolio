import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { routes } from './Routes.jsx'


function App() {
  return (
    <>
        <BrowserRouter basename="/portfolio">
            <Header />
            <main>
                <Routes>
                    {routes.map((route) => (
                        <Route key={route.path} path={route.path} element={<route.element />} />
                    ))}
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
