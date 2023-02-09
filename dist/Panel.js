function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import classNames from "classnames";
const Panel = ({
  children,
  className,
  ...rest
}) => {
  const finalClassNames = classNames('border rounded p-3 shadow bg-white w-full', className);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: finalClassNames
  }), children);
};
export default Panel;