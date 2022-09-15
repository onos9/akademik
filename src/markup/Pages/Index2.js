import React,{Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import BannerSlider2 from '../Element/BannerSlider2';
import AccordionBlog from '../Element/AccordionBlog';
import FilterTab from '../Element/FilterTab';
import ClassesSlider from '../Element/ClassesSlider';
import FromSlider from '../Element/FromSlider';
import {AcademyBlog} from './AboutUs2';
import {BackgroundBlog , BackgroundBlog2} from './AboutUs1';

//images
import bnr1 from './../../images/line.png';
import bnr2 from './../../images/background/bg5.jpg';
import bnr3 from './../../images/background/bg6.jpg';

class Index2 extends Component{
	render(){
		return(
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
							<div className="section-full bg-white content-inner about-box" style={{backgroundImage:"url(" + bnr1 + ")", backgroundSize:"contain",backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
								<div className="container">
									<div className="row">
										<div className="col-lg-7 col-md-12 col-sm-12 col-12 " >
											<div className="section-head">
												<h2 className="head-title text-secondry">Do you dream that<br/>your child will become<br/>intelligent?</h2>
												<p>The concept of school and pre-school education consists of 3 programs of development and training in our academy, developed in collaboration with the institute of the children's university, which will help your children to learn subjects in the best possible way.</p>
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
							<div className="section-full bg-white content-inner-2 about-content bg-img-fix" style={{backgroundImage:"url(" + bnr2 + ")"}}>
								<BackgroundBlog />	
							</div>	
							{/* Section-3 End*/}
							{/* Section-4 Start*/}
							<FilterTab /> 
							{/* Section-4 End*/}
							{/* Section-5 Start*/}
							<div className="section-full bg-white content-inner-2 about-content bg-img-fix" style={{backgroundImage:"url(" + bnr3 + ")"}}>
								<BackgroundBlog2 />
							</div>	
							{/* Section-5 End*/}
							{/* Section-6 Start*/}
							<div className="section-full bg-white content-inner-1">
								<div className="container">
									<div className="section-head text-center">
										<h2 className="head-title text-secondry">Our Classes</h2>
										<p>We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs</p>
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
										<p>We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs</p>
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