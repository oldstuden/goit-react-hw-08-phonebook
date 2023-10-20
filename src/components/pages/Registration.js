import { Heading } from '@chakra-ui/react';
import {
  Buttons,
  ContactForm,
  ErrMessage,
  FieldForm,
  LabelForm,
  Wrap,
} from 'components/phoneBook/UserForm/UserForm.styled';
import { ErrorMessage } from 'formik';
import { useAuthUser } from 'hooks/useAuthUser';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { getRegisterSchema } from 'redux/auth/validation';

const Registration = () => {
  const dispatch = useDispatch();
  const registerSchema = getRegisterSchema();

  const { userName } = useAuthUser();

  const handleSubmit = (values, { resetForm }) => {
    const { name, email, password } = values;

    if (userName) {
      toast.error(`Email with name ${name} already exists.`);
      resetForm();
      return;
    }

    dispatch(register({ name, email, password }));

    toast.success(`Your account with name ${name}, succesfully created`);
    resetForm();
  };
  return (
    <>
      <Heading as="h2" size="xl">
        Registration
      </Heading>
      <Wrap
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        <ContactForm>
          <LabelForm>
            Name
            <FieldForm
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrMessage name="name" component="p" required />
          </LabelForm>

          <LabelForm>
            Email
            <FieldForm name="email" required />
            <ErrMessage name="email" component="p" />
          </LabelForm>

          <LabelForm>
            Password
            <FieldForm name="password" required />
            <ErrorMessage name="password" component="p" />
          </LabelForm>

          <Buttons type="submit">Sign up</Buttons>
          <Toaster />
        </ContactForm>
      </Wrap>
    </>
  );
};

export default Registration;
