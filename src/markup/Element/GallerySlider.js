import React,{Component} from 'react';
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox'; 
import {SRLWrapper, useLightbox} from 'simple-react-lightbox';
import galery1 from './../../images/gallery/pic1.jpg';
import galery2 from './../../images/gallery/pic2.jpg';
import galery3 from './../../images/gallery/pic3.jpg';
import galery4 from './../../images/gallery/pic4.jpg';
import galery5 from './../../images/gallery/pic5.jpg';
import galery6 from './../../images/gallery/pic6.jpg';

//Light Gallery on icon click 
const Iconimage = props => {
	const { openLightbox } = useLightbox()
  return (
    <Link to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="check-km" >
      <i className="fa fa-search icon-bx-xs"></i>
    </Link>
  )
}

const latestBlog = [
	{ image: galery1, },
	{ image: galery2, },
	{ image: galery3, },
	{ image: galery4, },
	{ image: galery5, },
	{ image: galery6, },
]
class GallerySlider extends Component{	
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}
	next() {
		this.slider.slickNext();
	}
	previous() {
		this.slider.slickPrev();
	}
	render(){
		var settings = {		
			arrows: false,
            slidesToShow: 3,			
            infinite: true,
			autoPlay: true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 576,
				  settings: {
					slidesToShow: 1,
				  }
				}
			]
        };
		return(
			<>	
				<SimpleReactLightbox>
					<SRLWrapper >
						<div className="sprite-nav">
							<Slider className="gallery-carousel owl-carousel owl-theme dots-none " ref={c => (this.slider = c)} {...settings}>
								{latestBlog.map((item, index) => (
									<div className="item p-3" key={index}>
									 <div className="dlab-box frame-box">
										<div className="dlab-thum dlab-img-overlay1"> 
											<img src={item.image} alt="" />
											<div className="overlay-bx">
												<div className="overlay-icon"> 
													<Iconimage /> 
												</div>
											</div>
										</div>
									</div>
								</div>
								))}	
							</Slider>	
							<div className="owl-nav" style={{ textAlign: "center" }}>
								<div className=" owl-prev " onClick={this.previous}/>
								<div className="owl-next " onClick={this.next}/>
							</div>
						</div>	
					</SRLWrapper>
				</SimpleReactLightbox>	
			</>	
		)
	}
}
export default GallerySlider;