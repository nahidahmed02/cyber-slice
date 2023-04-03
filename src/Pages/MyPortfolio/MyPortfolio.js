import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='mx-8 lg:mx-20'>
            <h2 className='text-center underline text-3xl font-bold font-serif text-amber-500 my-6'>My Portfolio</h2>
            <div className="card lg:mx-64 bg-neutral text-neutral-content">
                <div className="card-body px-4 lg:px-32">
                    <h2>Name: Nahid Ahmed</h2>
                    <p>Email: ahmednahid1995@gmail.com</p>
                    <br />

                    <p>Educational Background:</p>
                    <p className='ml-6'>Bachelor of Social Science (BSS)</p>
                    <p className='ml-6'>Institution: Tejgaon College</p>
                    <br />
                    <p className='ml-6'>Higher Secondary Certificate (HSC)</p>
                    <p className='ml-6'>Institution: National Ideal College</p>
                    <br />
                    <p className='ml-6'>Secondary School Certificate (SSC)</p>
                    <p className='ml-6'>Institution: Chhagalnaiya Pilot High School</p>


                    <p className='mt-6'>Skills:</p>
                    <ul>
                        <li className='ml-6'>JavaScript</li>
                        <li className='ml-6'>React</li>
                        <li className='ml-6'>MongoDB</li>
                        <li className='ml-6'>ExpressJS</li>
                        <li className='ml-6'>Firebase</li>
                        <li className='ml-6'>Bootstrap</li>
                        <li className='ml-6'>TailwindCSS</li>
                        <li className='ml-6'>DaisyUI</li>
                    </ul>

                    <br />
                    <p>My Projects Link</p>
                    <a href="https://markdown-the-thought.web.app/" className='ml-6 italic text-white'>Markdown The Thought</a>
                    <a href="https://the-dressing-room.web.app/" className='ml-6 italic text-white'>The Dressing Room</a>
                    <a href="https://ornate-panda-c5e694.netlify.app/" className='ml-6 italic text-white'>Face Mask Review</a>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;