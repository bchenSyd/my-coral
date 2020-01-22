import React from "react";
import { connect } from "react-redux";
import { Box } from "@rebass/grid";
import { compose } from "recompose";
import { Field, reduxForm, formValueSelector } from "redux-form";

const validate = values => {
  const errors = {};
  if (!values.userName) {
    errors.userName = "username is required";
  } else if (values.userName.length < 3) {
    errors.userName = "username must be at least 3 characters";
  }
  return errors;
};

class CustomerInfo extends React.Component {
  goBack = () => {
    const { history } = this.props;
    history.push("/");
  };
  render() {
    const { handleSubmit, submitting, searchBy } = this.props;

    console.log("current search option is ", searchBy);

    return (
      <div>
        <h2>Search Page</h2>
        <button onClick={this.goBack}>go back</button>
        <Box mt="40px">
          <form onSubmit={handleSubmit}>
            <Field
              name="birthDate"
              type="date"
              component="input"
              label="Date of birth"
            />

            <div>
              <button type="submit" disabled={submitting}>
                Submit
              </button>
            </div>
          </form>
        </Box>
      </div>
    );
  }
}

const enhance = compose(
  connect(state => {
    return {
      /* do this if you want to initialize from redux store */
      initialValues: {
        searchBy: "byOrganization",
        userName: "bochen",
        address: {
          street: "275 Kent St",
          state: "nsw",
          postcode: 2000
        }
      },
      searchBy: formValueSelector("sampleForm")(state, "searchBy")
    };
  }),
  reduxForm({
    form: "createComplaintForm",
    // if
    // 1. you dont' need to populate initial values from redux store;
    // 2. you don't have 2 forms sharing the same name (only execute once)
    // you can pass initialVAlues here;
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
  })
);

export default enhance(CustomerInfo);
