import { useState } from "react";
import { icons } from "../../common/icons"
import { percentileCalculator } from "../../common/utilities"
import { Modal } from "../reusables/modal";
import { AddNewBook } from "../new-book/add-book";

export const BookDetails = ({bookname, author, pages, price, rating, genre, category,
    readStatus, dateOFPurchase, language, pagesProgressed, thoughts
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const switchModalVisibilityStatus = () => {
        setIsModalOpen(!isModalOpen)
    }
    return(
        <>
        <div className="row">
            <div className="col-md-6">
                <img src='https://covers.openlibrary.org/b/id/7418786-L.jpg'
                alt="Product Image" className="img-fluid border rounded" />
            </div>

            <div className="col-md-6">
                <h3 className="mb-3">{bookname}</h3>
                <p><small className="text-body-secondary"> <i>By {author}</i></small></p>

                <div className="d-flex align-items-center mb-3">
                    <span className="badge navy-background me-2">
                        <img src={icons.startWhite} alt="ratingStar" /> &nbsp; {rating}
                    </span>
                </div>
                <h4 className="text-dark">&#8377; {price}</h4>
                {genre?.map((eachGenre)=>{
                            return(<span className="badge navy-background">{eachGenre}</span>)})}
                <br/><br/>
                <div className="mb-4">
                    <h6>Key Details</h6>
                    <ul className="list-unstyled">
                        <li>
                            <img src={icons.category} alt="category" /> &nbsp; {category} &nbsp; | &nbsp;
                            <img src={icons.translate} alt="translate" /> &nbsp; {language} &nbsp; | &nbsp;
                            <img src={icons.calndarFillBlack} alt="dateOfPurchase" /> &nbsp; {dateOFPurchase}
                        </li>
                    </ul>
                </div>
                <hr />
                <div>
                    <p>
                        <img src={icons.progressIcon } alt="progressIcon" /> &nbsp; {readStatus} &nbsp; &nbsp;
                        <img src={icons.pageCount} alt="pageCount" /> &nbsp; {pagesProgressed + ' / ' + pages}
                    </p>

                    <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar" style={{width: percentileCalculator(pagesProgressed, pages) + '%'}}></div>
                    </div>
                </div>
                <hr/>
                <button className="btn btn-primary btn-lg w-100 mb-2 navy-background navy-border">Start Reading</button>
                <button className="btn btn-primary btn-lg w-100 mb-2 white-background navy-border">Add to Favorites</button>
            </div>
        </div>

        <div className="row mt-5">
            <div className="col">
                <h4>About the Book</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit, nunc non hendrerit lacinia, felis augue auctor elit, at egestas ligula sapien non lorem. Cras eget erat libero.</p>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col">
                <div className="justify-elements mb-3">
                    <h4>My Thoughts</h4>
                    <button className="btn btn-primary navy-background navy-border"
                    onClick={switchModalVisibilityStatus}>
                        <img src={icons.add} alt="new-critique" /> &nbsp;
                        Post new Critique
                    </button>
                </div>
                {thoughts?.map((eachData)=>{
                    return(
                   <div class="border rounded p-3 mb-3">
                        <strong>{eachData.abstract}</strong>
                        <p>{eachData.summary}</p>
                        <p><small className="text-body-secondary">
                                <i>Critiqued on {eachData.reviewedDate}</i>
                            </small>
                        </p>
                    </div>
                    )
                })}
            </div>
        </div>
        {isModalOpen && <Modal
            title="Modal Title"
            onClose={switchModalVisibilityStatus} ><AddNewBook /></Modal>
        }
        </>
    )
}
