import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'

import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'
import { connect } from 'react-redux'

import { AtButton, AtCurtain, AtFab } from 'taro-ui'
import LiveCom from '../../component/LiveCom'

// @connect() 
export default class Index extends Component {

  onShareTimeline() {
    return {
      title: "朋友圈标题",
      path: `/pages/index/index`,
      imageUrl: 'https://avatar.csdnimg.cn/F/4/E/3_yiifaa.jpg'
    }
  }

  onShareAppMessage(res) {
    return {
      title: '自定义转发标1123',
      path: '/page/index/index',
      imageUrl: 'https://avatar.csdnimg.cn/F/4/E/3_yiifaa.jpg'
    }
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>


        <LiveCom />

      

      </View>
    )
  }
}
