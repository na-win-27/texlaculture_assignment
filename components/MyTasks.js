import React from "react";
import { Flex, Text, Box } from "native-base";
import TaskItem from "./TaskItem";

const MyTasks = () => {
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
        <Text bold>My Tasks </Text>
       <TaskItem/>
       
      </Flex>
    </Box>
  );
};

export default MyTasks;
