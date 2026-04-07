// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ArticlePage from "./pages/ArticlePage";
import WriterDashboard from "./pages/WriterDashboard";
import SignIn from "./features/auth/SignIn";
import SignUpChoice from "./features/auth/SignUpChoice";
import SignUpReader from "./features/auth/SignUpReader";
import SignUpWriter from "./features/auth/SignUpWriter";

function Layout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUpChoice />} />
        <Route path="/auth/signup/reader" element={<SignUpReader />} />
        <Route path="/auth/signup/writer" element={<SignUpWriter />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Dashboard has its own sidebar — no shared Navbar */}
        <Route path="/dashboard" element={<WriterDashboard />} />

        {/* All other routes share the Navbar */}
        <Route path="/*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}
