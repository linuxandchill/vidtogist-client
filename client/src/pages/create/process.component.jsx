import React, { useState } from 'react';
import YouTubePlayer from 'react-player/lib/players/YouTube'
import FormInput from './form-input.component';

class Process extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {}
        }
    }

    onChange = updatedValue => {
        this.setState({
            fields: {
                ...this.state.fields,
                ...updatedValue
            }
        });
    };

    render() {
        return (
            <div className="container">
                <p> Start Processing</p>
                <div style={{ marginBottom: "10px" }}>
                    <FormInput onChange={fields => this.onChange(fields)} />
                </div>
                <div>
                    <YouTubePlayer
                        className="react-player"
                        width='100%'
                        url={this.state.fields.youtubeUrl}
                        controls
                        playing={false}
                        muted={true}
                    />
                </div>
            </div>
        );

    }
}

export default Process;
