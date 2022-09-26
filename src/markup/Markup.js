import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ThemeButton from './Element/ThemeButton/ThemeButton';
//ScrollToTop
import ScrollToTop from './Element/ScrollToTop';

import Index1 from './Pages/Index1';
import Index2 from './Pages/Index2';
import AboutUs1 from './Pages/AboutUs1';
import AboutUs2 from './Pages/AboutUs2';
import Classes from './Pages/Classes';
import ClassesDetail from './Pages/ClassesDetail';
import Teachers from './Pages/Teachers';
import TeachersDetail from './Pages/TeachersDetail';
import ComingSoon from './Pages/ComingSoon';
import Faqs from './Pages/Faqs';
import Event from './Pages/Event';
import EventDetail from './Pages/EventDetail';
import ErrorPage from './Pages/ErrorPage';
import BlogStandard from './Pages/BlogStandard';
import BlogClassicGrid from './Pages/BlogClassicGrid';
import BlogDetails from './Pages/BlogDetails';
import Gallery from './Pages/Gallery';
import GalleryMasonary from './Pages/GalleryMasonary';
import GalleryFilter from './Pages/GalleryFilter';
import Contact from './Pages/Contact';

class Markup extends Component{
	render(){
		return(
			<BrowserRouter basename='/'>
				 <div className="page-wraper">
					<Switch>
						{/* <Route path='/' exact component={Index1} /> */}
						<Route path='/' exact component={Index2} />
						<Route path='/about-1' exact component={AboutUs1} /> 		
						<Route path='/about-2' exact component={AboutUs2} /> 		
						<Route path='/classes' exact component={Classes} /> 		
						<Route path='/classes-details' exact component={ClassesDetail} /> 		
						<Route path='/teachers' exact component={Teachers} /> 		
						<Route path='/teachers-details' exact component={TeachersDetail} /> 		
						<Route path='/coming-soon' exact component={ComingSoon} /> 		
						<Route path='/faqs' exact component={Faqs} />  
						<Route path='/event' exact component={Event} /> 		
						<Route path='/event-details' exact component={EventDetail} /> 		
						<Route path='/error-404' exact component={ErrorPage} /> 		
						<Route path='/blog-standard' exact component={BlogStandard} /> 		
						<Route path='/blog-classic-grid' exact component={BlogClassicGrid} /> 		
						<Route path='/blog-details' exact component={BlogDetails} />
						<Route path='/gallery' exact component={Gallery} /> 		
						<Route path='/gallery-masonary' exact component={GalleryMasonary} /> 		
						<Route path='/gallery-filter' exact component={GalleryFilter} /> 		
						<Route path='/contact-us' exact component={Contact} /> 
					</Switch>
				</div>	
				<ThemeButton />
				<ScrollToTop />
			</BrowserRouter>
		)
	}
}

export default Markup;