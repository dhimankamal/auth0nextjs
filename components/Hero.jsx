import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';

const Hero = () => {
  const { user } = useUser();

  return (
    <div className="hero my-5 text-center" data-testid="hero">
      <h1 className="mb-4" data-testid="hero-title">
        Welcome to Online Form
      </h1>
      {!user && (
        <div id="qsLoginBtn">
          <a href="/api/auth/login" className="btn btn-primary btn-margin" tabIndex={0} testId="navbar-login-desktop">
            Log in
          </a>
        </div>
      )}
      {user && (
        <div id="qsLoginBtn">
          <a href="/dashboard" className="btn btn-primary btn-margin" tabIndex={0} testId="navbar-login-desktop">
            Go to dashboard
          </a>
        </div>
      )}
    </div>
  );
};

export default Hero;
