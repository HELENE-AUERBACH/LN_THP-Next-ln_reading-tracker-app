import React from 'react';
import './InputSearchWithOptions.css';

const options = [
  { key: 'all', text: 'Tous', value: 'all' },
  { key: 'favorites', text: 'Parmi les favoris', value: 'favorites' },
  { key: 'to-read', text: 'Parmi ceux à lire', value: 'to-read' },
]

const InputSearchWithOptions = (props) => {
  return (
    <div className="input-search">
      <input id="searchText" placeholder="Rechercher un titre de livre..." type="text" />
      <div className="selection" role="listbox" aria-expanded="false" tabIndex="0">
        <div className="divider" aria-atomic="true" aria-live="polite" role="alert">Tous</div>
        <i className="dropdown-icon" aria-hidden="true"></i>
        <div className="menu">
          <div className="item" style={{pointerEvents: "all"}} role="option" aria-checked="true" aria-selected="true">
            <span className="text">Tous</span>
          </div>
          <div className="item" style={{pointerEvents: "all"}} role="option" aria-checked="false" aria-selected="false">
            <span className="text">Parmi les favoris</span>
          </div>
          <div className="item" style={{pointerEvents: "all"}} role="option" aria-checked="false" aria-selected="false">
            <span className="text">Parmi ceux à lire</span>
          </div>
        </div>
      </div>
      <button className="button" type="button" onClick={props.onClick}>Rechercher</button>
    </div>
  );
};

export default InputSearchWithOptions;
