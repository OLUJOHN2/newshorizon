// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import SignIn from "./features/auth/SignIn";
import SignUpChoice from "./features/auth/SignUpChoice";
import SignUpReader from "./features/auth/SignUpReader";
import SignUpWriter from "./features/auth/SignUpWriter";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUpChoice />} />
        <Route path="/auth/signup/reader" element={<SignUpReader />} />
        <Route path="/auth/signup/writer" element={<SignUpWriter />} />
      </Routes>
    </BrowserRouter>
  );
}
