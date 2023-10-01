import { useSelector } from 'react-redux';
import { selectProjectAC } from '../../store/rootReducer';
import store from '../../store/store';
import { keyCreator } from '../../utils/keyCreator';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const projects = useSelector((state) => state.root.projects);
  const navigate = useNavigate();
  const handleClick = (e) => {
    store.dispatch(selectProjectAC(e.target.innerText));
    navigate('/tasks');
  };

  return (
    <div>
      {Object.keys(projects).map((el, index) => (
        <div className="project" onClick={handleClick} key={keyCreator(index)}>
          {el}
        </div>
      ))}
    </div>
  );
};

export default Projects;
