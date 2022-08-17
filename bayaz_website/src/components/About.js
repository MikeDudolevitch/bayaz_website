//Bandcamp.com Merch section integration
import React from 'react'
import './Component.css'
import './About.css'

const About = () => {
  return (
    <div id="about" className='page-wrapper component'>
      <div className="">
        <h1 className="section-title">About</h1>
          <div id='about-paragraph'>

            <h2 id="about-title" className='boxTextShadow content-header'>Bayaz: The Story of Bayaz</h2>
            {/* <div className="story"> */}
              <img id='about-img' alt='placeholder pic' src='./pics/BAYAZRED.jpg'></img>
              <p className='boxTextShadow'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Diam vel quam elementum pulvinar etiam non quam lacus. Quis enim lobortis scelerisque fermentum. Nec nam aliquam sem et tortor consequat id porta. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Porttitor leo a diam sollicitudin tempor id. Adipiscing elit ut aliquam purus sit. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Quam pellentesque nec nam aliquam sem et tortor consequat id. Suspendisse ultrices gravida dictum fusce ut placerat. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. In pellentesque massa placerat duis ultricies. Vel pretium lectus quam id. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Ultricies lacus sed turpis tincidunt id. Turpis egestas pretium aenean pharetra magna ac.

Velit euismod in pellentesque massa placerat. Cum sociis natoque penatibus et magnis dis. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Est sit amet facilisis magna etiam. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Iaculis nunc sed augue lacus. Gravida cum sociis natoque penatibus et. Lectus nulla at volutpat diam ut venenatis tellus in metus. Tempus imperdiet nulla malesuada pellentesque elit eget. Dolor sit amet consectetur adipiscing. Vulputate mi sit amet mauris commodo quis imperdiet massa. Et netus et malesuada fames ac turpis egestas. Sagittis eu volutpat odio facilisis mauris sit amet massa.
</p>
              
            {/* </div> */}
          </div>
      </div>
    </div>
  )
}

export default About