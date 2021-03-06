import React, { Component } from 'react';

import { Modal } from './style'

class AddEventModal extends Component {
    constructor() {
        super();

        this.state = {
            event_name : '',
            event_date : '',
            event_desc : '',
            event_wiki : '',
            event_option : '',
            event_thumbnail : '',
            timeline: ''
        }
    }
    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value })
    }
    render() {
        return (
            <Modal>
                <section>
                    <header>
                        <ul>
                            <span>
                                <li><h1>Add Event</h1></li>
                            </span>
                            <li><div id='close' onClick={this.props.closeModal}></div></li>
                        </ul>
                    </header>
                    <form onSubmit={(e) => this.props.closeAndAdd(e, this.state)} >
                        <label>Event Name: </label>
                        <input type="text" name="event_name" value={this.state.event_name} placeholder="Megali Idea" onChange={this.handleChange} />
                        <label>Event Date:</label>
                        <input type="text" name="event_date" value={this.state.event_date} placeholder="YYYY-DD-MM" onChange={this.handleChange} />
                        <label>Event Description: </label>
                        <input type="text" name="event_desc" value={this.state.event_desc} placeholder="event description" onChange={this.handleChange} />
                        <label>Event Wiki: </label>
                        <input type="text" name="event_wiki" value={this.state.event_wiki} placeholder="EXACT wikipedia article title" onChange={this.handleChange} />
                        <label>Event Option: </label>
                        <input type="text" name="event_option" value={this.state.event_option} placeholder="https://youtu.be/jkGVh102Tlw?t=1428" onChange={this.handleChange} />
                        <label>Event Thumbnail: </label>
                        <input type="text" name="event_thumbnail" value={this.state.event_thumbnail} placeholder="image src" onChange={this.handleChange} />

                        <footer>
                            <button id='submit'><p>Create Event</p></button>
                        </footer>
                    </form>
                        
                    
                </section>
            </Modal>
        )
    }
}

export default AddEventModal