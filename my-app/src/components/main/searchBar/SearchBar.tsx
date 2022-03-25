import React from 'react';
import { useDispatch } from 'react-redux';
import { setMoviesKeyword } from '../../../redux/actions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import classNames from 'classnames';
import Button from '../../common/button/Button';
import './SearchBar.scss';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';

type PropsType = {
  isBusy: boolean,
  handleClick: () => void,
  handleResetClick: () => void,
}

// type SchemaType = {
//   word: string,
// }

// let schema = Yup.string();

const SearchBar: React.FC<PropsType> = ({ isBusy, handleClick, handleResetClick }) => {
  const dispatch = useDispatch();
  const { keyword } = useTypedSelector((state) => state);
  let cls = classNames('search__button', { 'busy': isBusy });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMoviesKeyword(e.target.value));
  }

  // const submit = (values: SchemaType, { setSubmitting }: FormikHelpers<SchemaType>) => {
  //   handleClick();
  // }

  return (
    <div className="search">

      {/* <Formik
        initialValues={{
          word: '',
        }}
        validationSchema={schema}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form className="search__form">

            <Field className="search__field" type="text" placeholder="What do you want to watch? Enter a keyword..." name="word" />
            <ErrorMessage name="word" component="div" className="form__error" />

            <Button className='search__button search__button-reset' type='button' handleClick={handleResetClick} />
            <Button className={cls} type='submit' text='Search' />
          </Form>
        )}
      </Formik> */}


      <input className="search__field" type="text" placeholder="What do you want to watch? Enter a keyword..." value={keyword} onChange={handleChange} />
      <Button className='search__button search__button-reset' type='button' handleClick={handleResetClick} />
      <Button className={cls} type='submit' text='Search' handleClick={handleClick} />
    </div>
  );
}

export default SearchBar;
