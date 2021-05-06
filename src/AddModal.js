
import React, { useState} from 'react';

import {Modal , Button} from 'react-bootstrap';


function  Addmodal(props){
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [image, setImage] = useState("");
  const handleChangeImage=(el)=>{setImage(el.target.value)};
  
  const [title, setTitle] = useState("");
  const handleChangeTitle=(el)=>{setTitle(el.target.value)};
  
  const [year, setYear] = useState("");
  const handleChangeYear=(el)=>{setYear(el.target.value)};
  
  const [rating, setRating] = useState("");
  const handleChangeRating=(el)=>{setRating(el.target.value)};

  const [type, setType] = useState("");
  const handleChangeType=(el)=>{setType(el.target.value)};

  const [description, setDescription] = useState("");
  const handleChangeDescription=(el)=>{setDescription(el.target.value)};
    
  const  newMovie =  {id:props.MoviesList.length+1, image, title, year, rating, type, description }

  return(
<div>
  <Button variant ="primary" onClick={handleShow}>+</Button>

<Modal show={show} onHide ={handleShow}>
  <Modal.Header closeButton>
    <Modal.Title>Add new Movie </Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <div>
  <div>
  <label className="input">Title:</label>
  <input type="text"name="title" value={title} onChange={handleChangeTitle}/> </div>
  <div>
  <label className="input">Image:</label>
  <input type="text"name="image" value={image} onChange={handleChangeImage}/> </div>
  <div>
  <label className="input">Rating:</label>
  <input type="text"name="rating" value={rating} onChange={handleChangeRating}/> </div>
  <div>
  <label className="input">Year:</label>
  <input type="text"name="year" value={year} onChange={handleChangeYear}/> </div>
  <div>
  <label className="input">Type:</label>
  <input type="text"name="type" value={type} onChange={handleChangeType}/> </div>
  <div>
  <label className="input">Description:</label>
  <input type="text"name="description" value={description} onChange={handleChangeDescription}/> </div>
  </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>Close</Button>
    <Button variant="primary" onClick ={(e)=>props.addNewMovie(e,newMovie)}>Add Movie</Button>
  </Modal.Footer>
  </Modal>
</div>);
  
}



export default  Addmodal ;