import { Route, Routes, useNavigate } from "react-router-dom";

import Login from "./LogIn";
import ArticleList from "./ArticleList";
import { useEffect, useState } from "react";
import { UserContext } from "./User.context";

const App = () => {
  const [user, setUser] = useState();
  const logOut = () => {
    setUser(undefined);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      navigate("/log-in");
    }
  }, [user, navigate]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        logOut,
      }}
    >
      <Routes>
        <Route path={"/log-in"} element={<Login />} />
        <Route path={"/"} element={<ArticleList />} />
      </Routes>
    </UserContext.Provider>
  );
};

export default App;
