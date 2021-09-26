import React, { Fragment, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Landing from "../screens/Landing";
const Landing = lazy(()=> import('../screens/Landing'))
const Markets = lazy(()=> import('../screens/Markets'));
const Payments = lazy(()=> import('../screens/Dashboard/Payments'))
const Exchange = lazy(()=> import('../screens/Dashboard/Exchange'))
const RewardCenter = lazy(()=> import('../screens/Dashboard/RewardCenter'))
const Security = lazy(()=> import('../screens/Dashboard/Security'))
const Settings = lazy(()=> import('../screens/Dashboard/Settings'))
const TaskCenter = lazy(()=> import('../screens/Dashboard/TaskCenter'))
const Faq = lazy(()=> import('../screens/Faq'))
const Trade = lazy(()=> import('../screens/Trade'))
const Register = lazy(()=> import('../screens/Register'))
const Login = lazy(()=> import('../screens/Login'))


const Routes = withRouter(({ location }) => {
  return (
    <Fragment>
      {location.pathname == "/payments" ||
      location.pathname == "/exchange" ||
      location.pathname == "/rewardcenter" ||
      location.pathname == "/settings" ||
      location.pathname == "/taskcenter" ||
      location.pathname == "/security" ? null : (
        <Header />
      )}
      <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/markets" component={Markets} />
        <Route path="/faq" component={Faq} />
        <Route path="/trade" component={Trade} />
        <Route path="/payments" component={Payments} />
        <Route path="/exchange" component={Exchange} />
        <Route path="/signup" component={Register} />
        <Route path="/login" component={Login} />

        <Route path="/rewardcenter" component={RewardCenter} />
        <Route path="/security" component={Security} />
        <Route path="/settings" component={Settings} />
        <Route path="/taskcenter" component={TaskCenter} />
      </Switch>
      </Suspense>
        {location.pathname == "/payments" ||
        location.pathname == "/exchange" ||
        location.pathname == "/rewardcenter" ||
        location.pathname == "/settings" ||
        location.pathname == "/taskcenter" ||
        location.pathname == "/security" ? null : ""}
    </Fragment>
  );
});

export default Routes;
