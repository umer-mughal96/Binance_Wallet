import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Landing from '../screens/Landing';
import Markets from "../screens/Markets";
import Payments from "../screens/Dashboard/Payments";
import Exchange from "../screens/Dashboard/Exchange";
import RewardCenter from "../screens/Dashboard/RewardCenter";
import Security from "../screens/Dashboard/Security";
import Settings from "../screens/Dashboard/Settings";
import TaskCenter from "../screens/Dashboard/TaskCenter";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/markets" component={Markets} />
        <Route path="/payments" component={Payments} />
        <Route path="/exchange" component={Exchange} />
        <Route path="/rewardcenter" component={RewardCenter} />
        <Route path="/security" component={Security} />
        <Route path="/settings" component={Settings} />
        <Route path="/taskcenter" component={TaskCenter} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
