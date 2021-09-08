import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-about">
                        <h3>ABOUT ME</h3>
                        <p>
                            My name is Huy, and I am a senior majoring in Embedded System. I enjoy creating UI websites and want to be a Front-end
                            developer. I can create websites using PSD templates using HTML, CSS, and Bootstrap, and I can also use JavaScript
                            libraries: ReactJs, Redux,...
                        </p>
                    </div>
                    <div className="footer-info">
                        <h3>Have a Questions</h3>
                        <ul>
                            <li>
                                <p>
                                    <strong>
                                        <i className="fa fa-map-marker"></i> Address:
                                    </strong>{" "}
                                    Quang Nam, Viet Nam
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>
                                        <i className="fa fa-phone"></i> Phone:
                                    </strong>{" "}
                                    +84 777 086 748
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>
                                        <i className="fa fa-envelope"></i> Email:
                                    </strong>{" "}
                                    phamquochuy0509@gmail.com
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-footer">
                    <p>CopyRight &copy; 2021 All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
