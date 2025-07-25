import "./Header.scss";
import DateUtils from "../../api/DateUtils";

function Header() {
  return (
    <>
      <div className="page-header">
        <div className="date-callout">
          <h1>Today</h1>
          <p>{DateUtils.getFormattedToday()}</p>
        </div>
      </div>
    </>
  );
}

export default Header;
