import Domov from './pages/Domov.jsx'
import OMne from './pages/OMne.jsx'
import Skills from './pages/Skills.jsx'
import Projekty from './pages/Projekty.jsx'

export const routes = [
    { label: 'Domov', path: '/', element: Domov },
    { label: 'O mne', path: '/o-mne', element: OMne },
    { label: 'Skills', path: '/skills', element: Skills },
    { label: 'Projekty', path: '/projekty', element: Projekty },
]