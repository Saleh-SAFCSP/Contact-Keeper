import { Flex, VStack, Text, Input, Button, useToast } from '@chakra-ui/react';
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { errorToast, successToast } from '../util/toasts';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const { register, isLogged } = useContext(AuthContext);

  useEffect(() => {
    if (isLogged) {
      navigate('/');
    }
  }, []);

  const onClick = async () => {
    register(email, password, username, password2);
  };
  return (
    <Flex height="95vh" justifyContent="center" alignItems="center">
      <VStack
        border="solid 2px"
        width="40rem"
        spacing="5rem"
        padding="5"
        borderRadius="0.5rem"
      >
        <Text fontSize="3rem">Register !</Text>
        <VStack width="80%" spacing="1rem">
          <Input
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            value={username}
          />
          <Input
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            value={email}
          />
          <Input
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            value={password}
          />
          <Input
            onChange={e => setPassword2(e.target.value)}
            type="password"
            placeholder="Confirm Password"
            value={password2}
          />
        </VStack>
        <Button width="80%" p="5" fontSize="1.2rem" onClick={onClick}>
          Register !
        </Button>
      </VStack>
    </Flex>
  );
};

export default Register;
