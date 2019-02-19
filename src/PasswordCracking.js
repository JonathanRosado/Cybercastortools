import {Form, Checkbox, TextArea, Message, Button, Icon, Table} from "semantic-ui-react";
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
                    <Message.Header>Password Cracker.</Message.Header>
                    <p>
                        We offer password cracking services with pre-loaded wordlists. With the current selection, the estimated execution is <b>38 minute(s)</b>.
                    </p>
                    <div>
                        {(()=>{
                            if (self.state.showSettings) {
                                return (
                                    <div className="settings-box">
                                        <div className="settings-box-inner">
                                            <div className="settings-box-left">
                                                <div className="settings-box-items"><Checkbox label='RockYou.txt'/></div>
                                                <div className="settings-box-items"><Checkbox label='Top1MPasswords.txt'/></div>
                                                <div className="settings-box-items"><Checkbox label='FacebookPasswords.txt'/></div>
                                                <div className="settings-box-items"><Checkbox label='MyspacePasswords.txt'/></div>
                                                <div className="settings-box-items"><Checkbox label='TVSeriesPasswords.txt'/></div>
                                                <div className="settings-box-items"><Checkbox label='SongLyricPasswords.txt'/></div>
                                            </div>
                                            <div className="settings-box-right">
                                                <div className="settings-box-items"><Checkbox label='CartoonPasswordList.txt'/></div>
                                                <div className="settings-box-items"><Checkbox label='DCode.txt'/></div>
                                                <div className="settings-box-items"><Checkbox label='2012BreachedPasswords.txt'/></div>
                                                <div className="settings-box-items"><Checkbox label='23AndMeLeak.txt'/></div>
                                                <div className="settings-box-items"><Checkbox label='JasmineLeak2012.txt'/></div>
                                                <div className="settings-box-items"><Checkbox label='SonyLeak2009.txt'/></div>
                                            </div>
                                        </div>
                                        <div style={{'margin-bottom': '20px'}}>
                                            <Button>Upload Wordlist  <Icon disabled name='upload'/></Button>
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
                <div className="pw-cracking-content">
                    <div className="pw-cracking-input-box">
                        <div className="boxbar">Enter hashes <div style={{"font-family": "serif", "color": "darkkhaki", "font-size": "smaller"}}>(supports: LM, NTLM, md2, md4, md5, md5(md5_hex), md5-half, sha1, sha224, sha256, sha384, sha512, ripeMD160, whirlpool, MySQL 4.1)</div></div>
                        <Form>
                    <TextArea placeholder='Basic ascii text' value={self.state.textData}
                          onInput={(event, input) => self.convertAll(input.value, 'text') }/>
                        </Form>
                    </div>
                    <Table celled striped>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell colSpan='3'>Results</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Icon name='file outline' /> JasmineLeak2012.txt
                                </Table.Cell>
                                <Table.Cell>SecrePasswordTest1</Table.Cell>
                                <Table.Cell collapsing textAlign='right'>
                                    3 minutes
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Icon name='file outline' /> DCode.txt
                                </Table.Cell>
                                <Table.Cell>SecrePasswordTest2</Table.Cell>
                                <Table.Cell textAlign='right'>7 minutes</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Icon name='file outline' /> RockYou.txt
                                </Table.Cell>
                                <Table.Cell>SecrePasswordTest3</Table.Cell>
                                <Table.Cell textAlign='right'>9 minutes</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Icon name='file outline' /> RockYou.txt
                                </Table.Cell>
                                <Table.Cell>SecrePasswordTest4</Table.Cell>
                                <Table.Cell textAlign='right'>2 minutes</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Icon name='file outline' /> RockYou.txt
                                </Table.Cell>
                                <Table.Cell>SecrePasswordTest5</Table.Cell>
                                <Table.Cell textAlign='right'>5 minutes</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
        );
    }
};

export default Conversions;