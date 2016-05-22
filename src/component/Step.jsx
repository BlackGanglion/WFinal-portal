import { Steps } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
const Step = Steps.Step;


class StepList extends React.Component {
  render() {
    const steps = [{
      title: 'CCPC注册',
      description: '前往<a href="http://www.ccpc.io" target="_blank">CCPC官网</a>进行队伍注册'
    }, {
      title: '确认参赛信息',
      description: '<a href="http://acm.hdu.edu.cn/ccpc-w2016/images/2016中国大学生程序设计竞赛（女生专场）-邀请函.jpg" target="">邀请函下载</a>',
    }, {
      title: '前往参赛',
      description: '指定时间前到达杭州电子科技大学,<br>参与比赛'
    }].map((s, i) => <Step status="process" key={i} title={s.title} description={s.description} />);
    return (
      <Steps maxDescriptionWidth="10">{steps}</Steps>
    );
  }
}

export default StepList;
