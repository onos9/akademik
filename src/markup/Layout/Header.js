import React,{Fragment ,Component} from 'react';
import {Link} from 'react-router-dom';

//images
import logo from './../../images/logo.png';


class Header extends Component{
	componentDidMount() {
        // sidebar open/close
        var Navicon = document.querySelector('.navicon');
        var sidebarmenu = document.querySelector('.myNavbar ');

        function toggleFunc() {
            sidebarmenu.classList.toggle('show');
            Navicon.classList.toggle('open');
        }
        Navicon.addEventListener('click', toggleFunc);
        // Sidenav li open close
        var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }
        function checkLi(current) {
            navUl.forEach(el => (current !== el) ? el.classList.remove('open') : '');
			setTimeout(() => {
				current.classList.toggle('open');	
			}, 100);				
        }
	}
	render(){
		return(
			<Fragment>
				<header className="site-header header mo-left">
					<div className="top-bar">
						<div className="container">
							<div className="row d-flex justify-content-between">
								<div className="dlab-topbar-left">
									<ul>
										<li><i className="fa fa-phone m-r5"></i> 001 1234 6789</li>
										<li><i className="fa fa-map-marker m-r5"></i> 6701 Democracy Blvd, Suite 300, USA</li>
									</ul>
								</div>
								<div className="dlab-topbar-right">
									<ul>
										<li><i className="fa fa-clock-o m-r5"></i> Opening Time : 9:30am-5:30pm</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					{/* main header */}
					<div className="sticky-header main-bar-wraper navbar-expand-lg">
						<div className="main-bar clearfix ">
							<div className="container clearfix">
								{/*  website logo */} 
								<div className="logo-header mostion">
									<Link to={"./"} className="dez-page"><img src={logo} alt="" /></Link>
								</div>
								{/* nav toggle button */}
								<button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
									<span></span>
									<span></span>
									<span></span>
								</button>
								{/*  main nav  */}
								<div className="header-nav navbar-collapse collapse myNavbar justify-content-end" id="navbarNavDropdown">
									<div className="logo-header mostion">
										<Link to={"./"} className="dez-page"><img src={logo} alt="" /></Link>
									</div>
									<ul className="nav navbar-nav">	
										<li className="active"><Link to={'#'}>Home <i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li><Link to={"./"}>Home 1</Link></li>
												<li><Link to={"/index-2"}>Home 2</Link></li>
											</ul>	
										</li>
										<li><Link to={'#'}>About <i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li><Link to={"/about-1"}>About Us 1</Link></li>
												<li><Link to={"/about-2"}>About Us 2</Link></li>
											</ul>
										</li>
										<li><Link to={'#'}>Classes <i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li><Link to={"/classes"}>Classes</Link></li>
												<li><Link to={"/classes-details"}>Classes Details</Link></li>
											</ul>
										</li>
										<li><Link to={'#'}>Teachers <i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li><Link to={"/teachers"}>Teachers</Link></li>
												<li><Link to={"/teachers-details"}>Teachers Details</Link></li>
											</ul>
										</li>
										<li><Link to={'#'}>Pages <i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li><Link to={"/coming-soon"}>Comign Soon</Link></li>
												<li><Link to={"/faqs"}>Faqs</Link></li>
												<li><Link to={"/event"}>Event</Link></li>
												<li><Link to={"/event-details"}>Event Details</Link></li>
												<li><Link to={"/error-404"}>Error 404</Link></li>
											</ul>
										</li>
										<li><Link to={'#'}>Blog <i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li><Link to={"/blog-standard"}>Standard</Link></li>
												<li><Link to={"/blog-classic-grid"}>Classic</Link></li>
												<li><Link to={"/blog-details"}>Blog Details</Link></li>
											</ul>
										</li>
										<li><Link to={'#'}>Our Gallery <i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li><Link to={"/gallery"}>Gallery Grid</Link></li>
												<li><Link to={"/gallery-masonary"}>Gallery Masonary</Link></li>
												<li><Link to={"/gallery-filter"}>Gallery Tiles Filter</Link></li>
											</ul>
										</li>
										<li><Link to={"/contact-us"}>Contact Us</Link></li>
									</ul>		
								</div>
							</div>
						</div>
					</div>
					{/* Main header END */}
				</header>
			</Fragment>
		)
	}
}
export default Header;