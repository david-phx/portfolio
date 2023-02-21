import { Routes, Route, Navigate } from 'react-router-dom'
import Contact from './Contact'
import Layout from './Layout'
import Portfolio from './Portfolio'
import Resume from './Resume'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Portfolio />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Route>
    </Routes>
  )
}

export default App
