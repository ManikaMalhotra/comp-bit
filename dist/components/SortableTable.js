function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import useSort from "../hooks/use-sort";
const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GoArrowSmallUp, null), /*#__PURE__*/React.createElement(GoArrowSmallDown, null));
  }
  if (sortOrder === null) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GoArrowSmallUp, null), /*#__PURE__*/React.createElement(GoArrowSmallDown, null));
  } else if (sortOrder === 'asc') {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GoArrowSmallUp, null));
  } else if (sortOrder === 'desc') {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GoArrowSmallDown, null));
  }
};
const SortableTable = props => {
  const {
    config,
    data
  } = props;
  const {
    sortOrder,
    sortBy,
    sortedData,
    setSortColumn
  } = useSort(data, config);
  const updatedConfig = config.map(column => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => {
        return /*#__PURE__*/React.createElement("th", {
          className: "cursor-pointer hover:bg-gray-100",
          onClick: () => setSortColumn(column.label)
        }, /*#__PURE__*/React.createElement("div", {
          className: "flex items-center"
        }, getIcons(column.label, sortBy, sortOrder), column.label));
      }
    };
  });
  return /*#__PURE__*/React.createElement(Table, _extends({}, props, {
    data: sortedData,
    config: updatedConfig
  }));
};
export default SortableTable;