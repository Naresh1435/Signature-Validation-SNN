
import { useState } from 'react';
import axios from 'axios';
import './SNN.css';

function App() {
    const [isGot, updateGot] = useState(false);
    const [percentage, updatePrecentage] = useState(0);
    const handleFormSubmit = (form)=>{
        form.preventDefault();
        const bodyData = {
            file1 : form.target.file1.files[0] ,
            file2 : form.target.file2.files[0],
        }
        const config = {
            headers : {
               'Content-Type' :'multipart/form-data'
            }
        }
        axios.post('http://127.0.0.1:8000/',bodyData,config)
        .then(res=>{
            updateGot(true);
            updatePrecentage(res.data.percent);
        })
    }
  return (
    <>
    <div className="App gap-10">
        
       <form className='rounded-md' onSubmit={handleFormSubmit}>
        
        <div className="formel rounded-md" >
            
            <span>Input 1:</span>
            <input type="file" id="doctorname" name="file1"/>
        </div>
    
        
        <div className="formel">
            <span >Input 2:</span>
            <input type="file" id="docmail" name="file2"/>
        </div>
        <div className=" bg-green-600 text-white p-2    ">

            
            <button type='submit' >Submit</button>

        </div>
        
       </form>
       
    </div>
    <div className="result m-auto mt-10 w-60 bg-blue-600 p-2 rounded-md text-white ">
            Similarity Percentage : {isGot? percentage :'0 '}
       </div>
    </>
  );
}

export default App;