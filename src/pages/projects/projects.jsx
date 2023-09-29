import { useSelector } from 'react-redux';
import { selectProjectAC } from '../../store/rootReducer';
import store from '../../store/store';
import { keyCreator } from '../../utils/keyCreator';

const Projects = () => {
  const projects = useSelector((state) => state.root.projects);
  const activeProject = useSelector((state) => state.root.activeProject);
  const handleClick = (e) => {
    store.dispatch(selectProjectAC(e.target.innerText));
    console.log(activeProject);
  };

  return (
    <div>
      {Object.keys(projects).map((el, index) => (
        <div onClick={handleClick} key={keyCreator(index)}>
          {el}
        </div>
      ))}
    </div>
  );
};

export default Projects;
