import {useState} from 'react';
import Api from '../components/Api';
export default function Createpost()

{
    const {http} =Api();
    const [title,setTitle] = useState();
    const [errortitle,setTitleerror] = useState();
    const [description,setDescription] = useState();
    const [errordesc,setDescerror] = useState();
    const submitform = () =>{
       http.post('/createpost',{title:title,description:description}).then(res=>{
        
       console.log(res.data.msg)
       
        if(res.data.status==442){
            setTitleerror(res.data.error.title);
            setDescerror(res.data.error.description);
        }
      

       });

    }
    return(
        <>
        <div className="container mt-5">
        <h3 className="text-center"> Create Post  </h3>
        <div className="mb-3">
                <label  className="form-label">Titje</label>
                <input type="text" className="form-control" onChange={e=>setTitle(e.target.value)} placeholder="type here"/>
                <span className='text-danger'>

               { errortitle}

                </span>
                </div>
                <div className="mb-3">
                <label  className="form-label">Description</label>
                <textarea className="form-control"  onChange={e=>setDescription(e.target.value)} rows="3"></textarea>
                <span className='text-danger'>
                 {errordesc}
                </span>
                </div>
                <button type="button" onClick={submitform} className="btn btn-primary">Sumbit</button>
        </div> 
        </>
    );
}
