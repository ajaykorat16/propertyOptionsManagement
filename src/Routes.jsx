import './scss/style.scss';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import AddnewfinishesPage from "pages/Addnewfinishes";
import EditcategorypagePage from "pages/Editcategorypage";
import EditPage from "pages/EditPage";
const Trash = React.lazy(() => import("pages/Trash"));
const Contractfullview = React.lazy(() => import("pages/Contractfullview"));
const Contractspage = React.lazy(() => import("pages/Contractspage"));
const Finishespage = React.lazy(() => import("pages/Finishespage"));
const Forgotpassword = React.lazy(() => import("pages/Forgotpassword"));
const Signin = React.lazy(() => import("pages/Signin"));
import "primereact/resources/themes/rhea/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Finishespage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/contractspage" element={<Contractspage />} />
          <Route path="/contractfullview" element={<Contractfullview />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/newfinishes" element={<AddnewfinishesPage />} />
          <Route path="/editcategory" element={<EditcategorypagePage />} />
          <Route path="/editfinish" element={<EditPage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
