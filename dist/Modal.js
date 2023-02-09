import ReactDOM from "react-dom";
import { useEffect } from 'react';
const Modal = ({
  onClose,
  children,
  actionBar
}) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);
  return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    className: "fixed inset-0 bg-gray-300 opacity-80"
  }), /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-40 p-10 bg-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col justify-between h-full"
  }, children, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end"
  }, actionBar)))), document.querySelector('.modal-container'));
};
export default Modal;