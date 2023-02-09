import Link from "./Link";
const Sidebar = () => {
  const links = [{
    label: 'Dropdown',
    path: '/dropdown'
  }, {
    label: 'Accordion',
    path: '/accordion'
  }, {
    label: 'Buttons',
    path: '/buttons'
  }, {
    label: 'Modal',
    path: '/modal'
  }, {
    label: 'Table',
    path: '/table'
  }, {
    label: 'Counter',
    path: '/counter'
  }];
  const renderedLinks = links.map(link => {
    return /*#__PURE__*/React.createElement(Link, {
      key: link.label,
      to: link.path,
      className: "mb-3",
      activeClassName: "font-bold border-l-4 border-blue-500 pl-2"
    }, link.label);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "sticky top-0 flex flex-col items-start"
  }, renderedLinks);
};
export default Sidebar;