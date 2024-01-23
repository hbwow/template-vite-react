import { createBrowserRouter } from 'react-router-dom';

import layoutRoutes from './routes';

export { layoutRoutes };

const routes = createBrowserRouter([layoutRoutes], { basename: import.meta.env.BASE_URL });

export default routes;
