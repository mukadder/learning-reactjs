/**
 * Created by mukadder on 3/31/17.
 */
import  * as React from 'react'
import ContentToggle from './ContentToggle'; 
  import { Component } from 'react'
class EventEmitter extends React.Component  {
  


  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }
  submit(e) {
    const { _title, _color } = this.refs
    e.preventDefault();
     this.props.onNewColor(_title.value, _color.value)
    _title.value = ''
    _title.value = '';
    _color.value = '#000000';
    _title.focus();
  }
  render() {
      return (
          <form onSubmit={this.submit}>
              <input ref="_title"
                     type="text" 
                     placeholder="color title..." required/>
              <input ref="_color"
                     type="color" required/>
              <button>ADD</button>
          </form>
      )
  }
}
EventEmitter.defaultProps = {
    onNewColor: f=>f
}
export default EventEmitter



