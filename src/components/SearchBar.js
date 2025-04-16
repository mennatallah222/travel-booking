"use client"
import { Input, Box, Flex, Image, Text, Link, InputGroup } from "@chakra-ui/react";
import {CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";
import { useState } from "react";
import '../app/globals.css';

const MotionBox=motion.create(Box);
const SearchBar = ({isVisible, onClose}) => {
  const [searchItem, setSearchItem] = useState("");
  if(!isVisible){
    return null;
  }

  const popularSearches=[
    {city:"Cairo", desc:"City in Egypt"},
    {city:"Alexandria", desc:"City in Egypt"},
    {city:"Hurghada", desc:"City in Egypt"},
  ];

  return (
    <Box position="fixed" top={0} left={0} width="100%" height="100%" bg="blackAlpha.800" zIndex={5} onClick={onClose}>
      <MotionBox bg="gray" p="0px 16px" borderRadius={50} display="flex" alignItems="center" flexDirection="row" position="absolute" top="60px" left="40%"  width="25%" zIndex={10} onClick={(e) => e.stopPropagation()} initial={{opacity:0, scale:0.7}} animate={{opacity:1, scale:1}} transition={{duration:0.3, ease:"easeOut"}}>
        
        <InputGroup startAddon={<CiSearch color="#d1ab71" cursor="pointer" size="32px"/>}>
          <Input placeholder="Search" _placeholder={{color:"#d1ab71"}} value={searchItem} onChange={(e) => setSearchItem(e.target.value)} border="none"/>
        </InputGroup>
      </MotionBox>
      <MotionBox bg="gray" borderRadius="3xl" position="absolute" top="120px" left="40%" width="25%" shadow="lg" zIndex={11} onClick={(e) => e.stopPropagation()} initial={{opacity:0, scale:0.7, y:-10}} animate={{opacity:1, scale:1, y:0}} transition={{duration:0.3, ease:"easeOut"}}>
        <Box p={4} >
          <Text mb={2} color="#d1ab71">Most popular</Text>
          {popularSearches.map((search, index) => (
            <Flex key={index} alignItems="center" justifyContent="space-between" p={2} _hover={{ bg: "gray.400", cursor: "pointer" }} borderRadius="md"
            >
            <Box display="flex" alignItems="center" justifyItems="center" gap={2}>
              <Image src="/imgs/Logo_Bici_sfondo_blu.png.png"/>
              <Box display="flex"  flexDirection="column" color="rgb(246 238 229)">
                <Text fontWeight="medium">{search.city}</Text>
                <Text fontSize="sm"> {search.desc} </Text>
              </Box>
            </Box>
          </Flex>
          ))}
        </Box>
        {searchItem&&
          <Box boxShadow="0px -4px 6px rgba(0, 0, 0, 0.1)" width="100%" mt={4} display="flex" p={2}>
            <Link colorScheme="teal" variant="none" width="100%">See all results for "{searchItem}"</Link>
          </Box>}
      </MotionBox>
    </Box>
  );
};

export default SearchBar;