import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "../pages/homepage";
import { List } from "../pages/list";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
};