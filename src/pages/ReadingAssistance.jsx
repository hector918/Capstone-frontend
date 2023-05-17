import React, { useState, useEffect } from 'react';
import storage from '../storage_';

const ReadingAssistance = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const fileData = storage.getFileDetail(storage.fileHash, ['metaData']);
      if (!fileData) {
        // File not found, redirect to homepage or handle the error
        return;
      }
      // Fetch the text from metadata
      const { text } = fileData.metaData;
      setText(text);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Reading Assistance</h1>
      <div>{text}</div>
    </div>
  );
};

export default ReadingAssistance;
