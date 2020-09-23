import React from "react";

function Loading() {
  return (
    <div className="text-center" style={{ marginTop: "300px" }}>
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
