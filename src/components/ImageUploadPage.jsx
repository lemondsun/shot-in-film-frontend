import React, { Component } from 'react'
import { withRouter } from "react-router";
import {uploadPhoto} from '../services/api-helper'
import Header from './Header'

class ImageUploadPage extends Component {
  state = {
    formData: {
      title: '',
      width: null,
    }
  }
// lets user select image from their own files
  // sets state as the selected file
  // turns file into a readable url for src in an img tag
  fileChangedHandler = event => {
    let reader = new FileReader()
     reader.onload = (e) => {
       this.setState({ selectedFile: e.target.result})
     }
    reader.readAsDataURL(event.target.files[0])
  }
   
  
  // sets state for formData based off of user input
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  }
  // adds this.state.selectedFile (users selected image) to this.state.formData
  // saves formData to the data base
 uploadHandler = () => {
  this.state.formData.src = `${this.state.selectedFile}`
  uploadPhoto(this.state.formData)
}

  render() {
    return (
      <div>
        <Header />
        <div id='upload-section'>
        <input type="file" onChange={this.fileChangedHandler}>
        </input>
        <input onChange={this.handleChange} placeholder='title' name='title'>
        </input>
          <button onClick={this.uploadHandler}>Upload!</button>
        </div>
        <div id='delete-section'>
          
        </div>
      </div>

    )
  }
}

export default withRouter(ImageUploadPage);