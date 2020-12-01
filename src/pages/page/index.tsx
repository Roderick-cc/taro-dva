import React, { Component } from 'react'
import { connect, } from 'react-redux'
import './index.scss'
import Taro, { navigateTo, redirectTo, } from '@tarojs/taro'
import {
  View, Button, Image,
  Text,
  ScrollView
} from '@tarojs/components';

// import LiveCom from '../../component/LiveCom'


// @shareMessageAop
class Index extends Component {
  state = {
    isShowFloat: false,

  }

  componentDidMount() {
  }

  componentDidShow() {
  }



  render() {
    return (
      <View>
        <View>页面2222</View>

        {/* <LiveCom /> */}

        <View>3333</View>

      </View>
    )
  }
}




function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(Index);