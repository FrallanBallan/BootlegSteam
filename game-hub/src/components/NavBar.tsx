import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColorMode from "./ColorMode";
import PlatformSelector from "./PlatformSelector";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={logo} boxSize="60px"></Image>

      <ColorMode />
    </HStack>
  );
};

export default NavBar;
