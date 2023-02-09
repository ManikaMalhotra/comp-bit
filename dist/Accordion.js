import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
const Accordion = ({
  items
}) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const handleClick = index => {
    setExpandedIndex(currentExpandedIndex => {
      if (currentExpandedIndex === index) {
        return -1;
      } else {
        return index;
      }
    });
  };
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = /*#__PURE__*/React.createElement("span", {
      className: "text-2xl"
    }, isExpanded ? /*#__PURE__*/React.createElement(GoChevronDown, null) : /*#__PURE__*/React.createElement(GoChevronLeft, null));
    return /*#__PURE__*/React.createElement("div", {
      key: item.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer",
      onClick: () => handleClick(index)
    }, item.label, icon), isExpanded && /*#__PURE__*/React.createElement("div", {
      className: "border-b p-5"
    }, item.content));
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "border-x border-t rounded"
  }, renderedItems);
};
export default Accordion;