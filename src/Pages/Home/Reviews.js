import React from 'react';
import useReviews from '../../hooks/useReviews';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div className='lg:mx-20 mt-12 lg:mb-8' >
            <h2 className='text-center underline mb-6 text-3xl font-bold font-serif text-amber-500'>Reviews</h2>
            <div className='' style={{ 'overflowY': 'scroll', 'height': '280px' }}>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Rating</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews.map((review, index) => <tr key={review._id}>
                                    <th>{index + 1}</th>
                                    <td>{review.name}</td>
                                    <td>{review.rating}/5</td>
                                    <td>{review.feedback}</td>
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