import React, { useState } from 'react';
import './İmageUpload'
const İmageUpload = () => {
  const [fileNames, setFileNames] = useState([]);
  const [labelClass, setLabelClass] = useState('et_pb_contact_form_label');

  const handleFileDrop = (e) => {
    e.preventDefault();
    setLabelClass('et_pb_contact_form_label');
    const droppedFiles = Array.from(e.dataTransfer.files);
    const newFileNames = droppedFiles.map(file => file.name);
    setFileNames([...fileNames, ...newFileNames]);
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const newFileNames = selectedFiles.map(file => file.name);
    setFileNames([...fileNames, ...newFileNames]);
    setLabelClass('et_pb_contact_form_label changed');
  };

  const handleDragOver = () => {
    setLabelClass('et_pb_contact_form_label changed');
  };

  const handleDragLeave = () => {
    setLabelClass('et_pb_contact_form_label');
  };

  const handleLabelClick = () => {
    setFileNames([]);
  };

  return (
    <div className="container">
      <label
        htmlFor="et_pb_contact_brand_file_request_0"
        className={labelClass}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleFileDrop}
        onClick={handleLabelClick}
      >
        Enter
      </label>
      <input
        type="file"
        id="et_pb_contact_brand_file_request_0"
        className="file-upload"
        onChange={handleFileChange}
        multiple
      />
      {fileNames.map((name, index) => (
        <div className="file_names" key={index}>
          {name}
        </div>
      ))}
    </div>
  );
};

export default İmageUpload;
