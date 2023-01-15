import React from "react";
import { Flex, Text, Box } from "native-base";


const TapLink = (props) => {
  return (
    <Box w="100px" rounded="lg" borderColor="blue.400" bg="blue.200" borderWidth={1} p="1" mt="5" mr="3">
      <Text bold>{props.name}</Text>
    </Box>
  );
};

export default TapLink;
