import React,{Fragment,Component} from 'react';
import {Link} from 'react-router-dom';
import SimpleReactLightbox,{SRLWrapper,useLightbox} from 'simple-react-lightbox'; 
import Masonry from 'react-masonry-component';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import PageTitle from '../Layout/PageTitle';

//images
import gallery1 from './../../images/gallery/pic1.jpg';
import gallery2 from './../../images/gallery/pic2.jpg';
import gallery3 from './../../images/gallery/pic3.jpg';
import gallery4 from './../../images/gallery/pic4.jpg';
import gallery5 from './../../images/gallery/pic5.jpg';
import gallery6 from './../../images/gallery/pic6.jpg';

const galleryBlog =[
	{images: gallery1 }, {images: gallery2 }, {images: gallery3 },
	{images: gallery4 }, {images: gallery5 }, {images: gallery6 },
	{images: gallery1 }, {images: gallery2 }, {images: gallery3 },
	{images: gallery4 }, {images: gallery5 }, {images: gallery6 }
];
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
    <Link to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="check-km" >
      <i className="fa fa-search icon-bx-xs"></i>
    </Link>
  )
}

class Gallery extends Component{
	render(){
		return(
			<Fragment>
				<Header />
				<div className="page-content">
					<PageTitle  motherMenu="Gallery Grid"  activeMenu="Gallery Grid" />
					<div className="content-block">
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
													{galleryBlog.map((item,index)=>(
														<li className="web design card-container col-lg-4 col-md-6 col-sm-6 wow zoomIn"  key={index}>
															<div className="dlab-box frame-box m-b30">
																<div className="dlab-thum dlab-img-overlay1 ">
																	<img src={item.images} alt="" /> 
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
					</div>
				</div>	
				<Footer />
			</Fragment>
		)
	}
}
export default Gallery;