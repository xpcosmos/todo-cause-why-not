import "./Header.scss";
import DateUtils from "../../api/DateUtils";

function Header(){


  return (
    <>
    <div className="page-header">
      <h1>Today</h1>
      <p>{DateUtils.getFormattedToday()}</p>
    </div>
    </>
  )
};

export default Header;