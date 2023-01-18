import React from 'react';
import quote from '../../assets/icons/quote.svg';
import person1 from '../../assets/images/people1.png';
import person2 from '../../assets/images/people2.png';
import person3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Will jack',
            review: 'They are really good at focusing on what customers need and require. You have a real instinct to understand our customers.',
            img: person1,
            location: 'California'
        },
        {
            _id: 2,
            name: 'Will jack',
            review: 'They are really good at focusing on what customers need and require. You have a real instinct to understand our customers.',
            img: person2,
            location: 'California'
        },
        {
            _id: 3,
            name: 'Will jack',
            review: 'They are really good at focusing on what customers need and require. You have a real instinct to understand our customers.',
            img: person3,
            location: 'California'
        },
    ]
    return (
        <section className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h2 className='text-3xl'>What oue Patients say</h2>
                </div>

                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;