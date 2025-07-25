import { useState } from "react";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import { NavigationContext } from "../components/StatusNavigation/NavigationContext";
import StatusNavigation from "../components/StatusNavigation/StatusNavigation";
import Tasks from "../components/Tasks/Tasks";
import type { StatusType } from "../api/Status";
import Status from "../api/Status";

function Home() {
  const [currentTab, setCurrentTab] = useState<StatusType>(Status.pending);
  return (
    <>
      <NavigationContext.Provider value={{ currentTab, setCurrentTab }}>
        <Header />
        <SearchBar />
        <StatusNavigation />
        <Tasks />
      </NavigationContext.Provider>
    </>
  );
}

export default Home;
