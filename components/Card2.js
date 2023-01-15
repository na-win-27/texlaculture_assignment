import React from "react";
import {
  Text,
  Flex,
  Avatar,
  Image,
} from "native-base";

import { ScrollView, SafeAreaView } from "react-native";
const Card2 = () => {
  return (
    <Flex
    rounded="lg"
    m={5}
    direction="column"
    align="center"
    justify="center"
    h="150px"
    w="100px"
    bg="yellow.100"
    borderColor="yellow.300"
    borderWidth="1"
  >
    <Avatar bg="yellow.200" size="lg">
      <Image
        size={50}
        borderRadius={30}
        source={{
          uri: "https://avatars.githubusercontent.com/u/61737492?s=400&u=f5a762f2af908b2144cf9e0b89f089c04bac219b&v=4",
        }}
        alt="Alternate Text"
      />
    </Avatar>
    <Text>Sahil</Text>
    <Text>UX designer</Text>
    <Text>Joined Today</Text>
  </Flex>
  );
};

export default Card2;
