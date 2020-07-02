'use strict';

const e = React.createElement;

class RegistratioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filled: false };
  }

  render() {
    if (this.state.filled) {
      return 'Registration was succesful ' + this.props.commentID;
    }

    return e(
      'button',
      { onClick: () => this.setState({ filled: true }) },
      'Fill'
    );
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.registration_form_container')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(
      e(RegistratioForm, { commentID: commentID }),
      domContainer
    );
  });