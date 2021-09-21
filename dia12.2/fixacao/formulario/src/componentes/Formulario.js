import React, {Component} from 'react';
import TextArea from './TextArea';

class Formulario extends Component{
  constructor(props){
    super(props);
    this.state = {
      textArea: '',
      // outrotextArea: '',
      // select:'',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({ target }){
    const { name, value } = target
    this.setState({
      [name]: value,
    })
  }
  render(){
    return(
      <form className='form'>
        <label>
          Select
          <select >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <TextArea textArea={this.state.textArea} handleChange={this.handleChange}/>
      </form>
    )
  }
}

export default Formulario;