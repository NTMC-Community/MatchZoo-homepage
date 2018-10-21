import React, { Component } from 'react';
import { Input, Balloon, Icon } from '@icedesign/base';
import Menu from '@icedesign/menu';
import Logo from '../Logo';
import './Header.scss';

const MENUS = [
  {
    name: 'Home',
    path: '#/ice',
  },
  {
    name: 'Tutorials',
    //path: '#/tutorials',
    path: 'https://nbviewer.jupyter.org/github/NTMC-Community/MatchZoo/blob/2.0/notebooks/wikiqa/dssm.ipynb',
  },
  
  {
    name: 'Documentation',
    path: 'https://matchzoo.readthedocs.io/en/2.0/',
  },
  // {
  //   name: 'Team & Paterners',
  //   path: '#/team',
  // },
  // {
  //   name: '物料',
  //   children: [
  //     {
  //       name: '组件',
  //       path: '/ice/component/button',
  //     },
  //     {
  //       name: '区块',
  //       path: '/ice/block',
  //     },
  //     {
  //       name: '布局',
  //       path: '/ice/layout',
  //     },
  //     {
  //       name: '模板',
  //       path: '/ice/scaffold',
  //     },
  //   ],
  // },
  // {
  //   name: '工具',
  //   children: [
  //     {
  //       name: 'ICEWORKS',
  //       path: '/ice/iceworks',
  //     },
  //     {
  //       name: 'Playground',
  //       path: '/ice/playground',
  //     },
  //   ],
  // },
  // {
  //   name: 'Community',
  //   children: [
  //     {
  //       name: '知乎专栏',
  //       path: 'https://zhuanlan.zhihu.com/ice-design',
  //     },
  //     {
  //       name: '万能群',
  //       path:
  //         require('./images/ice-group.png'),
  //     },
  //   ],
  // },
];

export default class Header extends Component {
  renderBalloonContent = (menu) => {
    return (
      <Menu.Item>
        <Balloon
          className="header-balloon-content"
          closable={false}
          triggerType="click"
          trigger={
            <a>
              {menu.name}{' '}
              <Icon
                size="xxs"
                type="arrow-down-filling"
                className="arrow-down-filling-icon"
              />
            </a>
          }
        >
          {menu.children.map((subMenu) => {
            return (
              <a href="#" className="custom-sub-menu">
                {subMenu.name}
              </a>
            );
          })}
        </Balloon>
      </Menu.Item>
    );
  };

  renderMenuItem = () => {
    return MENUS.map((menu) => {
      if (menu.children) {
        return this.renderBalloonContent(menu);
      }
      return (
        <Menu.Item key={menu.path}>
          <a href={menu.path}>{menu.name}</a>
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <div className="header-container" style={{ background: '#141415' }}>
        <div className="header-content">
          <Logo />
          <div className="header-navbar">
            {/* <div className="header-search-input">
              <Input placeholder="全局搜索" />
            </div> */}
            <Menu className="header-navbar-menu" mode="horizontal">
              {this.renderMenuItem()}
            </Menu>
          </div>
        </div>
      </div>
    );
  }
}
