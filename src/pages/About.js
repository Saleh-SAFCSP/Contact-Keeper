import { Flex, VStack, Text, Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

const About = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onClick = async () => {
    const request = await fetch('/api/v1/auth/login', {
      headers: {
        Authorization: 'Basic ' + window.btoa(username + ':' + password),
      },
      method: 'POST',
    });

    const data = await request.json();
    alert(data.message);
    if (request.status === 200) {
      // redirect to home page
    } else {
      // show error message
    }
  };
  return (
    <Flex height="95vh" justifyContent="center" alignItems="center">
      <VStack
        border="solid 2px"
        height="30rem"
        width="40rem"
        borderRadius="0.5rem"
        spacing="2.5rem"
      >
        <Text fontSize="3rem" marginTop="2rem !important">
          About
        </Text>
        <Text fontWeight="bold" padding="2rem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec dolor
          mauris. Proin vitae dui posuere, malesuada lectus in, lacinia augue.
          Morbi eu vehicula enim. Vivamus bibendum dignissim enim, lobortis
          laoreet mauris dapibus ac. Proin vestibulum dolor magna, id
          sollicitudin nulla auctor at. Aenean finibus dignissim facilisis.
          Morbi porta laoreet justo eu malesuada. Ut arcu dui, varius eu
          sagittis et, malesuada quis enim. Maecenas mollis augue sapien, in
          tempor nunc venenatis nec. Aenean sit amet elementum ex, ac tristique
          lectus. Donec sed quam nisi. Maecenas hendrerit molestie mauris nec
          sodales. Proin consectetur molestie urna, tempus scelerisque nulla
          consectetur nec.
        </Text>
      </VStack>
    </Flex>
  );
};

export default About;
