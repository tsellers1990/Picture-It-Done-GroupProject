import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Image, List, ListItem, Col, Row, Brick } from '../../components/JobPost';
import API from '../../utils/API';
import "./ViewJobs.css"

const ViewJobs = () => {
	
	const[jobs, setJobs] = useState([])

	useEffect(() => {
		loadJobs()
	}, [])// if you put something inside of this empty array, then you can make useEffect fire ONLY when that condition is met

	function loadJobs() {
		API.getJobs()
			.then(res => 
				setJobs(res.data)
			)
			.catch(err => console.log(err));
	}

	return (
		<Container fluid>
			<Row>
				<Col size="md-6 sm-12">
					{jobs.length ? (
						<List>
							{jobs.map(job => {
								return(
								<ListItem key={job._id}>
									<Brick data={job} />
								</ListItem>
								)
							})}
						</List>
					) : (
						<h3>No results to Display</h3>
					)}
				</Col>
			</Row>
		</Container>
	)
}


export default ViewJobs;