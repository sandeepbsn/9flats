import React from "react"
import { Card, CardDeck } from 'react-bootstrap'
import styles from './LandingPage.module.css'

function TopCities() {
    return (
        <div className="container top-cities mb-5 mt-3" >
            <h2 className="mb-3">Our Top-Cities</h2>
            <div className="row">
                <div className={`col-6 col-md-3 mb-4 ${styles.topCity}`} id="tc-berlin-germany" role="tabpanel">
                    <div className="rounded border z-depth-1 overflow-hidden">
                        <a href="/berlin-germany">
                            <div className={`${styles.image}`}
                                data-bg="url(https://images.9flats.com/geo_locator_photos/photos/15-1552991527/small.jpg)"
                                data-was-processed="true"
                                style={{ backgroundImage: "url(" + "https://images.9flats.com/geo_locator_photos/photos/15-1552991527/small.jpg" + ")" }}>
                            </div>
                        </a>
                        <h2 className="h4 px-2">
                            <a title="Berlin" href="/berlin-germany">Berlin</a>
                        </h2>
                    </div>
                </div>
                <div className={`col-6 col-md-3 mb-4 ${styles.topCity}`} id="tc-amsterdam-netherlands" role="tabpanel">
                    <div className="rounded border z-depth-1 overflow-hidden">
                        <a href="/amsterdam-netherlands">
                            <div className={`${styles.image}`}
                                data-bg="url(https://images.9flats.com/geo_locator_photos/photos/19-1552991863/small.jpg)"
                                data-was-processed="true"
                                style={{ backgroundImage: `url("https://images.9flats.com/geo_locator_photos/photos/19-1552991863/small.jpg")` }}>
                            </div>
                        </a>
                        <h2 className="h4 px-2">
                            <a title="Amsterdam" href="/amsterdam-netherlands">Amsterdam</a>
                        </h2>
                    </div>
                </div>
                <div className={`col-6 col-md-3 mb-4 ${styles.topCity}`} id="tc-london-united_kingdom" role="tabpanel">
                    <div className="rounded border z-depth-1 overflow-hidden">
                        <a href="/london-united_kingdom">
                            <div className={`${styles.image}`}
                                data-bg="url(https://images.9flats.com/geo_locator_photos/photos/12-1552991296/small.jpg)"
                                data-was-processed="true"
                                style={{ backgroundImage: `url(https://images.9flats.com/geo_locator_photos/photos/12-1552991296/small.jpg)` }}>
                            </div>
                        </a>
                        <h2 className="h4 px-2">
                            <a title="London" href="/london-united_kingdom">London</a>
                        </h2>
                    </div>
                </div>
                <div className={`col-6 col-md-3 mb-4 ${styles.topCity}`} id="tc-brussels-belgium" role="tabpanel">
                    <div className="rounded border z-depth-1 overflow-hidden">
                        <a href="/brussels-belgium">
                            <div className={`${styles.image}`}
                                data-bg="url(https://images.9flats.com/geo_locator_photos/photos/23-1552992205/small.jpg)"
                                data-was-processed="true"
                                style={{ backgroundImage: `url(https://images.9flats.com/geo_locator_photos/photos/23-1552992205/small.jpg)` }}>
                            </div>
                        </a>
                        <h2 className="h4 px-2">
                            <a title="Brussels" href="/brussels-belgium">Brussels</a>
                        </h2>
                    </div>
                </div>
                <div className={`col-6 col-md-3 mb-4 ${styles.topCity}`} id="tc-dubai-united_arab_emirates" role="tabpanel">
                    <div className="rounded border z-depth-1 overflow-hidden">
                        <a href="/dubai-united_arab_emirates">
                            <div className={`${styles.image}`}
                                data-bg="url(https://images.9flats.com/geo_locator_photos/photos/7-1552992258/small.jpg)"
                                data-was-processed="true"
                                style={{ backgroundImage: `url("https://images.9flats.com/geo_locator_photos/photos/7-1552992258/small.jpg")` }}>
                            </div>
                        </a>
                        <h2 className="h4 px-2">
                            <a title="Dubai" href="/dubai-united_arab_emirates">Dubai</a>
                        </h2>
                    </div>
                </div>
                <div className={`col-6 col-md-3 mb-4 ${styles.topCity}`} id="tc-barcelona-spain" role="tabpanel">
                    <div className="rounded border z-depth-1 overflow-hidden">
                        <a href="/barcelona-spain">
                            <div className={`${styles.image}`}
                                data-bg="url(https://images.9flats.com/geo_locator_photos/photos/20-1552991880/small.jpg)"
                                data-was-processed="true"
                                style={{ backgroundImage: `url(https://images.9flats.com/geo_locator_photos/photos/20-1552991880/small.jpg)` }}>
                            </div>
                        </a>
                        <h2 className="h4 px-2">
                            <a title="Barcelona" href="/barcelona-spain">Barcelona</a>
                        </h2>
                    </div>
                </div>
                <div className={`col-6 col-md-3 mb-4 ${styles.topCity}`} id="tc-munich-germany" role="tabpanel">
                    <div className="rounded border z-depth-1 overflow-hidden">
                        <a href="/munich-germany">
                            <div className={`${styles.image}`}
                                data-bg="url(https://images.9flats.com/geo_locator_photos/photos/17-1552991676/small.jpg)"
                                data-was-processed="true"
                                style={{ backgroundImage: `url("https://images.9flats.com/geo_locator_photos/photos/17-1552991676/small.jpg")` }}>
                            </div
                            ></a>
                        <h2 className="h4 px-2">
                            <a title="Munich" href="/munich-germany">Munich</a>
                        </h2>
                    </div>
                </div>
                <div className={`col-6 col-md-3 mb-4 ${styles.topCity}`} id="tc-paris-france" role="tabpanel">
                    <div className="rounded border z-depth-1 overflow-hidden">
                        <a href="/paris-france">
                            <div className={`${styles.image}`}
                                data-bg="url(https://images.9flats.com/geo_locator_photos/photos/14-1552991516/small.jpg)"
                                data-was-processed="true"
                                style={{ backgroundImage: `url("https://images.9flats.com/geo_locator_photos/photos/14-1552991516/small.jpg` }}>
                            </div>
                        </a>
                        <h2 className="h4 px-2">
                            <a title="Paris" href="/paris-france">Paris</a>
                        </h2>
                    </div>
                </div>
                <div className={`col-6 col-md-3 mb-4 ${styles.topCity}`} id="tc-madrid-spain" role="tabpanel">
                    <div className="rounded border z-depth-1 overflow-hidden">
                        <a href="/madrid-spain">
                            <div className={`${styles.image}`}
                                data-bg="url(https://images.9flats.com/geo_locator_photos/photos/21-1552991908/small.jpg)"
                                data-was-processed="true"
                                style={{ backgroundImage: `url("https://images.9flats.com/geo_locator_photos/photos/21-1552991908/small.jpg")` }}>
                            </div>
                        </a>
                        <h2 className="h4 px-2">
                            <a title="Madrid" href="/madrid-spain">Madrid</a>
                        </h2>
                    </div>
                </div>
                <div className={`col-6 col-md-3 mb-4 ${styles.topCity}`} id="tc-new_york_city-new_york" role="tabpanel">
                    <div className="rounded border z-depth-1 overflow-hidden">
                        <a href="/new_york_city-new_york">
                            <div className={`${styles.image}`}
                                data-bg="url(https://images.9flats.com/geo_locator_photos/photos/25-1552992428/small.jpg)"
                                data-was-processed="true"
                                style={{ backgroundImage: `url("https://images.9flats.com/geo_locator_photos/photos/25-1552992428/small.jpg")` }}>
                            </div>
                        </a>
                        <h2 className="h4 px-2">
                            <a title="New York City" href="/new_york_city-new_york">New York City</a>
                        </h2>
                    </div>
                </div>
                <div className={`col-6 col-md-3 mb-4 ${styles.topCity}`} id="tc-vienna-austria" role="tabpanel">
                    <div className="rounded border z-depth-1 overflow-hidden">
                        <a href="/vienna-austria">
                            <div className={`${styles.image}`}
                                data-bg="url(https://images.9flats.com/geo_locator_photos/photos/13-1552991353/small.jpg)"
                                data-was-processed="true"
                                style={{ backgroundImage: `url("https://images.9flats.com/geo_locator_photos/photos/13-1552991353/small.jpg")` }}>
                            </div>
                        </a>
                        <h2 className="h4 px-2">
                            <a title="Vienna" href="/vienna-austria">Vienna</a>
                        </h2>
                    </div>
                </div>
                <div className={`col-6 col-md-3 mb-4 ${styles.topCity}`} id="tc-miami-florida" role="tabpanel">
                    <div className="rounded border z-depth-1 overflow-hidden">
                        <a href="/miami-florida">
                            <div className={`${styles.image}`}
                                data-bg="url(https://images.9flats.com/geo_locator_photos/photos/56-1552992409/small.jpg)"
                                data-was-processed="true"
                                style={{ backgroundImage: `url("https://images.9flats.com/geo_locator_photos/photos/56-1552992409/small.jpg")` }}>
                            </div>
                        </a>
                        <h2 className="h4 px-2">
                            <a title="Miami" href="/miami-florida">Miami</a>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopCities