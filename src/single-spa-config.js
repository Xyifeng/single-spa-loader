import * as singleSpa from 'single-spa';
import {registerApp} from './registerApp';

async function bootstrap() {
  let projectConfig = await window.System.import('/single.config.js' )
  projectConfig.projects.forEach( element => {
      registerApp({
          name: element.name,// 应用名称
          path: element.path,// 应用路径
          main:element.main,// js文件路径
          store:element.store,
          dev:element.dev
      });
  });
  singleSpa.start();
}
bootstrap()

