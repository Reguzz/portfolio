import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Outlet,
} from "react-router-dom";
import { Home, NotFound } from "./pages";
import i18n from "i18next"; // make sure to import i18n
import { useEffect } from "react";

function LangWrapper() {
  const { lang } = useParams();
  const allowedLangs = ["en", "it"]; // specify allowed languages here
  const langi18n = i18n.language;
  if (lang !== langi18n) {
    i18n.changeLanguage(lang);
  }
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  if (!allowedLangs.includes(lang)) {
    return <NotFound />;
  }

  return <Outlet />;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio/:lang" element={<LangWrapper />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
