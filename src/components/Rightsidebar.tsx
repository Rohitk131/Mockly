import React from 'react';
import { FileUpload } from "@/components/ui/file-upload";
import CreateButton from "@/components/createButton";

const RightSidebar = ({ files, onFileUpload, onFileRemove }) => {
  return (
    <div className="w-64 h-full bg-gray-100 p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold mb-4">Upload File</h2>
        <FileUpload
          files={files}
          onUpload={onFileUpload}
          onRemove={onFileRemove}
        />
      </div>
      <CreateButton />
    </div>
  );
};

export default RightSidebar;