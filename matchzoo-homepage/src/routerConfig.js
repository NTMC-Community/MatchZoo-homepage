// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import BlankLayout from './layouts/BlankLayout';
import Home from './pages/Home';
import Tutorials from './pages/Tutorials';
import Team from './pages/Team';
import NotFound from './pages/NotFound';

const routerConfig = [
  {
    path: '/',
    layout: BlankLayout,
    component: Home,
  },
  {
    path: '/ice',
    layout: BlankLayout,
    component: Home,
  },
  {
    path: '/tutorials',
    layout: BlankLayout,
    component: Tutorials,
  },
  {
    path: '/team',
    layout: BlankLayout,
    component: Team,
  },
  {
    path: '*',
    layout: BlankLayout,
    component: NotFound,
  },
];

export default routerConfig;
