import { Avatar, Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import leader from "../assets/jay.jpeg";
import tanwar from "../assets/tanwar.jpg";
import bobbani from "../assets/bobbani.jpg";
import Girl from "../assets/Sam.jpg";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        <HStack alignItems={["center", "flex-end"]}>
          <VStack>
            <Avatar boxSize={"32"} mt={["4", "0"]} src={Girl} />
            <Text>Saumya Kumar</Text>
          </VStack>
          <VStack>
            <Avatar boxSize={"32"} mt={["4", "0"]} src={tanwar} />
            <Text>Sarthak Sharma</Text>
          </VStack>
          <VStack>
            <Avatar boxSize={"32"} mt={["4", "0"]} src={leader} />
            <Text>Jay Agrawal</Text>
          </VStack>

          <VStack>
            <Avatar boxSize={"32"} mt={["4", "0"]} src={bobbani} />
            <Text>Shahfaid Rabbani</Text>
          </VStack>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
