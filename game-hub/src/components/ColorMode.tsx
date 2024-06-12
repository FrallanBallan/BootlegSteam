import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColorMode = () => {
  const { toggleColorMode, colorMode } = useColorMode(); //ColorMode defines current color theme
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text whiteSpace={"nowrap"}>Dark Mode</Text>
    </HStack>
  );
};

export default ColorMode;
