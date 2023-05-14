import React from "react";
import lc from '../storage_';

export default function TestOnly(){

  function onFileUpload(evt){
    evt.preventDefault();
    lc.uploadFile(evt.target.files, (data)=>{
      console.log(data);
      console.log(lc.getAllFiles());
    })
  }
  ////////////////////////////////////////////
  function onReadingComprehensionSubmit(evt){
    evt.preventDefault();
    const fileHash = '0ad1d820761a5aca9df52c22ea1cfc4ca5dad64923f51270dbe8f106f3817eef';
    lc.textToComprehension(fileHash, evt.target.readingcomprehenstion.value, (data)=>{
      console.log(data);

    })
  }
  function printComprehenstionHistory(evt){
    const fileHash = '0ad1d820761a5aca9df52c22ea1cfc4ca5dad64923f51270dbe8f106f3817eef';
    console.log(lc.getFile(fileHash, ['textToComprehenstion']));
  }
  ////////////////////////////////////////////
  function onTextToExplanation (evt){
    evt.preventDefault();
    const fileHash = '0ad1d820761a5aca9df52c22ea1cfc4ca5dad64923f51270dbe8f106f3817eef';
    lc.textToExplanation(fileHash, evt.target.texttoexplanation.value, (data)=>{
      console.log(data);
    })
  }
  function printTextToExplanation(evt){
    const fileHash = '0ad1d820761a5aca9df52c22ea1cfc4ca5dad64923f51270dbe8f106f3817eef';
    console.log(lc.getFile(fileHash, ['textToExplanation']));
  }
  ////////////////////////////////////////////
  function OnTextToImage(evt){
    evt.preventDefault();
    const fileHash = '0ad1d820761a5aca9df52c22ea1cfc4ca5dad64923f51270dbe8f106f3817eef';
    lc.textToImage(fileHash, evt.target.texttoimage.value, (data)=>{
      console.log(data);
    })
  }
  function printTextToImage(evt){
    const fileHash = '0ad1d820761a5aca9df52c22ea1cfc4ca5dad64923f51270dbe8f106f3817eef';
    console.log(lc.getFile(fileHash, ['textToImage']));
  }
  ////////////////////////////////////////////
  function getFileDetailClick(evt){
    const fileHash = '0ad1d820761a5aca9df52c22ea1cfc4ca5dad64923f51270dbe8f106f3817eef';
    console.log(lc.getFileDetail(fileHash, 
      [
        'metadata',
        'textToImage',
        'textToExplanation',
        'textToComprehenstion',
      ]));
  }
  ////////////////////////////////////////////
  return <div>
    <h1>test fetch</h1>
    <div>
      <h3>upload file</h3>
      <form onSubmit={onFileUpload}>
        <input name="files" type="file"/>
        <button>upload file</button>
      </form>
    </div>
    <div>
      <h3> specify Hash </h3>
      <p>0ad1d820761a5aca9df52c22ea1cfc4ca5dad64923f51270dbe8f106f3817eef</p>
    </div>
    <div>
      <h3> Reading comprehension </h3>
      <div>
        <form onSubmit={onReadingComprehensionSubmit}>
          <input type="text" name="readingcomprehenstion" value={'what is this story about?'} readOnly/>
          <button>submit</button>
        </form>
        <button onClick={printComprehenstionHistory}>print comprehension history to console</button>
      </div>
    </div>
    <div>
      <h3> Text to Explanation </h3>
      <div>
        <form onSubmit={onTextToExplanation}>
          <input type="text" name="texttoexplanation" value={'cute bunny'} readOnly/>
          <button>submit</button>
        </form>
        <button onClick={printTextToExplanation}>print text to explanation history to console</button>
      </div>
    </div>
    <div>
      <h3> Text to Image </h3>
      <form onSubmit={OnTextToImage}>
        <input type="text" name="texttoimage" value={'cute bunny'} readOnly />
        <button>submit</button>
      </form>
      <button onClick={printTextToImage}>print text to image history to console</button>
    </div>
    <div>
      <button onClick={getFileDetailClick}>get all from file Hash</button>
    </div>
  </div>
}