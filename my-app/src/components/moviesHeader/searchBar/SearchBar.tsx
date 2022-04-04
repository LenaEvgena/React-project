import React from 'react';
import classNames from 'classnames';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Button from '../../common/button/Button';
import './SearchBar.scss';

type PropsType = {
  isBusy: boolean,
  handleClick: (word: string) => void,
  handleResetClick: () => void,
}

type SchemaType = {
  word: string,
}

const schema = Yup.string();

const SearchBar: React.FC<PropsType> = ({ isBusy, handleClick, handleResetClick }) => {
  let cls = classNames('search__button', { 'busy': isBusy });

  const submit = (values: SchemaType, { setSubmitting }: FormikHelpers<SchemaType>) => {
    handleClick(values.word);
  }

  return (
    <div className="search">
      <Formik
        initialValues={{
          word: '',
        }}
        validationSchema={schema}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form className="search__form">
            <Field className="search__field" type="text" placeholder="What do you want to watch? Enter a keyword..." name="word" />
            <Button className='search__button search__button-reset' type='reset' handleClick={handleResetClick} />
            <Button className={cls} type='submit' text='Search' />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SearchBar;
