import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from './pages/Home'
import Signin from './pages/Signin'
import SignUP from "./pages/SignUP"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Header from "./pages/components/Header"
export default function App() {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/sign-in" element={<Signin/>}/>
    <Route path="/sign-up" element={<SignUP/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/profile" element={<Profile/>}/>
  </Routes>
  </BrowserRouter>
  );
}
