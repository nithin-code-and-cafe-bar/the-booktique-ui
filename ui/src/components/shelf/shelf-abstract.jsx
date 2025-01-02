import { icons } from "../../common/icons"

export const ShelfAbstract = ({ bookName, author, price, language, category, rating, favorite }) => {
    return (
        <>
            <div className="row m-1">
                <div className="col">
                    <div className="card h-100 abstract-card">
                        <div className="card-header"></div>
                        <div className="row p-2">
                            <div className="col-md-3">
                                <img src='https://covers.openlibrary.org/b/id/7418786-M.jpg' className="img-fluid rounded-start"
                                    alt="coverImagePlaceHolder" width={'120rem'} height={'240rem'}></img>
                            </div>
                            <div className="col-md-9">
                                <div className="card-body">
                                    <div className="justify-elements">
                                        <h5 className="card-title"> {bookName}</h5><br />
                                        <span>
                                            {favorite ? <img src={icons.heartNoFill} alt="liked" /> :
                                                <img src={icons.heartNoFill} alt="not-liked" />}
                                        </span>
                                    </div>
                                    <p><small className="text-body-secondary">{author}</small></p>
                                    <p className="card-text">&#8377; {price}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <img src={icons.star} alt="iconStar" /> &nbsp; {rating} &nbsp; | &nbsp;
                            <img src={icons.translate} alt="translate" /> &nbsp; {language} &nbsp; | &nbsp;
                            <img src={icons.category} alt="category" /> &nbsp; {category}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
