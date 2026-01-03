import React from 'react'
import { Bookmark } from 'lucide-react';
const Card = () => {
  return (
    <div>
      <div className="container">
      <div className="job-card">
        {/* Top Section */}
        <div className="card-header">
          <div className="logo-container">
            <img 
              src="data:image/png;base64,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" 
              alt="Amazon" 
              className="company-logo"
            />
          </div>
          <button className="save-btn">
            Save <span className="icon">▢</span>
          </button>
        </div>

        {/* Content Section */}
        <div className="card-body">
          <div className="meta-info">
            <span className="company-name">Amazon</span>
            <span className="post-date">5 days ago</span>
          </div>
          <h2 className="job-title">Senior UI/UX Designer</h2>
          
          <div className="tags">
            <span className="tag">Part-Time</span>
            <span className="tag">Senior Level</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="card-footer">
          <div className="price-location">
            <div className="salary">$120/hr</div>
            <div className="location">Mumbai, India</div>
          </div>
          <button className="apply-btn">Apply now</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card
