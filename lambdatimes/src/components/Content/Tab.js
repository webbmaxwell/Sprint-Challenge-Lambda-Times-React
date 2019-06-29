import React from 'react';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.tab = this.tab.bind(this);
  }
  let className = 'tab';
  if (props.tab === props.selectedTab) {
    className += ' menu-active';
  };
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab'*/

  selectTabHandler(e) {
    e.preventDefault();

  };

  render() {
    return (
      <div
        className={className}
        onClick={selectTabHandler}
          /* Replace this dummy click handler function with your selectTabHandler function from props
           you'll need to pass the `tab` in as an argument to this handler. */
      >
        {props.tab.toUpperCase()}
      </div>
    )
  };
};

// Make sure you include PropTypes on your props.

export default Tab;
