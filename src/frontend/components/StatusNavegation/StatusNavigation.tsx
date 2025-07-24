import StatusTab from "../StatusTab/StatusTab";
import Status, { type StatusType } from "../../api/Status";
import "./StatusNavigation.scss";

import { NavigationContext } from "./NavigationContext";
import { useState } from "react";

function StatusNavigation() {
  const [currentTab, setCurrentTab] = useState<StatusType>(Status.pending);
  return (
    <>
  <NavigationContext.Provider value={{currentTab, setCurrentTab}}>
      <ul className="status-navigation">
        <StatusTab {...Status.pending } />
        <StatusTab {...Status.onGoing } />
        <StatusTab {...Status.complete } />
      </ul>
  </NavigationContext.Provider>
      
    </>
  );
}

export default StatusNavigation;
