import { ChangeEventHandler } from "react";
import "./SearchBox.styles.css"
type SearchBoxProps = {
  className:string;
  placeholder:string;
  searchChange:ChangeEventHandler<HTMLInputElement>
}

const SearchBox = ({ searchChange,placeholder,className }:SearchBoxProps) => {
  return (
    <div className='pa2'>
      <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;