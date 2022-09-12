import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);
    this.tabRef = React.createRef();
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.state = {
      activeTab: this.props.children[0].props.id,
      tabPanelIndex: -1,
      buttonTabIndex: []
    };
   
  }



  handleKeyDown(e) {
    const { activeTab } = this.state
    let value = activeTab
    if (e.keyCode === 39) {
        if(this.props.children.length!==activeTab){
             value =Number(activeTab)+1       
             this.setState({buttonTabIndex:0 })
         
        }
        
    } else if (e.keyCode === 37 ) {//left
        if(this.props.children.length===activeTab){
            value =Number(activeTab)-1
            this.setState({buttonTabIndex:0 })
            
         
       }
    }else if (e.keyCode===9){
        this.setState({buttonTabIndex:-1,tabPanelIndex:0 })

    }
    this.onClickTabItem(value)
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab ,tabPanelIndex },
    
    } = this;

    return (
      <div className=" container px-5 py-7 mx-auto flex flex-wrap flex-col">
        <div
          role={"tablist"}
          aria-labelledby={"tablist"}
          className=" flex mx-auto flex-wrap mb-20"
         
        >
          {children.map((child,index) => {
            const { label, id } = child.props;

            return (
                <div   onKeyDown={ this.handleKeyDown }>
              <Tab
                activeTab={activeTab}
                key={index}
                label={label}
                onClick={() => onClickTabItem(id)}
                id={id}
                tabIndex={activeTab===id ?  0 : -1}
                ref={this.tabRef}
                focus={activeTab===id && tabPanelIndex===-1 ? true :false}
              />
              </div>
            );
          })}
        </div>

        {children.map((child) => {
          if (child.props.id !== activeTab) return undefined;
          return (
            <div className="flex flex-col text-center w-ful" role={"tabpanel"} tabIndex={tabPanelIndex} id={child.props.id} aria-labelledby={child.props.id}>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                {child.props.children}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Tabs;
