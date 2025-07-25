import React from "react";

function Universe() {

      const Frontend_link =
    window.location.hostname === "localhost"
      ? "http://localhost:3000"
      : "https://niveshak-frontend.vercel.app/";

  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" style={{ height: "70px", width: "200px" }} />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{ height: "70px", width: "200px%" }} />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" style={{ height: "70px", width: "150px%" }} />
          <p className="text-small text-muted">Option trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" style={{ height: "70px", width: "200px%" }} />
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" style={{ height: "70px", width: "200px%" }} />
          <p className="text-small text-muted">Bond trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{ height: "70px", width: "200px%" }} />
          <p className="text-small text-muted">Insurance platform</p>
        </div>
        {/* <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button> */}
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto", display: "block" }}
          onClick={() => window.location.href = `${Frontend_link}/Signup`}
        >
          Signup Now
        </button>

      </div>
    </div>
  );
}

export default Universe;