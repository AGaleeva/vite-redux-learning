import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { HomePageWrapper, UserForm, UserFormName } from "./styles";
import Input from "components/input";
import Button from "components/button";
import { usersActions } from 'store/redux/users/userSlice';

function Home() {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      firstLastName: "",
      age: "",
      jobTitle: "",
    },
    onSubmit: (values, actions) => {
      dispatch(usersActions.addUser(values));
      actions.resetForm();
    },
  })
  return (
    <HomePageWrapper>
      <UserForm onSubmit={formik.handleSubmit}>
        <UserFormName>Create user</UserFormName>
        <Input
          name="firstLastName"
          value={formik.values.firstLastName}
          label="First/Last name"
          onChange={formik.handleChange}
        />
        <Input
          name="age"
          value={formik.values.age}
          label="Age"
          onChange={formik.handleChange}
        />
        <Input
          name="jobTitle"
          value={formik.values.jobTitle}
          label="Job title"
          onChange={formik.handleChange}
        />
        <Button name="Create" type="submit" />
      </UserForm>
    </HomePageWrapper>
  )
}

export default Home;