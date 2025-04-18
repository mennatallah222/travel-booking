"use client";
import { Box, Flex, Link, Image, Text, Button, Separator, useBreakpointValue, IconButton, Drawer, DrawerBackdrop, DrawerTrigger, DrawerPositioner, DrawerContent, DrawerCloseTrigger, DrawerHeader, DrawerBody, VStack } from "@chakra-ui/react";
import ProfileDropdown from "./ProfileDropdown";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import {CiSearch } from "react-icons/ci";
import {RxHamburgerMenu } from "react-icons/rx";

 const links=[
        {
            title: "My Profile",
            href: "/profile",
            color:"#d2ac71"
        },
        {
            title: "Saved Bundles",
            href: "/bundles",
            color:"white"
        },
        {
            title: "Invite Friends",
            href: "/friends",
            color:"white"
        },
        {
            title: "Settings",
            href: "/settings",
            color:"white"
        },
    ];
const Navbar = () => {
    const [isVisible, setSearchVisible]=useState(false);
    const [isDrawerOpen, setDrawerOpen]=useState(false);
    const [isSignedIn, setIsSignedIn]=useState(false);
    
    const toggleSearch=()=>{
        setSearchVisible(!isVisible);
    }
    const toggleDrawer=()=>{
        setDrawerOpen(!isDrawerOpen);
    }

    const isMobile=useBreakpointValue({base:true, md:false});
    const handleLogin=()=>setIsSignedIn(true);
    const handleLogOut=()=>setIsSignedIn(false);

    return (
      <Flex as="nav" bg="black" p={4} justify="space-evenly" alignItems="center" >
        <Box display="flex" justifyContent="space-around" gap={6} width="80%">
          
          {/*navigation links */}
          <Link href="/" _hover={{textDecoration:"none"}}>
            <Image src="/imgs/logo.svg" alt="Logo" cursor="pointer" />
          </Link>
                
          {
            !isMobile&&(
              <Box display="flex" gap={10} alignItems="center" width="inherit" justifyContent="space-around">
                <Box display="flex" justifyContent="space-around" gap={6} alignItems="center">
                  <CiSearch size="32px" color="#d1ab71" cursor="pointer" onClick={toggleSearch}/>
                  <Link href="/" color="#d1ab71">EgyExplore</Link>
                  <Link href="/tales" color="#d1ab71">EgyTales</Link>
                  <Link href="/treasure" color="#d1ab71">EgyTreasure</Link>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Image src="/imgs/language.png" alt="Language Icon" />
                    <Text color="white">EN</Text>
                  </Box>
                  {isSignedIn ? (<>
                        <Separator orientation="vertical" height="5" />
                        <Image src="/imgs/Heart.svg" alt="Heart Icon" cursor="pointer" />
                        <Image src="/imgs/Shopping cart.svg" alt="Shopping Cart Icon" cursor="pointer" mr={8}/>
                        <ProfileDropdown onLogOut={handleLogOut}/>
                    </>
                  ) : (
                    <></>
                  )}
                </Box>
                {
                  !isSignedIn&&(
                  <Box display="flex" justifyContent="flex-end" gap={4}>
                    <Button rounded="xl" bg="#d1ab71" onClick={handleLogin}>Login</Button>
                    <Button rounded="xl" bg="#d1ab71">Sign Up</Button>
                  </Box>

                  )
                }

                <SearchBar isVisible={isVisible} onClose={()=>setSearchVisible(false)}/>
              </Box>
            )
          }
          </Box>

          <Drawer.Root isOpen={isDrawerOpen} onClose={toggleDrawer}>
            <DrawerBackdrop />
            {isMobile && (
              <DrawerTrigger variant="link" aria-label="Open Menu" onClick={toggleDrawer}>
                <RxHamburgerMenu size="32px" color="white" />
              </DrawerTrigger>
            )}
            <DrawerPositioner>
              <DrawerContent bg="black" p="48px 0">
                <DrawerCloseTrigger color="white" />
                <DrawerHeader color="white">
                  <Image src="/imgs/EgyBook.svg"/>
                </DrawerHeader>
                <DrawerBody>
                  <VStack spacing={4} align="flex-start">
                    
                    {isSignedIn ? (
                      <>
                        <Link href="/heart" color="white" onClick={toggleDrawer}>
                          <Image src="/imgs/Heart.svg" alt="Heart Icon" cursor="pointer" />
                          <Text>Wishlist</Text>
                        </Link>
                        <Link href="/cart" color="white" onClick={toggleDrawer}>
                          <Image src="/imgs/Shopping cart.svg" alt="Shopping Cart Icon" cursor="pointer"/>
                          <Text>Cart</Text>
                        </Link>
                        {links.map((link) => (
                          <Box key={link.href} asChild value={link.title} color={link.color} cursor="pointer">
                              <a href={link.href} target="_blank" rel="noreferrer" > {link.title} </a>
                          </Box>
                        ))}
                        <Box as="button" color="red.500" cursor="pointer" onClick={handleLogOut}>Logout</Box>
                        
                      </>
                    ) : (
                      <Box display="flex" flexDirection="column" gap={4}>
                        <Box color="white" onClick={handleLogin}>
                          Login
                        </Box>
                        <Box color="white">
                          Sign Up
                        </Box>
                      </Box>
                    )}
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </DrawerPositioner>
          </Drawer.Root>
      </Flex>
    );
};

export default Navbar;