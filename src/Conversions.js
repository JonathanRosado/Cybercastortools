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
                debugData: "Conversions were ran successfully!"
            })
        } else if (type === 'binary') {

        } else if (type === 'octal') {

        } else if (type === 'hex') {

        } else if (type === 'ascii') {

        } else if (type === 'base64') {

        } else if (type === 'atbash') {

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