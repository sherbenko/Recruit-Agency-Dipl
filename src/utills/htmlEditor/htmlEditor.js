
import React, {Component} from 'react'
import 'react-quill/dist/quill.snow.css'
import './htmlEditor.css'

class HtmlEditor extends Component {


  constructor(props) {
    super(props)


    if (document) {

      this.quill = require('react-quill')
    }
  }



   handleChange = (value) => {

     console.log(value)
  }


  render() {
    const Quill = this.quill
    if (Quill) {
      return (
        <div>
          <Quill

            onChange={this.handleChange}
            formats={this.formats}
            theme={'snow'}
            modules={this.modules}
            // value={text}
          />
        </div>
      )
    }
    return null
  }
}

export default HtmlEditor
