import React, { Fragment } from 'react'

export default function About() {
  return (
    <Fragment>
  {/* start */}
            
  <div>mt-5</div>
            <div>mt-5</div>
            <div>mt-5</div>   {/*for margin top full page */}
            <div>mt-5</div>
            <div>mt-5</div>
            <div>mt-5</div>

            {/* end  */}



      <section className="gallery" id="gallery">

<h1 className="heading">about <span>us</span></h1>

<div className="box-container">
  


      <div class="clearfix fs-2 ">
  <img src="assets/images/gpic2.jpg" class="col-md-6 float-md-end mb-3 ms-md-3" alt="..."/>

  <p className='mt-3'>
    A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
  </p>

  <p>
    As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
  </p>

  <p>
    And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there's none of that here.
  </p>
</div>

</div>
</section>
    </Fragment>
  )
}
