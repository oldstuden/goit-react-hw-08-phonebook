import { Heading } from '@chakra-ui/react';
import {
  Buttons,
  ContactForm,
  ErrMessage,
  FieldForm,
  LabelForm,
  Wrap,
} from 'components/phoneBook/UserForm/UserForm.styled';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { getLoginSchema } from 'redux/auth/validation';

const Login = () => {
  const dispatch = useDispatch();
  const loginSchema = getLoginSchema();

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(logIn({ email, password }));
    toast.success(`Your account ${email} has been found, Login`);
    resetForm();
  };
  return (
    <>
      <Heading as="h2" size="xl">
        Login page
      </Heading>
      <Wrap
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        <ContactForm>
          <LabelForm>
            Email
            <FieldForm name="email" required />
            <ErrMessage name="email" component="p" />
          </LabelForm>

          <LabelForm>
            Password
            <FieldForm name="password" required />
            <ErrMessage name="password" component="p" />
          </LabelForm>

          <Buttons type="submit">Login</Buttons>
          <Toaster />
        </ContactForm>
      </Wrap>
    </>
  );
};

export default Login;
