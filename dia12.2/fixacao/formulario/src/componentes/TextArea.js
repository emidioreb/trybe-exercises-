import React, {Component} from 'react';

class TextArea extends Component{
  render(){
    const {textArea, handleChange} = this.props;
    return(
      <label>
        textArea
        <textarea type='textArea' name='textArea' value={textArea} onChange={handleChange}/>
      </label>
    )
  }
}

export default TextArea;