import React from "react";
import { Flex, Text, Box } from "native-base";
import TapLink from "./TapLink";

const QuickLinks = () => {
  return (
    <Box
      w="350px"
      h="150px"
      shadow={5}
      m={5}
      rounded="lg"
      borderColor="coolGray.200"
      borderWidth={1}
      p="2"
    >
      <Flex direction="column">
        <Text bold>Quick Links</Text>
        <Flex direction="row">
          <TapLink name="Holiday Calendar" />
          <TapLink name="Leave Policy" />
          <TapLink name="Payroll Manual" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default QuickLinks;
