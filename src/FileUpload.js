import React, { useEffect, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist/webpack';
import '../src/FileUpload.css';
// Set workerSrc for pdfjsLib
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

function FileUpload() {
    const [file, setFile] = useState(null);
    const [fileURL, setFileURL] = useState(null);
    const [displayUrl, setDisplayUrl] = useState(null);

    useEffect(() => {
        // Retrieve file information from local storage when the component mounts
        const storedFile = localStorage.getItem('file');
        const storedFileURL = localStorage.getItem('fileURL');
        const storedDisplayUrl = localStorage.getItem('displayUrl');

        if (storedFile && storedFileURL && storedDisplayUrl) {
            const fileObj = JSON.parse(storedFile);
            setFile(fileObj);
            setFileURL(storedFileURL);
            setDisplayUrl(storedDisplayUrl);
        }
    }, []);

    const sanitizeFileName = (fileName) => {
        // Decode URI components
        let decodedFileName = decodeURIComponent(fileName);
        // Replace unsafe characters
        return decodedFileName.replace(/[/\\:*?"<>|%]/g, '');
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            handleFile(selectedFile);
        }
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files[0];
        if (droppedFile) {
            handleFile(droppedFile);
        }
    };

    const handleFile = (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64data = reader.result;
            const sanitizedFileName = sanitizeFileName(file.name);

            if (file.type === 'application/pdf') {
                renderPdfToImage(base64data, file, sanitizedFileName);
            } else {
                setFileURL(base64data);
                setDisplayUrl(base64data);
                const fileData = {
                    name: sanitizedFileName,
                    type: file.type,
                    base64: base64data
                };
                setFile(fileData);

                // Save file information to local storage
                localStorage.setItem('file', JSON.stringify(fileData));
                localStorage.setItem('fileURL', base64data);
                localStorage.setItem('displayUrl', base64data);
            }
        };
        reader.readAsDataURL(file);
    };

    const renderPdfToImage = async (base64data, file, sanitizedFileName) => {
        const loadingTask = pdfjsLib.getDocument({ data: atob(base64data.split(',')[1]) });
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 2.5 }); // Adjust scale for higher resolution
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
            canvasContext: context,
            viewport: viewport,
        };
        await page.render(renderContext).promise;
        const dataUrl = canvas.toDataURL();
        setFileURL(dataUrl);
        setDisplayUrl(base64data);
        const fileData = {
            name: sanitizedFileName,
            type: file.type,
            base64: base64data
        };
        setFile(fileData);

        // Save file information to local storage
        localStorage.setItem('file', JSON.stringify(fileData));
        localStorage.setItem('fileURL', dataUrl);
        localStorage.setItem('displayUrl', base64data);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const isImage = (file) => file && file.type.startsWith('image/');
    const isPDF = (file) => file && file.type === 'application/pdf';

    const downloadFile = (dataUrl, filename) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    let fileDisplay;
    if (file) {
        if (isImage(file)) {
            fileDisplay = (
                <img src={fileURL} alt="Uploaded" className="circular-image" />
            );
        } else if (isPDF(file)) {
            fileDisplay = (
                <img src={fileURL} alt="First page of PDF" className="circular-image" />
            );
        } else {
            fileDisplay = <p>Unsupported file type</p>;
        }
    }

    return (
        <div>
            <div
                className="delsweetAlert"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => document.getElementById('fileInput').click()}
                style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}
            >
                <input
                    type="file"
                    onChange={handleFileChange}
                    accept="application/pdf,image/*"
                    style={{ display: 'none' }}
                    id="fileInput"
                />
                <p className="textDecor">
                    Drag and drop your files here
                </p>
            </div>
            {fileDisplay}
            {file && <button onClick={() => downloadFile(displayUrl, file.name)}>Download {file.name}</button>}
        </div>
    );
}

export default FileUpload;
