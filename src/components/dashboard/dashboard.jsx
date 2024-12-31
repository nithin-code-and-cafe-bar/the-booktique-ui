
import { KmiCard } from "./kmi-card"

export const DashBoard = () => {

    const data = `[
        {
            "order": 1,
            "title": "Total Number Of Books",
            "drillDown":{
                "isApplicable": false,
                "endPoint": null
            },
            "magnitude": 1000,
            "isIconAvailable": true,
            "iconIdentifier": "totalNumberOfBooks"
        },
        {
            "order": 2,
            "title": "Genres",
            "drillDown":{
                "isApplicable": true,
                "endPoint": "/genre-summary"
            },
            "magnitude": 10,
            "isIconAvailable": true,
            "iconIdentifier": "genreSummary"
        },{
            "order": 3,
            "title": "Categories",
            "drillDown":{
                "isApplicable": true,
                "endPoint": "/categories-summary"
            },
            "magnitude": 5,
            "isIconAvailable": true,
            "iconIdentifier": "categoriesSummary"
        },{
            "order": 4,
            "title": "Languages",
            "drillDown":{
                "isApplicable": true,
                "endPoint": "/languages-summary"
            },
            "magnitude": 3,
            "isIconAvailable": true,
            "iconIdentifier": "languagesSummary"
        },{
            "order": 5,
            "title": "Number of users",
            "drillDown":{
                "isApplicable": true,
                "endPoint": "/users-summary"
            },
            "magnitude": 50,
            "isIconAvailable": true,
            "iconIdentifier": "usersSummary"
        },{
            "order": 6,
            "title": "Number of Reviews",
            "drillDown":{
                "isApplicable": false,
                "endPoint": null
            },
            "magnitude": 100,
            "isIconAvailable": true,
            "iconIdentifier": "numberOfReviews"
        },{
            "order": 7,
            "title": "Number of Rented Books",
            "drillDown":{
                "isApplicable": false,
                "endPoint": null
            },
            "magnitude": 34,
            "isIconAvailable": true,
            "iconIdentifier": "numberOfRentedBooks"
        }
    ]`

    const formattedData = JSON.parse(data);
    return(
        <>
            <div className="container">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {formattedData.map((eachData)=>{
                        return(
                            <div class="col-xl-3 col-sm-6 col-12">
                                <KmiCard title={eachData?.title}
                                magnitude={eachData?.magnitude} drillDown={eachData.drillDown}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
