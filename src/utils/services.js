import { receiveQuotes } from '../store/actions';
import fetchJsonp from 'fetch-jsonp';

export const fetchQuotes = () => dispatch => 
   fetchJsonp(
     'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=10',
     { jsonpCallback: '_jsonp' }
    )
    .then(res => res.json())
    .then(quotes => dispatch(receiveQuotes(quotes)))
