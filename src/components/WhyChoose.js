"use client"
import { Box, Grid, GridItem, Image, Span, Text} from "@chakra-ui/react";

export default function WhyChoose(){

    return(
    <Box className="bg-black" >
        <Box display="flex" justifySelf="center" flexDirection="column" width="75%" p={4}>
            <Box display="flex" justifySelf="center" flexDirection="column" p={4}>
                <Text fontSize="4xl" color="white">Why Choose <Span color="#d1ab71">Egy</Span>Book?</Text>
            </Box>
            <Grid templateColumns="repeat(3, 1fr)" gap="92px" p="32px 0">
                <GridItem color="white">
                    <Image src="/imgs/mouse-click-icon 1.svg" mb={2}/>
                    <Text fontSize="24px" fontWeight="bold" mb={2}><Span color="#d1ab71">Seamless</Span> & <Span color="green.700">Smart</Span> Booking</Text>
                    <Text  fontSize="20px">Quick, user-friendly platform that simplifies the reservation process</Text>
                </GridItem>
                <GridItem color="white">
                    <Image src="/imgs/vr-label-icon 1.svg" mb={2}/>
                    <Text fontSize="24px" fontWeight="bold" mb={2}><Span color="green.700" fontStyle="italic">Immersive</Span> VR Previews</Text>
                    <Text  fontSize="20px">Explore hotels and rooms in 360° before you book—giving you total confidence.</Text>
                </GridItem>
                <GridItem color="white">
                    <Image src="/imgs/1 10.svg" mb={2}/>
                    <Text fontSize="24px" fontWeight="bold" mb={2}><Span color="green.700">Exclusive</Span> Best-Price Deals</Text>
                    <Text  fontSize="20px">Save more with special offers and real-time price comparisons.</Text>
                </GridItem>
            </Grid>
        </Box>
    </Box>
    )
}