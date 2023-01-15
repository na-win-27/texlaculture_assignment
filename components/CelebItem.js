import React from "react";
import { Flex, Text, Box, Avatar, Image, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";

const CelebItem = (props) => {
  return (
    <Box
      w="100%"
      rounded="lg"
      borderColor={`${props.color}.300`}
      bg={`${props.color}.200`}
      borderWidth={1}
      p="1"
      h="80px"
      mt="7"
      mr="3"
    >
      <Flex direction="row" align="center" justifyContent="space-between">
        <Text w={20}>{props.event}</Text>
        <Avatar size={100} bg={`${props.color}.200`} mt={-4}>
          <Image
            size={75}
            borderRadius={50}
            source={{
              uri: "https://avatars.githubusercontent.com/u/61737492?s=400&u=f5a762f2af908b2144cf9e0b89f089c04bac219b&v=4",
            }}
            alt="Alternate Text"
          />
        </Avatar>
        <Text color={`${props.color}.600`}>{props.name}</Text>
        <Icon
          mx={2}
          bg={`${props.color}.200`}
          as={<AntDesign name="right" />}
          size={10}
        />
      </Flex>
    </Box>
  );
};

export default CelebItem;
