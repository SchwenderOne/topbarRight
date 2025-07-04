import React from "react";

export const SimpleTest = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-white p-4">
      <h1 className="text-2xl font-bold text-black mb-4">
        Test Page - Migration Complete
      </h1>
      <div className="space-y-4">
        <p className="text-gray-700">
          This is a simple test page to verify the migration from Figma to Replit is working.
        </p>
        <div className="bg-blue-100 p-4 rounded">
          <p className="text-blue-800">
            ✓ React is working<br/>
            ✓ Tailwind CSS is working<br/>
            ✓ TypeScript is working<br/>
            ✓ Express server is running
          </p>
        </div>
      </div>
    </div>
  );
};