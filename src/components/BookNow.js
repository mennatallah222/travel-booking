import { Box, Button, Text, Image, Grid, Flex } from "@chakra-ui/react";

export default function BookNow() {
  return (
    <Box className="flex justify-center items-center bg-black">
        <Grid templateColumns="repeat(2, 1fr)" width="65%" gap={4} alignItems="center" bgColor="#BFDBC9" mt={8} borderRadius="30px">
            <Flex flexDirection="column" gap={2} p={8} justifyContent="center" m={4} color="black">
                <Text fontSize="40px" fontWeight="extrabold">
                    Ready to Book Your Next Adventure?<br/>
                </Text>
                <Box width="80%">
                    <Text fontSize="20px" color="gray.700" mb={4}>
                        Get exclusive deals and immersive previews with our smart booking platform.
                    </Text>
                    <Button bg="#458465" color="white" px={8} width="100%" borderRadius="40px">Book now</Button>
                </Box>
            </Flex>
            <Image src="/imgs/2.png" alt="Book Now"/>
        </Grid>
    </Box>
  );
}