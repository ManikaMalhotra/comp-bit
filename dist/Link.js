import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";
const Link = ({
  to,
  children,
  className,
  activeClassName
}) => {
  const {
    navigate,
    currentPath
  } = useNavigation();
  const classes = classNames('text-blue-500', className, currentPath === to && activeClassName);
  const handleClick = event => {
    //TODO: if ctrl or cmd key is pressed, tab is opened in a new window
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };
  return /*#__PURE__*/React.createElement("a", {
    className: classes,
    href: to,
    onClick: handleClick
  }, children);
};
export default Link;