import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';
const Dropdown = ({
  options,
  value,
  onChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const divElement = useRef();
  useEffect(() => {
    const handler = event => {
      if (!divElement.current) {
        return;
      }
      if (!divElement.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handler, true);
    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);
  const handleClick = () => {
    setIsOpen(currentIsOpen => !currentIsOpen);
  };
  const handleOptionClick = option => {
    setIsOpen(false);
    onChange(option);
  };
  const renderedOptions = options.map(option => {
    return /*#__PURE__*/React.createElement("div", {
      className: "hover:bg-sky-100 rounded cursor-pointer p-1",
      key: option.value,
      onClick: () => handleOptionClick(option)
    }, option.label);
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: divElement,
    className: "w-48 relative"
  }, /*#__PURE__*/React.createElement(Panel, {
    className: "flex justify-between items-center cursor-pointer",
    onClick: handleClick
  }, value?.label || 'Select', /*#__PURE__*/React.createElement(GoChevronDown, {
    className: "text-lg"
  })), isOpen && /*#__PURE__*/React.createElement(Panel, {
    className: "absolute top-full"
  }, renderedOptions));
};
export default Dropdown;