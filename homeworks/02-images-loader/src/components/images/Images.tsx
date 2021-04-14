import React from 'react';
import sss from '../images/Images.module.css'

type ImagesProps = { imgPride?: any }


function Images(props: ImagesProps) {


    return (
        <div className={sss.imgContainer}>
            {

                props.imgPride.results &&
                //@ts-ignore
                props.imgPride.results.map(el =>
                    // <div className="image_box">
                    <img className={sss.image_item} src={el.links.download}/>
                // </div>
                )
            }
        </div>
    );
}

export default Images;
