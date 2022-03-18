import React from 'react';
import "./filtring.css";
import ReactStars from "react-rating-stars-component";
import {useRef, useState} from "react";


const Filtring = ({filter}) => {
  let searchRef = useRef();
  const [rate, setRate] = useState(0);

const rateChanged = (newRate)=>{
  filter(searchRef.current.value, newRate)
  setRate(newRate)
};

function submitted(ev){
        ev.preventDefault();
        filter(searchRef.current.value,rate);
    }

  return (
    <form className="searchform" onChange={submitted} onSubmit={submitted}>
            <h3> MOVIE APP </h3>
            <input ref={searchRef} className="form-control form-control-lg searchinp" type="text" placeholder="Search for film..." aria-label=".form-control-lg example" />
            <button className="btn btn-primary searchbtn" type="submit" >Search</button>
            <ReactStars count={10}
                            onChange={rateChanged}
                            size={50}
                            isHalf={true}
                            activeColor="#ffd700"/>
    </form>
  )
}

export default Filtring