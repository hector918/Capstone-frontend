import React, { useState, useEffect } from 'react';
import lc from "../storage_";

const ReadingAssistance = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchPdfText = async () => {
      const fileHash = '0ad1d820761a5aca9df52c22ea1cfc4ca5dad64923f51270dbe8f106f3817eef';
      lc.download_file(fileHash, (result) => {
        if (result && result.text) {
          setText(result.text);
        }
      });
    };

    fetchPdfText();
  }, []);

  return (
    <div>
      <h1>Reading Assistance</h1>
      <div>{text}</div>
    </div>
  );
};

export default ReadingAssistance;
