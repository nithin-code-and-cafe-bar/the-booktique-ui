import { icons } from "../../common/icons"

export const ShelfAbstract = ({bookName, author, price, language, category, rating, favorite}) => {
    return (
        <>
        <div className="row m-1">
            <div class="col">
                <div class="card h-100 abstract-card">
                    <div class="card-header"></div>
                    <div className="row p-2">
                        <div className="col-md-3">
                            <img src='https://covers.openlibrary.org/b/id/7418786-M.jpg' class="img-fluid rounded-start"
                            alt="coverImagePlaceHolder" width={'120rem'} height={'240rem'}></img>
                        </div>
                        <div className="col-md-9">
                            <div class="card-body">
                                <div className="justify-elements">
                                    <h5 class="card-title">
                                        {bookName}
                                    </h5>
                                    <p>
                                        {favorite ? <img src={icons.heartNoFill} alt="liked" /> :
                                        <img src={icons.heartNoFill} alt="not-liked" />}
                                    </p>
                                </div>
                            <p><small class="text-body-secondary">{author}</small></p>
                            <p class="card-text">&#8377; {price}</p>
                            <p class="card-text">
                                <img src={icons.star} alt="iconStar" /> &nbsp; {rating} &nbsp; | &nbsp;
                                <img src={icons.translate} alt="translate" /> &nbsp; {language} &nbsp; | &nbsp;
                                <img src={icons.category} alt="category" /> &nbsp; {category}
                            </p>
                    </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        </>
    )
}
