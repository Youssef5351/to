import React, { Component} from "react";

import { Crisp } from "crisp-sdk-web";

class CrispChat extends Component {
  componentDidMount () {
    Crisp.configure("86959570-abcf-4653-8616-c3221065deff");
  }

  render () {
    return null;
  }
}
export default CrispChat
