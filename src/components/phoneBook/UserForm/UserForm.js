import {
  FieldForm,
  ContactForm,
  Wrap,
  LabelForm,
  Buttons,
  ErrMessage,
} from './UserForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import toast, { Toaster } from 'react-hot-toast';
import { getCreateFormSchema } from 'redux/auth/validation';

const schema = getCreateFormSchema();

export const UserForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      toast.error(`${values.name} already exists.`);
      resetForm();
      return;
    }

    dispatch(addContact(values));

    toast.success(`${values.name} has succesfully added to your phonebook`);
    resetForm();
  };

  return (
    <div>
      <Wrap
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <ContactForm>
          <LabelForm>
            Name
            <FieldForm type="text" name="name" />
            <ErrMessage name="name" component="p" />
          </LabelForm>
          <LabelForm>
            Phone number
            <FieldForm type="tel" name="number" required />
            <ErrMessage name="number" component="p" />
          </LabelForm>
          <Buttons type="submit">Add to contact</Buttons>
          <Toaster />
        </ContactForm>
      </Wrap>
    </div>
  );
};

export default UserForm;
