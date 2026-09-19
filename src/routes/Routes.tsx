import { BrowserRouter, Routes, Route} from 'react-router-dom'
import App from '../App'

import Home from '../pages/Home'
import Gallery from '../pages/Gallery'
import Contact from '../pages/Contact'
import CoursesDetails from '../pages/CourseDetails'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<Home />} />
                    <Route path='Galeria' element={<Gallery />} />
                    <Route path='Contacto' element={<Contact />} />
                    <Route path='detalhes/:id' element={<CoursesDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}