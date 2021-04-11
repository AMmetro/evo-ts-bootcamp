import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import "./Footer.css"

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type StartSetButtonPropsType = DefaultButtonPropsType & {
    startSort?: () => void,
    newSet?: () => void,
    status?:string
}

class Footer extends React.Component<StartSetButtonPropsType> {

    render() {

     return (

            <div className="footerWrapper">
                <span className={"InfoStatus"}>{this.props.status}</span>
                <button className={"button"} onClick={this.props.startSort}>Start sort</button>
                <button className={"button"} onClick={this.props.newSet}>New Set</button>
            </div>
      );
    }
  }


  export default Footer;


