import {Form, Radio, TextArea, Message, Button, Icon} from "semantic-ui-react";
import React, { Component } from 'react';

const Conversions = class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textData: "",
            reverseData: "",
            binaryData: "",
            asciiData: "",
            showSettings: false,
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
            var mensage = str;
            var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var tebahpla = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
            var alphabet1 = "abcdefghijklmnopqrstuvwxyz";
            var tebahpla1 = "zyxwvutsrqponmlkjihgfedcba";
            var decoded_string = "";
        
            for (var i = 0; i < mensage.length; i++) {
                var coded_letra = mensage.charAt(i);
                
            if (/[^a-zA-Z]/.test(mensage[i])) {
                decoded_string = decoded_string+mensage[i];	
            }
            else if (mensage[i] === mensage[i].toUpperCase()) {
                    var letraPosMayus = alphabet.indexOf(coded_letra);
                    var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
                    decoded_string = decoded_string+tebLetraPosMayus;
                } else {
                    var letraPosMinus1 = alphabet1.indexOf(coded_letra);
                    var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
                    decoded_string = decoded_string + tebLetraPosMinus1;
                }
        
            }
            return decoded_string;
        }
        
        function binaryToText(str) {
            var a = str.split(" ");
            let output = "";
	        for (let i = 0; i < a.length; i++) {
    	        output += String.fromCharCode(parseInt(a[i], 2));
            }
            return output;
        }

        function binaryToOctal(str){
            let output = "";
            var a = str.split(" ");
            for (let i = 0; i < a.length; i++) {
    	        output += parseInt(a[i], 2).toString(8);
                output += " ";
            }
            return output;
        }

        function binaryToHex(str) {
            var a = str.split(" ");
            let output = "";
	        for (let i = 0; i < a.length; i++) {
    	        output += parseInt(a[i], 2).toString(16);
                output += " ";
            }
            return output;
        }
        
        function binaryToAscii(str){
            var a = str.split(" ");
            let output = "";
	        for (let i = 0; i < a.length; i++) {
    	        output += parseInt(a[i], 2);
                output += " ";
            }
            return output;
        }

        function binaryToBase64(str){
            let output = "";
	        var a = str.split(" ");
            for (let i = 0; i < a.length; i++) {
    	        output += String.fromCharCode(parseInt(a[i], 2));
            }
            output = window.btoa(output);
            return output;
        }

        function binaryToAtbash(str) {
            var input = "";
            let output = "";
            input = binaryToText(str);
            output = textToAtbash(input);
            return output;
            }
        
        function octalToText(str){
            let output = "";
            var a = str.split(" ");
            for (let i = 0; i < a.length; i++) {
	            output += String.fromCharCode(parseInt(a[i], 8));
            }
            return output;
        }

        function octalToBinary(str){
            let output = "";
            output = textToBinary(octalToText(str));
            return output; 
        }

        function octalToHex(str){
            let output = "";
            var a = str.split(" ");
            for (let i = 0; i < a.length; i++) {
	            output += parseInt(a[i], 8).toString(16);
                output += " ";
            }
            return output;
        }

        function octalToAscii(str){
            let output = "";
            var a = str.split(" ");
            for (let i = 0; i < a.length; i++) {
                output += parseInt(a[i], 8);
                output += " ";
            }
            return output;
        }

        function octalToBase64(str){
            let output = "";
            output = window.btoa(octalToText(str));
            return output;
        }
        
        function octalToAtbash(str){
            let output = "";
            output = textToAtbash(octalToText(str));
            return output;
        }
        
        function hexToText(str){
            let output = "";
            var a = str.split(" ");
            for (let i = 0; i < a.length; i++) {
                output += String.fromCharCode(parseInt(a[i], 16));
            }
            return output;
        }
        
        function hexToBinary(str){
            let output = "";
            output = textToBinary(hexToText(str));
            return output;
        }

        function hexToOctal(str){
            let output = "";
            output = textToOctal(hexToText(str));
            return output;
        }

        function hexToAscii(str){
            let output = "";
            output = textToAscii(hexToText(str));
            return output;
        }
        
        function hexToBase64(str){
            let output = "";
            output = textToBase64(hexToText(str));
            return output;
        }
        
        function hexToAtbash(str){
            let output = "";
            output = textToAtbash(hexToText(str));
            return output;
        }
        
        function asciiToText(str){
            let output = "";
            var a = str.split(" ");
            for (let i = 0; i < a.length; i++) {
                output += String.fromCharCode(a[i]);
            }
            return output;
        }

        function asciiToBinary(str){
            let output = "";
            output = textToBinary(asciiToText(str));
            return output;
        }

        function asciiToOctal(str){
            let output = "";
            output = textToOctal(asciiToText(str));
            return output;
        }

        function asciiToHex(str){
            let output = "";
            output = textToHex(asciiToText(str));
            return output;
        }

        function asciiToBase64(str){
            let output = "";
            output = textToBase64(asciiToText(str));
            return output;
        }

        function asciiToAtbash(str){
            let output = "";
            output = textToAtbash(asciiToText(str));
            return output;
        }

        function base64ToText(str){
            let output = "";
            output = window.atob(str);
            return output;
        }

        function base64ToBinary(str){
            let output = "";
            output = textToBinary(window.atob(str));
            return output;
        }

        function base64ToOctal(str){
            let output = "";
            output = textToOctal(window.atob(str));
            return output;
        }

        function base64ToHex(str){
            let output = "";
            output = textToHex(window.atob(str));
            return output;
        }

        function base64ToAscii(str){
            let output = "";
            output = textToAscii(window.atob(str));
            return output;
        }

        function base64ToAtbash(str){
            let output = "";
            output = textToAtbash(window.atob(str));
            return output;
        }

        function atbashToText(str){
            let output = "";
            var a = str;
            for (var b = a, c = 'ZYXWVUTSRQPONMLKJIHGFEDCBA'.toLowerCase(), c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', d = 'ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba', e = '', f = /[A-Za-z]/, g = 0; g < b.length; g++) e += f.test(b.charAt(g)) ? d[c.indexOf(b[g])] : b.charAt(g);
            output = e;
            return output;
        }

        function atbashToBinary(str){
            let output = "";
            output = textToBinary(atbashToText(str));
            return output;
        }

        function atbashToOctal(str){
            let output = "";
            output = textToOctal(atbashToText(str));
            return output;
        }

        function atbashToHex(str){
            let output = "";
            output = textToHex(atbashToText(str));
            return output;
        }

        function atbashToAscii(str){
            let output = "";
            output = textToAscii(atbashToText(str));
            return output;
        }

        function atbashToBase64(str){
            let output = "";
            output = textToBase64(atbashToText(str));
            return output;
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
                debugData: "Conversions ran successfully!"
            })
        } else if (type === 'reverse') {
            this.setState({
                textData: reverseString(data),
                reverseData: data,
                binaryData: textToBinary(data),
                asciiData: textToAscii(data),
                base64Data: textToBase64(data),
                octalData: textToOctal(data),
                hexData: textToHex(data),
                atbashData: textToAtbash(data),
                debugData: "Conversions ran successfully!"
            })
        } else if (type === 'binary') {
            this.setState({
                textData: binaryToText(data),
                reverseData: reverseString(binaryToText(data)),
                binaryData: data,
                asciiData: binaryToAscii(data),
                base64Data: binaryToBase64(data),
                octalData: binaryToOctal(data),
                hexData: binaryToHex(data),
                atbashData: binaryToAtbash(data),
                debugData: "Conversions ran successfully!"
            })
        } else if (type === 'octal') {
            this.setState({
                textData: octalToText(data),
                reverseData: reverseString(octalToText(data)),
                binaryData: octalToBinary(data),
                asciiData: octalToAscii(data),
                base64Data: octalToBase64(data),
                octalData: data,
                hexData: octalToHex(data),
                atbashData: octalToAtbash(data),
                debugData: "Conversions ran successfully!"
            })
        } else if (type === 'hex') {
            this.setState({
                textData: hexToText(data),
                reverseData: reverseString(hexToText(data)),
                binaryData: hexToBinary(data),
                asciiData: hexToAscii(data),
                base64Data: hexToBase64(data),
                octalData: hexToOctal(data),
                hexData: data,
                atbashData: hexToAtbash(data),
                debugData: "Conversions ran successfully!"
            })
        } else if (type === 'ascii') {
            this.setState({
                textData: asciiToText(data),
                reverseData: reverseString(asciiToText(data)),
                binaryData: asciiToBinary(data),
                asciiData: data,
                base64Data: asciiToBase64(data),
                octalData: asciiToOctal(data),
                hexData: asciiToHex(data),
                atbashData: asciiToAtbash(data),
                debugData: "Conversions ran successfully!"
            })
        } else if (type === 'base64') {
            this.setState({
                textData: base64ToText(data),
                reverseData: reverseString(base64ToText(data)),
                binaryData: base64ToBinary(data),
                asciiData: base64ToAscii(data),
                base64Data: data,
                octalData: base64ToOctal(data),
                hexData: base64ToHex(data),
                atbashData: base64ToAtbash(data),
                debugData: "Conversions ran successfully!"
            })
        } else if (type === 'atbash') {
            this.setState({
                textData: atbashToText(data),
                reverseData: reverseString(atbashToText(data)),
                binaryData: atbashToBinary(data),
                asciiData: atbashToAscii(data),
                base64Data: atbashToBase64(data),
                octalData: atbashToOctal(data),
                hexData: atbashToHex(data),
                atbashData: data,
                debugData: "Conversions ran successfully!"
            })
        } 
    }

    render() {
        let self = this;
        return (
            <div>
                <Message style={{'text-align': 'center'}}>
                    <Message.Header>Fast Conversions</Message.Header>
                    <p>
                        We offer the most common converters used in CTF competitions. To try them out, look for the label that matches your data, and input the data.
                    </p>
                    <div>
                        {(()=>{
                            if (self.state.showSettings) {
                                return (
                                    <div className="settings-box">
                                        <div className="settings-box-inner">
                                            <div className="settings-box-left">
                                                <div className="settings-box-items"><Radio toggle label='Base N conversions.'/></div>
                                                <div className="settings-box-items"><Radio toggle label='Morse Code.'/></div>
                                                <div className="settings-box-items"><Radio toggle label='Hieroglyphs.'/></div>
                                                <div className="settings-box-items"><Radio toggle label='Affine.'/></div>
                                                <div className="settings-box-items"><Radio toggle label='Baconian.'/></div>
                                                <div className="settings-box-items"><Radio toggle label='Caesarian Shift.'/></div>
                                            </div>
                                            <div className="settings-box-right">
                                                <div className="settings-box-items"><Radio toggle label='Keyed Caesar.'/></div>
                                                <div className="settings-box-items"><Radio toggle label='Columnar Transposition.'/></div>
                                                <div className="settings-box-items"><Radio toggle label='Double Transposition.'/></div>
                                                <div className="settings-box-items"><Radio toggle label='Cryptogram Solver.'/></div>
                                                <div className="settings-box-items"><Radio toggle label='Gronsfeld.'/></div>
                                                <div className="settings-box-items"><Radio toggle label='Letter Numbers.'/></div>
                                            </div>
                                        </div>
                                        <Button circular onClick={() => self.setState({showSettings: false})}>Hide Settings <Icon disabled name='caret up'/></Button>
                                    </div>
                                )
                            } else {
                                return (
                                    <Button circular onClick={() => self.setState({showSettings: true})}>Expand Settings <Icon disabled name='caret down'/></Button>
                                )
                            }
                        })()}
                    </div>
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
                          onInput={(event, input) => self.convertAll(input.value, 'octal') }/>
                        </Form>
                    </div>
                    <div className="box">
                        <div className="boxbar">Hex</div>
                        <Form>
                <TextArea placeholder='Hexadecimal' value={self.state.hexData}
                          onInput={(event, input) => self.convertAll(input.value, 'hex') }/>
                        </Form>
                    </div>
                    <div className="box">
                        <div className="boxbar">Ascii</div>
                        <Form>
                <TextArea placeholder='Numeric ascii representation' value={self.state.asciiData}
                          onInput={(event, input) => self.convertAll(input.value, 'ascii') }/>
                        </Form>
                    </div>
                    <div className="box">
                        <div className="boxbar">Base64</div>
                        <Form>
                <TextArea placeholder='Base64 representation' value={self.state.base64Data}
                          onInput={(event, input) => self.convertAll(input.value, 'base64') }/>
                        </Form>
                    </div>
                    <div className="box">
                        <div className="boxbar">Atbash</div>
                        <Form>
                <TextArea placeholder='Atbash representation' value={self.state.atbashData}
                          onInput={(event, input) => self.convertAll(input.value, 'atbash') }/>
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

export default Conversions;