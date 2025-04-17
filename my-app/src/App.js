import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

import worker from 'pdfjs-dist/webpack'



pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.js`;




function App() {

  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);

const onFileChange =(event)=>{

  const selectedFile = event.target.files[0];
  console.log(selectedFile , selectedFile.type)

  if(selectedFile && selectedFile.type === "application/pdf"){

    setFile(selectedFile)
  }else{

    alert("yoo choose a pdf!!")
  }
  
}
const onDocumentLoadSuccess =({numPages})=>{
setNumPages(numPages)

}

  return (
    <div className="App">
      <div>
       <p>pdf</p>
       <input type='file' onChange={onFileChange}  accept='application/pdf'>
       
       </input>

       {
        file && (<Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from({ length: numPages }, (_, index) => (
            <Page key={index + 1} pageNumber={index + 1} />
          ))}
        </Document>
          
        )

        
       }
     
     </div>
    </div>
  );
}

export default App;
