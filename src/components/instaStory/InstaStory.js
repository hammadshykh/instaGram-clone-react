import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const localData = [
  { profile: "/image/iphone-x-mockup.png", Pame: "Me" },
  { profile: "/image/iphone-x-mockup.png", Pame: "Saim Khan" },
  { profile: "/image/iphone-x-mockup.png", Pame: "Hanan" },
  { profile: "/image/iphone-x-mockup.png", Pame: "Ahmed shaikh" },
  { profile: "/image/iphone-x-mockup.png", Pame: "Saif khan" },
  { profile: "/image/iphone-x-mockup.png", Pame: "ibad" },
];

const InstaStory = () => {
  return (
    // <Flex>
    <SimpleGrid
      columns={[3, 4, 5, 6, 6]}
      spacing={["10px", "0", "0", "0", "0"]}
    >
      {localData.map((data) => (
        <Box
          mx="12px"
          color="white"
          textAlign="center"
          display="flex"
          flexDir="column"
          alignItems="center"
        >
          <Image
            cursor="pointer"
            borderRadius="full"
            boxSize="63px"
            border="2px solid"
            borderColor="pink"
            src={data.profile}
          />
          <Text my="5px">{data.Pame}</Text>
        </Box>
      ))}
    </SimpleGrid>
    // </Flex>
  );
};

export default InstaStory;
