import React from 'react';
import { Icon, Row, Col } from 'antd';
import PlanTable from './Plan';
import StepList from './Step';
import TeamList from './TeamList';

class Main extends React.Component {
  render() {
    return (
      <main>
        <section id="main-pic">
          <h1 id="headline">中国大学生程序设计竞赛 - 女生专场</h1>
          <h2 id="headline-2"><Icon type="calendar" />&nbsp;&nbsp;&nbsp; 2016 年 5 月 21 - 22 日</h2>
          <h2 id="headline-3"><Icon type="environment-o" />&nbsp;&nbsp;&nbsp; 杭州 ● 中国</h2>
        </section>
        <section id="intro">
          <div className="con">
            <h2 className="title">赛事简介</h2>
            <Row>
              <Col span="14">
                  <p>
                    <strong>中国大学生程序设计竞赛 - 女生专场</strong>，是为提高中国大学生女生群体的程序设计水平，同时为国家科技创新储备高级人才，
                    由中国大学生程序设计竞赛协会主办、杭州电子科技大学计算机学院承办的中国最顶级大学生女生专场编程竞赛。
                    赛事将汇聚国内众多高校顶尖女子队伍，力图展现中国大学女生编程竞赛的最高水平。
                  </p>
              </Col>
              <Col span="10">
                  <ul>
                    <li>冠军 ( 1支 ) : 奖杯、证书、奖金 ( 3000元 )</li>
                    <li>亚军 ( 1支 ) : 奖杯、证书、奖金 ( 1500元 ) </li>
                    <li>季军 ( 1支 ) : 奖杯、证书、奖金 ( 1000元 )</li>
                    <li>金奖 ( 5支 ) : 奖牌、证书、奖金 ( 600元 )</li>
                    <li>银奖 ( 17支 ) : 奖牌、证书</li>
                    <li>铜奖 ( 25支 ) : 奖牌、证书</li>
                  </ul>
              </Col>
            </Row>
            <br></br>
            <br></br>
            <StepList />
          </div>
        </section>
        <section id="rank">
          <div className="con">
            <h2 className="title">比赛排名</h2>
            <div>
              <span>实时排名: </span>
              <a href="http://bestcoder.hdu.edu.cn/board.php" target="_blank">http://bestcoder.hdu.edu.cn/board.php</a>
            </div>
            <div>
              <span>比赛直播: </span>
              <a href="http://live.bilibili.com/206917" target="_blank">http://live.bilibili.com/206917</a>
            </div>
          </div>
        </section>
        <section id="plan">
          <div className="con">
            <h2 className="title">日程安排</h2>
            <PlanTable />
            <br></br>
            <img id="map" src="http://acm.hdu.edu.cn/ccpc-w2016/images/map.jpg" />
          </div>
        </section>
        <section id="team">
          <div className="con">
            <h2 className="title">参赛队伍</h2>
            <TeamList />
          </div>
        </section>
        <section id="env">
          <div className="con">
            <h2 className="title">竞赛环境</h2>
            <ol>
              <li>
                <strong>操作系统与浏览器</strong>:
                <dl>Windows 7, Chrome 42.0</dl>
              </li>
              <li>
                <strong>支持的语言</strong>:
                <dl>C/C++/Java</dl>
              </li>
              <li>
                  <strong>提供的IDE与编辑器</strong>:
                  <dl>
                    <dt>A. 已预装的</dt>
                    <dd>a) Visual Studio 2010</dd>
                    <dd>b) Eclipse 4.3 (在 "D:\Program Files\eclipse" 目录下)</dd>
                    <dt>B. 提供安装包，可自行安装的 (在 "E:\CCPC" 目录下)</dt>
                    <dd>a) Code::Blocks 13.12</dd>
                    <dd>b) Dev-C++ 5.4.2</dd>
                    <dd>c) GVim 7.4</dd>
                    <dd>d) Emacs 24.3</dd>
                  </dl>
              </li>
              <li>
                  <strong>评判环境</strong>:
                  <dl>
                    <dd>A. Windows Server 2008</dd>
                    <dd>B. MinGW-w64 4.9.2 ( gcc 4.9.2 x86_64 ) - 开启O2优化, 栈大小64MB</dd>
                    <dd>C. Microsoft 32-bit C/C++ Optimizing Compiler Version 18.00.31101 for 80x86 - 开启O1优化, 栈大小64MB</dd>
                    <dd>D. JDK 1.8.0_45</dd>
                  </dl>
              </li>
              <li>
                  <strong>打印</strong>
                  <dl>打印链接在进入比赛后的顶部菜单栏中的最后一项 "Print"</dl>
              </li>
              <li>
                  <strong>提醒</strong>
                  <dl>
                    <dd>a) 64位整数的输入输出推荐使用 "%I64d"/"%I64u";</dd>
                    <dd>b) 程序必须返回0，否则有可能被判为 Runtime Error.</dd>
                  </dl>
              </li>
            </ol>
          </div>
        </section>
        <section id="traffic">
          <div className="con">
            <h2 className="title">住宿交通</h2>
            <p>
              推荐住宿校内宾馆（曙江大酒店），可以直接电话预定：0571-85885678<br></br>
              预定时，说明是参加杭电的比赛，可以优惠到318元每个标间，没有三人间，若加床则另加120元。<br></br>
              另外，学校周围的快捷酒店也是挺多的，因为不是假期，一般都能找到房源的，请自行搜索解决~
              <br></br>
              <br></br>
              <strong>杭州火车东站(火车城站、九堡客运中心、汽车南站)至杭州电子科技大学</strong><br></br>
              在上述相应站点下车后，可在相应站点乘坐杭州地铁1号线（文泽路方向），在文泽路下车，从B出口出站<br></br>
              <strong>杭州国际萧山机场至杭州电子科技大学</strong><br></br>
              机场下飞机后，乘坐机场大巴至城站火车站，在杭州城站乘坐杭州地铁1号线（文泽路方向），于文泽路下车，从B出口出站
            </p>
            <img src="http://acm.hdu.edu.cn/ccpc-w2016/images/map-2.jpg" />
          </div>
        </section>
        <section id="sponsor">
          <div className="con">
            <h2 className="title">赞助商</h2>
            <img src="http://acm.hdu.edu.cn/ccpc-w2016/images/sponsor.jpg" />
            <p>
            巴卡斯科技（北京）有限公司正式成立于2014年8月，
            是由前百度架构师和美国Azimuth前中国区总经理联合创始的一家创业型公司。
            公司的主旨是让互联网创业不再有技术壁垒。
            我们以业内领先的互联网技术与各垂直传统行业领军者合作创新，技术入股的形式，
            孵化新创业公司，同时构建自己的技术框架和系列产品。
            巴卡斯科技是国内HTML5和Hybrid的技术领先者。
            公司自有的LAB（Light Apps Builder）框架平台是一款高性能低开发成本的框架，
            可支持快速开发WebApp、HybridApp（IOS、Android）、微信轻应用等系统，
            超越了Jquery Mobile、Sencha Touch等H5开发框架和Phonegap、AppCan等Hybrid开发框架，
            处于行业领先水平。现有的LAB 4.0完善了高度可复用的闭包组件机制，并且通过框架简化了开发中常见的难点，
            开发效率提升3倍以上。<br></br>
            公司注重员工的个人成长和长期发展，实行导师制，导师会带领新员工一起进步。
            这里待遇与能力保持同步，每年有两次升级调薪机会。这里有大力度的激励机制，
            靠谱的员工可以从这里得到远超市面上普通水平的收益。这里是IT界的特种部队，
            这里的每一位都是各自领域内的高手或黑马，如果你不是一只绵羊，欢迎加入我们！
            </p>
          </div>
        </section>
      </main>
    )
  };
}

export default Main;
