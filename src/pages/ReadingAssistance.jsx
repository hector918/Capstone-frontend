import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ReadingAssistance = () => {
  const [numPages, setNumPages] = useState(null);
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    const fileUrl = '/Users/jeannapoleon/Capstone-backend/text-files/0ad1d820761a5aca9df52c22ea1cfc4ca5dad64923f51270dbe8f106f3817eef'; // Replace with the URL or file path of your PDF
    fetch(fileUrl)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => pdfjs.getDocument({ data: arrayBuffer })) // Pass the array buffer directly to getDocument
      .then((pdf) => {
        setNumPages(pdf.numPages);
        return getTextContent(pdf);
      })
      .then((textContent) => {
        setFileContent(textContent);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getTextContent = async (pdf) => {
    let textContent = '';

    for (let i = 1; i <= numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();

      content.items.forEach((item) => {
        textContent += item.str + ' ';
      });
    }

    return textContent;
  };

  return (
    <div>
      <h2>Reading Assistance</h2>
      {numPages && (
        <p>
          Number of Pages: {numPages}
        </p>
      )}
      <p>File Content:</p>
      <pre>{fileContent}</pre>
      {numPages && (
        <Document
          file="/Users/jeannapoleon/Capstone-backend/text-files/0ad1d820761a5aca9df52c22ea1cfc4ca5dad64923f51270dbe8f106f3817eef" // Replace with the URL or file path of your PDF
          options={{ workerSrc: pdfjs.GlobalWorkerOptions.workerSrc }}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      )}
    </div>
  );
};

export default ReadingAssistance;




