import { Text, Center, Icon, Flex } from "native-base";
import { ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Card1 = () => {
  return (
    <Flex
      mx={5}
      rounded="lg"
      direction="row"
      justify="space-between"
      bg="amber.400"
      p={2}
    >
      <Icon
        mx={2}
        bg="orange.300"
        as={<MaterialIcons name="search" />}
        size={10}
      />

      <Flex direction="column">
        <Text>Employees Are Expected to Clock</Text>
        <Text color="gray.400">1 hour ago</Text>
      </Flex>
    </Flex>
  );
};

export default Card1;
