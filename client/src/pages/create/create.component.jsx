import React from 'react';
import Process from './process.component';
import Editor from './editor.component';

class CreatePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Process />
                    </div>

                    <div className="col-md-6">
                        <Editor />
                    </div>

                </div>
            </div>
        );
    }
}

export default CreatePage;