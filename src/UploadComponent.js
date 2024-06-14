import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  border: 1px dashed #ccc;
  padding: 20px;
  width: 300px;
  margin: 0 auto;
`;


const UploadCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  border: 10px solid #0058A5; /* Add blue border */
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 90px; /* Adjusted width */
  height: 95px; /* Adjusted height */
  border-radius: 50%;
  background: linear-gradient(0deg, transparent 50%, #0058A5 50%), linear-gradient(0deg, #0058A5 0%, transparent 0%);
  background-size: 50% 100%, 50% 100%;
  background-position: 0% 50%, 100% 50%; /* Adjusted background-position */
  background-repeat: no-repeat;
  animation: ${rotate} 2s linear infinite;
`;

const UploadButton = styled.button`
  padding: 10px 20px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 5px;
`;

const UploadComponent = () => {
    const [loading, setLoading] = useState(true);
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUploadClick = () => {
        if (file) {
            setLoading(true);

            // Simulate file upload
            setTimeout(() => {
                setLoading(false);
                alert('File uploaded successfully!');
            }, 30000); // Simulate a 3-second upload
        } else {
            alert('Please select a file first.');
        }
    };

    const handleCancelClick = () => {
        setLoading(false);
        setFile(null);
    };

    return (
        <UploadContainer>
            <UploadCircle onClick={() => document.getElementById('file-input').click()}>
                {loading ? <Spinner /> : (file ? <span>My resume.pdf</span> : <span>Drag and drop your files here</span>)}
            </UploadCircle>
            <input
                type="file"
                id="file-input"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <UploadButton onClick={handleUploadClick}>Upload</UploadButton>
            <CancelButton onClick={handleCancelClick}>Cancel</CancelButton>
        </UploadContainer>
    );
};

export default UploadComponent;
