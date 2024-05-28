import { useLocation, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Styles
import './scss/styles.scss'

// pages
import IntroPage from './pages/IntroPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectSinglePage from './pages/ProjectSinglePage'
import PageNotFound from './pages/PageNotFound'

const App = () => {

    const location = useLocation();

    return (
        <>
        {location.pathname === '/' ?
            <IntroPage />
        :
           <>
            <Header />
            <Routes>
                <Route path="/home" exact element={ <HomePage /> } />
                <Route path="/about" element={ <AboutPage /> } />
                <Route path="/projects" element={ <ProjectsPage />} />
                <Route path="/projects/:slug" element={ <ProjectSinglePage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
            </>
        }
        </>
    )
}

export default App
