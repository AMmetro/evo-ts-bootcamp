import React from 'react';
import {sort} from "./utils/Sort";
import Chart from "./components/Chart/Chart";
import './App.css';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";

export type arrayType = number[]
export type stateType = { arr: arrayType, status: string, iteration: number}


class App extends React.Component<{}, stateType> {

    constructor(props: any) {
        super(props);

        this.state = {arr: [], status: "Not solved", iteration: 20};
    }

    componentDidMount = () => {
        this.generateArray()
    }

    generateArray = (): void => {
        let randomArray: arrayType = []
        for (let i = 0; i < 20; i++) {
            randomArray.push(Math.round(Math.random() * 200))
        }
        this.setState({arr: randomArray})
        this.setState({iteration: 20})
    }

        startSort = () => {
        this.setState({status: "in progress"})
        let copyArray = [...this.state.arr]

        let sortedArr: arrayType = []
        let timerId = setInterval(() => {
            intervalSort()
        }, 300)


        let intervalSort = ():void => {
            sortedArr = sort(copyArray)

            let currentIteration=this.state.iteration-1
            this.setState({arr: sortedArr})
            this.setState({iteration: currentIteration})

            if (currentIteration==0) {
                       clearTimeout(timerId);
                       this.setState({status: "Solved"})
            }
        }
    }


    render() {

        return (
            <div className="App">
                <Header/>

                <Chart randomArray={this.state.arr}/>

                <Footer startSort={this.startSort}
                        newSet={this.generateArray}
                        status={this.state.status}/>
            </div>
        );
    }
}

export default App;
