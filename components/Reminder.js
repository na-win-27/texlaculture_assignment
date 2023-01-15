import React from "react";
import { Flex, Text, Box, Avatar, Image, Icon, Button, Container } from "native-base";
import { FontAwesome,AntDesign } from "@expo/vector-icons";
// import {Button} from 'react-native'

const Reminder = (props) => {
  return (
    <Container
      w="100%"
      rounded="lg"
      borderColor={`blue.300`}
      bg={`blue.200`}
      borderWidth={1}
      p="1"
      h="80px"
      my="7"
      mx="5"
    >
      <Flex direction="row" align="center" justifyContent="space-between">
      <Icon
        mx={2}
        color={`blue.600`}
        bg={`blue.200`}
        as={<FontAwesome name="clock-o" />}
        size={10}
      />
        <Flex mx={5} direction="column" align="flex-start" justifyContent="space-between">
            <Text>03/01/23</Text>
            <Text>Clock In</Text>
            <Text>Clock Out</Text>
        </Flex>
        <Button mr={2}>Clock In</Button>
        <Icon
          mx={2}
          bg={`${props.color}.200`}
          as={<AntDesign name="right" />}
          size={10}
        />
      </Flex>
    </Container>
  );
};

export default Reminder;
