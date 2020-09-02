import React from 'react';
import AliceCarousel from 'react-alice-carousel';

import image1 from '../../../public/assets/images/real_image.jpg';
import image2 from '../../../public/assets/images/real_image2.jpg';
import image6 from '../../../public/assets/images/image1.png';

import image3 from '../../../public/assets/images/image3.png';

const imagesObj = {
  image1: '../../../public/assets/images/real_image.jpg',
  image2: '../../../public/assets/images/real_image2.jpg',
  image3: '../../../public/assets/images/image1.png',
  image3: '../../../public/assets/images/image3.png',
};

const Slider = (props) => {
  const { mainImg } = props;

  // console.log('ALLIMAGES', allImages)

  // const mapImages = (imagesObj) => (
  //   imagesObj.map((item) => (
  //           console.log('ITEM IMG', item),
  //     <div className="slider__img-container" >
  //       <img src={item} className="slider__img" />
  //     </div>

  //   ))
  // )

  return (

    <AliceCarousel>

      <div className="slider__img-container">
        <img src={mainImg} className="slider__img" />
      </div>
      <div className="slider__img-container">
        <img src={mainImg} className="slider__img" />
      </div>

      {/* {
       allImages && mapImages()
      } */}

    </AliceCarousel>
  );
};

export default Slider;
