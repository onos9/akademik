import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import BannerSlider2 from '../Element/BannerSlider2';
import AccordionBlog from '../Element/AccordionBlog';
import FilterTab from '../Element/FilterTab';
import ClassesSlider from '../Element/ClassesSlider';
import FromSlider from '../Element/FromSlider';
import { AcademyBlog } from './AboutUs2';
import { BackgroundBlog, BackgroundBlog2 } from './AboutUs1';

//images
import bnr1 from './../../images/line.png';
import bnr2 from './../../images/main-slider/light-house-blue-overlay.png';
import bnr3 from './../../images/background/bg6.jpg';

class Index2 extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<div className="page-content bg-white">
					<BannerSlider2 />
					<div className="content-block">
						{/* Section-1 Start*/}
						<div className="section-full bg-white content-inner-1" >
							<AcademyBlog />
						</div>
						{/* Section-1 End*/}
						{/* Section-2 Start*/}
						<div className="section-full bg-white content-inner about-box" style={{ backgroundImage: "url(" + bnr1 + ")", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
							<div className="container">
								<div className="row">
									<div className="col-lg-7 col-md-12 col-sm-12 col-12 " >
										<div className="section-head">
											<h2 className="head-title text-secondry">Do you dream that<br />your child will become<br />a world-class leader?</h2>
											<p> Lighthouse Leading Academy is the infusion of all learning
												areas with the knowledge of God through the application of Scriptures to the intent that our
												children are branded with the truth of God’s Word so that they may be safeguarded against contrary
												arguments and that they will not be swayed by the doctrines and lifestyles they are likely to come
												across</p>
											<Link to={"./faqs"} className="btn btn-md kids-btn radius-xl">Learn more</Link>
										</div>
									</div>
									<div className="col-lg-5 col-md-12 col-sm-12 col-12">
										<div className="m-b30">
											<AccordionBlog />
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Section-2 End*/}
						{/* Section-3 Start*/}
						<div className="section-full bg-white content-inner-2 about-content bg-img-fix" style={{ backgroundImage: "url(" + bnr2 + ")" }}>
							<BackgroundBlog />
						</div>
						{/* Section-3 End*/}
						{/* Section-4 Start*/}
						<FilterTab />
						{/* Section-4 End*/}
						{/* Section-5 Start*/}
						<div className="section-full bg-white content-inner-2 about-content bg-img-fix" style={{ backgroundImage: "url(" + bnr3 + ")" }}>
							<BackgroundBlog2 />
						</div>
						{/* Section-5 End*/}
						{/* Section-6 Start*/}
						<div className="section-full bg-white content-inner-1">
							<div className="container">
								<div className="section-head text-center">
									<h2 className="head-title text-secondry">Our Classes</h2>
									<p>We have excellent teachers to help build and nuture your kids into a godly and world class leaders. Our classrooms are fitted to help develop mental capacity.</p>
								</div>
								<ClassesSlider />
							</div>
						</div>
						{/* Section-6 End*/}
						{/* Section-7 Start*/}
						<div className="section-full bg-white content-inner">
							<div className="container">
								<div className="section-head text-center">
									<h2 className="head-title text-secondry">From the Blog</h2>
									<p>Read through few of our articles from the great minds that has dedicated themselves to give greatness to every kid at Light House Leading Academy </p>
								</div>
								<FromSlider />
							</div>
						</div>
						{/* Section-7 End*/}
					</div>
				</div>
				<Footer />
				<button class="scroltop fa fa-chevron-up" ></button>
			</Fragment>
		)
	}
}
export default Index2;