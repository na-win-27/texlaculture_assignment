import React from "react";
import { Flex, Text, Box, Avatar, Image } from "native-base";

const TeamMember = () => {
  return (
    <Box w="100%" mt={5}>
      <Flex align="center" direction="row" justify="space-between">
        <Avatar bg="yellow.200" size="lg">
          <Image
            size={50}
            borderRadius={30}
            source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            alt="Alternate Text"
          />
        </Avatar>
        <Text>Sahil</Text>
        <Text>Trainee</Text>
        <Avatar.Badge bg="green.500" />
        <Text>Present</Text>
      </Flex>
    </Box>
  );
};

export default TeamMember;
