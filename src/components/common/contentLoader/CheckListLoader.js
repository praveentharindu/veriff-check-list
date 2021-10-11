import React from 'react';
import ContentLoader from 'react-content-loader';

const CheckListLoader = props => (
  <ContentLoader
    speed={2}
    width={800}
    height={430}
    viewBox="0 0 800 430"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="125" y="36" rx="3" ry="3" width="133" height="16" />
    <rect x="20" y="71" rx="0" ry="0" width="357" height="13" />
    <rect x="20" y="95" rx="0" ry="0" width="125" height="26" />
    <rect x="20" y="140" rx="0" ry="0" width="296" height="14" />
    <rect x="20" y="167" rx="0" ry="0" width="125" height="26" />
    <rect x="20" y="212" rx="0" ry="0" width="357" height="13" />
    <rect x="20" y="236" rx="0" ry="0" width="125" height="26" />
    <rect x="23" y="279" rx="0" ry="0" width="267" height="14" />
    <rect x="23" y="305" rx="0" ry="0" width="125" height="26" />
    <rect x="287" y="382" rx="0" ry="0" width="96" height="32" />
  </ContentLoader>
);

export default CheckListLoader;
