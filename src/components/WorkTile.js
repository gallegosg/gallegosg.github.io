import React from "react";
import Tag from '../components/Tag'

const WorkTile = ({ title, description, tags, image, icon, source, link}) => (
  <div className='work-tile'>
    <div className="left-container">
      {image && <img src={image} alt={title}/>}
      {icon && <img id="icon" src={icon} alt={title}/>}
    </div>
    <div className="right-container">
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
      <div className="bottom-section">
        <div className="tags">
          {tags.map(tag => (
            <Tag title={tag} />
          ))}
        </div>
        <div className="source">
          <a id="source" href={source}>View Source</a>
          {link && <a id="link" href={link}>Try it out</a>}
        </div>
      </div>
    </div>
  </div>
);

export default WorkTile;