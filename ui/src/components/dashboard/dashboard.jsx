
import { useDispatch, useSelector } from "react-redux";
import { KmiCard } from "./kmi-card"
import { useEffect } from "react";
import { getMetricsForTiles } from "../../redux/reducers/dashboardReducer";
import { Spinner } from "../reusables/spinner";

export const DashBoard = () => {

    const dispatch = useDispatch();
    const { kpiMetrics, isLoading, errorMessage } = useSelector((state) => state.dashboard);

    useEffect(() => {
        onPageLoad();
    }, [])


    const onPageLoad = () => {
        dispatch(getMetricsForTiles()).unwrap()
            .then((data) => {
                console.log("data received", data);

            })
            .catch(err => {
                console.log("error");

            })
    }
    return (
        <>
            <div className="container">
                {isLoading ? <Spinner /> :
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {kpiMetrics.map((eachData) => {
                            return (
                                <div className="col-xl-3 col-sm-6 col-12">
                                    <KmiCard title={eachData?.title}
                                        magnitude={eachData?.magnitude} drillDown={eachData.drillDown} />
                                </div>
                            )
                        })}
                    </div>}
            </div>
        </>
    )
}
