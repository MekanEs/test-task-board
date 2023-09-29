import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Projects from '../../pages/projects/projects';
import Tasks from '../../pages/tasks/tasks';
import Layout from '../layout/layout';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Projects />} />
      <Route path="/tasks" element={<Tasks />} />
    </Route>
  )
);
