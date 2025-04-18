"use client";
import { Box, Flex, Text, Image, Button, Link, HStack, VStack, Grid, Span } from "@chakra-ui/react";
import { FaInstagram, FaFacebookF, FaTiktok, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <Box className="bg-black" color="white" py={10} px={{base:4, md:8}}>
        <Flex mx="auto" direction="column" gap={8} width={{base:"100%", md:"85%", lg:"75%"}}>
            <Flex direction="column" gap={4}>
                <Image src="/imgs/LOGO 2.svg" alt="GOE logo" maxW="150px"/>
                <Text fontSize="lg" maxW="300px">
                    Lorem, Ipsum Lorem, Ipsum Lorem, Ipsum or less.
                </Text>
            </Flex>
            <Grid>
                <Grid templateColumns={{base:"1fr", md:"1fr 1fr"}} gap={6} alignItems="center">
                    <Button width="fit-content" bg="#d1ab71" color="white" borderRadius="4xl" px={6}>
                        Discover More
                    </Button>
                    <Flex justify={{base:"flex-start", md:"flex-end"}} gap={4}>
                        {
                            [FaInstagram, FaFacebookF, FaTiktok, FaXTwitter, FaLinkedinIn].map((Icon, idx)=>(
                                <Box bg="#d1ab71" borderRadius="md" p={2}>
                                    <Icon size={20} color="black"/>
                                </Box>
                            ))
                        }
                    </Flex>
                </Grid>
                <Flex direction={{base:"column", md:"row"}} justify="space-between" align={{base:"flex-start", md:"center"}} gap={4} wrap="wrap">
                    <Flex gap={6} wrap="wrap">
                        <Link href="/" color="white" fontSize="sm">Home</Link>
                        <Link href="/egybook" color="white" fontSize="sm"><Span color="#d1ab71">Egy</Span>Book</Link>
                        <Link href="/egyexplore" color="white" fontSize="sm"><Span color="#d1ab71">Egy</Span>Explore</Link>
                        <Link href="/egytales" color="white" fontSize="sm"><Span color="#d1ab71">Egy</Span>Tales</Link>
                        <Link href="/egytreasure" color="white" fontSize="sm"><Span color="#d1ab71">Egy</Span>Treasure</Link>
                    </Flex>
                    <Text textAlign={{base:"left", md:"right"}}>
                        <Text>© 2024 Copyright Gates of Egypt<br />All rights reserved</Text>
                    </Text>
                </Flex>
            </Grid>
        </Flex>
    </Box>
  );
}
