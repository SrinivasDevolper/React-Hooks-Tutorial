import React from "react";
// import TodoList from "./useState/index.js";
// import UseEffectBasics from "./useEffect/index.js";
// import UseContextBasics from "./useContext/index";
// import UseReduceBasics from "./useReduceBasics/index";
// import UseReduceFinal from "./useReduceFinal/index";
// import OwnUseReducer from "./useReduceFinal/ownUseReducer";
// import BasicsUseState from "./reactBasics/index";
// import UseRefBasics from "./useReftBasic/UseRefBasics";
// import UseRefFinal from "./useRefFinal/UseRefFinal";
// import UseMemoBasic from "./useMemoBasic/useMemoBasic";
// import Temp from "./useMemoBasic/temp";
// import FirstCustomHooks from "./customHooks/firstCustomHooks";
// import ParanetComonent from "./useCallback/paranetComonent";
import { Routes, Route } from "react-router-dom";
import HomeContent from "./components/home";
// import AboutContent from "./components/about";
import ContactContent from "./components/contact";
import Projects from "./components/projects";
import FeaturedProjects from "./components/FeaturedProjects";
import NewProjects from "./components/NewProjects";
import Navbar from "./components/navbar";
import UserData from "./components/userData";
import User from "./components/user";
import Protected from "./components/protected";
import Login from "./components/Login";
import GetSuscribe from "./components/GetSuscribe";
import NotFound from "./components/notFound";
import { AuthProvider } from "./components/Auth";
const LazyAbout = React.lazy(() => import("./components/about"));
const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route
          path="/about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="/contact" element={<ContactContent />} />
        <Route path="/projects" element={<Projects />}>
          <Route index element={<FeaturedProjects />} />
          <Route path="featured" element={<FeaturedProjects />} />
          <Route path="new-projects" element={<NewProjects />} />
        </Route>
        <Route
          path="/users"
          element={
            <Protected>
              <UserData />
            </Protected>
          }
        />
        <Route path="/users/:userId" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/suscribe" element={<GetSuscribe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
};
export default App;

{
  /* <UseMemoBasic />
      <Temp /> */
}
{
  /* <FirstCustomHooks /> */
}
