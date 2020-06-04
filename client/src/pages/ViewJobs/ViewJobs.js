import React from 'react';
import './ViewJobs.css';

import image1 from './images/p1.jpg';
import image2 from './images/p2.jpg';
import image3 from './images/p3.png';
import image4 from './images/p4.jpg';
import image5 from './images/p5.jpg';
class ViewJobs extends React.Component {
    render(){
      return (
        <>
          <div>	  
    {/* <h1>View Jobs</h1> */}
    <article class="par">

	<a href="https://i.stack.imgur.com/EJL2S.jpg"><img class="img" src={image2} alt="image2" /></a>
	<header>
    <h3>Plumber</h3>
	</header>
	<p>This pipe under my kitchen sink has a big crack in the area circled in yellow. (It's on the back side so it isn't visible in the photo.) Can I simply unscrew the nut at the top that I circled in red to replace the pipe? I'm afraid to just go ahead and try in the fear that I will put my kitchen sink out of commission. I'm already ok with disconnecting the hand-tightened nut at the bottom.So i need some professional help,Please contact me at your earliest convenience,Thanks

	</p>
	<ul class="actions special">
		<li>Email-Jaredsmith@yahoo.com</li>
        <li>Phone-303-5677-2343</li>
		<li>Posted Date-6/2/2020</li>
	</ul>
	</article>

<article class="par">
	<a href="https://images.app.goo.gl/f4muX1Yx7NMa8FTp7"><img class="img" src={image1} alt="image1" /></a>
	<header>
    <h3>contractor</h3>
	</header>
	<p>I'm looking for a contractor to refurbish my kitchen cabinets, replace the counter top and install a new sink and disposal.  I would also need to run a 220 wire to my panel box so i can install a new stove.  Next I would like to tile the back splash to match the made over cabinets.  The final item would be to install the new hardwood floors that have already been delivered.Please contact me if you would like to bid on this project. 
	</p>
	<ul class="actions special">
		<li>Email-Jhonwhite@gmail.com</li>
        <li>Phone-720-332-8368</li>
		<li>Posted Date-5/12/2020</li>

	</ul>
	</article>
	
	<article class="par">
	<a href="https://images.app.goo.gl/iYHS798TCc9dzXdd9"><img class="img" src={image3} alt="image3" /></a>
	<header>
    <h3>Electrician</h3>
	</header>
	<p>I did this wiring in my bonus room years ago, and now I'm wondering if it is in fact legal and is there safe way to fix this. This is a built-in book case that I built and installed myself. The bookshelf went in over a light switch box, so I moved the light switches with the boxes and cables you see here. I've removed the plastic blank faceplate for the picture. When the faceplate is installed, the two cables come out over the top of the faceplate. The two cables enter the top rear of the box through a cable clamp which you can't see in this picture.Feel free to contact me  
	</p>
	<ul class="actions special">
		<li>Email-Ellen2love@gmail.com</li>
        <li>Phone-303-772-6768</li>
		<li>Posted Date-5/28/2020</li>

	</ul>
	</article>
	<article class="par">
	<a href="https://images.app.goo.gl/ZSMVuypEtrPhCD7L9"><img class="img" src={image4} alt="image4" /></a>
	<header>
    <h3>Painter</h3>
	</header>
	<p>Painter needed for a Frederick area apartment complex. Primary responsibilities will be drywall work and painting of apartments to get them ready for tenant move in. Must be able to pass a background check and drug test. Should have a valid drivers license. Position includes partially paid health ins, Vision & Dental Insurance, disability ins, and 401K. Send resume and salary requirements.
	</p>
	<ul class="actions special">
		<li>Email-Lisa3bonet@gmail.com</li>
        <li>Phone-303-972-8458</li>
		<li>Posted Date-6/1/2020</li>

	</ul>
	</article>
	<article class="par">
	<a href="https://images.app.goo.gl/x6zHfUhVhvYNAZpo9"><img class="img" src={image5} alt="image5" /></a>
	<header>
    <h3>Flooring Installer</h3>
	</header>
	<p>Looking for an individual that is self-motivated to help install flooring for a reputable flooring business. Must be able to lift heavy material and have reliable transportation. Construction background is a plus but not necessary, we will train the right individual. The job can be labor-intensive at times and sometimes travel is required. Pay is TBD. This is a construction and general laborer based position with the potential to move up quickly.
	</p>
	<ul class="actions special">
		<li>Email-Chadwhither@yahoo.com</li>
        <li>Phone-303-732-1168</li>
		<li>Posted Date-6/3/2020</li>

	</ul>
	</article>
	
  </div>
        </>
      );
    }
  }
  
  export default ViewJobs;




