import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Calculator from './CalculatorIcon.png'
import './App.css'
import './About.css'
class About extends Component {
    render() {
        return (
            <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-faded " style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px' }}>

<a className="navbar-brand" href="#">

  <span className="dot"></span>
  <span className="dot"></span>
  <span className="dot"></span>



</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">



<ul className="nav navbar-nav ml-auto"  style={{textAlign:'center'}}>

  <li className="nav-item"><Link className="nav-link" to="/" style={{color:'white'}}>Home</Link></li>
</ul>
</div>
</nav>

<section>
  <details open>
    <summary>Operations</summary>
    <div>
      <img src={Calculator} alt="calculator" />
      <ul>
          <li><span className="operation">+</span> will return the addition of 2 values</li>
          <li><span className="operation">-</span> will return the subtraction of 2 values</li>
          <li><span className="operation">x</span>will return the multiplication of 2 values</li>
          <li><span className="operation">/</span>will return the quotient   with decimal values </li>
          <li><span className="operation">//</span>will return the quotient   without decimal values</li>
          <li><span className="operation">%</span>will return the remainder </li>



      </ul>
    </div>
  </details>
  <details open>
    <summary>Other Info</summary>
    <div>
      <p>Developed using React.js
      <br/>
      Developer Name : Anju Priya V</p>
     
    </div>
  </details>

</section>
            </div>
        );
    }
}

export default About;