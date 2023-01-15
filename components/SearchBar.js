import React from "react";
import { Spacer, Box, Input, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import {TouchableOpacity} from "react-native"
const SearchBar = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      mx={5}
    >
      <Input
        bg="white"
        color="black"
        w={{
          base: "75%",
          md: "25%",
        }}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="search" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder="Search"
      />
      <Spacer />
      <TouchableOpacity>
      <Icon color="green.600" as={<MaterialIcons name="message" />} size={9} />
      </TouchableOpacity>
    </Box>
  );
};

export default SearchBar;
