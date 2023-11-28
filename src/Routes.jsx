import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Trash = React.lazy(() => import("pages/Trash"));
const Contractfullview = React.lazy(() => import("pages/Contractfullview"));
const Contractspage = React.lazy(() => import("pages/Contractspage"));
const Finishespage = React.lazy(() => import("pages/Finishespage"));
const Forgotpassword = React.lazy(() => import("pages/Forgotpassword"));
const Signin = React.lazy(() => import("pages/Signin"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/finishespage" element={<Finishespage />} />
          <Route path="/contractspage" element={<Contractspage />} />
          <Route path="/contractfullview" element={<Contractfullview />} />
          <Route path="/trash" element={<Trash />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
