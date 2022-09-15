import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { Accordion,Card} from 'react-bootstrap';
import {defaultAccordion} from './AccordionBlog';

const AccordionBlog2 = () => {
	const [activeDefault, setActiveDefault] = useState(0)
	return(
		<Accordion className="accordion faq-box"  defaultActiveKey="1">
			{defaultAccordion.map((d, i) => (
			   <Card key={i}>
					<div className="card-header ">
						<Accordion.Toggle as={Link} to={"#"} variant="link" className={` ${ activeDefault === i ? '' : 'collapsed'}`} onClick={() => setActiveDefault(activeDefault === i ? -1 : i)
							} eventKey={`${i}`}>	
							 {d.title}		
						</Accordion.Toggle>
					</div>
				<Accordion.Collapse eventKey={`${i}`} className="">
				  <Card.Body >
					{d.text}
					</Card.Body>
				</Accordion.Collapse>
			  </Card>
			))}
		</Accordion>	
	)
}

export default AccordionBlog2;