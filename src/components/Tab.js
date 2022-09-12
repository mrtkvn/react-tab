import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
    
  
}

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  setFocus(){
    //this.buttonRef.current.focus();
    
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
        id,
        tabIndex,
        focus
      },
      buttonRef
    } = this;

    let className = 'sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider';


    if (activeTab === id) {
      className = 'sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-blue-600 text-blue-600 tracking-wider rounded-t';
        if(focus){
            
            this.setFocus()
        }
    }



    return (
      <button role="tab" 
        className={className}
        onClick={onClick}
        aria-selected={activeTab === id}
        aria-controls={id}
        id={id}
        tabIndex={tabIndex}
        ref={buttonRef}
      >
        {label}
      </button>
    );
  }
}

export default Tab;