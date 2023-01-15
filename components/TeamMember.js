import React from "react";
import { Flex, Text, Box, Avatar, Image } from "native-base";

const TeamMember = (props) => {
  return (
    <Box w="100%" mt={5}>
      <Flex align="center" direction="row" justify="space-between">
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
        <Text>{props.name}</Text>
        <Text>{props.role}</Text>
        <Avatar.Badge bg="green.500" />
        <Text>Present</Text>
      </Flex>
    </Box>
  );
};

export default TeamMember;
