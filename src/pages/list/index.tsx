import Styles from './index.module.css';
import menu from '../../assets/menu.svg';
import search from '../../assets/search.svg';
import ngmusic from '../../assets/ngmusic.svg';
import { Items } from '../../components/items';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context';
import { useEffect } from 'react';
import { Loader } from '../../components/loader';
import { ListMethod } from '../../method';
import { SearchModal } from '../../components/searchModal';
import { toggleScroll } from '../../helpers';

export const List = () => {
  const { search: searchQuery, isLoading, items, isOpen, setIsOpen } = useAppContext();
  const { searchFunction } = ListMethod();
  useEffect(() => {
    if (searchQuery.length) {
      searchFunction(searchQuery);
    }
  }, []);

  return (
    <>
      <SearchModal isOpen={ isOpen } setIsOpen={ setIsOpen } />
      <header className={ Styles.Header }>
        <img src={ menu } alt='menu' />
        <Link to='/'> <img src={ ngmusic } alt='ng music' /></Link>
        <img src={ search } alt='search' onClick={()=>{
          toggleScroll(isOpen)
          setIsOpen(!isOpen)}} />
      </header>
      <main className={ Styles.Main }>
        <div className={ Styles.Search }>
          { searchQuery.length ?
            <><p>Search result for: </p><span className={ Styles.Search_Result }>{ searchQuery }</span>
            </> : null }
        </div>
        <div className={ Styles.List }>
          { isLoading ?
            <div className={ Styles.Center }>
              <Loader />
            </div> :
            items.length ? items.map(item => {
              return (
                <Items data={ item } />
              );
            }) : <div className={ Styles.Center }>
              <h1>Item Not Found</h1>
            </div> }
        </div>
      </main>
    </>
  );
};