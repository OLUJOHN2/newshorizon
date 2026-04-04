// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="features/auth/signin" element={<div>Sign In</div>} />
        <Route path="/profile" element={<div>Profile</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
