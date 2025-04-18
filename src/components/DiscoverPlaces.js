"use client"
import { Box, Button, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  { src: "/imgs/1.png", city: "Red Sea" },
  { src: "/imgs/2.png", city: "Soma Bay" },
  { src: "/imgs/1.png", city: "Soma Bay" },
  { src: "/imgs/2.png", city: "Soma Bay" },
  { src: "/imgs/1.png", city: "Cairo" },
  { src: "/imgs/2.png", city: "Soma Bay" },
  { src: "/imgs/1.png", city: "Soma Bay" },
  { src: "/imgs/1.png", city: "Cairo" },
  { src: "/imgs/2.png", city: "Soma Bay" },
  { src: "/imgs/1.png", city: "Soma Bay" },
];

export default function DiscoverPlaces() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 260;
  const visibleCards = 6.5;
  const maxIdx = images.length - visibleCards;

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIdx));
  };

  return (
    <Box bg="black">
      <Box display="flex" flexDirection="column" width="100%" maxW="1200px" mx="auto" p={4}>
        <Text fontSize={{ base: "2xl", md: "4xl" }} color="white">
          Discover New Places
        </Text>

        {isMobile ? (
          <Box mt={4} display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
            {images.map((image, idx) => (
              <Box key={idx} bg="white" borderRadius="20px" overflow="hidden" width="160px">
                <Image src={image.src} alt={`Image ${idx}`} objectFit="cover" width="100%" height="220px"/>
                <Box p={2} textAlign="center" fontWeight="bold" bg="gray.700" color="white">
                  {image.city}
                </Box>
              </Box>
            ))}
          </Box>
        ) : (
          <Box position="relative" mt={4} display="flex" alignItems="center" justifyContent="center">
            <Button position="absolute" left="-2" zIndex="10" top="50%" transform="translateY(-50%)" bg="white" rounded="full" width="40px" height="40px" onClick={prevSlide} >
              <FaChevronLeft color="black" />
            </Button>

            <Box width={`${cardWidth * visibleCards}px`} overflow="hidden" position="relative">
              <Box display="flex" gap={4} transition="transform 0.5s ease-in-out" transform={`translateX(-${currentIndex * cardWidth}px)`} width={`${images.length * cardWidth}px`} >
                {images.map((image, idx) => (
                  <Box key={idx} bg="white" flexShrink={0} borderRadius="30px" position="relative" display="flex" flexDirection="column" >
                    <Image src={image.src} alt={`Slide ${idx + 1}`} objectFit="cover" borderRadius="30px" width="160px" height="280px" />
                    <Box position="absolute" bottom={0} p={4} display="flex" justifyContent="space-between" width="100%" fontWeight="bold" >
                      {image.city}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            <Button position="absolute" right="-5" zIndex="10" top="50%" transform="translateY(-50%)" bg="white" rounded="full" width="40px" height="40px" onClick={nextSlide}>
              <FaChevronRight color="black" />
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
