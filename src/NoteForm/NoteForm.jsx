import React,{Component} from 'react';
import './NoteForm.css'

class NoteForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            newNoteContent: ''
            }
            this.handleUserInput=this.handleUserInput.bind(this);
            this.writeNote=this.writeNote.bind(this);

        }
        writeNote(){

            this.props.addNote(this.state.newNoteContent);


            this.setState({
                newNoteContent: ''
            })
        }
    handleUserInput(e){
        this.setState({
            newNoteContent: e.target.value
        })
    }
        render(){
            return(
                <div className="formWrapper">
                    <input className="noteInput"  placeholder="Write a new note" onChange={this.handleUserInput} value={this.state.newNoteContent} type="text"/>
                    <button onClick={this.writeNote} className="noteButton">Add note</button>
                </div>
            )
        }



}

export default NoteForm;