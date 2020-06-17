import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// import { signInWithGoogle, signInWithGithub } from '../../firebase/firebase.utils';
import { signInWithGithub } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <span>Sign in to keep track of your snippets</span>
            <CustomButton onClick={signInWithGithub} isGithubSignIn>
              Sign in with github
            </CustomButton>
      </div>
    );
  }
}

export default SignIn;
