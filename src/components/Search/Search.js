import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiPlusSquare } from "react-icons/fi";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <Box bg="black">
      <FormControl py="20px" display={["flex"]} alignItems="center" px="10px">
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
      <Box px="2px">
        <Flex>
          <Image src="/image/biryani.jpg" boxSize="115px" />
          <Image src="/image/icc.webp" p="1x" boxSize="115px" />
          <Image
            src="/image/best-times-to-post-on-instagram.jpg"
            boxSize="115px"
          />
        </Flex>
        <Flex py="1px">
          <Image src="/image/biryani.jpg" boxSize="115px" />
          <Image src="/image/icc.webp" p="1px" boxSize="115px" />
          <Image
            src="/image/best-times-to-post-on-instagram.jpg"
            boxSize="115px"
          />
        </Flex>
        <Flex>
          <Image src="/image/biryani.jpg" boxSize="115px" />
          <Image src="/image/icc.webp" p="1px" boxSize="115px" />
          <Image
            src="/image/best-times-to-post-on-instagram.jpg"
            boxSize="115px"
          />
        </Flex>
        <Flex>
          <Image src="/image/biryani.jpg" boxSize="115px" />
          <Image src="/image/icc.webp" p="1x" boxSize="115px" />
          <Image
            src="/image/best-times-to-post-on-instagram.jpg"
            boxSize="115px"
          />
        </Flex>
        <Flex py="1px">
          <Image src="/image/biryani.jpg" boxSize="115px" />
          <Image src="/image/icc.webp" p="1px" boxSize="115px" />
          <Image
            src="/image/best-times-to-post-on-instagram.jpg"
            boxSize="115px"
          />
        </Flex>
        <Flex>
          <Image src="/image/biryani.jpg" boxSize="115px" />
          <Image src="/image/icc.webp" p="1px" boxSize="115px" />
          <Image
            src="/image/best-times-to-post-on-instagram.jpg"
            boxSize="115px"
          />
        </Flex>
        <Flex>
          <Image src="/image/biryani.jpg" boxSize="115px" />
          <Image src="/image/icc.webp" p="1x" boxSize="115px" />
          <Image
            src="/image/best-times-to-post-on-instagram.jpg"
            boxSize="115px"
          />
        </Flex>
        <Flex py="1px">
          <Image src="/image/biryani.jpg" boxSize="115px" />
          <Image src="/image/icc.webp" p="1px" boxSize="115px" />
          <Image
            src="/image/best-times-to-post-on-instagram.jpg"
            boxSize="115px"
          />
        </Flex>
        <Flex>
          <Image src="/image/biryani.jpg" boxSize="115px" />
          <Image src="/image/icc.webp" p="1px" boxSize="115px" />
          <Image
            src="/image/best-times-to-post-on-instagram.jpg"
            boxSize="115px"
          />
        </Flex>
      </Box>
      <Box display="flex">
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
              {
                btnName: "Search",
                btnIcon: (
                  <Link to="/Search">
                    {" "}
                    <BsSearch />
                  </Link>
                ),
              },
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
          </ButtonGroup>
          <Box />
        </Box>
      </Box>
    </Box>
  );
};

export default Search;
