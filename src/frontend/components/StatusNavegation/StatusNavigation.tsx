import StatusTab from "../StatusTab/StatusTab";
import "./StatusNavigation.scss";

function StatusNavigation() {
  return (
    <>
      <ul className="status-navigation">
        <StatusTab {...{ id: 0, label: "Pending" }} />
        <StatusTab {...{ id: 1, label: "On Going" }} />
        <StatusTab {...{ id: 2, label: "Complete" }} />
      </ul>
    </>
  );
}

export default StatusNavigation;
