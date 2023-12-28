import { Box, Flex, FormControl, Img, Input, Text } from "@chakra-ui/react";
import React from "react";
import { BiCamera, BiArrowBack } from "react-icons/bi";
import { RiVideoAddLine } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineDown } from "react-icons/ai";

const localData = [
  { profile: "/image/images.jpg", Uame: "Hammad", online: "Active" },
  { profile: "/image/images.jpg", Uame: "Sufiyan", online: "Active yesterday" },
  { profile: "/image/images.jpg", Uame: "Rehan", online: "Active" },
  { profile: "/image/images.jpg", Uame: "Ahmed", online: "Active 1h ago" },
  { profile: "/image/images.jpg", Uame: "Hannan ", online: "Active" },
  { profile: "/image/images.jpg", Uame: "Hammad", online: "Active" },
  { profile: "/image/images.jpg", Uame: "Sufiyan", online: "Active yesterday" },
  { profile: "/image/images.jpg", Uame: "Rehan", online: "Active" },
  { profile: "/image/images.jpg", Uame: "Ahmed", online: "Active 1h ago" },
  { profile: "/image/images.jpg", Uame: "Hannan ", online: "Active" },
];

const InstaChats = () => {
  return (
    <Box bg="black" px="20px">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        display={["flex", "none", "none", "none", "none"]}
        pt="10px"
        mx="15px"
      >
        <Flex
          justifyContent="start"
          w="110px"
          color="white"
          alignItems="center"
        >
          <Text color="white" fontSize="20px" me="15px">
            <Link to="/InstaPage">
              <BiArrowBack />
            </Link>
          </Text>
          <Text w="100px">they_call_me_hammadii</Text>
          <Text color="white" ms="10px" fontSize="12px">
            <AiOutlineDown />
          </Text>
        </Flex>
        <Box display="flex">
          <Text color="white" fontSize="30px" me="10px">
            <RiVideoAddLine />
          </Text>
          <Text color="white" fontSize="30px">
            <AiOutlinePlus />
          </Text>
        </Box>
      </Flex>
      <FormControl py="20px" display={["flex"]} alignItems="center">
        <Input
          color="white"
          backgroundColor="#0000"
          type="email"
          bg="#252525"
          border="none"
          placeholder="Search"
          _placeholder={{ paddingLeft: "30px" }}
        />
        <Text
          fontSize="15px"
          ms="20px"
          color="white"
          position="absolute"
          left="0px"
        >
          <BsSearch />
        </Text>
      </FormControl>
      <Flex my="10px" textAlign="center">
        <Box>
          <Img
            alt="Leave me alone"
            cursor="pointer"
            borderRadius="full"
            boxSize="100px"
            src="/image/biryani.jpg"
            border="2px solid"
            borderColor="red"
          />
          <Text fontSize="12" color="#fff">
            Leave me a note
          </Text>
        </Box>
        <Box>
          <Img
            cursor="pointer"
            alt="Leave me alone"
            borderRadius="full"
            boxSize="100px"
            mx="10px"
            src="/image/icc.webp"
            border="2px solid"
            borderColor="red"
          />
          <Text fontSize="12" color="#fff">
            Icc
          </Text>
        </Box>
        <Box>
          <Img
            cursor="pointer"
            alt="Leave me alone"
            borderRadius="full"
            boxSize="100px"
            border="2px solid"
            src="/image/images.jpg"
            borderColor="red"
          />
          <Text fontSize="12" color="#fff">
            User
          </Text>
        </Box>
      </Flex>
      <Flex justifyContent="space-between">
        <Text color="white">Messages</Text>
        <Text color="blue.500">Requests</Text>
      </Flex>
      {localData.map((data) => (
        <Flex justifyContent="space-between" alignItems="center">
          {" "}
          <Flex alignItems="center" color="#fff" my="10px">
            <Img
              cursor="pointer"
              borderRadius="full"
              boxSize="63px"
              border="2px solid"
              borderColor="red"
              src={data.profile}
            />
            <Box ms="10px" fontSize="14px">
              <Text>{data.Uame}</Text>
              <Text>{data.online}</Text>
            </Box>
          </Flex>
          <Text
            fontSize="24px"
            color="gray"
            _hover={{ textDecorationLine: "none", color: "white" }}
          >
            <Link>
              <BiCamera />
            </Link>
          </Text>
        </Flex>
      ))}
    </Box>
  );
};

export default InstaChats;
