
function RightSection({
    imageURL,
    productName,
    productDesription,
    learnMore,
}) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    <div>
                        {/* <a href={tryDemo}>Try Demo</a> */}
                        <a href={learnMore}>
                            Learn More
                        </a>
                    </div>
                    {/* <div className="mt-3">
                        <a href={googlePlay}>
                            <img src="media/images/googlePlayBadge.svg" />
                        </a>
                        <a href={appStore}>
                            <img
                                src="media/images/appstoreBadge.svg"
                                style={{ marginLeft: "50px" }}
                            />
                        </a>
                    </div> */}
                </div>
                <div className="col-6">
                    <img src={imageURL} />
                </div>

            </div>
        </div>
    );
}

export default RightSection;