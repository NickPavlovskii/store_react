import React, { Component } from 'react';
import { FaLock } from 'react-icons/fa';
import { AiOutlineEyeInvisible} from 'react-icons/ai';
class PasswordShowHide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  render() {
    return (
      <div>
        <input type={this.state.hidden ? 'password' : 'text'} placeholder='Enter your password' required />
        <FaLock className='icn'/>
        <AiOutlineEyeInvisible onClick={this.toggleShow} className='icn showhidep ' />
      </div>
    );
  }
}

export default PasswordShowHide;