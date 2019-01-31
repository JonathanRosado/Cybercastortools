import React, { Component } from 'react';
import './App.css';
import { Form, TextArea } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Message } from 'semantic-ui-react'

const Index = class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textData: "",
      reverseData: "",
      binaryData: "",
      asciiData: "",
    };
    this.convertAll = this.convertAll.bind(this);
  }

  convertAll(data, type) {
    function reverseString(str) {
      return str.split("").reverse().join("");
    }
    function textToBinary(text) {
      let output = "";
      for (let i = 0; i < text.length; i++) {
        output += text[i].charCodeAt(0).toString(2) + " ";
      }
      return output;
    }
    function textToAscii(str) {
      let output = "";
      for (let i = 0; i < str.length; i++) {
        output += str.charCodeAt(i);
        if (i !== str.length - 1)
          output += " ";
      }
      return output
    }
    function textToBase64(str) {
      return window.btoa(str);
    }
    function textToOctal(str) {
      let asciiValues = textToAscii(str).split(" ");
      let output = "";
      for (let i = 0; i < asciiValues.length; i++) {
        output += parseInt(asciiValues[i]).toString(8);
        if (i !== str.length - 1)
          output += " ";
      }
      return output;
    }
    function textToHex(str) {
      let asciiValues = textToAscii(str).split(" ");
      let output = "";
      for (let i = 0; i < asciiValues.length; i++) {
        output += parseInt(asciiValues[i]).toString(16);
        if (i !== str.length - 1)
          output += " ";
      }
      return output;
    }
    function textToAtbash(str) {
      let getKey = () => {
        let out = {};
        let forward = "abcdefghijklmnopqrstuvwxyz0123456789";
        let backward = "zyxwvutsrqponmlkjihgfedcba0123456789";

        for (let x=0; x<forward.length; x++) {
          out[forward.charAt(x)] = backward.charAt(x);
        }
        return out;
      };

      const key = getKey();
      str = str.toLowerCase().replace(/[^a-z0-9]/, "");
      str = [...str].map((char) => key[char]).join('');
      for (let x=5,i=0; x<str.length; x=x+5) {
        str = str.slice(0, x+i) + " " + str.slice(x+i);
        i++;
      }
      return str.trim();
    }

    if (type === 'text') {
      this.setState({
        textData: data,
        reverseData: reverseString(data),
        binaryData: textToBinary(data),
        asciiData: textToAscii(data),
        base64Data: textToBase64(data),
        octalData: textToOctal(data),
        hexData: textToHex(data),
        atbashData: textToAtbash(data),
        debugData: "Conversions were ran successfully!"
      })
    } else if (type === 'text') {

    } else if (type === 'reverse') {

    } else if (type === 'binary') {

    } else if (type === 'text') {

    } else if (type === 'text') {

    } else if (type === 'text') {

    } else if (type === 'text') {

    }
  }

  render() {
    let self = this;
    return (
        <div>
          <Message>
            <Message.Header>Lightning fast conversions...</Message.Header>
            <p>
              We offer the most common converters used in Cyber. To try them out, look for the label that matches your data, and start typing!
            </p>
          </Message>
          <div className="content">
            <div className="box">
              <div className="boxbar">Text</div>
              <Form>
                <TextArea placeholder='Basic ascii text' value={self.state.textData}
                          onInput={(event, input) => self.convertAll(input.value, 'text') }/>
              </Form>
            </div>
            <div className="box">
              <div className="boxbar">Reverse</div>
              <Form>
                <TextArea placeholder='Basic ascii text reversed' value={self.state.reverseData}
                          onInput={(event, input) => self.convertAll(input.value, 'reverse') }/>
              </Form>
            </div>
            <div className="box">
              <div className="boxbar">Binary</div>
              <Form>
                <TextArea placeholder='Binary 0s and 1s' value={self.state.binaryData}
                          onInput={(event, input) => self.convertAll(input.value, 'binary') }/>
              </Form>
            </div>
            <div className="box">
              <div className="boxbar">Octal</div>
              <Form>
                <TextArea placeholder='Octal format' value={self.state.octalData}
                          onInput={(event, input) => self.convertAll(input.value, 'text') }/>
              </Form>
            </div>
            <div className="box">
              <div className="boxbar">Hex</div>
              <Form>
                <TextArea placeholder='Hexadecimal' value={self.state.hexData}
                          onInput={(event, input) => self.convertAll(input.value, 'text') }/>
              </Form>
            </div>
            <div className="box">
              <div className="boxbar">Ascii</div>
              <Form>
                <TextArea placeholder='Numeric ascii representation' value={self.state.asciiData}
                          onInput={(event, input) => self.convertAll(input.value, 'text') }/>
              </Form>
            </div>
            <div className="box">
              <div className="boxbar">Base64</div>
              <Form>
                <TextArea placeholder='Base64 representation' value={self.state.base64Data}
                          onInput={(event, input) => self.convertAll(input.value, 'text') }/>
              </Form>
            </div>
            <div className="box">
              <div className="boxbar">Atbash</div>
              <Form>
                <TextArea placeholder='Atbash representation' value={self.state.atbashData}
                          onInput={(event, input) => self.convertAll(input.value, 'text') }/>
              </Form>
            </div>
            <div className="box">
              <div className="boxbar">Debug</div>
              <Form>
                <TextArea placeholder='If anything goes wrong, we will let you know here...' value={self.state.debugData}
                          onInput={(event, input) => self.convertAll(input.value, 'text') }/>
              </Form>
            </div>
          </div>
        </div>
    );
  }
};
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <nav>
              <div className="navbar">
                <div className="navheader">Cybercastor Toolkit</div>
                <div className="navbutton">Conversions</div>
                <div className="navbutton">ROT N</div>
                <div className="navbutton">Vigenere</div>
                <div className="navbutton">Rainbow Table</div>
                <div className="navbutton">Hash Conversions</div>
                <div className="navbutton">Other</div>
              </div>
            </nav>
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
