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
  Heading,
  Stack,
  Avatar,
  Center,
  useColorModeValue,
  FormControl,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { IoPersonAdd } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BiMessageRoundedDetail, BiHeart } from "react-icons/bi";
import {
  MdOutlineExplore,
  MdVideoLibrary,
  MdCreateNewFolder,
  MdOutlineCreateNewFolder,
} from "react-icons/md";
import { FiPlusSquare } from "react-icons/fi";

const InstaPofile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box bg="black" w="full" height="100vh" px="10px">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        display={["flex", "none", "none", "none", "none"]}
        pt="10px"
      >
        <Flex justifyContent="start" w="110px" color="white">
          <Text>they_call_me_hammadii</Text>
        </Flex>
        <Box display="flex">
          <Text color="white" fontSize="32px" me="20px">
            <MdOutlineCreateNewFolder />
          </Text>
          <Text color="white" fontSize="32px" me="10px">
            <AiOutlineMenu />
          </Text>
        </Box>
      </Flex>
      <Box display="flex">
        <Box
          // display={["flex", "flex", "block", "block", "block"]}
          // alignItems="flex-end"
          position={["fixed", "fixed`", "unset", "unset", "unset"]}
          bottom="0"
          w={["0px", "0px", "45px", "150px", "245px"]}
          borderRight="0.3px solid"
          borderRightColor="gray.800"
          ps={["0px", "0px", "0px", "15px", "15px"]}
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
            justifyContent="start"
            w="30px"
            mb="30px"
            pt="45px"
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
                  btnIcon: (
                    <Link to="/InstaPage">
                      {" "}
                      <AiFillHome />
                    </Link>
                  ),
                },
                { btnName: "Search", btnIcon: <BsSearch /> },
                { btnName: "Reels", btnIcon: <FiPlusSquare /> },
                { btnName: "Create", btnIcon: <MdOutlineCreateNewFolder /> },
                {
                  btnName: "Profile",
                  btnIcon: (
                    <Link to="/InstaProfile">
                      <CgProfile />
                    </Link>
                  ),
                },
              ].map((item, i) => (
                <Button
                  justifyContent={[
                    "center",
                    "center",
                    "Center",
                    "start",
                    "start",
                  ]}
                  display={["flex", "flex", "none", "none", "none"]}
                  color="#fff"
                  w={["10px", "10px", "10px", "200px", "200px"]}
                  fontWeight="400"
                  fontSize="16px"
                  fontFamily="normal"
                  mx="18px"
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
                  btnIcon: (
                    <Link to="/InstaPage">
                      {" "}
                      <AiFillHome />
                    </Link>
                  ),
                },
                { btnName: "Search", btnIcon: <BsSearch /> },
                { btnName: "Explore", btnIcon: <MdOutlineExplore /> },
                { btnName: "Reels", btnIcon: <MdVideoLibrary /> },
                {
                  btnName: "Messages",
                  btnIcon: <BiMessageRoundedDetail />,
                },
                { btnName: "Notification", btnIcon: <BiHeart /> },
                {
                  btnName: "Create",
                  btnIcon: <MdOutlineCreateNewFolder />,
                },
                { btnName: "Profile", btnIcon: <CgProfile /> },
              ].map((item) => (
                <Button
                  display={["none", "none", "flex", "flex", "flex"]}
                  justifyContent={[
                    "center",
                    "center",
                    "Center",
                    "start",
                    "start",
                  ]}
                  _hover={{ bg: "#36363652", borderRadius: "24px" }}
                  color="#fff"
                  mb={["16px"]}
                  w={["10px", "10px", "10px", "200px", "200px"]}
                  py="8px"
                  fontWeight="400"
                  fontSize="16px"
                  fontFamily="normal"
                  px={["10.5px", "10.5px", "10px", "0", "0"]}
                >
                  <Text me="15px" fontSize="25px">
                    {item.btnIcon}
                  </Text>
                  <Text display={["none", "none", "none", "block", "block"]}>
                    {item.btnName}
                  </Text>
                </Button>
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
        <Box pt="20px" ps={["0px", "0px", "3em", "5em", "5em"]}>
          <Flex
            color="white"
            borderBottomColor="gray.700"
            flexDirection={["column", "column", "column", "row", "row"]}
            pb="10px"
          >
            <Flex alignItems="center" mb="10px">
              <Image
                src="/image/insta.jpg"
                boxSize={["100px", "150px", "200px", "200px", "200px"]}
                cursor="pointer"
                borderRadius="full"
                border="2px solid"
                borderColor="pink"
              />
              <Flex
                display={["flex", "flex", "none", "none", "none"]}
                textAlign="center"
                ms="5px"
              >
                <Link>4 posts</Link>
                <Text mx="20px">
                  <Link>97 followers</Link>
                </Text>
                <Link>127 following</Link>
              </Flex>
              <Box
                mx="20px"
                display={["none", "none", "block", "block", "block"]}
              >
                <Box display="flex" alignItems="center">
                  <Text fontSize="20px">its.hammadshaikh</Text>
                  <Text ms="10px">Setting</Text>
                </Box>
                <Box>
                  <Button w="full" size="sm" my="10px" bg="white" color="black">
                    Edit profile
                  </Button>
                </Box>
              </Box>
            </Flex>
            <Box>
              <Box
                my="20px"
                display={["none", "none", "none", "block", "block"]}
              >
                <Flex>
                  <Link>4 posts</Link>
                  <Text mx="25px">
                    <Link>97 followers</Link>
                  </Text>
                  <Link>127 following</Link>
                </Flex>
              </Box>
              <Box fontSize="13px">
                <Text fontWeight="bold">Mr々HムMMムD ✨</Text>
                <Text>HYD✨</Text>
              </Box>
              <Box fontSize="13px">
                the worst feeling is when you have a lot say.. but you choose to
                stay silent:🥀🖤✨
              </Box>
              <Flex
                pt="10px"
                justifyContent="space-around"
                display={["flex", "flex", "none", "none", "none"]}
              >
                <Button size="sm" color="white" bg="gray.800" px="30px">
                  Edit profile
                </Button>
                <Button size="sm" color="white" bg="gray.800" px="30px">
                  Share profile
                </Button>
                <Text fontSize="18px" bg="gray.800" borderRadius="10px" p="6px">
                  <IoPersonAdd />
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Box
            my="20px"
            color="white"
            py="1em"
            display={["block", "block", "block", "none", "none"]}
            borderTop="1px solid"
            borderTopColor="gray.700"
          >
            <Flex
              justifyContent="space-between"
              px="20px"
              display={["none", "none", "flex", "flex", "flex"]}
            >
              <Link>4 posts</Link>
              <Text>
                <Link>97 followers</Link>
              </Text>
              <Link>127 following</Link>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InstaPofile;
