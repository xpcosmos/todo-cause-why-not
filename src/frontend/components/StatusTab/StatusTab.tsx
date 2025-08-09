import { useContext } from "react";
import type { StatusType } from "../../api/Status";
import "./StatusTab.scss";

import { NavigationContext } from "../StatusNavigation/NavigationContext";

function StatusTab(props: StatusType) {
  const { currentTab, setCurrentTab } = { ...useContext(NavigationContext) };
  const className = () => {
    if (currentTab?.value == props.value) {
      return "on";
    } else {
      return "off";
    }
  };
  return (
    <>
      <div className={`nav-box-${className()}`} key={props.id} id={props.id}>
        <li className="nav-item">
          <a
            href="#"
            className={`nav-item-link`}
            onClick={() => setCurrentTab?.(props)}
          >
            {props.label}
          </a>
        </li>
      </div>
    </>
  );
}

export default StatusTab;
