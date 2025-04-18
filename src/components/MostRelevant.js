"use client"
import { Box, Button, Image, Span, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

const images=[
    {
        src:"/imgs/1.png",
        title:"Kempinski Hotel Soma Bay",
        description:"From $214 per person",
        rating:"4.7",
        reviewsCount:"1,274",
        city:"Soma Bay"
    },
    {
        src:"/imgs/2.png",
        title:"Kempinski Hotel Soma Bay",
        description:"From $214 per person",
        rating:"4.7",
        reviewsCount:"1,274",
        city:"Soma Bay"
    },
    {
        src:"/imgs/1.png",
        title:"Kempinski Hotel Soma Bay",
        description:"From $214 per person",
        rating:"4.7",
        reviewsCount:"1,274",
        city:"Soma Bay"
    },
    {
        src:"/imgs/2.png",
        title:"Kempinski Hotel Soma Bay",
        description:"From $214 per person",
        rating:"4.7",
        reviewsCount:"1,274",
        city:"Soma Bay"
    },
    {
        src:"/imgs/1.png",
        title:"Kempinski Hotel Soma Bay",
        description:"From $214 per person",
        rating:"4.7",
        reviewsCount:"1,274",
        city:"Cairo"
    },
    {
        src:"/imgs/2.png",
        title:"Kempinski Hotel Soma Bay",
        description:"From $214 per person",
        rating:"4.7",
        reviewsCount:"1,274",
        city:"Soma Bay"
    },
    {
        src:"/imgs/1.png",
        title:"Kempinski Hotel Soma Bay",
        description:"From $214 per person",
        rating:"4.7",
        reviewsCount:"1,274",
        city:"Soma Bay"
    },
];
export default function MostRelevant(){

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
            <Text fontSize="4xl" color="white">The Most Relevant</Text>

            <Box className="relative mt-4" display="flex" justifySelf="center" justifyContent="center" alignItems="center">
                <Button className="absolute left-5 z-100 top-1/2  h-[459px] rounded-xl p-2 group" bgColor="white" rounded="full"  width="40px" height="40px" onClick={prevSlide}>
                    <FaChevronLeft className="text-black group-hover:text-gray-500" />
                </Button>
                <Box className="slider-container" width={`${cardWidth*visibleCards}px`} overflow="hidden" position="relative">
                    <Box className="slider" display="flex" gap={4} transition={"transform 0.5s ease-in-out"} transform={`translateX(-${currentIndex*cardWidth}px)`} width= {`${images.length * cardWidth}px`}>
                        {
                            images.map((image, idx)=>(
                                <Box key={idx} bgColor="white" flexShrink={0} borderRadius="30px" position="relative" display="flex" flexDirection="column"  width="400px">
                                    <Box position="absolute" p={4} display="flex" justifyContent="space-between" width="100%">
                                        <Box bgColor="white" color="#328E6E" borderRadius="4xl" p="12px 24px">
                                            {image.city}
                                        </Box>
                                        <Button rounded="full" border="1px solid #d1ab71" bgColor="#ffefd6" width="40px" height="40px" >
                                            <FaRegHeart style={{ color: "black", strokeWidth: 2 }}/>
                                        </Button>
                                    </Box>
                                    <Image src={image.src} alt={`Slide ${idx+1}`} objectFit="cover" borderRadius="30px" width="100%" height="300px"/>
                                    <Box display="flex" justifyContent="space-between" fontSize="18px">
                                        <Box display="flex" flexDirection="column">
                                            <Text color="black" padding="12px 0 0 12px" fontWeight="bold">{image.title}</Text>
                                            <Text color="black" padding="0 0 12px 12px" fontSize="12px">{image.description}</Text>
                                        </Box>
                                        <Box >
                                            <Box display="flex" gap={2} p={2} mt={2} alignItems="center">
                                                <FaStar className="inline text-amber-600" />
                                                <Text color="black">{image.rating}</Text>
                                                <Span className="text-gray-400"> ({image.reviewsCount})</Span>
                                            </Box>
                                        </Box>
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