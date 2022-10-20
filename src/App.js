import { Route, Routes } from "react-router-dom";

import Login from "./LogIn";
import ArticleList from "./ArticleList";

const App = () => {
  return (
    <Routes>
      <Route path={"/log-in"} element={<Login />} />
      <Route path={"/"} element={<ArticleList />} />
    </Routes>
  );
};

export default App;
