export const CritiqueCard = ({ bookName, author, numberOfCritique, coverImage, price }) => {
    return (
        <div className="col-md-4 mb-1">
            <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-3">
                            <img src="https://covers.openlibrary.org/b/id/7418786-M.jpg"
                                alt="Product" width={'100%'} height={'100%'} />
                        </div>
                        <div className="col-9">
                            <h6 className="card-title">{bookName}</h6>
                            <p className="card-text">
                                <small className="text-body-secondary">
                                    By {author} | &#8377; {price}
                                </small>
                            </p>
                            <small className="text-body-secondary"><i>Number of reviews - {numberOfCritique}</i>  </small>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}