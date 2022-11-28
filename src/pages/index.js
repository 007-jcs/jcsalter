import React from 'react'
import Layout from "../components/layout"
import Card from "../components/card"
 

const index = () => {
  return (
    <Layout>
      <div className="Cards">
      <h2>How can we help</h2>
      <Card 
        title="Web Design"
        text="Sub Title" />
        <Card 
        title="Custom Photography"
        text="Location or Studio" />
        <Card 
        title="Thoughts and Ideas"
        text="Let us build up your web presence " />
      </div>
    </Layout>
  )
}

export default index