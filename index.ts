import {httpServerApp} from './src/App'
import config from './src/config/config';
import './src/config/db';
const app = new httpServerApp(config.PORT);
app.runHttpServer();
export { app };
