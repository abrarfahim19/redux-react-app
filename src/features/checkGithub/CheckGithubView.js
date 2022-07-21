import React from 'react';

const CheckGithubView = () => {
    const handleSubmit = (event) => {
        console.log("hello world");
        event.preventDefault();
    };
    return (
        <div>
            <div class="github-card" data-github="abrarfahim19/" data-width="400" data-height="" data-theme="default">
            </div>
            <div class="github-widget" data-username="surbhioberoi"></div>
            <h2>Check Github Profile</h2>
            <form onSubmit={handleSubmit} action="">
                <input type="text" onChange={(e)=>console.log(e.target.value)} />
                <button type='submit' > Check Name</button>
            </form>
        </div>
    );
};

export default CheckGithubView;