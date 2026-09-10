import React from "react";

export const TchapHeader: React.FC = () => {
    return (
        <header role="banner" className="fr-header lasuite">
            <div className="fr-header__body">
                <div className="fr-container">
                    <div className="fr-header__body-row">
                        <div className="fr-header__brand fr-enlarge-link">
                            <div className="fr-header__brand-top">
                                <div className="fr-header__logo">
                                    <p className="fr-logo">
                                        République
                                        <br />
                                        Française
                                    </p>
                                </div>
                            </div>
                            <div className="fr-header__service">
                                <a
                                    className="ui-home"
                                    href="/#/welcome"
                                    title="Accueil - Tchap - DINUM"
                                >
                                    <img
                                        src="/themes/tchap/img/logos/tchap-logo.svg"
                                        alt=""
                                        className="r-responsive-img"
                                        width="32"
                                        height="32"
                                    />
                                    <p className="fr-header__service-title tc_header_title">
                                        Tchap
                                    </p>
                                </a>
                                {/* <p className="fr-header__service-tagline">La messagerie instantanée du secteur public</p> */}
                            </div>
                        </div>

                        <div className="fr-header__tools">
                            <div
                                className="fr-header__tools-links"
                                data-fr-js-header-links="true"
                            >
                                <ul className="fr-btns-group">
                                    <li>
                                        <button
                                            type="button"
                                            title="Les services de La Suite numérique"
                                        >
                                            Les services de La Suite numérique
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
