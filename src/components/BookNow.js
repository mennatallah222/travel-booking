import { Box, Button, Text, Image, Grid, Flex } from "@chakra-ui/react";

export default function BookNow() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" bg="black" py={8} px={4}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} width={{ base: "90%", md: "65%" }} gap={6} alignItems="center" bgColor="#BFDBC9" mt={8} borderRadius="30px" >
            <Flex flexDirection="column" gap={2} p={8} justifyContent="center" m={4} color="black">
                <Text fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="extrabold">
                    Ready to Book Your Next Adventure?<br/>
                </Text>
                <Box width={{ base: "100%", md: "80%" }}>
                    <Text fontSize="20px" color="gray.700" mb={4}>
                        Get exclusive deals and immersive previews with our smart booking platform.
                    </Text>
                    <Button bg="#458465" color="white" px={8} width="100%" borderRadius="40px" fontSize={{ base: "sm", md: "md" }}>Book now</Button>
                </Box>
            </Flex>
            <Image src="/imgs/2.png" alt="Book Now" width="100%" height="100%" objectFit="cover" borderBottomRightRadius={{ base: "30px", md: "0" }} borderTopLeftRadius={{ base: 0, md: "0" }}/>
        </Grid>
    </Box>
  );
}