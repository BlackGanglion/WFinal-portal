import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer id="link">
        <p>
          <span className="our">联系我们</span>
          <span>微博: </span><a href="http://weibo.com/hdacm" target="_blank">@杭电ACM</a>
          <span>邮箱: </span><a href="mailto:hduacm@qq.com">hduacm@qq.com</a>
        </p>
        <p>2016年中国大学生程序设计竞赛-女生专场 组委会</p>
      </footer>
    )
  };
}

export default Footer;
