import { Button } from "@chakra-ui/button";
import { SearchIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Container, Flex, Text } from "@chakra-ui/layout";

const NavBar = ({ logout }) => {
  return (
    <Container
      as="nav"
      maxW="1300px"
      display="flex"
      justifyContent="space-between"
      padding="4"
      boxShadow="lg"
      borderRadius="lg"
      pos="sticky"
      top="0"
      zIndex="50"
      bg="white"
    >
      <Flex align="center">
        <Image mr="4" w="50px" h="50px" src="/images/btc.svg" />
        <Text>Home</Text>
      </Flex>
      <Flex align="center">
        <Text mr="2">Posts</Text> <Text mr="2">Trending</Text>
        <Button onClick={logout}> Logout</Button>
      </Flex>
    </Container>
  );
};

export default NavBar;
