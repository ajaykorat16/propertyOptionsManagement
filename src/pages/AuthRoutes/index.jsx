import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { baseURL } from "../../lib";
import axios from "axios";
import { useAuth } from "contexts/AuthContext";
import Spinner from "components/Spinner/Spinner";

const AuthRoutes = () => {
  const [ok, setOk] = useState(false);
  const { auth } = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(`${baseURL}/user/user-auth`);
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };

    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
};

export default AuthRoutes;
