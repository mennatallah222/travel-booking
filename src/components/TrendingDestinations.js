"use client"
import { Box, Button, Image, Span, Text } from "@chakra-ui/react";
import { color } from "framer-motion";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

const images=[
    {
        src:"/imgs/1.png",
        description:"Unveil secrets of ancient wonders.",
        city:"Soma Bay",
        color:"blue"
    },
    {
        src:"/imgs/2.png",
        description:"Sunshine, beaches, and vibrant reefs.",
        city:"Hurghada",
        color:"orange"

    },
    {
        src:"/imgs/1.png",
        description:"Unveil secrets of ancient wonders.",
        city:"Soma Bay",
        color:"blue"

    },
    {
        src:"/imgs/2.png",
        description:"Unveil secrets of ancient wonders.",
        city:"Hurghada",
        color:"red"

    },
    {
        src:"/imgs/1.png",
        description:"Sunshine, beaches, and vibrant reefs.",
        city:"Cairo",
        color:"blue"

    },
    {
        src:"/imgs/2.png",
        description:"Sunshine, beaches, and vibrant reefs.",
        city:"Hurghada",
        color:"red"

    },
    {
        src:"/imgs/1.png",
        description:"Unveil secrets of ancient wonders.",
        city:"Soma Bay",
        color:"orange"

    },
];

const gradientColors = {
  blue: "from-blue-300 to-blue-900",
  orange: "from-orange-300 to-orange-900",
  red: "from-red-300 to-red-900",
};
export default function TrendingDestinations(){

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards=2.5;
  const cardWidth=520;
  const maxIdx=images.length-visibleCards;
  const prevSlide = () => {
    setCurrentIndex((prev) =>Math.max(prev-1, 0));
  };
  const nextSlide = () => {
    setCurrentIndex((prev) =>Math.min(prev+1, maxIdx));
  };
    return(
    <Box className="bg-black">
        <Box display="flex" justifySelf="center" flexDirection="column" width="75%" p={4}>
            <Text fontSize="4xl" color="white">Trending Destinations</Text>

            <Box className="relative mt-4" display="flex" justifySelf="center" justifyContent="center" alignItems="center">
                <Button className="absolute left-5 z-100 top-1/2  h-[459px] rounded-xl p-2 group" bgColor="white" rounded="full"  width="40px" height="40px" onClick={prevSlide}>
                    <FaChevronLeft className="text-black group-hover:text-gray-500" />
                </Button>
                <Box className="slider-container" width={`${cardWidth*visibleCards}px`} overflow="hidden" position="relative">
                    <Box className="slider" display="flex" gap={4} transition={"transform 0.5s ease-in-out"} transform={`translateX(-${currentIndex*cardWidth}px)`} width= {`${images.length * cardWidth}px`}>
                        {
                            images.map((image, idx)=>(
                                <Box key={idx} flexShrink={0} borderRadius="30px" position="relative" display="flex" flexDirection="column"  width="400px">
                                    <Box position="absolute" p={4} display="flex" flexDirection="column" width="100%" color="white" zIndex="100">
                                        <Box borderRadius="4xl" p={2} fontSize="28px" fontWeight="bold">{image.city}</Box>
                                        <Box  borderRadius="4xl" p={2}>{image.description}</Box>
                                    </Box>
                                    <Box position="relative" width="100%" height="300px">

                                    <Box className={`absolute inset-0 bg-gradient-to-r ${gradientColors[image.color]|| "from-gray-400 to-gray-900"} opacity-60 z-10`} borderRadius="30px"/>
                                        <Image src={image.src} alt={`Slide ${idx+1}`} objectFit="cover" borderRadius="30px" width="100%" height="300px" />
                                    </Box>

                                    <Box position="absolute" bottom="0" display="flex" justifyContent="space-between" fontSize="18px" p={3}>
                                        <Button bgColor="white" color="black" borderRadius="4xl" p="12px 24px" zIndex="100">See Hotels</Button>
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