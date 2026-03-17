import express from 'express';

import authentication from './authentication';
import users from './users';

const router = express.Router();

export default (): express.Router => {
  router.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World!');
  });
  authentication(router);
  users(router);

  return router;
};
