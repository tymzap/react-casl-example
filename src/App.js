import { Route, Routes, useNavigate } from "react-router-dom";

import Login from "./LogIn";
import ArticleList from "./ArticleList";
import { useEffect, useState } from "react";
import { UserContext } from "./User.context";
import { AbilityContext } from "./ability/Ability.context";
import { defineAbility } from "./ability/defineAbility";
import { Ability } from "@casl/ability";

const App = () => {
  const [user, setUser] = useState();
  const logOut = () => {
    setUser(undefined);
  };

  const ability = user ? defineAbility(user) : new Ability();

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
      <AbilityContext.Provider value={ability}>
        <Routes>
          <Route path={"/log-in"} element={<Login />} />
          <Route path={"/"} element={<ArticleList />} />
        </Routes>
      </AbilityContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
