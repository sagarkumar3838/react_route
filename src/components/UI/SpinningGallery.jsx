
// src/components/SpinningGallery.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SpinningGallery = () => {
  const galleryRef = useRef(null);

  const images = [
    '/img/col-1_1.jpg',
    '/img/col-1_1.jpg',
    '/img/col-1_1.jpg',
    '/img/col-1_1.jpg',
   
  ];

  useEffect(() => {
    const images = galleryRef.current.querySelectorAll('.image');

    images.forEach((image) => {
      image.addEventListener('click', () => {
        gsap.to(image, {
          rotationY: 360,
          duration: 1,
          ease: 'power2.inOut',
          onComplete: () => {
            // Reset rotation after spinning
            gsap.set(image, { rotationY: 0 });
          },
        });
      });
    });

    return () => {
      images.forEach((image) => {
        image.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Spinning 3D Image Gallery</h2>
      <div
        ref={galleryRef}
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="image w-48 h-48 perspective"
            style={{ perspective: '1000px' }}
          >
            <div className="relative w-full h-full">
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="object-cover w-full h-full rounded-lg shadow-lg transition-transform duration-300"
                style={{ transformStyle: 'preserve-3d' }}
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }

        .image {
          transform-style: preserve-3d;
          transition: transform 0.5s;
        }
      `}</style>
    </div>
  );
};

export default SpinningGallery;