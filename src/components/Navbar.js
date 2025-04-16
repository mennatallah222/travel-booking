"use client";
import { Box, Flex, Link, Image, Text, Button, Separator } from "@chakra-ui/react";
import ProfileDropdown from "./ProfileDropdown";
import { useState } from "react";
import SearchBar from "./SearchBar";
import {CiSearch } from "react-icons/ci";

const Navbar = ({ isSignedIn }) => {
    const [isVisible, setSearchVisible]=useState(false);
    const toggleSearch=()=>{
        setSearchVisible(!isVisible);
    }
    return (
  <Flex as="nav" bg="black" p={4} justify="space-around" align="center">
    <Box display="flex" alignItems="center" gap={6}>
      
      {/*navigation links */}
      <Link href="/" _hover={{textDecoration:"none"}}>
        <Image src="/imgs/logo.svg" alt="Logo" cursor="pointer" />
      </Link>
      {/*  */}
      <CiSearch size="32px" color="#d1ab71" cursor="pointer" onClick={toggleSearch}/>
      <Link href="/" color="#d1ab71">EgyExplore</Link>
      <Link href="/tales" color="#d1ab71">EgyTales</Link>
      <Link href="/treasure" color="#d1ab71">EgyTreasure</Link>

      {/*language*/}
      <Box display="flex" alignItems="center" gap={1}>
        <Image src="/imgs/language.png" alt="Language Icon" />
        <Text color="white">EN</Text>
      </Box>

      {/*user dropdown list*/}
      {!isSignedIn ? (<>
            <Separator orientation="vertical" height="5" />
            <Image src="/imgs/Heart.svg" alt="Heart Icon" cursor="pointer" />
            <Image src="/imgs/Shopping cart.svg" alt="Shopping Cart Icon" cursor="pointer" mr={8}/>
            <ProfileDropdown/>
        </>
      ) : (
        <Box display="flex" gap={4}>
          <Button rounded="xl" bg="#d1ab71">Login</Button>
          <Button rounded="xl" bg="#d1ab71">Sign Up</Button>
        </Box>
      )}
    </Box>

    <SearchBar isVisible={isVisible} onClose={()=>setSearchVisible(false)}/>
  </Flex>
    );
};

export default Navbar;