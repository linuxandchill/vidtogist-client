import React, { useEffect, useState, Component } from 'react';
import { render } from 'react-dom';
import CodeMirror from 'react-codemirror';
import { Button } from 'react-bootstrap';
// import './style.css';
import 'codemirror/lib/codemirror.css';

//   updateCode(newCode) {
// 		this.setState({
// 			code: newCode,
// 		});
// 	}


function handleCopy(e) {
    e.preventDefault();

    console.log("COPIED TEXT");
}
const Editor = () => {
    const [name, setName] = useState('CodeMirror');
    const [code, setCode] = useState('for (let i = 0; i < 69; i++) "Love u"');
    let options = {
        lineNumbers: true,
    };

    return (
        <div>
            <p>
                Sign in to save to a gist
            </p>
            <div style={{marginBottom: '10px'}}>
                <CodeMirror value={code} onChange={() => console.log("updated")} options={options} />
            </div>

            <div style={{marginBottom: '10px'}}>
                <Button variant="primary" type="submit" onClick={handleCopy}>
                    Copy to clipboard
            </Button>
            </div>

            <div style={{marginBottom: '10px'}}>
                <Button variant="primary" type="submit" onClick={handleCopy}>
                    Save gist
            </Button>
            </div>
        </div>
    );
}


export default Editor;