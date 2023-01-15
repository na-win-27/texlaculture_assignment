import React from "react";
import { Text, Center, Spacer, Box, Input, Icon, Flex } from "native-base";
import { ScrollView, SafeAreaView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Card1 from "./Card1";
const Comp = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        m={5}
      >
        <Text bold>Announcement</Text>
        <Spacer />
        <Text color="green.700" underline>
          View All
        </Text>
      </Box>
      <Center h={20}>
        <ScrollView horizontal mx={2}>
          <Card1/>
          <Card1/>
        </ScrollView>
      </Center>
    </>
  );
};

export default Comp;
