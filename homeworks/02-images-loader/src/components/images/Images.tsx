import React from 'react';
import sss from '../images/Images.module.css'

type imgPride={
    id: string,
    src: string,
    alt: string,
    width: string,
    height: string}

    type ImagesProps = { imgPride?: imgPride}

function Images(props: ImagesProps) {


    return (
        <div className={sss.image_box}>
            {
                props.imgPride &&
                props.imgPride.map(el =>
                    <div id={el.id}>
                    <img className={sss.image_item}
                          src={el.src}
                          alt={el.alt}
                     />
                    </div>
                )
            }
        </div>
    );
}

export default Images;
