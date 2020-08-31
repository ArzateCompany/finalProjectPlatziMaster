import React from 'react';
import Context from '../components/Context';

import Logo from '../../public/assets/logo/logo.svg';
import LoginForm from '../components/organisms/LoginForm';
import PrivacyPolicy from '../components/atoms/PrivacyPolicy';

const Login = () => (
  <div className="loginPage">
    <section className="wrapper loginPage__brand">
      <div className="row loginPage__brand-entry">
        <div className="column-6">
          <img src={Logo} alt="Logotipo" />
        </div>
      </div>
      <div className="row loginPage__loginForm">
        <div className="column-6">
        <Context.Consumer>
          {
            ({ activateAuth, userLogedState }) => <LoginForm activateAuth={activateAuth} userLogedState={userLogedState} />
          }
        </Context.Consumer>
        </div>
      </div>
    </section>
    <section>
      <div className="wrapper">
        <div className="row">
          <PrivacyPolicy />
        </div>
      </div>
    </section>
  </div>
);

export default Login;
