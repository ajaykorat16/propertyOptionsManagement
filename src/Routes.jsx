import './scss/style.scss';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "primereact/resources/themes/rhea/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import NotFound from "pages/NotFound";
import ResetPasswordPage from 'pages/ResetPassword';
import Loader from 'components/Loader/Loader';
import AuthRoutes from 'pages/AuthRoutes/index'
const Trash = React.lazy(() => import("pages/Trash"));
const Contractfullview = React.lazy(() => import("pages/Contractfullview"));
const Contractspage = React.lazy(() => import("pages/Contractspage"));
const Finishespage = React.lazy(() => import("pages/Finishespage"));
const Forgotpassword = React.lazy(() => import("pages/Forgotpassword"));
const Signin = React.lazy(() => import("pages/Signin"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Signin />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />

          <Route path='/dashboard' element={<AuthRoutes />}>
            <Route path="finishes" element={<Finishespage />} />
            <Route path="contracts" element={<Contractspage />} />
            <Route path="contractfullview/:id" element={<Contractfullview />} />
            <Route path="trash" element={<Trash />} />
          </Route>
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
