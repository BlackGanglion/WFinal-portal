import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const SPEED = 12;

class Nav extends React.Component {
  scrollMove = (to) => {
    let from = window.pageYOffset
               || document.documentElement.scrollTop
               || document.body.scrollTop
               || 0;
    // console.log(from);
    to = to - 120;
    if(from == to) {
      return;
    } else {
      if(from > to) {
        // 向上移动
        let move = setInterval(function(){
          window.scroll(0, from);
          from -= SPEED;
          if(Math.abs(from - to) <= SPEED) {
            window.scroll(0, to);
            clearInterval(move);
          }
        }, 5);
      } else {
        // 向下移动
        let move = setInterval(function(){
          window.scroll(0, from);
          from += SPEED;
          if(Math.abs(from - to) <= SPEED) {
            window.scroll(0, to);
            clearInterval(move);
          }
        }, 5);
      }
    }
    // window.scroll(0, dis);
  }
  handleClick = (e) => {
    e.preventDefault();
    let id = e.target.getAttribute('data-id');
    let ele = document.getElementById(id);
    let to = ele.offsetTop;
    this.scrollMove(to);
  }
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item>
          <a href="#intro" data-id="intro" onClick={this.handleClick}>赛事简介</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#rank" data-id="rank" onClick={this.handleClick}>比赛排名</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#plan" data-id="plan" onClick={this.handleClick}>日程安排</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#env" data-id="env" onClick={this.handleClick}>竞赛环境</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#team" data-id="team" onClick={this.handleClick}>参赛队伍</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#traffic" data-id="traffic" onClick={this.handleClick}>住宿交通</a>
        </Menu.Item>
        <Menu.Item>
          <a href="#sponsor" data-id="sponsor" onClick={this.handleClick}>赞助商</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Nav;
