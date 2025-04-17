"use client";
import { Box, Text, Image, Button, Select, Portal, Span, Stack, createListCollection, Separator } from "@chakra-ui/react";
import { FaLocationArrow } from "react-icons/fa";
import "../app/globals.css";
import { useEffect, useState } from "react";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { PiUsers } from "react-icons/pi";
import {DateRange} from "react-date-range";
import { addDays, format } from 'date-fns';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { formatDate } from "date-fns";
import { enUS } from "date-fns/locale";

const locs = createListCollection({
  items: [
    { value: "Cairo, Egypt", label: "Cairo, Egypt", description:"City in Egypt" },
    { value: "Alexandria, Egypt", label: "Alexandria, Egypt", description:"City in Egypt" },
    { value: "Sharm El-Sheikh, Egypt", label: "Sharm El-Sheikh, Egypt", description:"City in Egypt" },
  ],
})


export default function Hero({name}){
    const [showDatePicker, setShowDatePicker]=useState(false);
    const [showGuestsPicker, setShowGuestsPicker]=useState(false);
    const [range, setRange] = useState([
        {
            startDate:new Date(),
            endDate: addDays(new Date(), 7),
            key:"selection"
        },
    ]);

    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(1);
    const [rooms, setRooms] = useState(1);

    return (
            <Box width="85%" display="flex" flexDirection="column" justifySelf="center" height="100%">
                <Box textAlign="start" color="white" p={8} m="64px" mt={32}>
                    <Box py={4}>
                        <Box display="flex" fontWeight="bold" fontSize="xl" p={2} alignItems="center">
                            <FaLocationArrow color="white"/>
                            <Text color="white" ml={2}>Egypt</Text>
                        </Box>
                        <Text fontSize="5xl" fontWeight="bold">Hey, {name}!</Text>
                        <Text fontSize="5xl" color="white">Tell us where you want to stay.</Text>
                        <Text fontSize="3xl">Book over 450 curated Egyptian hotels.</Text>
                    </Box>
                    
                    <Box position="relative" borderRadius="50px" p={2} width="95%" bgColor="#c0bbbb66" display="flex" justifyContent="space-evenly" justifySelf="center" alignItems="center">
                        
                        <Box className="hero-sections w-full relative">
                            <Button className="flex items-center gap-x-2 text-sm rounded-lg border px-4 py-2 text-white bg-gray-600">
                                <CiLocationOn size="20px" color="#d1ab71" />
                            </Button>
                            <Select.Root collection={locs} size="sm" width="320px" defaultValue={"cairo"} variant={"filled"} cursor="pointer">
                                <Select.Control>
                                    <Select.Trigger> <Select.ValueText placeholder="Select plan"  _hover={{cursor:"pointer"}}/> </Select.Trigger>
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
                                <Text fontSize="sm">
                                    {
                                        range[0].startDate&&range[0].endDate?
                                        `${formatDate(range[0].startDate, "dd MMM yyyy")} - ${formatDate(range[0].endDate, "dd MMM yyyy")}`
                                        :
                                        "Select Dates"
                                    }
                                </Text>
                            </Button>
                            
                        </Box>
                        {showDatePicker && (
                        <Box className="absolute left-0 top-full mt-2 z-50 p-6 rounded-lg shadow-lg" style={{width:"100%"}}>
                            <DateRange locale={enUS} ranges={range} style={{width:"100%"}}
                            onChange={(item) => setRange([item.selection])}
                            moveRangeOnFirstSelection={false} 
                            showPreview={true} months={2}
                            direction="horizontal"
                            showMonthAndYearPickers={true} 
                            minDate={new Date()}
                            className="my-calendaer"/>
                        </Box>
                        )}

                        <Separator orientation="vertical" height="10" />

                        <Box className="hero-sections w-full relative">
                            <Button className="flex items-center gap-x-2 text-sm rounded-lg border px-4 py-2 text-white bg-gray-600" onClick={() => setShowGuestsPicker(!showGuestsPicker)}>
                                <PiUsers size="20px" color="#d1ab71" />
                                <Text fontSize="sm">
                                    {
                                        adults&&rooms?
                                        `${adults} Adults, ${children} Children, ${rooms} Rooms`
                                        :
                                        "Select Guests"
                                    }
                                </Text>

                            </Button>
                            
                            {
                                showGuestsPicker&&(
                                    <Box className="absolute z-50 rounded-lg shadow-lg bg-gray" top="120%" mt="24px !important" bgColor="gray" p={6} display="flex" flexDirection="column" gap={3}>
                                        <Stack direction="row" className="justify-between items-center content-center" gap={5}>
                                            <Stack direction="column" gap={1}>
                                                <Text>Adults</Text>
                                                <Span color="gray.300" textStyle="xs">Age 18 or above</Span>
                                            </Stack>
                                            <Stack direction="row" align="cneter" className="justify-between items-center content-center" gap={4}>
                                                <Button onClick={() => setAdults(Math.max(1, adults - 1))} rounded="4xl" style={{border:"1px solid white"}}>-</Button>
                                                <Text fontSize="lg">{adults}</Text>
                                                <Button onClick={() => setAdults(adults + 1)} rounded="4xl" style={{border:"1px solid white"}}>+</Button>
                                            </Stack>
                                        </Stack>

                                        <Stack direction="row" className="justify-between items-center content-center">
                                            <Stack direction="column" gap={1}>
                                                <Text>Children</Text>
                                                <Span color="gray.300" textStyle="xs">Under 18</Span>
                                            </Stack>
                                            <Stack direction="row" align="cneter" className="justify-between items-center content-center" gap={4}>
                                                <Button onClick={() => setChildren(Math.max(0, children - 1))} rounded="4xl" style={{border:"1px solid white"}}>-</Button>
                                                <Text fontSize="lg">{children}</Text>
                                                <Button onClick={() => setChildren(children + 1)} rounded="4xl" style={{border:"1px solid white"}}>+</Button>
                                            </Stack>
                                        </Stack>

                                        <Stack direction="row" className="justify-between items-center content-center">
                                            <Text>Rooms</Text>
                                            <Stack direction="row" align="cneter" className="justify-between items-center content-center" gap={4}>
                                                <Button onClick={() => setRooms(Math.max(1, rooms - 1))} rounded="4xl" style={{border:"1px solid white"}} disabled={rooms==1}>-</Button>
                                                <Text fontSize="lg">{rooms}</Text>
                                                <Button onClick={() => setRooms(rooms + 1)} rounded="4xl" style={{border:"1px solid white"}}>+</Button>
                                            </Stack>
                                        </Stack>

                                        <Span color="gray.300" textStyle="xs">You can search for up to 16 travelers</Span>
                                    </Box>
                                )
                            }
                        </Box>


                        <Button bg="green.700" color="white" px={6} py={4} borderRadius="40px">
                            Explore Stays
                        </Button>
                        
                    </Box>
                </Box>
            </Box>
    );
}