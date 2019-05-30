import * as singleSpa from 'single-spa';
import { GlobalEventDistributor } from './GlobalEventDistributor'
const globalEventDistributor = new GlobalEventDistributor();
const env = process.env.NODE_ENV

export async function registerApp(params) {
  if (env === 'production') {
  // 生产环境加载model依赖（开发环境不需要）
    for (let i=0;i<params.main.length-1;i++) {
      await window.System.import(params.main[i])
    }
  }
  // 导入生产环境的store模块
  let storeModule = {}
  let customProps = { globalEventDistributor: globalEventDistributor };
  // 尝试导入store
  try {
    storeModule = params.store ? await window.System.import(params.store) : { storeInstance: null };
  } catch (e) {
    //如果失败则不注册该模块
    return
  }
  // 注册应用于事件派发器
  if (storeModule.storeInstance && globalEventDistributor) {
    //取出 redux storeInstance
    customProps.store = storeModule.storeInstance;
    // 注册到全局
    globalEventDistributor.registerStore(storeModule.storeInstance);
  }

  //准备自定义的props,传入每一个单独工程项目
  customProps = { store: storeModule, globalEventDistributor: globalEventDistributor };

  // 加载子项目的入口js文件 (模块加载)
  let loadingFunction = async () => {
    if (env === 'production') {
      return await window.System.import(params.main[params.main.length-1])
    }else{
      return await window.System.import(params.dev)
    }
  };
  // 当url前缀为params.path的时候.返回 true (底层路由)
  let activityFunction = location => location.pathname.startsWith(params.path);
  // 注册应用
  singleSpa.registerApplication(params.name, loadingFunction, activityFunction,customProps);
}