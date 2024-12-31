export const AddNewBook = () => {

    const genres = ["Fantasy", "Science Fiction", "Romance", "Mystery", "Thriller", "Horror",
        "Historical Fiction", "Adventure","Biography/Autobiography", "Self-Help",
        "History", "Memoir", "Science and Technology", "Travel", "Philosophy",
        "Business and Economics", "Health and Wellness", "Graphic Novels"
    ];

    const category = ["Novels", "Essays", "Poetery and Literature", "Philosophy"];
    const language = ["English", "Tamil", "Others"];


    return (
        <>
            <div className="row">
                <div className="col">
                     <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="bookName" placeholder="The Origin" />
                        <label for="bookName">Book Name</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="author" placeholder="Dan Brown" />
                        <label for="author">Author</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="form-floating">
                        <input type="number" className="form-control" id="price" placeholder="399" />
                        <label for="price">Price</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-floating">
                        <select className="form-control" id="category" >
                            <option selected disabled>Choose a Category</option>
                            {category.map((eachCategory)=>{
                                return(
                                    <option value={eachCategory}>{eachCategory}</option>
                                )
                            })}
                        </select>
                        <label for="category">Category</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="form-floating">
                        <select className="form-control" id="language" >
                            <option selected disabled>Choose a Language</option>
                            {language.map((eachLanguage)=>{
                                return(
                                    <option value={eachLanguage}>{eachLanguage}</option>
                                )
                            })}
                        </select>
                        <label for="language">Language</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-floating">
                        <select multiple className="form-control" id="genres" >
                            <option selected disabled>Select applicable Genres</option>
                            {genres.map((eachGenre)=>{
                                return(
                                    <option value={eachGenre}>{eachGenre}</option>
                                )
                            })}
                        </select>
                        <label for="genres">Genres</label>
                    </div>
                </div>
            </div>
        </>
    )
}
