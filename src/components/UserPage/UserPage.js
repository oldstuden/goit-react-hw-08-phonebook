import { Button } from '@chakra-ui/react';
import { Container, Topic } from 'components/AuthNavMenu/AythNavMenu.styled';
import { useAuthUser } from 'hooks/useAuthUser';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserPage = () => {
  const dispatch = useDispatch();
  const { userName } = useAuthUser();

  return (
    <Container>
      <Topic>
        Welcome <span>{userName}</span>
      </Topic>
      <Button
        colorScheme="teal"
        variant="outline"
        type="button"
        onClick={() => dispatch(logOut)}
      ></Button>
    </Container>
  );
};
