import { Routes, Route } from "react-router-dom";
import { InventoryPage, LoginPage } from "../pages";
import { useContext } from 'react';
import { AuthContext } from "../context";

const AppRouter = () => {

  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <Routes>
        <Route path="/" index element={!isLoggedIn ? <LoginPage /> : <InventoryPage />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </>
  );
};

export default AppRouter;
