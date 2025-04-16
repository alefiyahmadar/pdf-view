import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import pdfFile from './sample.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;



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
  );
}

export default App;
