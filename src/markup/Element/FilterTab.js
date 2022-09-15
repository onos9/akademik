import React,{ Component,useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-component';
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 

//images
import gallery1 from './../../images/gallery/pic1.jpg';
import gallery2 from './../../images/gallery/pic2.jpg';
import gallery3 from './../../images/gallery/pic3.jpg';
import gallery4 from './../../images/gallery/pic4.jpg';
import gallery5 from './../../images/gallery/pic5.jpg';
import gallery6 from './../../images/gallery/pic6.jpg';

const imageBlog = [
	{  Large_img: gallery1 , tag: ['Drawing', 'Lunch',] , },
	{  Large_img: gallery2 , tag: ['Game',] , },
	{  Large_img: gallery3 , tag: ['Drawing', 'Game',] , },
	{  Large_img: gallery4 , tag: ['Education', 'Game',] , },
	{  Large_img: gallery5 , tag: ['Drawing', ] , },
	{  Large_img: gallery6 , tag: ['Game',] , },
	{  Large_img: gallery1 , tag: ['Education', ] , },
	{  Large_img: gallery2 , tag: ['Education', ] , }, 
	{  Large_img: gallery3 , tag: ['Lunch', ] , },
	{  Large_img: gallery4,  tag: ['Lunch', ] , },
	{  Large_img: gallery3,  tag: ['Lunch', ] , },
	{  Large_img: gallery6,  tag: ['Lunch', ] , },
]
//Light Gallery Icon
const Iconimage = props => {
	const { openLightbox } = useLightbox()
  return (
    <Link   onClick={() => openLightbox(props.imageToOpen)} className="" >
      <i className="fa fa-search icon-bx-xs"></i>
    </Link>
  )
}
// Masonry section
const masonryOptions = {                                          
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }
// Masonry section end

const TagLi = ({name, handlesettag, tagActive}) => {                                                               
	return (
		<li className={` tag ${tagActive ? 'btn active' : 'btn'}` } onClick={() => handlesettag(name)} >
			<input type="radio" />
			<Link to={"#"}  >	<span>{name} {''}</span> </Link>
		</li> 
	);
};

class FilterTab extends Component{
	render(){
		return(		
			<PortfolioItem />
		)
	}
} 

function PortfolioItem(){
	const [tag, setTag] = useState('Show All');
	const [filteredImages, setFilterdImages] = useState([]);
	
	useEffect( () => {
		tag === 'Show All' ? setFilterdImages(imageBlog) : setFilterdImages(imageBlog.filter( image => image.tag.find(element => element === tag)))
	}, [tag])	
	
	return(
		<>
			<div className="section-full content-inner">				
				<div className="container-fluid">
					<div className="section-head text-center">
						<h2 className="head-title text-secondry">Gallery of our classes</h2>
						<p>We provide three classes with nine to twenty children each aged twelve months to six years of age.</p>
					</div>
					<div className="clearfix" id="lightgallery">
						<div className="row">
							<div className="col-lg-12 text-center">
								<div className="site-filters filter-style1 clearfix m-b20">
									<ul className="filters" data-toggle="buttons">
										<TagLi name="Show All"  handlesettag={setTag} tagActive={ tag === 'Show All' ? true : false }	/>
										<TagLi name="Drawing"  handlesettag={setTag} tagActive={ tag === 'Drawing' ? true : false }	/>
										<TagLi name="Education" handlesettag={setTag} tagActive={ tag === 'Education' ? true : false }	 />
										<TagLi name="Game"  handlesettag={setTag} tagActive={ tag === 'Game' ? true : false }	/>
										<TagLi name="Lunch"  handlesettag={setTag} tagActive={ tag === 'Lunch' ? true : false }	/>
									</ul>
								</div>
							</div>
						</div>	
					</div>
					<SimpleReactLightbox>
						<SRLWrapper>
							<ul className="dlab-gallery-listing gallery-grid-4 gallery mfp-gallery" data-wow-duration="2s" data-wow-delay="0.2s">
								<Masonry
									className={'my-gallery-class'} // default ''
									options={masonryOptions} // default {}
									disableImagesLoaded={false} // default false
									updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
									imagesLoadedOptions={imagesLoadedOptions} // default {}
								>
									{filteredImages.map((item, index)=>(
										<li className="drawing card-container col-lg-3 col-md-6 col-sm-6 wow zoomIn" key={index}>
											<div className="dlab-box frame-box m-b30">
												<div className="dlab-thum dlab-img-overlay1 "> 
													<img src={item.Large_img} alt="" />
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
						</SRLWrapper>
					</SimpleReactLightbox>	
				</div>
			</div>
		</>
	);
}
export default FilterTab;