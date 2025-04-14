import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const isSignedIn = false;

  return (
    <div>
      <Navbar isSignedIn={isSignedIn} />
      <main>
        <SearchBar />
      </main>
    </div>
  );
}