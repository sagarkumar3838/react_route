import React from 'react';
import { Cloud, renderSimpleIcon, fetchSimpleIcons } from 'react-icon-cloud';
import { IconCloud } from './IconCloud';// Adjust the path as necessary

// Import the local image
import testImage from '/img/col-1_1.jpg'; // Adjust the path based on your file structure

const slugs = [
  'amazonaws',
  'android',
  'androidstudio',
  'antdesign',
  'typescript',
  'vercel',
  'visualstudiocode',
];

const images = [
  testImage, // Add the local image here
 
];

const useIcons = (slugs) => {
  const [icons, setIcons] = React.useState();

  React.useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons);
  }, [slugs]);

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        size: 42,
        aProps: {
          onClick: (e) => e.preventDefault(),
        },
      })
    );
  }

  return <span>Loading...</span>;
};

const DynamicIconCloud = () => {
  const icons = useIcons(slugs);

  return (
    <div>
      <Cloud>{icons}</Cloud>
      <IconCloud imageArray={images} />
    </div>
  );
};

export default DynamicIconCloud;