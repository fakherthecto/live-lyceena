import Accueil from "../Accueil";
import LandingPage from "../LandingPage";
import ProfLivePage from "../ProfLivePage";
import Test from "../Test";

export const publicURLS = [
  { path: "/:idLive/:attendant", Component: LandingPage },
  { path: "/proflivelp/:idLive", Component: ProfLivePage },
  { path: "/test/test", Component: Test },
  { path: "/", Component: Accueil },
];
