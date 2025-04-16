"use client";
import { Box, Text, Image, Button, Select, Portal, Span, Stack, createListCollection, Separator, Input } from "@chakra-ui/react";
import { FaLocationArrow } from "react-icons/fa";
import "../app/globals.css";
import { useState } from "react";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import {DateRange} from "react-date-range";
import { addDays } from 'date-fns';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const locs = createListCollection({
  items: [
    { value: "Cairo, Egypt", label: "Cairo, Egypt", description:"City in Egypt" },
    { value: "Alexandria, Egypt", label: "Alexandria, Egypt", description:"City in Egypt" },
    { value: "Sharm El-Sheikh, Egypt", label: "Sharm El-Sheikh, Egypt", description:"City in Egypt" },
  ],
})


export default function Hero({name}){
    const [showDatePicker, setShowDatePicker]=useState(false);
    const [range, setRange] = useState([
        {
            startDate:new Date(),
            endDate: addDays(new Date(), 7),
            key:"selection"
        },
    ]);
    
    return (
        <Box bgImage="url('/imgs/HeroBG.svg')" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundPosition="center">
            <Box width="85%" display="flex" flexDirection="column" justifySelf="center" height="100%">
                <Box textAlign="start" color="white" p={8} m="64px" mt={32}>
                    <Box py={4}>
                        <Box display="flex" fontWeight="bold" fontSize="xl" p={2} alignItems="center">
                            <FaLocationArrow color="white" />
                            <Text color="white" ml={2}>Egypt</Text>
                        </Box>
                        <Text fontSize="5xl" fontWeight="bold">Hey, {name}!</Text>
                        <Text fontSize="5xl" color="white">Tell us where you want to stay.</Text>
                        <Text fontSize="3xl">Book over 450 curated Egyptian hotels.</Text>
                    </Box>
                    
                    <Box position="relative" borderRadius="50px" p={6} width="95%" bgColor="#c0bbbb66" display="flex" justifyContent="space-evenly" justifySelf="center" alignItems="center">
                        
                        <Box className="hero-sections w-full relative">
                            <Button className="flex items-center gap-x-2 text-sm rounded-lg border px-4 py-2 text-white bg-gray-600">
                                <CiLocationOn size="20px" color="#d1ab71" />
                            </Button>
                            <Select.Root collection={locs} size="sm" width="320px" defaultValue={"cairo"} variant={"filled"} cursor="pointer">
                                <Select.Control>
                                    <Select.Trigger> <Select.ValueText placeholder="Select plan" /> </Select.Trigger>
                                </Select.Control>

                                <Portal>
                                    <Select.Positioner>
                                        <Select.Content borderRadius="20px" bgColor="#c0bbbb66" p={0}>
                                            {locs.items.map((loc) => (
                                            <Select.Item item={loc} key={loc.value}>
                                                <Stack gap="0">
                                                    <Box display="flex" p={2}>
                                                        <Image src="/imgs/Logo_Bici_sfondo_blu.png.png"/>
                                                        <Box display="flex" flexDirection="column" p={2}>
                                                            <Select.ItemText>{loc.label}</Select.ItemText>
                                                            <Span color="gray.500" textStyle="xs">{loc.description}</Span>
                                                        </Box>
                                                    </Box>
                                                </Stack>
                                            </Select.Item>
                                            ))}
                                        </Select.Content>
                                    </Select.Positioner>
                                </Portal>
                            </Select.Root>
                        </Box>
                        
                        <Separator orientation="vertical" height="10" />

                        <Box className="hero-sections w-full relative">
                            <Button className="flex items-center gap-x-2 text-sm rounded-lg border px-4 py-2 text-white bg-gray-600" onClick={() => setShowDatePicker(!showDatePicker)}>
                                <CiCalendar size="20px" color="#d1ab71" />
                                <Text fontSize="sm">Select Dates</Text>
                            </Button>
                            
                        </Box>
                        {showDatePicker && (
                        <Box className="absolute left-0 top-full mt-2 z-50 p-4 rounded-lg shadow-lg overflow-hidden" width="100%" minWidth="100%" maxWidth="100%">
                            <DateRange ranges={range} style={{width:"100%"}}
                            onChange={(item) => setRange([item.selection])}
                            moveRangeOnFirstSelection={false} 
                            showPreview={true} months={2}
                            direction="horizontal"
                            showMonthAndYearPickers={true} className="my-calendaer"/>
                        </Box>
                        )}

                        <Separator orientation="vertical" height="10" />

                        <Box className="hero-sections w-full">
                            <Image src="/imgs/Users.png"/>
                            {/* <Text>***TO ADD ADULTS, CHILDREN, ROOMS PICKER***</Text> */}
                        </Box>

                        <Button bg="green.500" color="white" px={6} py={4} borderRadius="40px">
                            Explore Stays
                        </Button>

                    </Box>
                </Box>
            </Box>
        </Box>
    );
}