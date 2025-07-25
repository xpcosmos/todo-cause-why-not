import { useState } from "react";
import Tasks from "../components/Tasks/Tasks";
import Header from "../components/Header/Header";
import Status, { type StatusType } from "../api/Status";
import SearchBar from "../components/SearchBar/SearchBar";
import StatusNavigation from "../components/StatusNavigation/StatusNavigation";
import { NavigationContext } from "../components/StatusNavigation/NavigationContext";

import TodoForms from "../components/TodoForm/TodoForms";

function Home() {
  const [currentTab, setCurrentTab] = useState<StatusType>(Status.pending);
  return (
    <>
      <Header />
      <SearchBar />
      <NavigationContext.Provider value={{ currentTab, setCurrentTab }}>
        <StatusNavigation />
        <Tasks />
      </NavigationContext.Provider>
      <TodoForms/>
    </>
  );
}

export default Home;
