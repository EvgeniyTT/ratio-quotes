import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToFavorites, removeFromFavorites, updateFavoriteQuote } from '../../store/actions';
import './style.css';

const _Quote = props => {
  const { title, content, link, isFavorite } = props.quote;
  const quote = { ...props.quote };

  let emitChange = (e, quoteProp) => {
    quote[quoteProp] = e.target.innerHTML;
    props.updateFavoriteQuote(quote);
  }

  return (
    <div className={`quote${isFavorite ? ' quote--favorite' : ''}`}>
      <blockquote
        cite={link}
        className="quotation"
        contentEditable={!!isFavorite}
        dangerouslySetInnerHTML={{__html: content}}
        onBlur={e => { emitChange(e, 'content') }}
        suppressContentEditableWarning
      ></blockquote>
      <div
        className="author"
        contentEditable={!!isFavorite}
        onBlur={e => { emitChange(e, 'title') }}
        suppressContentEditableWarning
      >{title}</div>
      {isFavorite
        ? <button onClick={() => { props.removeFromFavorites(props.quote); } }>Remove from favorites</button>
        : <button onClick={() => { props.addToFavorites(props.quote); } }>Add to favorites</button>
      }
    </div>
  );
}

_Quote.propTypes = {
  quote: PropTypes.shape({
    content: PropTypes.string,
    ID: PropTypes.number,
    link: PropTypes.string,
    title: PropTypes.string
  })
};

export const mapDispatchToProps = dispatch => bindActionCreators({
  addToFavorites,
  removeFromFavorites,
  updateFavoriteQuote
}, dispatch)

const Quote = connect(null, mapDispatchToProps)(_Quote);
export default Quote;
