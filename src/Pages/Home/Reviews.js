import React from 'react';
import useReviews from '../../hooks/useReviews';
import Loading from '../Shared/Loading';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div className='lg:mx-20 mt-12 lg:mb-8' >
            <h2 className='text-center underline mb-6 text-3xl font-bold font-serif ' style={{ font: '#00214d' }}>Reviews</h2>
            <div className='' style={{ 'overflowY': 'scroll', 'height': '280px' }}>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr style={{ color: '#00214d' }}>
                                <th>SL</th>
                                <th>Name</th>
                                <th>Rating</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews?.length === 0 && <Loading></Loading>
                            }
                            {
                                reviews.map((review, index) => <tr key={review._id}>
                                    <th style={{ color: '#1b2d45' }}>{index + 1}</th>
                                    <td style={{ color: '#1b2d45' }}>{review.name}</td>
                                    <td style={{ color: '#1b2d45' }}>{review.rating}/5</td>
                                    <td style={{ color: '#1b2d45' }}>{review.feedback}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Reviews;