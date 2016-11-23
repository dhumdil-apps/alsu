import { platformBrowser } from '@angular/platform-browser';

import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
  .then(success => console.log(`Bootstrap success`))
  .catch(err => console.error(err));
