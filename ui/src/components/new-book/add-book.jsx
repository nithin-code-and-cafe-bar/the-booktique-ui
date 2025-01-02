export const AddNewBook = () => {

    const genres = ["Fantasy", "Science Fiction", "Romance", "Mystery", "Thriller", "Horror",
        "Historical Fiction", "Adventure", "Biography/Autobiography", "Self-Help",
        "History", "Memoir", "Science and Technology", "Travel", "Philosophy",
        "Business and Economics", "Health and Wellness", "Graphic Novels"
    ];

    const category = ["Novels", "Essays", "Poetery and Literature", "Philosophy"];
    const language = ["English", "Tamil", "Others"];


    return (
        <>
            <div className="container">
                <form action="submit">
                    <div className="row">
                        <div className="col">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="bookName" placeholder="The Origin" />
                                <label for="bookName">Book Name</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="author" placeholder="Dan Brown" />
                                <label for="author">Author</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" id="price" placeholder="399" />
                                <label for="price">Price</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-floating mb-3">
                                <select className="form-select" id="category" >
                                    {category.map((eachCategory) => {
                                        return (
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
                            <div className="form-floating mb-3">
                                <select className="form-select" id="language">
                                    {language.map((eachLanguage) => {
                                        return (
                                            <option value={eachLanguage}>{eachLanguage}</option>
                                        )
                                    })}
                                </select>
                                <label for="language">Language</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-floating mb-3">
                                <select className="form-select" id="genre">
                                    {genres.map((eachGenre) => {
                                        return (
                                            <option value={eachGenre}>{eachGenre}</option>
                                        )
                                    })}
                                </select>
                                <label for="genre">Genre</label>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary navy-background navy-border m-2">Submit</button>
                    <button className="btn btn-primary white-background white-border">Clear</button>

                </form>
            </div>
        </>
    )
}
