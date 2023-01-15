import { Text, Center, Icon, Flex } from "native-base";
import { ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Card1 = (props) => {
    
  return (
    <Flex
      mx={5}
      rounded="lg"
      borderRadius={15}
      direction="row"
      justify="space-between"
      bg={`${props.color}.200`}
      p={2}
    >
      <Icon
        mx={2}
        color={`${props.color}.600`}
        bg={`${props.color1}.200`}
        as={<FontAwesome name={props.icon} />}
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
