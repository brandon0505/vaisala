import React from "react";
import StormReport from "./components/StormReport";

const App: React.FC = () => {
  return (
    <div className="dashboard-container bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-semibold mb-6">Weather Dashboard</h1>
      <div className="storm-report-wrapper bg-dark p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
        <StormReport
          client_id="JWxIiaNWCkCjS3r6ODPD6"
          client_secret="LDn8C2fr2175vxw1XLDp3Hr9jKSqAhhZuOCKJIVR"
          defaultLocation="Detroit, MI"
          defaultTimeFilter="48H"
          defaultEventTypes={["wind", "flood"]}
        />
      </div>
    </div>
  );
};

export default App;
