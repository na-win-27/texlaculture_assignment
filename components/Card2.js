import React from "react";
import {
  Text,
  Flex,
  Avatar,
  Image,
} from "native-base";

const Card2 = (props) => {
  return (
    <Flex
    rounded="lg"
    m={5}
    direction="column"
    align="center"
    justify="center"
    h="150px"
    w="100px"
    bg={`${props.color}.100`}
    borderColor={`${props.color}.300`}
    borderWidth="1"
  >
    <Avatar bg={`${props.color}.300`} size="lg">
      <Image
        size={50}
        borderRadius={30}
        source={{
          uri: "https://avatars.githubusercontent.com/u/61737492?s=400&u=f5a762f2af908b2144cf9e0b89f089c04bac219b&v=4",
        }}
        alt="Alternate Text"
      />
    </Avatar>
    <Text color={`${props.color}.400`}>{props.name}</Text>
    <Text>{props.role}</Text>
    <Text>{`Joined ${props.joined}`}</Text>
  </Flex>
  );
};

export default Card2;
