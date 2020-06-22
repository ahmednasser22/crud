import React, { Component, Fragment } from 'react';
import './shownames.css';
class Shownames extends Component {
    state = {
        isEdit: false
    }
    //render name item
    renderName = () => {
        return (
            <li>
                <span className= "name">{this.props.nameItemFromApp.name}</span>
                <div className = "btnsDiv">
                <span><button onClick={() => this.props.deleteName(this.props.index)}>Delete Name</button></span>
                <span><button onClick={() => this.toggleState()}>Edit Name</button></span>
                </div>
            </li>
        );
    }

    //toggle state
    toggleState = () => {
        let newisEdit = this.state.isEdit;
        this.setState({
            isEdit: !newisEdit
        });
    }

    //edit name
    updateName = (e) => {
        e.preventDefault();
        this.props.editName(this.props.index , this.input.value);
        this.toggleState();
    }

    //render edit name form
    renderUpdateNameForm = () => {
        return (
            <form onSubmit={this.updateName} className = "editname">
                <input type="text" ref ={(v => {this.input = v})} defaultValue={this.props.nameItemFromApp.name} />
                <button>Update Name</button>
            </form>
        );
    }

    render() {
        return (
            <Fragment>
                {this.state.isEdit ? this.renderUpdateNameForm() : this.renderName()}
            </Fragment>
        );
    }
}
export default Shownames;