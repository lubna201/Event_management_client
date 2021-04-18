import React from 'react';
import img1 from '../../../images/1.jpg';
import img2 from '../../../images/2.jpg';
import img3 from '../../../images/3.jpg';
import img4 from '../../../images/4.jpg';
import img5 from '../../../images/5.jpg';
import img6 from '../../../images/6.jpg';
import img7 from '../../../images/7.jpg';
import img8 from '../../../images/8.jpg';

const Gallery = () => {
    return (
        <div className="container">
            <h1 className="text-center mt-5">Gallery</h1>
            <div className="row mt-5 mb-5 g-3">
                <div className="col-md-3"><img src={img1} alt="" style={{width: "100%"}}/></div>
                <div className="col-md-3"><img src={img2} alt="" style={{width: "100%"}}/></div>
                <div className="col-md-3"><img src={img3} alt="" style={{width: "100%"}}/></div>
                <div className="col-md-3"><img src={img4} alt="" style={{width: "100%"}}/></div>
                <div className="col-md-3"><img src={img5} alt="" style={{width: "100%"}}/></div>
                <div className="col-md-3"><img src={img6} alt="" style={{width: "100%"}}/></div>
                <div className="col-md-3"><img src={img7} alt="" style={{width: "100%"}}/></div>
                <div className="col-md-3"><img src={img8} alt="" style={{width: "100%"}}/></div>
            </div>
        </div>
    );
};

export default Gallery;