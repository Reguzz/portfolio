import "./App.css";
import {
  HashRouter,
  Routes,
  Route,
  useParams,
  Outlet,
  Navigate,
} from "react-router-dom";
import {
  Home,
  Cv,
  NotFound,
  Services,
  Resume,
  Work,
  Contact,
} from "./pages";
import i18n from "i18next"; // make sure to import i18n
import { useEffect } from "react";
import { Header, StairTransition, PageTransition } from "../components";

function Wrapper() {
  return (
    <>
      <Header />
      <StairTransition />
      <PageTransition>
        <Outlet />
      </PageTransition>
    </>
  );
}

function LangWrapper() {
  const { lang } = useParams();
  const allowedLangs = ["en", "it"]; // specify allowed languages here
  const langi18n = i18n.language;

  useEffect(() => {
    if (allowedLangs.includes(lang)) {
      if (lang !== langi18n) {
        i18n.changeLanguage(lang);
        document.documentElement.lang = lang;
      }
    }
  }, [lang]);

  if (!allowedLangs.includes(lang)) {
    return <NotFound />;
  }

  return <Outlet />;
}

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<Wrapper />}>
            <Route path="/" element={<Navigate to="/it" replace />} />
            <Route path="/:lang" element={<LangWrapper />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="cv" element={<Cv />} />
              <Route path="services" element={<Services />} />
              <Route path="resume" element={<Resume />} />
              <Route path="work" element={<Work />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
