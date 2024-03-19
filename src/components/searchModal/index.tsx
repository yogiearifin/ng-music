import { useAppContext } from '../../context';
import { ListMethod } from '../../method';
import Styles from './index.module.css';
import FormStyles from '../../pages/homepage/index.module.css';
import CloseIcon from '../../assets/x.svg';
import { useState } from 'react';

type SearchModalType = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SearchModal: React.FC<SearchModalType> = ({
  isOpen,
  setIsOpen
}) => {
  const { setSearch: setSearchGlobal } = useAppContext();
  const [search, setSearch] = useState<string>('');
  const { searchFunction } = ListMethod();
  return (
    <>
      { isOpen ? <div className={ Styles.Modal_Container }>
        <img onClick={ () => setIsOpen(!isOpen) } className={ Styles.Close_Icon } src={ CloseIcon } alt='close icon' />
        <form className={ Styles.Form } onSubmit={ (e) => {
          e.preventDefault();
          searchFunction(search);
          setIsOpen(false);
          setSearchGlobal(search);
        } }>
          <p>Search</p>
          <input className={ FormStyles.Input } onChange={ (e) => {
            setSearch(e.target.value);
          } } value={ search } type='text' placeholder='Artist / Album / Title' />
          <button disabled={ search.length === 0 } className={ Styles.Button }>Search</button>
        </form>
      </div> : null }
    </>
  );
};