import React from 'react';
import Search from './components/SearchBox/Search';
import Images from "./components/images/Images";
import {imagesAPI} from "../src/API/ImagesAPI"
import './App.css';


export type stateType = {searchTxt: string, imgPride:any }

class App extends React.Component<{}, stateType> {

    constructor(props: any) {
        super(props);
        this.state = {searchTxt: "car", imgPride:[]};
         }

    componentDidMount = () => {
    }

      setInputTxt = (inputTxt:string)=>{
       this.setState({searchTxt: inputTxt})
    }

     submitSearch =()=>{
          imagesAPI.getPhotos(this.state.searchTxt)
              .then((response)=>
                  this.setState({imgPride: response.data})
              )
         }



    render() {

           return (

            <div className="App">

                <header className={"header"}>
                    <Search
                    setInputTxt={this.setInputTxt}
                    searchTxt={this.state.searchTxt}
                    submitSearch={this.submitSearch}
                    />
                </header>

                <div className={"image_container"}>
                   <Images imgPride={this.state.imgPride} />
                </div>

            </div>
        );
    }
}

export default App;

