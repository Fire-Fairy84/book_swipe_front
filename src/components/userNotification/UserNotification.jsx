import React, { useState, useEffect } from "react";
import styled from "styled-components";

const NotificationContainer = styled.div`
  position: fixed;
  top: 230px;
  right: 20px;
  background-color: ${(props) => (props.success ? "#4caf50" : "#f44336")};
  color: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const UserNotification = ({ message, success, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <NotificationContainer success={success} show={show}>
      {message}
    </NotificationContainer>
  );
};

export default UserNotification;
