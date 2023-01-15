import React from "react";
import {
    Center,
    Container,
  Flex,
  Text,
  Box,
} from "native-base";
import TeamMember  from "./TeamMember";
import { ScrollView,SafeAreaView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const MyTeam=()=>{
    return (
        <Box w="350px" shadow={5} m={5} rounded="lg" borderColor="coolGray.200" borderWidth={1} p="2" >
          <Flex direction="column">
              <Flex direction="row" justify="space-between">
                  <Text bold>My Team</Text>
                  <Text color="green.600" underline>View All</Text>
                </Flex>
                <TeamMember color="red" name="Rashmi" role="Trainee"/>
                <TeamMember color="purple"   name="Manisha" role="HR"/>
                <TeamMember color="green"  name="Abishek" role="Developer"/>
                <TeamMember color="purple"  name="Aditya" role="Trainee"/>
                <TeamMember color="orange"  name="Neeraj" role="HR"/>
          </Flex>
        </Box>
  );
}

export default MyTeam;