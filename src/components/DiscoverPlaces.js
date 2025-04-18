"use client"
import { Box, Button, Image, Span, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

const images=[
    {
        src:"/imgs/1.png",
        city:"Red Sea"
    },
    {
        src:"/imgs/2.png",
        city:"Soma Bay"
    },
    {
        src:"/imgs/1.png",
        city:"Soma Bay"
    },
    {
        src:"/imgs/2.png",
        city:"Soma Bay"
    },
    {
        src:"/imgs/1.png",
        city:"Cairo"
    },
    {
        src:"/imgs/2.png",
        city:"Soma Bay"
    },
    {
        src:"/imgs/1.png",
        city:"Soma Bay"
    },
    {
        src:"/imgs/1.png",
        city:"Cairo"
    },
    {
        src:"/imgs/2.png",
        city:"Soma Bay"
    },
    {
        src:"/imgs/1.png",
        city:"Soma Bay"
    },
];
export default function DiscoverPlaces(){

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards=6.5;
  const cardWidth=160;
  const maxIdx=images.length-visibleCards;
  const prevSlide = () => {
    setCurrentIndex((prev) =>Math.max(prev-1, 0));
  };
  const nextSlide = () => {
    setCurrentIndex((prev) =>Math.min(prev+1, maxIdx));
  };
    return(
    <Box className="bg-black">
        <Box display="flex" justifySelf="center" flexDirection="column" p={4}>
            <Text fontSize="4xl" color="white">Discover New Places</Text>

            <Box className="relative mt-4" display="flex" justifySelf="center" justifyContent="center" alignItems="center">
                <Button className="absolute left-5 z-100 top-1/2  h-[459px] rounded-xl p-2 group" bgColor="white" rounded="full"  width="40px" height="40px" onClick={prevSlide}>
                    <FaChevronLeft className="text-black group-hover:text-gray-500" />
                </Button>
                <Box className="slider-container" width={`${cardWidth*visibleCards}px`} overflow="hidden" position="relative">
                    <Box className="slider" display="flex" gap={2} transition={"transform 0.5s ease-in-out"} transform={`translateX(-${currentIndex*cardWidth}px)`} width= {`${images.length * cardWidth}px`}>
                        {
                            images.map((image, idx)=>(
                                <Box key={idx} bgColor="white" flexShrink={0} borderRadius="30px" position="relative" display="flex" flexDirection="column" >
                                    <Image src={image.src} alt={`Slide ${idx+1}`} objectFit="cover" borderRadius="30px" width="160px" height="280px"/>
                                    <Box position="absolute" bottom={0} p={4} display="flex" justifyContent="space-between" width="100%">
                                        {image.city}
                                    </Box>
                                </Box>

                            ))
                        }
                    </Box>
                </Box>
                <Button className="absolute right-5 z-100 top-1/2 h-[459px] rounded-xl bg-[#111927] p-2 group" bgColor="white" rounded="full"  width="40px" height="40px" onClick={nextSlide}>
                    <FaChevronRight className="text-black group-hover:text-gray-500" />
                </Button>
            </Box>
        </Box>
    </Box>
    )
}