import { express } from 'express';
import { pkg } from 'body-parser';
import { router } from './router.router.js';

const app = express();
const { json, urlendcoded } = pkg;

app.use(json());
app.use(urlendcoded({ extended: true }));

app.listen(3000, function() {
  console.log('listening from 3000');
});

app.use('/', router);
