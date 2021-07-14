
import './App.css';
import React from 'react';
import Display from './Display';

import { Link } from 'react-router-dom';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      flag: false,
      operator: false,
      operator_sign: '',
      assum: 0,
      number: 0,
      calculated: false, operation: true
    }
    this.dis_one = this.dis_one.bind(this)
    this.dis_two = this.dis_two.bind(this);
    this.dis_three = this.dis_three.bind(this);
    this.dis_four = this.dis_four.bind(this);
    this.dis_five = this.dis_five.bind(this);
    this.dis_six = this.dis_six.bind(this);
    this.dis_seven = this.dis_seven.bind(this);
    this.dis_eight = this.dis_eight.bind(this);
    this.dis_nine = this.dis_nine.bind(this);
    this.dis_zero = this.dis_zero.bind(this);
    this.calculate = this.calculate.bind(this);
    this.dis_plus = this.dis_plus.bind(this);
    this.dis_minus = this.dis_minus.bind(this);
    this.dis_mul = this.dis_mul.bind(this);
    this.dis_div = this.dis_div.bind(this)
    this.dis_modulo = this.dis_modulo.bind(this);
    this.dis_expo = this.dis_expo.bind(this);
    this.dis_floor = this.dis_floor.bind(this);
    this.all_clear = this.all_clear.bind(this);
    this.func = this.func.bind(this);
    this.dis_point = this.dis_point.bind(this);
  }

  dis_one() {
    this.setState({ number: 1 });
    if (this.state.assum === 1) {
      return this.func('1');
    }
    else {
      this.setState({ flag: true, value: this.state.value + '1' });
    }
  }
  dis_two() {
    this.setState({ number: 2 });
    if (this.state.assum === 1) {
      return this.func('2');
    }
    else {
      this.setState({ flag: true, value: this.state.value + '2' })

    }
  }
  dis_three() {
    this.setState({ number: 3 });
    if (this.state.assum === 1) {
      return this.func('3');
    }
    else {
      this.setState({ flag: true, value: this.state.value + '3' })
    }
  }
  dis_four() {
    this.setState({ number: 4 });
    if (this.state.assum === 1) {
      return this.func('4');
    }
    else {
      this.setState({ flag: true, value: this.state.value + '4' })
    }

  }
  dis_five() {
    this.setState({ number: 5 });
    if (this.state.assum === 1) {
      return this.func('5');
    }
    else {
      this.setState({ flag: true, value: this.state.value + '5' });
    }

  }
  dis_six() {
    this.setState({ number: 6 });
    if (this.state.assum === 1) {
      return this.func('6');
    }
    else {
      this.setState({ flag: true, value: this.state.value + '6' });
    }
  }
  dis_seven() {
    this.setState({ number: 7 });
    if (this.state.assum === 1) {
      return this.func('7');
    }
    else {
      this.setState({ flag: true, value: this.state.value + '7' });
    }

  }
  dis_eight() {
    this.setState({ number: 8 });
    if (this.state.assum === 1) {
      return this.func('8');
    }
    else {
      this.setState({ flag: true, value: this.state.value + '8' })
    }

  }
  dis_nine() {
    this.setState({ number: 9 })
    if (this.state.assum === 1) {
      return this.func('9');


    }
    else {
      this.setState({ flag: true, value: this.state.value + '9' });
    }
  }
  func(currentValue) {
    this.setState({ assum: 0, value: currentValue });
    if (this.state.assum === 0) {
      switch (this.state.number) {
        case 1:
          {
            this.dis_one();
            break;
          }
        case 2:
          {
            this.dis_two();
            break;
          }
        case 3:
          {
            this.dis_three();
            break;
          }
        case 4:
          {
            this.dis_four();
            break;
          }
        case 5:
          {
            this.dis_five();
            break;
          }
        case 6:
          {
            this.dis_six();
            break;
          }
        case 7:
          {
            this.dis_seven();
            break;
          }
        case 8:
          {
            this.dis_eight();
            break;
          }

        case 9:
          {
            this.dis_nine();
            break;
          }
        default:
          {

          }
      }
    }
  }
  dis_zero() {

    this.setState({ flag: true, value: this.state.value + '0' })
  }
  dis_point() {

    this.setState({ flag: true, value: this.state.value + '.' })
  }

  dis_plus() {
    if (this.state.operation === true) {
      this.setState({ operator: true, operator_sign: '+', assum: 0 });
      if (this.state.operator) {
        if (this.state.value === '') {
          this.setState({ flag: false });
          alert("please enter the First value");
        }
        else {
          this.value1 = this.state.value;

          this.setState({ value: this.state.value + '+', calculated: true, operation: false });
        }

      }
    }
  }
  dis_minus() {
    if (this.state.operation === true) {
      this.setState({ operator: true, operator_sign: '-', assum: 0 });
      if (this.state.operator) {
        if (this.state.value === '') {
          this.setState({ flag: false });
          alert("please enter the First value");
        }
        else {
          this.value1 = this.state.value;

          this.setState({ value: this.state.value + '-', calculated: true, operation: false })
        }
      }
    }
  }
  all_clear() {
    this.setState({ flag: false, value: '' })
  }
  dis_mul() {
    if (this.state.operation === true) {
      this.setState({ operator: true, operator_sign: '*', assum: 0 });
      if (this.state.operator) {
        if (this.state.value === '') {
          this.setState({ flag: false });
          alert("please enter the First value");
        }
        else {
          this.value1 = this.state.value;

          this.setState({ value: this.state.value + 'x', calculated: true, operation: false });
        }
      }
    }
  }
  dis_div() {
    if (this.state.operation === true) {
      this.setState({ operator: true, operator_sign: '/', assum: 0 });
      if (this.state.operator) {
        if (this.state.value === '') {
          this.setState({ flag: false });
          alert("please enter the First value");
        }
        else {
          this.value1 = this.state.value;

          this.setState({ value: this.state.value + '/', calculated: true, operation: false });
        }
      }
    }
  }
  dis_modulo() {
    if (this.state.operation === true) {
      this.setState({ operator: true, operator_sign: '%', assum: 0 });
      if (this.state.operator) {
        if (this.state.value === '') {
          this.setState({ flag: false });
          alert("please enter the First value");
        }
        else {
          this.value1 = this.state.value;

          this.setState({ value: this.state.value + '%', calculated: true, operation: false });
        }
      }
    }
  }
  dis_floor() {
    if (this.state.operation === true) {
      this.setState({ operator: true, operator_sign: '//', assum: 0 });
      if (this.state.operator) {
        if (this.state.value === '') {
          this.setState({ flag: false });
          alert("please enter the First value");
        }
        else {
          this.value1 = this.state.value;

          this.setState({ value: this.state.value + '//', calculated: true, operation: false });
        }
      }
    }
  }
  dis_expo() {
    if (this.state.operation === true) {
      this.setState({ operator: true, operator_sign: '^', assum: 0 });
      if (this.state.operator) {
        if (this.state.value === '') {
          this.setState({ flag: false });
          alert("please enter the First value");
        }
        else {
          this.value1 = this.state.value;

          this.setState({ value: this.state.value + '^', calculated: true, operation: false });
        }
      }
    }
  }
  calculate() {

    if (this.state.calculated) {
      this.setState({ calculated: false });
      var str = this.state.value;

      if (this.state.operator_sign === '+') {
        this.value2 = str.substring(str.indexOf('+') + 1, str.length);
        if (!Number.isInteger(this.value1) || !Number.isInteger(this.value2)) {
          this.value1 = parseFloat(this.value1);
          this.value2 = parseFloat(this.value2);
          this.setState({ value: this.value1 + this.value2, assum: 1, operation: true });
        }
        else {
          this.value1 = parseInt(this.value1);
          this.value2 = parseInt(this.value2);
          this.setState({ value: this.value1 + this.value2, assum: 1, operation: true });
        }

      }
      else if (this.state.operator_sign === '-') {
        this.value2 = str.substring(str.indexOf('-') + 1, str.length);
        if (!Number.isInteger(this.value1) || !Number.isInteger(this.value2)) {
          this.value1 = parseFloat(this.value1);
          this.value2 = parseFloat(this.value2);
          this.setState({ value: this.value1 - this.value2, assum: 1, operation: true });
        }
        else {
          this.value1 = parseInt(this.value1);
          this.value2 = parseInt(this.value2);
          this.setState({ value: this.value1 - this.value2, assum: 1, operation: true });
        }
      }
      else if (this.state.operator_sign === '*') {
        this.value2 = str.substring(str.indexOf('x') + 1, str.length);
        if (!Number.isInteger(this.value1) || !Number.isInteger(this.value2)) {
          this.value1 = parseFloat(this.value1);
          this.value2 = parseFloat(this.value2);
          this.setState({ value: this.value1 * this.value2, assum: 1, operation: true });
        }
        else {
          this.value1 = parseInt(this.value1);
          this.value2 = parseInt(this.value2);
          this.setState({ value: this.value1 * this.value2, assum: 1, operation: true });
        }
      }
      else if (this.state.operator_sign === '/') {
        this.value2 = str.substring(str.indexOf('/') + 1, str.length);
        if (this.value2 === '0') {
          this.setState({ value: "Math Error", operation: true, assum: 1 });
        }
        else {
          if (!Number.isInteger(this.value1) || !Number.isInteger(this.value2)) {
            this.value1 = parseFloat(this.value1);
            this.value2 = parseFloat(this.value2);
            this.setState({ value: this.value1 / this.value2, assum: 1, operation: true });
          }
          else {
            this.value1 = parseInt(this.value1);
            this.value2 = parseInt(this.value2);
            this.setState({ value: this.value1 / this.value2, assum: 1, operation: true });
          }

        }
      }
      else if (this.state.operator_sign === '%') {
        this.value2 = str.substring(str.indexOf('%') + 1, str.length);

        if (this.value2 === '0') {
          this.setState({ value: "Math Error", operation: true, assum: 1 });
        }
        else {
          if (!Number.isInteger(this.value1) || !Number.isInteger(this.value2)) {
            this.value1 = parseFloat(this.value1);
            this.value2 = parseFloat(this.value2);
            this.setState({ value: this.value1 % this.value2, assum: 1, operation: true });
          }
          else {
            this.value1 = parseInt(this.value1);
            this.value2 = parseInt(this.value2);
            this.setState({ value: this.value1 % this.value2, assum: 1, operation: true });
          }
        }
      }
      else if (this.state.operator_sign === '//') {
        this.value2 = str.substring(str.indexOf('/') + 2, str.length);

        if (this.value2 === '0') {
          this.setState({ value: "Math Error", operation: true, assum: 1 });
        }
        else {
          this.value2 = str.substring(str.indexOf('/') + 2, str.length);
          if (!Number.isInteger(this.value1) || !Number.isInteger(this.value2)) {
            this.value1 = parseFloat(this.value1);
            this.value2 = parseFloat(this.value2);
            this.setState({ value: Math.floor(this.value1 / this.value2), assum: 1, operation: true });
          }
          else {
            this.value1 = parseInt(this.value1);
            this.value2 = parseInt(this.value2);
            this.setState({ value: Math.floor(this.value1 / this.value2), assum: 1, operation: true });
          }
        }
      }
      else {
        this.value2 = str.substring(str.indexOf('^') + 1, str.length);
        if (!Number.isInteger(this.value1) || !Number.isInteger(this.value2)) {
          this.value1 = parseFloat(this.value1);
          this.value2 = parseFloat(this.value2);
          this.setState({ value: Math.pow(this.value1, this.value2), assum: 1, operation: true });
        }
        else {
          this.value1 = parseInt(this.value1);
          this.value2 = parseInt(this.value2);
          this.setState({ value: Math.pow(this.value1, this.value2), assum: 1, operation: true });
        }

      }
    }
  }

  render() {

    return (
      <div className="App">
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



            <ul className="nav navbar-nav ml-auto" style={{ textAlign: 'center' }}>

              <li className="nav-item"><Link className="nav-link" to="/about" style={{ color: 'white' }}>About</Link></li>
            </ul>
          </div>
        </nav>

        <h6 className="mainHeading" style={{ textAlign: 'center' }}>Simple Calculator</h6>

        <div className="card mx-auto mainContent">
          <div className="card-body" >
            <Display value={this.state.value} flag={this.state.flag} />

            <hr />
            <table border="0" >
              <tr>
                <td><input type="button" className="square first allclear" value="AC" onClick={this.all_clear} ></input> </td>
                <td><input type="button" className="square" value="^" onClick={this.dis_expo} ></input> </td>
                <td><input type="button" className="square" value="%" onClick={this.dis_modulo} ></input> </td>
                <td><input type="button" className="square" value="/" onClick={this.dis_div} ></input> </td>
              </tr>
              <tr>
                <td><input type="button" className="circle first" value="1" onClick={this.dis_one} ></input> </td>
                <td><input type="button" className="circle" value="2" onClick={this.dis_two} ></input> </td>
                <td><input type="button" className="circle" value="3" onClick={this.dis_three} ></input> </td>
                <td><input type="button" className="square" value="-" onClick={this.dis_minus} ></input> </td>
              </tr>
              <tr>
                <td><input type="button" className="circle first" value="4" onClick={this.dis_four} ></input> </td>
                <td><input type="button" className="circle" value="5" onClick={this.dis_five} ></input> </td>
                <td><input type="button" className="circle" value="6" onClick={this.dis_six} ></input> </td>
                <td><input type="button" className="square" value="x" onClick={this.dis_mul} ></input> </td>
              </tr>
              <tr>
                <td><input type="button" className="circle first" value="7" onClick={this.dis_seven} ></input> </td>
                <td><input type="button" className="circle" value="8" onClick={this.dis_eight} ></input> </td>
                <td><input type="button" className="circle" value="9" onClick={this.dis_nine} ></input> </td>
                <td><input type="button" className="square" value="+" onClick={this.dis_plus} ></input> </td>
              </tr>
              <tr>
                <td><input type="button" className="circle first point" value="." onClick={this.dis_point} /> </td>
                <td><input type="button" className="circle" value="0" onClick={this.dis_zero} ></input> </td>
                <td><input type="button" className="circle" value="=" onClick={this.calculate} ></input> </td>
                <td><input type="button" className="square" value="//" onClick={this.dis_floor} ></input> </td>
              </tr>
            </table>
          </div>
        </div>



      </div>

    );
  }

}

export default App;
