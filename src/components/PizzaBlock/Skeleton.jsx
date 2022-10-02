import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
   <ContentLoader
      speed={2}
      width={280}
      height={465}
      viewBox="0 0 280 465"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
   >
      <rect x="0" y="282" rx="15" ry="15" width="280" height="35" />
      <circle cx="132" cy="132" r="130" />
      <rect x="0" y="407" rx="15" ry="15" width="116" height="31" />
      <rect x="123" y="338" rx="0" ry="0" width="0" height="1" />
      <rect x="0" y="330" rx="15" ry="15" width="280" height="60" />
      <rect x="150" y="406" rx="15" ry="15" width="130" height="50" />
   </ContentLoader>
)

export default Skeleton
