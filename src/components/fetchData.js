import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
  {
    site {
      info: siteMetadata {
        title
        author
        description
        someComplexeData {
          age
          name
        }
      }
    }
  }
`;

const ComponentName = () => {
  const {
    site: {
      info: { author },
    },
  } = useStaticQuery(getData);

  return (
    <div>
      <h2>{author}</h2>
    </div>
  );
};

export default ComponentName;
