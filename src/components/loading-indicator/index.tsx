import React from "react";
import "./loading-indicator.styles.css";

export const LoadingIndicator: React.FC = React.memo(() => {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
});
