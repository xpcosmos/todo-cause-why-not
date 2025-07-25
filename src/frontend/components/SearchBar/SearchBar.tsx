import "./SearchBar.scss";
import img from "../../../assets/search-alt-2-svgrepo-com.svg";

function SearchBar() {
  return (
    <>
      <div className="search-box">
        <img src={img} />
        <input type="text" className="icon" placeholder="Search"></input>
      </div>
    </>
  );
}

export default SearchBar;
