import React from 'react';
import headBg from '../../../images/headBg.jpg';

const HeaderMain = () => {
    return (
        <main style={{height:'600px', width:'100%'}} className="row d-flex align-items-center bg-light">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1 mt-5">
                <h1>Make Your Ceremony<br/><span className="text-warning">More beautiful</span></h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <img src={headBg} alt="" className="img-fluid rounded-3"/>
            </div>
        </main>
    );
};

export default HeaderMain;