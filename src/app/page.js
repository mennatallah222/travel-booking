import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Hero from "@/components/Hero";

export default function Home() {
  const isSignedIn = false;

  return (
    <div>
      <Navbar isSignedIn={isSignedIn} />
        <SearchBar />
        <Hero name="Beshoy"/>
    </div>
  );
}