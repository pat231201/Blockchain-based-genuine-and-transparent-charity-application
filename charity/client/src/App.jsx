import React from "react";
import { Route, Router, Routes } from "react-router-dom";

import { Sidebar, Navbar } from "./components";
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";
// Login,
//   Signup,
const App = () => {
  return (
    <>
      <Routes>
        {/* <Route exact path="/" element={<CampaignDetails />} /> */}
        <Route exact path="/home" element={<Home />} />
        {/* <Route exact path="/signup" element={<Signup />} /> */}
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="home/create-campaign" element={<CreateCampaign />} />
        <Route exact path="create-campaign" element={<CreateCampaign />} />

        <Route
          exact
          path="campaign-details/:id/create-campaign"
          element={<CreateCampaign />}
        />
        <Route
          exact
          path="/campaign-details/:id"
          element={<CampaignDetails />}
        />
      </Routes>
    </>
    // </div>
    // </div>
  );
};

export default App;
