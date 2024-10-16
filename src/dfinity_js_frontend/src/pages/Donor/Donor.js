import React, { useCallback, useEffect, useState } from "react";
import { getDonorProfileByOwner } from "../../utils/donorFund"; 
import { Notification } from "../../components/utils/Notifications";
import Wallet from "../../components/Wallet";
import DonorDashboard from "./DonorDashboard";
import CreateDonorProfile from "../../components/Donor/CreateDonorProfile"
import Loader from "../../components/utils/Loader";
import Cover from "../../components/utils/Cover";
import { login } from "../../utils/auth";
import { Nav } from "react-bootstrap";

const Donor = () => {
  const [donor, setDonor] = useState({});
  const [loading, setLoading] = useState(false);

  const isAuthenticated = window.auth.isAuthenticated;

  const fetchDonor = useCallback(async () => {
    try {
      setLoading(true);
      setDonor(
        await getDonorProfileByOwner().then(async (res) => {
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
    fetchDonor();
  }, []);

  return (
    <>
      <Notification />
      {isAuthenticated ? (
        !loading ? (
          donor?.name ? (
            <>
              <Nav className="justify-content-end pt-3 pb-5 mr-4">
                <Nav.Item>
                  <Wallet />
                </Nav.Item>
              </Nav>
              <main>
                <DonorDashboard donor={donor} />
              </main>
            </>
          ) : (
            <CreateDonorProfile fetchDonor={fetchDonor} />
          )
        ) : (
          <Loader />
        )
      ) : (
        <Cover login={login}/>
      )}
    </>
  );
};

export default Donor;