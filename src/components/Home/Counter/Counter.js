import React from 'react';

const Counter = () => {
    document.addEventListener("DOMContentLoaded", () => {
        function counter(id, start, end, duration) {
         let obj = document.getElementById(id),
          current = start,
          range = end - start,
          increment = end > start ? 1 : -1,
          step = Math.abs(Math.floor(duration / range)),
          timer = setInterval(() => {
           current += increment;
           obj.textContent = current;
           if (current == end) {
            clearInterval(timer);
           }
          }, step);
        }
        counter("count1", 0, 67, 7000);
        counter("count2", 0, 150, 5500);
        counter("count3", 0, 40, 7000);
       });
    return (
        <section className="bg-warning text-white py-5 mt-5">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-12">
                        <h1 className="pb-3"></h1>
                    </div>
                    <div className="col-md-4">
                        <span id="count1" className="display-4"></span>
                        <br/>
                        <h1>Projects</h1>
                    </div>
                    <div className="col-md-4">
                        <span id="count2" className="display-4"></span>
                        <br/>
                        <h1>Member</h1>
                    </div>
                    <div className="col-md-4">
                        <span id="count3" className="display-4"></span>
                        <br/>
                        <h1>Clients</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counter;