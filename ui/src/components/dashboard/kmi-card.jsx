import { useEffect, useState } from "react"
import { icons } from "../../common/icons"

export const KmiCard = ({ title, magnitude, drillDown }) => {
    return (
        <>
            <div className="card">
                <div className="card-content">
                    <div className="card-header"></div>
                    <div className="card-body">
                        <div className="media">
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
