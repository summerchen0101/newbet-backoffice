import React from 'react';
import {User} from '../../components/User';
import {connect} from 'react-redux'
import { IInitialState } from './reducer'

interface IProps extends IInitialState{
  compiler: string
  framework: string
}
const APP: React.FC<IProps> = (props) => {
  return (
    <div>
      <div>{props.counter}</div>
      <div>{props.framework}</div>
      <User name="summer" age={20} specialize="economy"></User>
    </div>
  );
}

const mapStateToProps = (state: IInitialState) => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(APP)
