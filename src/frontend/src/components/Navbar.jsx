import { Box, Flex, Text, Link, HStack, Button } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "./ui/color-mode";
import { CgAddR } from "react-icons/cg";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box px={4} bg={useColorModeValue("gray.200", "gray.800")}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-around"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textAlign={"center"}
          bgClip={"text"}
        >
          <Link href={"/"}>Product Store 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link href={"/create"}>
            <Button>
              <CgAddR />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun />}
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
