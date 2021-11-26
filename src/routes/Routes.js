import React, { Fragment, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import Spinner from '../components/loader/Spinner'
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Activation from "../screens/Activation";
import ForgetPass from "../screens/ForgetPass";
import PassReset from "../screens/PassReset";
import Login from '../screens/Login'
import Register from '../screens/Register'
// const Landing = lazy(()=> import('../screens/Landing'))
const Markets = lazy(() => import('../screens/Markets'));
// const Activation = lazy(() => import('../screens/Activation'));
// const ForgetPass = lazy(() => import('../screens/ForgetPass'));
// const PassReset = lazy(() => import('../screens/PassReset'));
const Payments = lazy(() => import('../screens/Dashboard/Payments'))
const Exchange = lazy(() => import('../screens/Dashboard/Exchange'))
const RewardCenter = lazy(() => import('../screens/Dashboard/RewardCenter'))
const Security = lazy(() => import('../screens/Dashboard/Security'))
const Settings = lazy(() => import('../screens/Dashboard/Settings'))
const TaskCenter = lazy(() => import('../screens/Dashboard/TaskCenter'))
const Faq = lazy(() => import('../screens/Faq'))
const Trade = lazy(() => import('../screens/Trade'))
// const Register = lazy(() => import('../screens/Register'))
// const Login = lazy(() => import('../screens/Login'))


const Routes = withRouter(({ location }) => {
  return (
    <Router>
      {/* {location.pathname == "/payments" ||
        location.pathname == "/exchange" ||
        location.pathname == "/rewardcenter" ||
        location.pathname == "/settings" ||
        location.pathname == "/taskcenter" ||
        location.pathname == "/security" ? null : ( */}
      {/* <Header /> */}
      {/* )} */}
      <Suspense fallback={<Spinner />}>
        <Header />
        <Switch>
          <PublicRoute exact path="/" component={Register} />
          <PublicRoute path="/activate/:id" component={Activation} />
          <PrivateRoute path="/markets" component={Markets} />
          <PublicRoute path="/faq" component={Faq} />
          <PrivateRoute path="/trade" component={Trade} />
          <PrivateRoute path="/payments" component={Payments} />
          <PrivateRoute path="/exchange" component={Exchange} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/forget" component={ForgetPass} />
          <PublicRoute path="/reset" component={PassReset} />
          <PrivateRoute path="/rewardcenter" component={RewardCenter} />
          <PrivateRoute path="/security" component={Security} />
          <PrivateRoute path="/settings" component={Settings} />
          <PrivateRoute path="/taskcenter" component={TaskCenter} />
        </Switch>
      </Suspense>
      {/* {location.pathname == "/payments" ||
        location.pathname == "/exchange" ||
        location.pathname == "/rewardcenter" ||
        location.pathname == "/settings" ||
        location.pathname == "/taskcenter" ||
        location.pathname == "/security" ? null : ""} */}
    </Router>
  );
});

export default Routes;
