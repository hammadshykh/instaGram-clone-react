import {
  Box,
  Flex,
  FormControl,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiHeart, BiMessageRounded, BiSave, BiShareAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { TiLocationArrowOutline } from "react-icons/ti";

const InstaCard = () => {

  const localCardData = [
    { pName: 'web', uName: 'Remotebasehq', likes: '22,103 likes',comments: 'View all 62 comments', discription:  'Remotebasehq we are looking for a DotNet Developer', image: '/image/socialcover.jpg' },
    { pName: 'Icc', uName: 'Remotebasehq', likes: '22,103 likes',comments: 'View all 92 comments', discription: 'Remotebasehq we are looking for a DotNet Developer', image: '/image/icc.webp' },
    { pName: 'User', uName: 'Remotebasehq', likes: '22,103 likes',comments: 'View all 122 comments', discription: 'Remotebasehq we are looking for a DotNet Developer', image: '/image/best-times-to-post-on-instagram.jpg' },
    { pName: 'Biryani wala', uName: 'Remotebasehq', likes: '22,103 likes',comments: 'View all 222 comments', discription: 'Remotebasehq we are looking for a DotNet Developer', image: '/image/biryani.jpg' }
  ]


  const [isActive, setIsActive] = useState(false)


  const changeHeartColor = () => {
    setIsActive(current => !current);

  }

  return (
    localCardData.map((data) => (
      <Box
        w={["initial", "initial", "initial", "470px", "470px"]}
        color="#fff"
        borderBottom="0.5px solid"
        borderColor="gray.600">
        <Flex alignContent="center" justifyContent="space-between" my="10px">
          <Flex alignItems="center" fontSize="30px">
            <CgProfile />
            <Text display="flex" fontSize="14px" ms="10px">
              <Link>{data.pName}</Link>
              <Text mx="5px">and</Text>
              <Link>{data.uName}</Link>
            </Text>
          </Flex>
          <Link _hover={{ textDecorationLine: "none", color: "gray" }}>...</Link>
        </Flex>
        <Image src={data.image} class="card-img-top" alt="..." />
        <Box class="card-body text-white">
          <Flex fontSize="30px" my="10px" justifyContent="space-between">
            <Flex mb='5px'>
              <Text onClick={(this, changeHeartColor)} cursor='pointer'>
                {isActive ? <FaHeart color="red" /> : <BiHeart />}
              </Text>
              <Text mx="10px" cursor='pointer'>
                <BiMessageRounded />
              </Text>
              <Text cursor='pointer'>
                <TiLocationArrowOutline />
              </Text>
            </Flex>
            <Box>
              <BiSave />
            </Box>
          </Flex>
          <h5 class="card-title">{data.likes}</h5>
          <Text fontSize="14px" my="8px">
            {data.discription}
          </Text>
          <Link
            fontSize="14px"
            color="gray"
            _hover={{ textDecorationLine: "none" }}
          >
            {data.comments}
          </Link>
        </Box>
        <Input
        focusBorderColor="none"
          border="none"
          background="transparent"
          type="email"
          placeholder="Add a comment.."
          _placeholder={{ fontSize: "13px" }}
          p="0"
        />
      </Box>
    ))
  );
};

export default InstaCard;
