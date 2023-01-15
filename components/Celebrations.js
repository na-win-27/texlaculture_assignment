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
        <CelebItem color="green" event="Birthday" name="Shubam"/>
        <CelebItem color="blue" event="Marriage Anniversery" name="Yash"/>
        <CelebItem color="purple" event="Work Anniversery" name="Riku"/>
        <CelebItem color="orange" event="Kid's Birthday" name="Priyank"/>
      </Flex>
    </Box>
  );
};

export default Celebrations;
