import React, { useEffect, useState } from 'react';
import {
  Flex,
  VStack,
  Text,
  Input,
  Button,
  useToast,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { errorToast, successToast } from '../util/toasts';

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [newContactName, setNewContactName] = useState('');
  const [newContactPhone, setNewContactPhone] = useState('');
  useEffect(() => {
    const getContacts = async () => {
      const response = await fetch('/api/v1/contact');
      const data = await response.json();
      if (response.status === 200) {
        setContacts(data);
      }
    };
    getContacts();
  }, [contacts]);
  const toast = useToast();

  const onClick = async () => {
    const newContact = { name: newContactName, phoneNumber: newContactPhone };
    const response = await fetch('/api/v1/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact),
    });
    const data = await response.json();
    if (response.status === 201) {
      setContacts([...contacts, newContact]);
      setNewContactName('');
      setNewContactPhone('');
      toast(successToast(data.message));
    } else {
      toast(errorToast(data.message));
    }
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
        <Text fontSize="3rem">Contact !</Text>
        <UnorderedList>
          {contacts.length > 0 &&
            contacts.map(contact => (
              <Text
                id={contact.id}
                key={contact.id}
                fontSize="1.2rem"
                fontWeight="bold"
              >
                {contact.name} - {contact.phoneNumber}
              </Text>
            ))}
        </UnorderedList>
        <VStack width="80%">
          <Input
            onChange={e => setNewContactName(e.target.value)}
            type="text"
            placeholder="Name"
            value={newContactName}
          />
          <Input
            onChange={e => setNewContactPhone(e.target.value)}
            type="text"
            placeholder="PhoneNumber"
            value={newContactPhone}
          />

          <Button width="80%" p="5" fontSize="1.2rem" onClick={onClick}>
            Add new Contact
          </Button>
        </VStack>
      </VStack>
    </Flex>
  );
};

export default Home;
