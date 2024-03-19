import { DataType } from "../../types";
import Styles from './index.module.css';
import dollar from '../../assets/currency-dollar.svg';

export const Items: React.FC<{ data: DataType; }> = ({ data }) => {

  return (
    <div className={ Styles.List_Container } key={ data.trackId }>
      <div className={ Styles.Info_Container }>
        <img className={Styles.Artwork} src={ data.artworkUrl100 } alt={ `${ data.artistName } artwork` } />
        <div className={ Styles.Text_Container }>
          <p>{ data.artistName }</p>
          <h3>{ data.trackName || data.collectionName }</h3>
          <div className={ Styles.Bottom_Info }>
            <p className={ Styles.Badge }>{ data.primaryGenreName }</p>
            { data.trackPrice ?
              <div className={Styles.Price_Container}>
                <img src={ dollar } alt="dollar icon" />  <p className={ Styles.Price }>{ data.trackPrice }</p>
              </div> : null }
          </div>
        </div>
      </div>

    </div>
  );
};