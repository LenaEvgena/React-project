import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import SubmitButton from '../common/submitButton/SubmitButton';
import ResetButton from '../common/resetButton/ResetButton';
import { removeAuthName, removeAuthPassword, setAuthName, setAuthPassword } from '../../redux/actions';
import './AuthForm.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

type PropsType = {
  title: string,
  handleClick: () => void,
}

type SchemaType = {
  email: string,
  password: string,
}

const validationSchema: Yup.SchemaOf<SchemaType> = Yup.object({
  email: Yup.string()
    .email()
    .required('This field is required'),
  password: Yup.string()
    .min(4, 'Must be longer than 4 characters')
    .required('This field is required'),
});

const AuthForm: React.FC<PropsType> = ({ title, handleClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userName, password } = useTypedSelector(state => state);

  const handleReset = (): void => {
    if (userName.trim()) {
      dispatch(removeAuthName(''));
    };
    if (password.trim()) {
      dispatch(removeAuthPassword(''));
    }
  };

  const handleClose = (): void => {
    handleReset();
    navigate('/');
  }

  const submit = (values: any, { setSubmitting }: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 400);
  }

  return (
    <div className="auth__modal">
      <div className="modal__wrapper">
        <div className="modal__form">
          {title === 'register' ?
            <>
              <h3>Already have an account?</h3>
              <Link to='/auth' className="modal__form-link">Sign in now</Link>
            </>
            :
            <>
              <h3>Don't have an account?</h3>
              <Link to='/register' className="modal__form-link">Register now</Link>
            </>
          }
        </div>
        <div className="modal">
          <div className="modal-close" onClick={handleClose}></div>
          <div className="modal__content">
            <h2 className="modal__title">{title}</h2>
          </div>

          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={validationSchema}
            onSubmit={submit}
          >
            {({ isSubmitting }) => (
              <Form className="auth__form">
                <div className="form_email">
                  <label htmlFor="form-name" className="form-title">User email
                    <Field className="form-input" id="form-name" type="email" name="email" />
                    <ErrorMessage name="email" component="div" className="form__error" />
                  </label>
                </div>
                <div className="form_password">
                  <label htmlFor="form-pass" className="form-title">Password
                    <Field className="form-input" id="form-pass" type="password" name="password" />
                    <ErrorMessage name="password" component="div" className="form__error" />
                  </label>
                </div>
                <div className="modal-button">
                  <ResetButton text="Reset" handleClick={handleReset} />
                  <SubmitButton text={title} handleClick={handleClick} />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

// onChange = {(e) => dispatch(setAuthName(e.target.value))
// onChange = {(e) => dispatch(setAuthPassword(e.target.value))}
