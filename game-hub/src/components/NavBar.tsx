import { HStack, Heading, Image } from "@chakra-ui/react";
import TORSTEN from "../assets/Logo/TORSTEN.webp";
import ColorMode from "./ColorMode";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image
        objectFit="cover"
        borderRadius={40}
        src={TORSTEN}
        boxSize="80px"
      ></Image>
      <SearchInput onSearch={onSearch} />
      <Heading size="m" textDecoration="underline" color={"green.500"} ml={5}>
        TORSKEN BLINKS BOOTLEG STEAM
      </Heading>
      <ColorMode />
    </HStack>
  );
};

export default NavBar;
