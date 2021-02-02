import React,{ Component } from "react";


let dialogStyles={
    width:'1000px',
    height:'500px',
   

    position:'fixed',
    left:'50%',
    top:'50%',
    transform:'translate(-50%,-50%)',
    zIndex:'999',
    backgroundColor:'#eee',
    padding:'10px 20px 40px',
    borderRadius:'20px',
    display:'flex'
  
};

let dialogCloseButtonStyles={
    
    border:'none',
    width:'30px',
    height:'30px',
    
    alignSelf:'flex-start'
};





class Dialog extends Component{
    render(){
        let dialog =(
              <div style={dialogStyles}>
                  <button style={dialogCloseButtonStyles} onClick={this.props.onClose}>❌</button>
                <div>{this.props.children}</div>
              </div>  
            );
            if(! this.props.isOpen){
                dialog=null;
            
    }
    return (
        <div>
            {dialog}
        </div>
    );
    }
}
export default Dialog;