import React from 'react';
function Hero() {

        const Frontend_link =
    window.location.hostname === "localhost"
      ? "http://localhost:3000"
      : "https://niveshak-frontend.vercel.app/";

    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Landing page banner' className='mb-5' />
                <h1 className="mt-5">Invest in everything</h1>
                <p>
                    Online platform to invest in stocks, derivatives, mutual funds, and
                    more
                </p>
                <button
                    className="p-2 btn btn-primary fs-5 mb-5"
                    style={{ width: "20%", margin: "0 auto", display: "block" }}
                    onClick={() => window.location.href = `${Frontend_link}/Signup`}
                >
                    Signup Now
                </button>

                {/* btn-primary is used to make this colr blue button  */}
            </div>
        </div>
    );
}

export default Hero;