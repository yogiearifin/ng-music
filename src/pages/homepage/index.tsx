import Styles from './index.module.css';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context';
import { useEffect } from 'react';

export const Homepage = () => {
  const navigate = useNavigate();
  const { search, setSearch, setItems } = useAppContext();
  const homepageSearch = () => {
    if (search.length) {
      navigate('/list');
    }
  };
  useEffect(() => {
    setItems([]);
    setSearch('')
  }, []);
  return (
    <div className={ Styles.Container }>
      <div className={ Styles.Wrapper }>
        <img className={ Styles.Logo } src={ logo } alt='logo for apps' />
        <form className={ Styles.Form } onSubmit={ () => homepageSearch() }>
          <input className={ Styles.Input } onChange={ (e) => setSearch(e.target.value) } value={ search } type='text' placeholder='Artist / Album / Title' />
          <button disabled={ search.length === 0 } className={ Styles.Button }>Search</button>
        </form>
      </div>
    </div>
  );
}; 