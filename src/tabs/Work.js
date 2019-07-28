import React from "react";
import WorkTile from '../components/WorkTile'
import '../styles/Work.css'
import {work} from '../data/work.js'

const Work = () => (
  <div className='work'>
    <p className='tab-title'>Projects</p>
    <div className="title-bar" />
    {work.map((item) => (
      <WorkTile 
        key={item.id}
        title={item.title}
        image={item.mainImage}
        icon={item.secondaryImage}
        tags={item.tags}
        source={item.source}
        description={item.description} />
    ))}
    {/* <WorkTile 
      title="Birthday Bash"
      icon={'bbicon.png'}
      image={'bbScreenshot.png'}
      tags={['React Native', 'Firebase', 'Redux', 'Javascript']}
      description="This is a descriton of the app Box Chaser, its really really really good if i do say so myselfdescriton of the app Box Chaser, its really really really good if i do say so myself descriton of the app Box Chaser, its really really really good if i do say so myself"/>
    <WorkTile 
      title="Duck Racer" 
      image={'drScreenshot.png'}
      icon={'drIcon.png'}
      tags={['Swift', 'Firebase', 'Admob']}
      description="This is a descritonmyselfdescriton of the app Box Chaser, its really really really good if i do say so myself descriton of the app Box Chaser, its really really really good if i do say so myself"/> */}
  </div>
);

export default Work;
