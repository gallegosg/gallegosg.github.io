import React from "react";
import WorkTile from '../components/WorkTile'
import '../styles/Work.css'

const Work = ({projects}) => (
  <div className='work'>
    <p className='tab-title'>Projects</p>
    <div className="title-bar" />
    {projects.length > 0 && projects.map((item, index) => (
      <WorkTile 
        key={index}
        title={item.title}
        image={item.mainImage}
        icon={item.secondaryImage}
        tags={item.tags}
        source={item.source}
        description={item.description} />
    ))}
  </div>
);

export default Work;
