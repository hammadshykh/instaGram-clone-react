import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Box,
  ButtonGroup,
  Flex,
  Image,
  Text,
  FormControl,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "../InstaPage/Instapage.css";

import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiPlusSquare } from "react-icons/fi";
import { BiMessageRoundedDetail, BiHeart } from "react-icons/bi";
import {
  MdOutlineExplore,
  MdVideoLibrary,
  MdOutlineCreateNewFolder,
} from "react-icons/md";
import InstaCard from "../InstaCard/InstaCard";
import InstaStory from "../instaStory/InstaStory";
import RightContent from "../RightContent/RightContent";

const InstaPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box bg="black" w="full" height="full">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        display={["flex", "none", "none", "none", "none"]}
      >
        <Flex justifyContent="start" w="110px" pt="15px" ms="2.5">
          <Image src="/image/instagram.jpg" />
        </Flex>
        <Box display="flex">
          <Text color="white" fontSize="32px" me="20px">
            <BiHeart />
          </Text>
          <Text color="white" fontSize="32px" me="10px">
            <Link to="/InstaChats">
              <BiMessageRoundedDetail />
            </Link>
          </Text>
        </Box>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        display={["none", "block", "none", "none", "none"]}
      >
        <Box>
          <Flex justifyContent="start" w="110px" mb="30px" pt="45px">
            <Image src="/image/instagram.jpg" />
          </Flex>
        </Box>
        <Box w="400px">
          <Flex alignItems="center">
            <Text fontSize="25px" color="white">
              <BsSearch />
            </Text>
            <FormControl mx="10px">
              <Input
                backgroundColor="#0000"
                type="email"
                placeholder="Search"
                _placeholder={{ fontSize: "12px" }}
                ps="10px"
              />
            </FormControl>
            <Text fontSize="25px" color="white">
              <BiHeart />
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Box display="flex" padding={["15px", "15px", "0", "0", "0"]}>
        <Box
          // display={["flex", "flex", "block", "block", "block"]}
          // alignItems="flex-end"
          position={["fixed", "fixed", "unset", "unset", "unset"]}
          bg="black"
          bottom="0"
          w={["100%", "100%", "100px", "150px", "250px"]}
          pt="5px"
          ps={["0px", "0px", "0px", "15px", "15px"]}
          borderRight={[
            "none",
            "none",
            "0.3px solid",
            "0.3px solid",
            "0.3px solid",
          ]}
          borderRightColor="gray.800"
        >
          <Flex
            justifyContent="start"
            w="110px"
            mb="30px"
            pt="45px"
            display={["none", "none", "none", "block", "block"]}
          >
            <Image src="/image/instagram.jpg" />
          </Flex>
          <Flex
            justifyContent="center"
            w="30px"
            mb="30px"
            pt="45px"
            ms="10px"
            display={["none", "none", "block", "none", "none"]}
          >
            <Image src="/image/images.png" />
          </Flex>
          <Flex>
            <ButtonGroup
              display="flex"
              variant="link"
              flexDirection={["row", "row", "column", "column", "column"]}
            >
              {[
                {
                  btnName: "Home",
                  btnIcon: <AiFillHome />,
                  link: "/InstaPage",
                },
                {
                  btnName: "Search",
                  btnIcon: <BsSearch />,
                  link: "/Search",
                },
                { btnName: "Reels", btnIcon: <FiPlusSquare /> },
                { btnName: "Create", btnIcon: <MdOutlineCreateNewFolder /> },
                {
                  btnName: "Profile",
                  btnIcon: <CgProfile />,
                  link: "/instaProfile",
                },
              ].map((item, i) => (
                <Button
                  justifyContent={[
                    "space-between",
                    "space-between",
                    "Center",
                    "start",
                    "start",
                  ]}
                  display={["flex", "flex", "none", "none", "none"]}
                  color="#fff"
                  mb={["0", "0", "0", "16px", "16px"]}
                  w={["10px", "10px", "10px", "200px", "200px"]}
                  py={["0", "0", "0", "8px", "8px"]}
                  fontWeight="400"
                  fontSize="16px"
                  mx="20px"
                  fontFamily="normal"
                >
                  <Text me="15px" fontSize="25px">
                    {item.btnIcon}
                  </Text>
                  <Text display={["none", "none", "none", "block", "block"]}>
                    {item.btnName}
                  </Text>
                </Button>
              ))}
              {[
                {
                  btnName: "Home",
                  btnIcon: <AiFillHome />,
                  link: "/InstaPage",
                },
                {
                  btnName: "Search",
                  btnIcon: <BsSearch />,
                  link: "/Search",
                },
                { btnName: "Explore", btnIcon: <MdOutlineExplore /> },
                { btnName: "Reels", btnIcon: <MdVideoLibrary /> },
                {
                  btnName: "Messages",
                  btnIcon: <BiMessageRoundedDetail />,
                  link: "/InstaChats",
                },
                { btnName: "Notification", btnIcon: <BiHeart /> },
                { btnName: "Create", btnIcon: <MdOutlineCreateNewFolder /> },
                {
                  btnName: "Profile",
                  btnIcon: <CgProfile />,
                  link: "/instaProfile",
                },
              ].map((item, i) => (
                <Link to={item.link}>
                  <Button
                    display={["none", "none", "flex", "flex", "flex"]}
                    justifyContent={["center", "center", "start", "start"]}
                    _hover={{ bg: "#36363652", borderRadius: "24px" }}
                    color="#fff"
                    mb={["16px"]}
                    w={["10px", "10px", "10px", "200px", "200px"]}
                    py="8px"
                    fontWeight="400"
                    fontSize="16px"
                    fontFamily="normal"
                  >
                    <Text me="15px" fontSize="25px">
                      {item.btnIcon}
                    </Text>
                    <Text display={["none", "none", "none", "block", "block"]}>
                      {item.btnName}
                    </Text>
                  </Button>
                </Link>
              ))}

              <Button
                my="12px"
                _hover={{ bg: "#36363652", borderRadius: "24px" }}
                ref={btnRef}
                onClick={onOpen}
                fontSize="17px"
                color="#fff"
                py="8px"
                w={["45px", "45px", "45px", "200px", "200px"]}
                justifyContent="start"
                display={["none", "none", "none", "flex", "flex"]}
                alignItems="center"
              >
                <Text me="15px" fontSize="25px">
                  <AiOutlineMenu />
                </Text>
                <Text display={["none", "none", "none", "block", "block"]}>
                  More
                </Text>
              </Button>
              <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent w="200px" height="200px" bg="gray" color="white">
                  <DrawerCloseButton />
                  <DrawerHeader>Create your account</DrawerHeader>
                  <DrawerBody>
                    <Input placeholder="Type here..." />
                  </DrawerBody>
                  <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme="blue">Save</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </ButtonGroup>
          </Flex>
        </Box>
        <Box w={{ lg: "992px" }} mx="auto" pt="45px" pb="60px">
          <Flex
            justifyContent={[
              "center",
              "center",
              "center",
              "center",
              "space-between",
            ]}
          >
            <Box>
              <Flex mb="20px" fontSize="12">
                <InstaStory />
              </Flex>
              <InstaCard />
            </Box>
            <RightContent />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default InstaPage;
