"use client";
import { Box, Flex, Text, Image, Button, Link, HStack, VStack, Grid, Span } from "@chakra-ui/react";
import { FaInstagram, FaFacebookF, FaTiktok, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <Box className="bg-black" color="white" py={10} px={8}>
        <Flex justifySelf="center" width="75%" direction="column" gap={8} mt={8}>
            <Flex align="flex-start" direction="column" gap={4}>
                <Image src="/imgs/LOGO 2.svg" alt="GOE Logo"/>
                <Text fontSize="lg" maxW="300px">
                    Lorem, Ipsum Lorem, Ipsum Lorem, Ipsum or less.
                </Text>
            </Flex>
            <Grid>
                <Grid templateColumns="repeat(2, 1fr)">
                    <Button width="fit-content" bg="#d1ab71" color="white" borderRadius="4xl" px={6}>
                        Discover More
                    </Button>
                    <Flex align="flex-end" justifyContent="flex-end" gap={4}>
                        <Box bg="#d1ab71" borderRadius="md" p={2}>
                            <FaInstagram size={20} color="black" />
                        </Box>
                        <Box bg="#d1ab71" borderRadius="md" p={2}>
                            <FaFacebookF size={20} color="black" />
                        </Box>
                        <Box bg="#d1ab71" borderRadius="md" p={2}>
                            <FaTiktok size={20} color="black" />
                        </Box>
                        <Box bg="#d1ab71" borderRadius="md" p={2}>
                            <FaXTwitter size={20} color="black" />
                        </Box>
                        <Box bg="#d1ab71" borderRadius="md" p={2}>
                            <FaLinkedinIn size={20} color="black" />
                        </Box>
                    </Flex>
                </Grid>
                <Flex justifyContent="space-between">
                    <Flex mt={6} gap={6} wrap="wrap">
                        <Link href="/" color="white" fontSize="sm">Home</Link>
                        <Link href="/egybook" color="white" fontSize="sm"><Span color="#d1ab71">Egy</Span>Book</Link>
                        <Link href="/egyexplore" color="white" fontSize="sm"><Span color="#d1ab71">Egy</Span>Explore</Link>
                        <Link href="/egytales" color="white" fontSize="sm"><Span color="#d1ab71">Egy</Span>Tales</Link>
                        <Link href="/egytreasure" color="white" fontSize="sm"><Span color="#d1ab71">Egy</Span>Treasure</Link>
                    </Flex>
                    <Flex mt={6} gap={6} wrap="wrap" textAlign="right">
                        <Text>Copyright Gates of Egypt © 2024<br />All rights reserved</Text>
                    </Flex>
                </Flex>
            </Grid>
        </Flex>
    </Box>
  );
}
