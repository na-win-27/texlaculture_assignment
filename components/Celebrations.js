import React from "react";
import { Flex, Text, Box } from "native-base";
import CelebItem from "./CelebItem";

const Celebrations = () => {
  return (
    <Box
      w="350px"
      h="auto"
      shadow={5}
      m={5}
      rounded="lg"
      borderColor="coolGray.200"
      borderWidth={1}
      p="2"
    >
      <Flex direction="column">
        <Text bold>Celebrations </Text>
        <CelebItem/>
        <CelebItem/>
        <CelebItem/>
        <CelebItem/>
        <CelebItem/>
      </Flex>
    </Box>
  );
};

export default Celebrations;
