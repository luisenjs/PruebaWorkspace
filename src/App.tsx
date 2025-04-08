import { BrowserRouter, Route, Routes } from "react-router"
import { MainLayout } from "./layout/mainlayout"
import { General } from "./pages/general"
import { Users } from "./pages/users"
import { Biling } from "./pages/biling"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<General />} />
          <Route path="/users" element={<Users />} />
          <Route path="/biling" element={<Biling />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
