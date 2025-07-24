import { useContext } from "react";
import type { StatusType } from "../../api/Status";
import "./StatusTab.scss";

import { NavigationContext } from "../StatusNavegation/NavigationContext";

function StatusTab({id, label, value }: StatusType) {
  const { currentTab, setCurrentTab } = {...useContext(NavigationContext) };
  const className = () => {
    if (currentTab?.value == value) {
      return "nav-item-on";
    } else {
      return "nav-item-off";
    }
  };

  return (
    <>
      <div className="nav-box">
        <li className="nav-item">
          <a
            href="#"
            className={className()}
            onClick={() => setCurrentTab?.({id, label, value })}
          >
            {label}
          </a>
        </li>
      </div>
    </>
  );
}

export default StatusTab;
