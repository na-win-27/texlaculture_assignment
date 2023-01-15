import React from "react";
import { Flex, Text, Box, Avatar, Image, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";

const TaskItem = () => {
  return (
    <Box
      w="100%"
      rounded="lg"
      borderColor="green.300"
      borderWidth={1}
      p="1"
      h="50px"
      mt="2"
      mr="3"
    >
      <Flex direction="row" align="center" justifyContent="space-between">
        <Text>Attendence</Text>
        <Text>17</Text>
        <Text underline color="green.600">View</Text>
       
      </Flex>
    </Box>
  );
};

export default TaskItem;
