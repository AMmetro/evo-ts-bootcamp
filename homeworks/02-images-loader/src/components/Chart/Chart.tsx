import React from 'react';
import "./Chart.css"



 type props = {
  // randomArray: number[]
  // нужны какието дефолтные пропсы ??
     randomArray?: number[]
};

class Chart extends React.Component<props> {

    render() {

     return (
        <div className={"chartWrapper"}>
                  { this.props.randomArray &&
                                                 // number [] непотходит нужно стили добавить?
                   this.props.randomArray.map((element:any,i:number) => {
                    return (
                       <div
                          className="char"
                          style={{ height: element, bottom: element }}
                          >
                           <span style={{fontSize: 10}}>{element}</span>
                        </div>
                       ) } )}
        </div>
      );
    }
  }


  export default Chart;


