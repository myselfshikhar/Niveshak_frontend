import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/IMG20221227122052.jpg" alt="founder images"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Shikhar Katiyar</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
           Shikhar, founded Niveshek with the vision to solve the very challenges I encountered during my own journey as an investor. What started as a personal initiative has now grown into a platform that’s redefining how India approaches trading and investment.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          {/* <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Team;