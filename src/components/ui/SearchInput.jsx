import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { PropTypes } from "prop-types";
import { useRef } from "react";

const SearchInput = (props) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <div className="flex flex-row items-center px-4 border border-gray-400 rounded-lg w-full">
        <Icon
          path={mdiMagnify}
          title="User Profile"
          size={1}
          color="gray"
          onClick={handleClick}
        />
        <input
          ref={inputRef}
          type={props.type}
          placeholder={props.placeholder}
          className="w-full px-4 py-2 focus:outline-none"
        />
      </div>
    </>
  );
};

SearchInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
export default SearchInput;