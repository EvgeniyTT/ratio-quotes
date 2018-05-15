import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchQuotes } from '../../utils/services';
import Quote from '../Quote';

export class _Quotes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.fetchQuotes();
  }
 
  render() {
    const { favorites, quotes } = this.props;

    return (
      [<div key="quotes" className="quotes">
        {quotes.map(quote => <Quote key={quote.ID} quote={quote} />)}
      </div>,
      <div key="favorites" className="favorites">
        {favorites.map(quote => <Quote key={quote.ID} quote={{...quote, isFavorite: true}} />)}
      </div>]
    );
  }
}

_Quotes.propTypes = {
  favorites: PropTypes.array,
  quotes: PropTypes.array
};

_Quotes.defaultProps = {
  favorites: [],
  quotes: []
};

export const mapStateToProps = state => ({
  favorites: state.favorites,
  quotes: state.quotes
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  fetchQuotes
}, dispatch)

const Quotes = connect(mapStateToProps, mapDispatchToProps)(_Quotes);

export default Quotes;

