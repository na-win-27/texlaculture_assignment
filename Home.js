import React from "react";
import { Center, NativeBaseProvider, extendTheme, Flex } from "native-base";
import Myteam from "./components/MyTeam";
import QuickLinks from "./components/QuickLinks";
import Celebrations from "./components/Celebrations";
import MyTasks from "./components/MyTasks";
import { ScrollView, SafeAreaView } from "react-native";

import SearchBar from "./components/SearchBar";
import Announcements from "./components/Announcements";
import Comp from "./components/Comp";
import Reminder from "./components/Reminder";

const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

// extend the theme
export const theme = extendTheme({ config });

const Home = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <ScrollView>
          <Flex direction="column" alignItems="center">
            <Center w="100%" h="220px" bg="gray.200">
              <SearchBar />
              <Comp />
            </Center>
            <Reminder/>
            <Announcements />
            <Myteam />
            <QuickLinks />
            <Celebrations />
            <MyTasks />
          </Flex>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Home;
