import { Flex, VStack, Text, Input, Button, useToast } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { errorToast, successToast } from '../util/toasts';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login, isLogged } = useContext(AuthContext);

  useEffect(() => {
    if (isLogged) {
      navigate('/');
    }
  }, []);

  const onClick = () => {
    login(username, password);
  };
  return (
    <Flex height="95vh" justifyContent="center" alignItems="center">
      <VStack
        border="solid 2px"
        height="30rem"
        width="40rem"
        spacing="5rem"
        padding="5"
        borderRadius="0.5rem"
      >
        <Text fontSize="3rem">Login !</Text>
        <VStack width="80%" spacing="1rem">
          <Input
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            value={username}
          />
          <Input
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            value={password}
          />
        </VStack>
        <Button width="80%" p="5" fontSize="1.2rem" onClick={onClick}>
          Login !
        </Button>
      </VStack>
    </Flex>
  );
};

export default Login;
