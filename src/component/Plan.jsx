import React from 'react';
import { Table } from 'antd';

class Plan extends React.Component {
  render() {
    const renderContent = function (value, row, index) {
      let obj = {
        children: value,
        props: {}
      };
      return obj;
    };

    const columns = [{
      title: '时间',
      colSpan: 2,
      dataIndex: 'time_1',
      render(value, row, index) {
        let obj = {
          children: value,
          props: {}
        };

        if (index === 0) { obj.props.rowSpan = 2; }
        if (index === 1) { obj.props.rowSpan = 0; }
        if (index === 2) { obj.props.rowSpan = 5; }
        if (index === 3) { obj.props.rowSpan = 0; }
        if (index === 4) { obj.props.rowSpan = 0; }
        if (index === 5) { obj.props.rowSpan = 0; }
        if (index === 6) { obj.props.rowSpan = 0; }

        return obj;
      }
    }, {
      title: '具体时间',
      colSpan: 0,
      dataIndex: 'time_2',
      render: renderContent
    }, {
      title: '内容',
      dataIndex: 'content',
      render: renderContent
    }, {
      title: '场地',
      dataIndex: 'site',
      render: renderContent
    }, {
      title: '出席',
      dataIndex: 'people',
      render: renderContent
    }];

    const data = [{
      key: 1,
      time_1: '周六(5月21日)',
      time_2: '13:30 - 17:30',
      content: '报到注册',
      site: '杭电第一教学楼',
      people: '全体人员'
    }, {
      key: 2,
      time_1: '周六(5月21日)',
      time_2: '17:00 - 18:30',
      content: '晚餐',
      site: '杭电食堂',
      people: '全体人员'
    }, {
      key: 3,
      time_1: '周日(5月22日)',
      time_2: '08:30 - 10:30',
      content: '报到注册',
      site: '杭电第三教学楼',
      people: '全体人员'
    }, {
      key: 4,
      time_1: '周日(5月22日)',
      time_2: '09:30 - 10:30',
      content: '比赛热身',
      site: '杭电第三教学楼',
      people: '参赛选手'
    }, {
      key: 5,
      time_1: '周日(5月22日)',
      time_2: '10:30 - 12:00',
      content: '午餐',
      site: '杭电食堂',
      people: '全体人员'
    }, {
      key: 6,
      time_1: '周日(5月22日)',
      time_2: '12:00 - 17:00',
      content: '正式比赛',
      site: '杭电第三教学楼',
      people: '参赛选手'
    }, {
      key: 7,
      time_1: '周日(5月22日)',
      time_2: '17:30 - 18:30',
      content: '颁奖典礼',
      site: '杭电第十一教学楼',
      people: '全体人员'
    }];

    return (
      <Table columns={columns} dataSource={data} pagination={false} bordered />
    )
  }
}

export default Plan;
