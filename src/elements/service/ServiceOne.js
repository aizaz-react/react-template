import React from 'react';
import { FiActivity, FiCast, FiMap } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        icon: <FiActivity />,
        title: 'Awarded Design',
        description: 'Welcome to Minds Spark, where our awarded designs converge with innovation to redefine the digital landscape. As pioneers in crafting visually striking solutions, we transform ideas into profitable realities. Explore a world where excellence is the standard, and your brand stands out with distinction.'
    },
    {
        icon: <FiCast />,
        title: 'Design & Creative',
        description: 'Step into a realm of unparalleled design and creativity at Minds Spark. Our services transcend conventional boundaries, breathing life into your brand through innovative design solutions. Unleash the power of creativity to elevate your brand and captivate your audience.'
    },
    {
        icon: <FiMap />,
        title: 'App Development',
        description: 'As a leading mobile app development agency, we research your idea and convert it into a profitable solution for you. At Minds Spark, we are committed to bringing these ideas to life by using technology to streamline processes and bring clarity to raw concepts.'
    },
]

const ServiceOne = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title w-600"><Link to="#service" dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceOne;