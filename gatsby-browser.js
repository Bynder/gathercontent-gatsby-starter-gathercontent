const React = require('react');
const { Site } = require('./src/components/Site');

exports.wrapPageElement = ({ element, props }) => {
  return <Site {...props}>{element}</Site>
}