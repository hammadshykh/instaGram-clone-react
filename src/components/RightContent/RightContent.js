import { Box, Flex, Text } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const localFollowdata = [
  {
    image: "/image/download.png",
    uName: "Saim khan",
    followDetails: "Followed by ibad + 5 more ",
  },
  {
    image: "/image/download.png",
    uName: "Ahmed shaikh",
    followDetails: "Followed by rehan + 5 more ",
  },
  {
    image: "/image/download.png",
    uName: "Saif khan",
    followDetails: "Followed by hammad + 5 more ",
  },
  {
    image: "/image/download.png",
    uName: "ibad",
    followDetails: "Followed by hasan + 5 more ",
  },
  {
    image: "/image/download.png",
    uName: "rehan shaikh",
    followDetails: "Followed by ahmed + 5 more ",
  },
  {
    image: "/image/download.png",
    uName: "Hanan",
    followDetails: "Followed by Hammad + 5 more ",
  },
];

const RightContent = () => {
  return (
    <Box display={["none", "none", "none", "block", "block"]}>
      <Flex justifyContent="space-between" alignItems="center" w="320px">
        <Flex alignItems="center" color="#fff">
          <Link to="/InstaProfile">
            <CgProfile fontSize="55px" />
          </Link>
          <Box ms="10px" fontSize="14px">
            <Text>its.hammadshaikh</Text>
            <Text color="gray">Mr々HムMMムD</Text>
          </Box>
        </Flex>
        <Text
          fontSize="12px"
          color="blue"
          _hover={{ textDecorationLine: "none", color: "white" }}
        >
          <Link>Switch</Link>
        </Text>
      </Flex>
      <Flex
        my="14px"
        justifyContent="space-between"
        alignItems="center"
        w="320px"
      >
        <Text fontSize="14px" color="gray">
          Suggestions for you
        </Text>
        <Text
          fontSize="12px"
          color="#fff"
          ms="10px"
          _hover={{ textDecorationLine: "none", color: "gray" }}
        >
          <Link>See All</Link>
        </Text>
      </Flex>
      {localFollowdata.map((data) => (
        <Flex
          justifyContent="space-between"
          alignItems="center"
          w="320px"
          my="10px"
        >
          <Flex alignItems="center" color="#fff">
            <CgProfile fontSize="32px" />
            <Box ms="10px" fontSize="14px">
              <Text>{data.uName}</Text>
              <Text color="gray" fontSize="12px">
                {data.followDetails}
              </Text>
            </Box>
          </Flex>
          <Text
            fontSize="12px"
            color="blue"
            _hover={{ textDecorationLine: "none", color: "white" }}
          >
            <Link ms="10px">Follow</Link>
          </Text>
        </Flex>
      ))}
    </Box>
  );
};

export default RightContent;
