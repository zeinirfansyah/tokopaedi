import { PropTypes } from 'prop-types'
const Filter = ({ options, value, onChange }) => {
  return (
    <select className="flex flex-row items-center px-4 py-2 text-gray-400 focus:text-gray-700 border border-gray-400 rounded-lg w-full transition-all duration-200 focus:border-green-600 " onChange={onChange} value={value}>
      <option value="" disabled>
       Pencarian Kategori
      </option>
      <option key="all" value="all">
       Semua
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Filter;

Filter.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
