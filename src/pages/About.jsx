import React from 'react'
import res from "../assets/res1.jpg"
import res2 from "../assets/res2.jpg"

const About = () => {
  return (
    <div>
      <div
  className=" about hero min-h-screen text-forth font-general"
>
  <div className="hero-overlay bg-opacity-10"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-8 text-5xl font-extrabold">The Seckin's</h1>
      <p className="mb-10 ">
      Showcasing the incredible cooking of Michelin Star Chef Ernesto Iaccarino and the wonderful fresh flavours of the Amalfi coast, Don Alfonso 1890 has been a family-owned business since the nineteenth century. 
      </p>
      <button className="btn btn-primary">Make a Reservation</button>
    </div>
  </div>
</div>


    </div>
  )
}

export default About