import React from 'react';
import "./addMovie.css";
import { useRef, useState } from "react";
import ReactStars from "react-rating-stars-component";

const AddMovie = ({adding}) => {

  let titleRef = useRef();
  let posterUrlRef = useRef();
  let descRef = useRef();
  let [rate, setRate] = useState(0);

  const ratingChanged = (newRating) => {
        console.log(newRating);
        setRate(newRating);
        
}

 function submitted(ev){
        ev.preventDefault();

        let movieObject = {title:titleRef.current.value, posterUrl:posterUrlRef.current.value, description:descRef.current.value, rate:rate};
        adding(movieObject);
    }
    
  return (
    <div className="AddMovie">
      <form onSubmit={submitted}>
        <div className="row mb-3">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                    <input name="title" ref={titleRef} type="text" className="form-control" id="colFormLabel" placeholder="Title" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Image URL</label>
                    <div className="col-sm-10">
                    <input ref={posterUrlRef} type="text" className="form-control" id="colFormLabel" placeholder="image url" />
                    </div>
                </div>
                
                <div className="input-group">
                    <span className="input-group-text">Description</span>
                    <textarea ref={descRef} className="form-control" aria-label="With textarea"></textarea>
                </div>
                <div ClassName="rate">
                  <h6> Rate: </h6>
                  <ReactStars count={10}
                              onChange={ratingChanged}
                              size={50}
                              isHalf={true}
                              activeColor="#ffd700"/>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">ADD THE MOVIE</button>
                </div>
      </form>
        </div>
  )
}

export default AddMovie