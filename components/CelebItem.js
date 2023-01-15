import React from "react";
import { Flex, Text, Box, Avatar, Image, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";

const CelebItem = () => {
  return (
    <Box
      w="100%"
      rounded="lg"
      borderColor="green.300"
      bg="green.200"
      borderWidth={1}
      p="1"
      h="80px"
      mt="7"
      mr="3"
    >
      <Flex direction="row" align="center" justifyContent="space-between">
        <Text>BirthDay</Text>
        <Avatar size={100} bg="green.200" mt={-4}>
          <Image
            size={75}
            borderRadius={50}
            source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            alt="Alternate Text"
          />
        </Avatar>
        <Text color="green.600">Shubam</Text>
        <Icon
          mx={2}
          bg="green.200"
          as={<AntDesign name="right" />}
          size={10}
        />
      </Flex>
    </Box>
  );
};

export default CelebItem;
