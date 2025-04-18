import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Hero from "@/components/Hero";
import MostRelevant from "@/components/MostRelevant";
import DiscoverPlaces from "@/components/DiscoverPlaces";
import WhyChoose from "@/components/WhyChoose";
import Footer from "@/components/Footer";
import TrendingDestinations from "@/components/TrendingDestinations";
import './globals.css';
import BookNow from "@/components/BookNow";

export default function Home() {

  return (
    <Box overflow="hidden">
      <Navbar />
        <SearchBar />
        <Box bgImage="url('/imgs/HeroBG.svg')" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundPosition="center">
          <Hero name="Beshoy"/>
        </Box>
        <MostRelevant/>
        <DiscoverPlaces/>
        <WhyChoose/>
        <TrendingDestinations/>
        <BookNow/>
        <Footer/>
    </Box>
  );
}