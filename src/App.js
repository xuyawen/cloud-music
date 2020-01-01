import React from 'react';
import { IconStyle } from './assets/iconfont';
import { GlobalStyle } from './assets/style';
import { renderRoutes } from 'react-router-config';//renderRoutes 读取路由配置转化为 Route 标签
import { Provider } from 'react-redux'
import store from './store/index'
import routes from './routes/index.js';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle />
        <IconStyle />
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  );
}

export default App;
