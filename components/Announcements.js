import React from "react";
import {
  Text,
  Flex,
  Avatar,
  Image,
} from "native-base";

import { ScrollView, SafeAreaView } from "react-native";
import Card2 from "./Card2";



const Announcements=()=>{
    return (
        <Flex
        direction="column"
        align="center"
        justify="space-between"
        mt={2}
        h="220px"
        w="100%"
        bg="gray.200"
      >
        <Text>Welcome</Text>
        <ScrollView horizontal>
         <Card2 color="yellow" name="Sahil" role="UX Designer" joined="today"/>
         <Card2 color="blue" name="Megha" role="UX Designer" joined="today"/>
         <Card2 color="pink" name="Ravi" role="UX Designer" joined="today"/>
         <Card2 color="green" name="Navin" role="FrontEnd" joined="1 Year"/>
        </ScrollView>
      </Flex>
  );
}

export default Announcements;