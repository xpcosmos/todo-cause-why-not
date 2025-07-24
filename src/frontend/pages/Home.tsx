import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import StatusNavigation from "../components/StatusNavegation/StatusNavigation";
import Tasks from "../components/Tasks/Tasks";


function Home(){
  return (
    <>
    <Header/>
    <SearchBar/>
    <StatusNavigation/>
    <Tasks/>
    </>
  )
};

export default Home;