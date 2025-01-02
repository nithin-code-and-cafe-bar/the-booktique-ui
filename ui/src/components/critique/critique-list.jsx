import { CritiqueCard } from "./critique-card"

export const CritiqueList = () => {

    const critique = [
        {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10

        },
        {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10

        },
        {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10

        }, {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10

        },
        {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10

        },
        {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10

        }, {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10

        },
        {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10

        },
        {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10

        }, {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10

        }, {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10

        }, {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10

        }, {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10

        }
    ]
    const formattedData = [
        {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10
        },
        {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10
        },
        {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10
        },
        {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10
        },
        {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10
        },
        {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10
        },
        {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10
        },
        {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10
        },
        {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10
        },
        {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10
        },
        {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10
        },
        {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10
        },
        {
            "bookName": "The Fault in our stars",
            "coverUrl": "https://covers.openlibrary.org/b/id/7418786-L.jpg",
            "author": "John Green",
            "numberOfReviews": 10
        }
    ]
    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4 m-1">
                    {formattedData.map((eachCritique) => {
                        return (<CritiqueCard author={eachCritique.author} bookName={eachCritique.bookName}
                            coverUrl={eachCritique.coverUrl} price={399.00}
                            numberOfCritique={eachCritique.numberOfReviews} />
                        );
                    })}
                </div>
            </div>
        </>
    )
}