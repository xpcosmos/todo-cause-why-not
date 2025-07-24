import type { Status } from "../../api/Status";
import "./StatusTab.scss";

function StatusTab({ label }: Status) {
  return (
    <>
    <div className="nav-box">
    <li className="nav-item">
        <a onClick={() => console.log("Oi")} href="#">
          {label}
        </a>
      </li>
    </div>
      
    </>
  );
}

export default StatusTab;
