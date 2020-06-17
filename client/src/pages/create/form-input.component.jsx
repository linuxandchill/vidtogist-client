import React from "react";

export default class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            youtubeUrl: "",
            timestamp: "",
        }
    }

    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        // this.props.onSubmit(this.state);
        this.setState({
            youtubeUrl: "",
            timestamp: "",
        });

        this.props.onChange({
            youtubeUrl: "",
            timestamp: "",
        });
    };

    render() {
        return (
            <form>
                <div className="form-group">
                    <label>Youtube URL</label>
                    <input
                        type="text"
                        className="form-control"
                        name="youtubeUrl"
                        placeholder="https://www.youtube.com/my_video"
                        value={this.state.youtubeUrl}
                        onChange={e => this.change(e)}
                    />
                </div>
                <div className="form-group">
                    <label>Timestamp</label>
                    <input
                        name="timestamp"
                        className="form-control"
                        type="text"
                        className="form-control"
                        placeholder="4:11"
                        value={this.state.timestamp}
                        onChange={e => this.change(e)}
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={e => this.onSubmit(e)}>Process</button>
            </form>
        );
    }
}
