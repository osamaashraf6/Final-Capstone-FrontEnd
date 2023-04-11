/* eslint camelcase: "off" */
import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector, useDispatch } from 'react-redux';
import ClassCard from './classCards';
import '../../assets/styles/Class.css';
import { getSwim_classes } from '../../redux/swim_class/swim_class';

const Swim_classes = () => {
  const { swim_classes } = useSelector((state) => state.swim_classes);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(getSwim_classes()), 3000);
  }, [dispatch]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const screen = (
    <>
      <section className="swim_classes-section">
        <div className="class-title">
          <h1>new classes</h1>
          <p>Select the class you want to book.</p>
        </div>
        <Carousel
          autoPlay
          keyBoardControl
          responsive={responsive}
          showDots
          infinite
          removeArrowOnDeviceType={['tablet', 'mobile']}
        >
          {swim_classes.map((swim_class) => (
            <div key={swim_classes.id} className="class-card">
              <ClassCard
                image={swim_class.image}
                name={swim_class.class_name}
                location={swim_class.location}
                fee={swim_class.fee}
                booked={swim_class.booked}
              />
            </div>
          ))}
        </Carousel>
      </section>
    </>
  );

  return screen;
};

export default Swim_classes;
