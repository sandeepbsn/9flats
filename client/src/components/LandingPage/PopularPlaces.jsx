import React, { Component } from 'react'
import styles from './LandingPage.module.css'
export default class PopularPlaces extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">

                    <div className="container mt-5 mb-5">
                        <h5 className="poplaces__header">
                            Popular destinations around the world
                        </h5>

                        <div className={`${styles.bgImage} poplaces__list__w row lazy`} data-bg="url(//assets.9flats.com/assets/cities/map-6e2eb5adb75351fa903efbfc4269396aa21692ee496bf399a35f8f03dda2cea1.png)" data-was-processed="true">
                            <div className="col-md-4 mb-3">
                                <p className="poplaces__list__item poplaces__list__item_header text-center">
                                    <b>Popular cities in Europe</b>
                                </p>
                                <div className="row">
                                    <div className="col-6 col-md-6">
                                        <ul className="poplaces__list">
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/florence-italy">Florence</a>
                                            </li>
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/berlin-germany">Berlin</a>
                                            </li>
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/amsterdam-netherlands">Amsterdam</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <ul className="poplaces__list">
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/venice-italy">Venice</a>
                                            </li>
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/prague-czech_republic">Prague</a>
                                            </li>
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/radmiecie-warsaw">Rãdmiecie</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <ul className="poplaces__list">
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/lisbon-portugal-1">Lisbon</a>
                                            </li>
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/hamburg-germany">Hamburg</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <ul className="poplaces__list">
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/istanbul-turkey">Istanbul</a>
                                            </li>
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/munich-germany">Munich</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <p className="poplaces__list__item poplaces__list__item_header text-center">
                                    <b>Destinations worldwide</b>
                                </p>
                                <div className="row">
                                    <div className="col-6 col-md-6">
                                        <ul className="poplaces__list">
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/london-united_kingdom">London</a>
                                            </li>
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/miami_beach-florida">Miami Beach</a>
                                            </li>
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/rome-italy">Rome</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <ul className="poplaces__list">
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/milan-italy">Milan</a>
                                            </li>
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/rlga-latvia">Rļga</a>
                                            </li>
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/the_hague-netherlands">The Hague</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <ul className="poplaces__list">
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/copenhagen-denmark">Copenhagen</a>
                                            </li>
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/san_francisco-california">San Francisco</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <ul className="poplaces__list">
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/osaka_shi-japan">Osaka-shi</a>
                                            </li>
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/havana-cuba">Havana</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <p className="poplaces__list__item poplaces__list__item_header text-center">
                                    <b>Popular islands and regions</b>
                                </p>
                                <div className="row">
                                    <div className="col-6 col-md-6">
                                        <ul className="poplaces__list">
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/tuscany-italy">Tuscany</a>
                                            </li>
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/sicily-italy">Sicily</a>
                                            </li>
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/miami_beach-florida">Miami Beach</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <ul className="poplaces__list">
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/majorca-spain">Majorca</a>
                                            </li>
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/malta">Malta</a>
                                            </li>
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/crete-greece">Crete</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <ul className="poplaces__list">
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/bali-indonesia">Bali</a>
                                            </li>
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/canary_islands-spain-1">Canary Islands</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <ul className="poplaces__list">
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/tenerife_island-spain">Tenerife Island</a>
                                            </li>
                                            <li className="poplaces__list__item">
                                                <a className="poplaces__list__item__link" href="/regions/alps">Alps</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container seo clearfix" style={{ height: "auto !important" }}>
                    <small><div className="seo__block__text" style={{ height: "auto !important" }}>
                        <div className="seo__block__text">
                            <b>9flats.com “Book a home” – Private Apartments, Vacation Rentals, Guest Houses and Rooms</b>
                            <p><br />With 9flats.com, the alternative to hotels,<b>you will find a variety of affordable vacation rentals offered by individuals around the world</b>. Choose from over 6 Million locations, including <b>vacation apartments and rentals of all types</b>. Whether you want a romantic apartment in Rome, a loft in the centre of New York City or a chic<a href="/berlin-germany">guest house in Berlin</a>, you’ll find the perfect place to stay when you book through 9flats.com.</p>
                        </div>
                        <div className="seo__block__text">
                            Discover the world through the eyes of the local residents, while travelling in comfort and staying in prime locations that won´t break the bank. 9flats.com is transforming the world of travel by offering unique vacation rentals and apartments personally rented out by the owner.
                        </div>
                        <div className="google-auto-placed ap_container" style={{ width: "100%", height: "auto", clear: "none" }}>
                            <ins data-ad-format="auto" className="adsbygoogle adsbygoogle-noablate" data-ad-client="ca-pub-2783192004251469" data-adsbygoogle-status="done" style={{ display: "block", margin: "auto", bacbackgroundColor: "transparent", height: "280px" }}>
                                <ins id="aswift_2_expand" style={{ display: "inline-table", border: "none", height: "280px", margin: 0, padding: 0, position: "relative", visibility: "visible", width: "1110px", backgroundColor: "transparent" }}>
                                    <ins id="aswift_2_anchor" style={{ display: "inline-table", border: "none", height: "280px", margin: 0, padding: 0, position: "relative", visibility: "visible", width: "1110px", backgroundColor: "transparent", overflow: "visible" }}>
                                        <iframe id="aswift_2" name="aswift_2" style={{ left: 0, position: "absolute", top: 0, border: 0, width: "1110px", height: "280px" }} sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" width="1110" height="280" frameborder="0"
                                            src="https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-2783192004251469&amp;output=html&amp;h=280&amp;adk=3940613766&amp;adf=2346921786&amp;w=1110&amp;fwrn=4&amp;fwrnh=100&amp;lmt=1595942130&amp;num_ads=1&amp;rafmt=1&amp;armr=3&amp;sem=mc&amp;pwprc=6399983407&amp;psa=1&amp;guci=2.2.0.0.2.2.0.0&amp;ad_type=text_image&amp;format=1110x280&amp;url=https%3A%2F%2F9flats.com%2F&amp;flash=0&amp;fwr=0&amp;pra=3&amp;rh=200&amp;rw=1110&amp;rpe=1&amp;resp_fmts=3&amp;wgl=1&amp;fa=27&amp;dt=1595942130852&amp;bpp=2&amp;bdt=1842&amp;idt=-M&amp;shv=r20200723&amp;cbv=r20190131&amp;ptt=9&amp;saldr=aa&amp;abxe=1&amp;cookie=ID%3D29f21fb1ba8eabe0%3AT%3D1595828781%3AS%3DALNI_MZCi12Dm3opxoHmys_KAvYVYgFnQg&amp;prev_fmts=0x0%2C1200x280&amp;nras=2&amp;correlator=6192046177193&amp;frm=20&amp;pv=1&amp;ga_vid=1249944120.1595344371&amp;ga_sid=1595942130&amp;ga_hid=226344639&amp;ga_fc=0&amp;iag=0&amp;icsg=34978&amp;dssz=12&amp;mdo=0&amp;mso=0&amp;u_tz=330&amp;u_his=2&amp;u_java=0&amp;u_h=768&amp;u_w=1366&amp;u_ah=744&amp;u_aw=1366&amp;u_cd=24&amp;u_nplug=3&amp;u_nmime=4&amp;adx=121&amp;ady=2052&amp;biw=1351&amp;bih=672&amp;scr_x=0&amp;scr_y=13&amp;eid=21066434%2C21066752&amp;oid=3&amp;pvsid=2358440295683928&amp;pem=978&amp;rx=0&amp;eae=0&amp;fc=1408&amp;brdim=0%2C0%2C0%2C0%2C1366%2C0%2C1366%2C744%2C1366%2C672&amp;vis=1&amp;rsz=%7C%7Cs%7C&amp;abl=NS&amp;fu=8320&amp;bc=31&amp;ifi=2&amp;uci=a!2&amp;btvi=1&amp;fsb=1&amp;xpc=62gNLKhQN0&amp;p=https%3A//9flats.com&amp;dtd=45"
                                            marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allowfullscreen="true" data-google-container-id="a!2" data-google-query-id="CMbqw96D8OoCFU45lgodZCAFwg" data-load-complete="true"></iframe></ins></ins></ins></div>
                        <div className="seo__block__text">
                            Have you always wanted to step inside the towering naves of London’s Westminster Abbey, walk along the Seine on a warm Parisian night, or experience the unique nightlife of <a href="/kreuzberg-berlin-germany">Berlin’s Kreuzberg district</a>, all while travelling in style? Well, now you can. 9flats.com offers <b>vacation rentals in each and every one of these diverse locations</b>.
                        </div>
                        <div className="seo__block__text">
                            If the hustle and bustle of the world’s most exciting cities gets to be a bit too much, however, than 9flats.com also offers a wide selection of guest houses and vacation rentals available in the most beautiful corners of the globe. Relax in your very own seaside villa on the French Riviera, or take a few extra days to hop around Spain’s idyllic <a href="/canary_islands-spain">Canary Islands</a>, soaking up sun, surf and relaxation, all for a fair price.
                        </div>
                        <div className="seo__block__text">
                            9flats.com is also suitable for business trips, with a diverse selection of <b>apartment rentals</b> in the most dynamic cities in the world from London to New York.
                        </div>
                        <div className="seo__block__text">
                            If you’re looking to get some pointers while you travel, don’t waste your time with tour guides. 9flats.com gives you the option of choosing a rental with a friendly host who will be happy to show you around. All hosts are carefully evaluated and selected by our team, so you just can’t go wrong!
                        </div>
                        <div className="seo__block__text">
                            Ready to go? Finance your vacation by joining the community and  <a href="http://about.9flats.com/how-it-works/hosts">renting out your home</a> on 9flats.com. Simply publish an announcement on our website, and it will be visible to travellers from around the world.
                        </div>
                        <div className="seo__block__text">
                            <p>Registration only takes a few minutes, and our team is ready to help you maximize your chances of renting out your apartment, house or room. 9flats.com ensures the highest standards of payment security and assistance in the world.</p>
                        </div>
                    </div>
                    </small>
                </div>
            </div>
        )
    }
}