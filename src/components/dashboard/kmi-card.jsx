import { icons } from "../../common/icons"

export const KmiCard = ({title, magnitude, drillDown}) => {
    return(
        <>
        <div class="card">
            <div class="card-content">
                <div class="card-header"></div>
                <div class="card-body">
                    <div class="media">
                        <div className="justify-elements"></div>
                            <h6>{title}</h6>
                        </div>
                        <div className="justify-elements">
                            <h3>{magnitude}</h3>
                            <img src={icons.bookStack} alt="book-stack" />
                        </div>

              </div>
            </div>
          </div>
        </>
    )
}
