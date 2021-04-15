import React from 'react';
import Search from './components/SearchBox/Search';
import Images from "./components/images/Images";
import {imagesAPI} from "../src/API/ImagesAPI"
import './App.css';


interface incomImageArray {
    id: string;
    alt_description: string;
    width: number;
    height: number;
    urls: {
        [key: string]: string;
    };
}

type imgPride={
    id: string,
    src: string,
    alt: string,
    width: string,
    height: string}

type stateType = {searchTxt: string, imgPride:imgPride[] }


class App extends React.Component<{}, stateType> {


     state = {searchTxt: "", imgPride:[]};

      setInputTxt = (inputTxt:string)=>{
       this.setState({searchTxt: inputTxt})
    }

     submitSearch =()=>{
          imagesAPI.getPhotos(this.state.searchTxt)
          .then((data) => {

              if (data==undefined){ this.setState({imgPride:[]})}
              else {
                  const imgPride = data.map((image:incomImageArray) => ({
                      id: image.id,
                      src: image.urls.small,
                      alt: image.alt_description,
                      width: image.width,
                      height: image.height
                  }))
                  this.setState({imgPride: imgPride})
              }
          })
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

