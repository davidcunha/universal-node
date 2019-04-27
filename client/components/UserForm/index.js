import React from 'react';
import PropTypes from 'prop-types';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import formSchema from './schema';

const UserForm = props => (
  <Formik
    initialValues={props.data}
    validationSchema={formSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <Field type="text" name="name" placeholder="Name" />
        <ErrorMessage name="name" component="div" />
        <div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </div>
      </Form>
    )}
  </Formik>
);

UserForm.propTypes = {
  data: PropTypes.object,
};

export default UserForm;
