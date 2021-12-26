import React from 'react'
import { Alert } from 'react-bootstrap';
import './candidates.css'

const Profile = (props) => {
    const { userInfo } = props.location.state;

    return (
        <>
            <Alert variant="primary">
                Profile
            </Alert>
            <div className="d-flex justify-content-center align-items-center">
                <div className="container mt-4">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-sm-6 col-lg-8">
                            <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <div className="advisor_thumb">
                                    <img src={userInfo.avatar} alt="" />
                                    {/* <div className="social-info"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a></div> */}
                                </div>
                                <div className="single_advisor_details_info text-center">
                                    <h6>{userInfo.first_name + " " + userInfo.last_name}</h6>
                                    <p className="designation">Email &amp; {userInfo.email}</p>
                                    <p className="designation">Gender &amp; {userInfo.gender}</p>
                                    <p className="designation">Job &amp; {userInfo.job_title}</p>
                                    <p className="designation">Job Description &amp; {userInfo.job_description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
