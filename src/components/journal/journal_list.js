import React, { Component } from "react";

const rawJournalData = [
    { title: "Post One", content: "Post Content", status: "draft" },
    { title: "Post Two", content: "Post Content", status: "published" },
    { title: "Post Three", content: "Post Content", status: "published" },
    { title: "Post Four", content: "Post Content", status: "published" },

];


export default class JournalList extends Component {
    constructor(props) {
        super();

        this.state = {
            journalData: rawJournalData,
            greeting: "Heyyyyyyy Mr",
            isOpen: true
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.greeting}</h2>
                <h2>{this.props.heading}</h2>


            </div>
        )
    }
}