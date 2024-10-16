import React, { useCallback, useEffect, useState } from "react";
import { getCharityProfileByOwner } from "../../utils/donorFund";
import { Notification } from "../../components/utils/Notifications";
import Wallet from "../../components/Wallet";
import CharityDashboard from "./CharityDashboard";
import CreateCharityProfile from "../../components/Charity/CreateCharityProfile";
import Loader from "../../components/utils/Loader";
import Cover from "../../components/utils/Cover";
import { login } from "../../utils/auth";
import { Nav } from "react-bootstrap";

const Charity = () => {
  const [charity, setCharity] = useState({});
  const [loading, setLoading] = useState(false);

  const isAuthenticated = window.auth.isAuthenticated;

  const fetchCharity = useCallback(async () => {
    try {
      setLoading(true);
      setCharity(
        await getCharityProfileByOwner().then(async (res) => {
          console.log(res);
          return res.Ok;
        })
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  });

  useEffect(() => {
    fetchCharity();
  }, []);

  return (
    <>
      <Notification />
      {isAuthenticated ? (
        !loading ? (
          charity?.name ? (
            <>
              <Nav className="justify-content-end pt-3 pb-5 mr-4">
                <Nav.Item>
                  <Wallet />
                </Nav.Item>
              </Nav>
              <main><CharityDashboard charity={charity} /></main>
            </>
          ) : (
            <CreateCharityProfile fetchCharity={fetchCharity} />
          )
        ) : (
          <Loader />
        )
      ) : (
        <Cover login={login} />
      )}
    </>
  );
};

export default Charity;
