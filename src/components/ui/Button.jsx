import { PropTypes } from 'prop-types';

export const Button = (props) => {
  return (
    <button onClick={props.onClick} className={`px-4 py-2 border border-green-600 rounded-lg text-[12px] font-semibold ${props.color}`}>{props.children}</button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
}
