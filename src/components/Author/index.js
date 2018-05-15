import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.css';

const _Author = props => {
  const { description, github, linkedIn, name, introduction, google } = props.author;

  return (
    <div className="author">
      <header class='masthead'>
        <p class='masthead-intro'>Hi I'm</p>
        <h1 class='masthead-heading'>{name}</h1>
      </header>
      <section class="introduction-section">
          <h1>Introduction</h1>
          <p>{introduction}</p>
      </section>
      <section class="questions-section">
          <h1>More About Me</h1>
          {description.map(more => (
            [<h2>{more[0]}</h2>,
            <p>{more[1]}</p>]
            ))
          }
          
      </section>
  
      <footer class="content-footer">
          <p>You can find me here:</p>
          <ul class="social">
              <li><a class="css-is-deranged" href={github} target="_blank">GitHub</a></li>
              <li><a class="css-is-deranged" href={linkedIn} target="_blank">LinkedIn</a></li>
              <li><a class="css-is-deranged" href={google} target="_blank">Google+</a></li>
          </ul>
      </footer>
    </div>
  );
}

_Author.propTypes = {
  author: PropTypes.shape({
    description: PropTypes.object,
    github: PropTypes.string,
    linkedIn: PropTypes.string,
    name: PropTypes.string,
  })
};

const mapStateToProps = state => ({
  author: state.author
});

const Author = connect(mapStateToProps)(_Author);
export default Author;
