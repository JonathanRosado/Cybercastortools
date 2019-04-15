import {Form, Checkbox, TextArea, Message, Button, Icon, Table, Loader} from "semantic-ui-react";
import React, { Component } from 'react';
import axios from 'axios';

const Conversions = class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputData: "",
            outputData: [],
            loading: false,
        };
        // this
        this.handleTextInput = this.handleTextInput.bind(this);
        this.timeout = null;
    }

    triggerPasswordCrackerService(hashes) {
        axios({
            method: 'post',
            url: 'http://localhost:8080/api/',
            data: hashes.split("\n"),
            headers: {accept: 'application/json'}
        }).then(res => {
            this.setState({loading: false, outputData: res.data});
        })
    }

    handleTextInput(text) {
        this.setState({'inputData' : text, loading: true});

        // If timer is set, we clear it to avoid multiple calls
        if (this.timeout !== null) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }

        // Time until password cracker trigger is sent
        let timer = 2000;

        // We are triggering the password cracker once we are sure the user is done typing
        // We assume that the user is done typing if this method remains uncalled for X consecutive seconds
        this.timeout = setTimeout((arg) => {
            this.triggerPasswordCrackerService(text)
        }, timer);
    }

    render() {
        let self = this;
        return (
            <div>
                <Message style={{'text-align': 'center'}}>
                    <Message.Header>Password Cracker</Message.Header>
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
                    {/*Here's the password cracking input box*/}
                    <div className="pw-cracking-input-box">
                        <div className="boxbar">Enter hashes <div style={{"font-family": "serif", "color": "darkkhaki", "font-size": "smaller"}}>(supports: LM, NTLM, md2, md4, md5, md5(md5_hex), md5-half, sha1, sha224, sha256, sha384, sha512, ripeMD160, whirlpool, MySQL 4.1)</div></div>
                        <Form>
                            <TextArea placeholder='Basic ascii text' value={self.state.inputData}
                                    onInput={(event, input) => self.handleTextInput(input.value)}/>
                        </Form>
                    </div>
                    {/*Here's the table*/}
                    <Table celled striped>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell colSpan='3'>Results <Loader active={self.state.loading} size={'tiny'} inline={true} /></Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell collapsing>
                                    <Icon name='file outline' /> Wordlist
                                </Table.Cell>
                                <Table.Cell textAlign='center'>Hash Value</Table.Cell>
                                <Table.Cell collapsing textAlign='right'>
                                    Plaintext Password
                                </Table.Cell>
                            </Table.Row>
                            {(() => {
                                let tableRows = [];
                                for (let i = 0; i < self.state.outputData.length; i++) {
                                    if (self.state.outputData[i] === '')
                                        continue;
                                    tableRows.push(
                                        <Table.Row>
                                            <Table.Cell collapsing>
                                                <Icon name='file outline' /> rockyou.txt
                                            </Table.Cell>
                                            <Table.Cell>{self.state.outputData[i].split(':')[0]}</Table.Cell>
                                            <Table.Cell collapsing textAlign='right'>
                                                {self.state.outputData[i].split(':')[1]}
                                            </Table.Cell>
                                        </Table.Row>
                                    )
                                }
                                return tableRows;
                            })()}
                        </Table.Body>
                    </Table>
                </div>
            </div>
        );
    }
};

export default Conversions;