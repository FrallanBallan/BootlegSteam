import { HStack, Heading, Image } from "@chakra-ui/react";
import TORSTEN from "../assets/Logo/TORSTEN.webp";
import ColorMode from "./ColorMode";
import SearchInput from "./SearchInput";
const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image borderRadius={40} src={TORSTEN} boxSize="80px"></Image>
      <SearchInput />
      <Heading
        as="h1"
        size="m"
        textDecoration="underline"
        color={"teal.500"}
        ml={5}
      >
        TORSKEN BLINKS BOOTLEG STEAM
      </Heading>
      <ColorMode />
    </HStack>
  );
};

export default NavBar;
