import {Form, Radio, TextArea, Message, Button, Icon} from "semantic-ui-react";
import React, { Component } from 'react';

const RotateN = class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: "",
            textRot: ""
        };
        this.rotateN = this.rotateN.bind(this);
    }

rotateN(str,amount){
    if (str.length <= 0)
        return "";

    function shift(str, amount){
        var output = '';

        for (var i = 0; i < str.length; i ++) {
            var c = str[i];

            if (c.match(/[a-z]/i)) {
                var code = str.charCodeAt(i);

                if ((code >= 65) && (code <= 90))
                    c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

                else if ((code >= 97) && (code <= 122))
                        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

            }
            output += c;
        }
        return output;
        
    }
    
    // this.setState({textRot: shift("Ricardo",1)})
    var i;
    var out ="";
    for(i = 1; i < 26; i++){
        out += "\tRot " + i + " = ";
        out += shift(str, i);
        out += "<br/>";
        out += "<br/>";
    }
    return out;
}

    render() {
        let self = this;
        return (
            <div>
                <Message>
                    <Message.Header>All Caesar Cipher Rotations</Message.Header>
                </Message>
                <Form>
                    <TextArea placeholder='Enter String:' value={self.state.textInput}
                            onInput={(event, input) => { self.setState({textInput: input.value})}}/>

                <div align="justify" dangerouslySetInnerHTML={{ __html: self.rotateN(self.state.textInput) }} />                            
                </Form>
            </div>
        );
        
    }
};

export default RotateN;