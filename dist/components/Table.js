import { Fragment } from "react";
const Table = ({
  data,
  config,
  keyFunction
}) => {
  const renderedHeaders = config.map(column => {
    if (column.header) {
      return /*#__PURE__*/React.createElement(Fragment, {
        key: column.label
      }, column.header());
    }
    return /*#__PURE__*/React.createElement("th", {
      key: column.label
    }, column.label);
  });
  const renderedRows = data.map(rowData => {
    const renderedCells = config.map(column => {
      return /*#__PURE__*/React.createElement("td", {
        className: "p-2",
        key: column.label
      }, column.render(rowData));
    });
    return /*#__PURE__*/React.createElement("tr", {
      className: "border-b",
      key: keyFunction(rowData)
    }, renderedCells);
  });
  return /*#__PURE__*/React.createElement("table", {
    className: "table-auto border-spacing-2"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    className: "border-b-2"
  }, renderedHeaders)), /*#__PURE__*/React.createElement("tbody", null, renderedRows));
};
export default Table;