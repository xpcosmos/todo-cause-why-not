import StatusTab from "../StatusTab/StatusTab";
import Status from "../../api/Status";
import "./StatusNavigation.scss";

function StatusNavigation() {
  return (
    <>
      <ul className="status-navigation">
        <StatusTab {...Status.pending} />
        <StatusTab {...Status.onGoing} />
        <StatusTab {...Status.complete} />
      </ul>
    </>
  );
}

export default StatusNavigation;
