import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGithubSignIn, ...otherProps }) => (
  <button
    className={`${isGithubSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
