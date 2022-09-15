import React,{Fragment, Component} from 'react';
import {Link} from 'react-router-dom'; 
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import PageTitle from '../Layout/PageTitle';
import Masonry from 'react-masonry-component';
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 
import AccordionBlog from '../Element/AccordionBlog';
import TestiMonialSlider from '../Element/TestiMonialSlider';
import VideoPopup from '../Element/VideoPopup';
//Images
import bnr1 from './../../images/line2.png';
import bnr2 from './../../images/background/bg5.jpg';
import bnr3 from './../../images/background/bg6.jpg';
import bnr4 from './../../images/line2.png';
import about from './../../images/about/about-1.jpg';
import gallery1 from './../../images/gallery/pic1.jpg';
import gallery2 from './../../images/gallery/pic2.jpg';
import gallery3 from './../../images/gallery/pic3.jpg';
import gallery4 from './../../images/gallery/pic4.jpg';
import gallery5 from './../../images/gallery/pic5.jpg';
import gallery6 from './../../images/gallery/pic6.jpg';

// Masonry section
const masonryOptions = {                                          
    transitionDuration: 0
};
const imagesLoadedOptions = { background: '.my-bg-image-el' }
// Masonry section end

//Light Gallery Icon
const Iconimage = props => {
	const { openLightbox } = useLightbox()
  return (
    <Link to={"#"}  onClick={() => openLightbox(props.imageToOpen)} className="" >
      <i className="fa fa-search icon-bx-xs"></i>
    </Link>
  )
}
const galleryBlog = [
	{image: gallery1},	
	{image: gallery2},	
	{image: gallery3},	
	{image: gallery4},	
	{image: gallery5},	
	{image: gallery6},	
];

function BackgroundBlog(){
	return(
		<>
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-12  about-text"  style={{visibility: "visible", animationDuration: "2s", animationDelay: "0.2s", animationName: "fadeIn"}}>
						<div className="section-head text-center">
							<div className="video-play">
								<VideoPopup />
							</div>
							<h2>Let Your Kids Have an Amazing<br/>Time at the Park</h2>
							<Link to={"./contect-us"} className="btn btn-md radius-xl">Read More</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
function BackgroundBlog2(){
	return(
		<>
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-12  about-text"  style={{visibility: "visible", animationDuration: "2s", animationDelay: "0.2s", animationName: "fadeIn"}}>
						<div className="section-head text-center">
							<h4 className="text-white">Join Our New Session</h4>
							<h2>Call To Enrol Your Child <br/><span className="text-yellow">222 4444 000</span></h2>
							<Link to={"./contect-us"} className="btn btn-md radius-xl">Read More</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

class AboutUs1 extends Component{
	componentDidMount(){
		var splitBox = document.querySelectorAll('.split-box');
       
		var fSB = [].slice.call(splitBox);
		
		fSB.forEach(el => el.classList.add('split-active'));
	}
	render(){
		return(
			<Fragment>
				<Header />	
				 <div className="page-content">
					<PageTitle  motherMenu="About Us 1"  activeMenu="About Us 1" />
					<div className="content-block">
						<div className="section-full bg-white content-inner-2 about-area" style={{backgroundImage:"url("+ bnr1 +")", backgroundSize:"contain", backgroundRepeat: "no-repeat",backgroundPosition: "center"}}>
							<div className="container">
								<div className="row">
									<div className="col-lg-6 col-md-12 col-sm-12 m-b15">
										<div className="section-head">
											<h2 className="head-title text-secondry">New Concept In Children’s Play</h2>
											<p>The concept of school and pre-school education consists of 3 programs of development and training in our academy.The concept of school and pre-school education consists of 3 programs of development.</p>
										</div>
										<AccordionBlog />
									</div>
									<div className="col-lg-6 col-md-12 col-sm-12 teacher-content">
										<div className="split-box">
											<div className="about-media">
												<img src={about} alt=""/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full bg-white content-inner-2 about-content bg-img-fix" style={{backgroundImage:"url(" + bnr2 + ")"}}>
							<BackgroundBlog />
						</div>
						{/*  Portfolio  */}
						<div className="section-full content-inner">
							<div className="container">
								<div className="section-head text-center">
									<h2 className="head-title text-secondry">Gallery of our classes</h2>
									<p>We provide three classes with nine to twenty children each aged twelve months to six years of age.</p>
								</div>
								<SimpleReactLightbox>
									<SRLWrapper>
										<div className="clearfix" id="lightgallery">
											<ul id="masonry" className="dlab-gallery-listing gallery-grid-4 gallery">
												<Masonry
													className={'my-gallery-class'} 
													options={masonryOptions} 
													disableImagesLoaded={false} 
													updateOnEachImageLoad={false} 
													imagesLoadedOptions={imagesLoadedOptions} // default {}
												>
													{galleryBlog.map((data,index)=>(
														<li className="web design card-container col-lg-4 col-md-6 col-sm-6 "  key={index}>
															<div className="dlab-box frame-box m-b30">
																<div className="dlab-thum dlab-img-overlay1"> 
																	<img src={data.image} alt="" />
																	<div className="overlay-bx">
																		<div className="overlay-icon"> 
																			<Iconimage />
																		</div>
																	</div>
																</div>
															</div>
														</li>
													))}
												</Masonry>		
											</ul>
										</div>
									</SRLWrapper>	
								</SimpleReactLightbox>	
							</div>
						</div>
						<div className="section-full bg-white content-inner-2 about-content bg-img-fix" style={{backgroundImage:"url(" + bnr3 + ")"}}>
							<BackgroundBlog2 />
						</div>
						<div className="section-full bg-white content-inner-2" style={{backgroundImage:"url(" + bnr4 +")", backgroundSize:"contain",backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
							<div className="container">
								<div className="section-head text-center">
									<h2 className="head-title text-secondry">Testimonials about center</h2>
									<p>We have an excellent teacher to child ratio at our Kindergarten to ensure that each child receives the attention he or she needs</p>
								</div>
								<TestiMonialSlider />
							</div>
						</div>
					</div>
				</div>	
				<Footer />	
			</Fragment>
		)
	}
}
export {BackgroundBlog, BackgroundBlog2};
export default AboutUs1;