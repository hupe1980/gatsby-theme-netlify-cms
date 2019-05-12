import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export const HTMLContent = ({ content }) => (
  <Typography dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ content }) => <Typography>{content}</Typography>;

Content.propTypes = {
  content: PropTypes.node
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
