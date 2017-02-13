import { Router, RouterConfiguration } from 'aurelia-router';
import '../styles.css';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: '', name: 'nested', moduleId: PLATFORM.moduleName('page-nested', 'nested') }/*,
      { route: 'document-scroll', name: 'document-scroll', moduleId: PLATFORM.moduleName('page-document-scroll', 'document-scroll') },
      { route: 'container-scroll', name: 'container-scroll', moduleId: PLATFORM.moduleName('page-container-scroll', 'container-scroll') }*/
    ]);
    this.router = router;
  }
}
