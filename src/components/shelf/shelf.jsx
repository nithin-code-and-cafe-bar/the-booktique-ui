import { BookDetails } from "./book-details";
import { ShelfAbstract } from "./shelf-abstract";

export const Shelf = () => {

    const reviews = [
                    {
                        abstract: "Lorem Ipsum",
                        summary: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
                        reviewedDate: "2024-12-30"
                    }

                ]

    return(
    <>
        <div className="container">
            <div className="row">
                <div className="col-5">
                    {[1,2,3,4,5].map((eachData)=>{
                        return(
                            <ShelfAbstract bookName={'The Fault in Our Stars'}
                            author={'John Green'} category={'Novel'}
                            language={'English'} price={300.00}
                            rating={4.2} favorite={true} />
                        )
                    })}
                </div>
                <div className="col-7">
                    <BookDetails author={'John Green'} bookname={'The Fault In Our Stars'}
                    category={'Novel'} dateOFPurchase={'2024-06-06'} genre={['Romance']}
                    language={'English'} pages={300} price={300.00} pagesProgressed={1}
                    rating={4.5} readStatus={'Yet to start'} thoughts={reviews}/>
                </div>
            </div>
        </div>
    </>
    );
}
