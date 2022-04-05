import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Button from '../common/button/Button';
import './AuthForm.scss';

type PropsType = {
  title: string,
  handleClick: (values: SchemaType) => void,
}

export type SchemaType = {
  email: string,
  password: string,
}

const validationSchema: Yup.SchemaOf<SchemaType> = Yup.object({
  email: Yup.string()
    .email()
    .required('This field is required'),
  password: Yup.string()
    .min(6, 'Must be longer than 6 characters')
    .required('This field is required'),
});

const AuthForm: React.FC<PropsType> = ({ title, handleClick }) => {
  const navigate = useNavigate();

  const handleClose = (): void => {
    navigate('/');
  }

  const submit = (values: SchemaType, { setSubmitting }: FormikHelpers<SchemaType>) => {
    handleClick(values);
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
                  <Button type='reset' text='reset' className='reset__button' />
                  <Button type='submit' text={title} className='submit__button' />
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


