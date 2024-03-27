import { useState, createContext } from "react";
import { Login } from "./components/Login";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./components/Home";

export const AuthContext = createContext(null);

function App() {
  const [loggedIn, setLoggedIn] = useState(null);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
