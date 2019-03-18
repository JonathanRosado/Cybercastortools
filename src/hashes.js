import {Form, Radio, TextArea, Message, Button, Icon} from "semantic-ui-react";
import React, { Component } from 'react';

const hashes = class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: "",
            hashedText: ""
        };
    }

hash(str){
    if (str.length <= 0)
        return "";

    function md5(str){
        let output = "";
        var crypto = require('crypto');
        output = crypto.createHash('md5').update(str).digest('hex');
        return output;
    }

    function sha1(str){
        let output = "";
        var crypto = require('crypto');
        output = crypto.createHash('sha1').update(str).digest('hex');
        return output;
    }

    function sha256(str){
        let output = "";
        var crypto = require('crypto');
        output = crypto.createHash('sha256').update(str).digest('hex');
        return output;
    }

    function sha384(str){
        let output = "";
        var crypto = require('crypto');
        output = crypto.createHash('sha384').update(str).digest('hex');
        return output;
    }

    function sha512(str){
        let output = "";
        var crypto = require('crypto');
        output = crypto.createHash('sha512').update(str).digest('hex');
        return output;
    }
    
    function ripeMD160(str){
        let output = "";
        var crypto = require('crypto');
        output = crypto.createHash('ripeMD160').update(str).digest('hex');
        return output;
    }

    var out =" MD5 = " + md5(str) + "<br/> <br>" 
            + "SHA1 = " + sha1(str) + "<br/> <br>" 
            + "SHA256 = " + sha256(str) + "<br/> <br>"  
            + "SHA384 = " + sha384(str) + "<br/> <br>" 
            + "SHA512 = " + sha512(str) + "<br/> <br>"
            + "RIPEMD160 = " + ripeMD160(str) + "<br/> <br>";
    return out;
    // this.setState({textRot: shift("Ricardo",1)})
}

    render() {
        let self = this;
        return (
            <div>
                <Message>
                    <Message.Header>Most Common Hashes</Message.Header>
                </Message>
                <Form>
                    <TextArea placeholder='Enter String:' value={self.state.textInput}
                            onInput={(event, input) => { self.setState({textInput: input.value})}}/>                        
                <div align="justify" dangerouslySetInnerHTML={{ __html: self.hash(self.state.textInput) }} />
                </Form>
            </div>
        );
        
    }
};

export default hashes;