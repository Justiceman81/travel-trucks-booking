import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Loader from "./components/Loader/Loader.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CampersCatalogPage = lazy(() =>
  import("./pages/CampersCatalogPage/CampersCatalogPage.jsx")
);
const CampersDetailsPage = lazy(() =>
  import("./pages/CampersDetailsPage/CampersDetailsPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx")
);
const CamperFeatures = lazy(() =>
  import("./components/CamperFeatures/CamperFeatures.jsx")
);
const CamperReviews = lazy(() =>
  import("./components/CamperReviews/CamperReviews.jsx")
);

import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CampersCatalogPage />} />
            <Route path="/catalog/:id" element={<CampersDetailsPage />}>
              <Route path="features" element={<CamperFeatures />} />
              <Route path="reviews" element={<CamperReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
