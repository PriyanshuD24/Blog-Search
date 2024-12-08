import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Blog from "./components/Blog";

const App = () => {
  return <AppRoutes />;
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
