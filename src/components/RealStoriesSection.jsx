import React, { useState, useRef, useEffect } from 'react';
import './RealStoriesSection.css';

import rohitSonam from '../assets/images/rohit_sonam.jpg';
import ajinkyaAshwini from '../assets/images/ajinkya_ashwini.jpg';
import image3 from '../assets/images/piyas_anindita.jpg';
import image4 from '../assets/images/shreyashree_sukdev.jpg';

const TestimonialCard = ({ image, name, story }) => (
  <div className="testimonial-card p-4 bg-white rounded shadow-sm h-100">
    <img
      src={image}
      alt={`${name} testimonial`}
      className="testimonial-img mb-3 rounded"
    />
    <h5 className="fw-semibold">{name}</h5>
    <p className="small text-muted">{story}</p>
  </div>
);

const RealStoriesSection = () => {
  const testimonials = [
    {
      image: ajinkyaAshwini,
      name: 'Ajinkya & Ashwini',
      story:
        'Thank you matrimony.com! I found my soulmate here. After chatting, we involved our families—now we’re happily engaged as of 9th May 2025!',
    },
    {
      image: rohitSonam,
      name: 'Rohit & Sonam',
      story:
        'We met on matrimony.com and found our perfect match. Thank you for helping me find my soulmate and begin this beautiful new chapter of life!',
    },
    {
      image: image3,
      name: 'Rahul & Priya',
      story:
        'A magical connection that turned into a lifelong journey. matrimony.com made it possible!',
    },
    {
      image: image4,
      name: 'Vikram & Neha',
      story:
        'From strangers to life partners—our story is proof that destiny works in wonderful ways.',
    },
  ];

  // Ensure we always have at least 3 items in the "track" (for the entering card)
  const buildInitialCards = () => {
    const list = [...testimonials];
    while (list.length < 3) {
      list.push(...testimonials);
    }
    return list;
  };

  const [cards, setCards] = useState(buildInitialCards()); // full rotating list
  const [position, setPosition] = useState(0); // how many steps moved (for progress)
  const [isAnimating, setIsAnimating] = useState(false);

  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const directionRef = useRef(null); // 'next' or 'prev'
  const cardWidthRef = useRef(0);

  // Measure card width (half of viewport) and update on resize
  useEffect(() => {
    const updateWidth = () => {
      if (!viewportRef.current) return;
      const vw = viewportRef.current.clientWidth;
      cardWidthRef.current = vw / 2; // two cards visible
      // ensure track transform resets if not animating
      if (!isAnimating && trackRef.current) {
        trackRef.current.style.transition = 'none';
        trackRef.current.style.transform = `translateX(0px)`;
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Helper to ensure track has no leftover transition before manipulating
  const resetTrackInstant = () => {
    if (!trackRef.current) return;
    trackRef.current.style.transition = 'none';
    trackRef.current.style.transform = `translateX(0px)`;
    // force reflow
    // eslint-disable-next-line no-unused-expressions
    trackRef.current.offsetHeight;
  };

 const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    trackRef.current.classList.add('no-flicker');

    const shift = cardWidthRef.current;
    trackRef.current.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
    trackRef.current.style.transform = `translateX(-${shift}px)`;

    const onTransitionEnd = () => {
      trackRef.current.removeEventListener('transitionend', onTransitionEnd);
      
      setCards(prev => {
        const copy = [...prev];
        copy.push(copy.shift());
        return copy;
      });

      setPosition(p => (p + 1) % testimonials.length);
      resetTrackInstant();
      setIsAnimating(false);
      trackRef.current.classList.remove('no-flicker');
    };

    trackRef.current.addEventListener('transitionend', onTransitionEnd);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    if (!trackRef.current || !viewportRef.current) {
      return;
    }
    directionRef.current = 'prev';
    setIsAnimating(true);

    // Prepend last card so we can slide right to show it
    setCards((prev) => {
      const copy = [...prev];
      const last = copy.pop();
      copy.unshift(last);
      return copy;
    });

    // Immediately set transform to -cardWidth so visual shows "middle+right" (the previous layout)
    const shift = cardWidthRef.current || viewportRef.current.clientWidth / 2;
    resetTrackInstant();
    trackRef.current.style.transform = `translateX(-${shift}px)`;

    // then animate back to 0 (slide right)
    // small delay to ensure the browser acknowledges the position before animating
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        trackRef.current.style.transition = 'transform 0.42s ease-in-out';
        trackRef.current.style.transform = `translateX(0px)`;
      });
    });

    const onEnd = () => {
      // update logical position (step back)
      setPosition((p) => (p - 1 + testimonials.length) % testimonials.length);

      // clear handlers & flags
      setIsAnimating(false);
      trackRef.current.removeEventListener('transitionend', onEnd);
    };

    trackRef.current.addEventListener('transitionend', onEnd);
  };

  // progress (simple): fraction of steps moved out of total items
  const progressPercent = Math.round((position / testimonials.length) * 100);

  // Render first three items from cards (left, right, incoming)
  const visible = cards.slice(0, 3);

  return (
    <section className="real-stories-section py-5">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-4">
            <h2 className="fw-bold">Real Stories, True Connections</h2>
            <p className="text-muted mb-4">
              Discover how matrimony has brought together couples through meaningful connections and shared journeys. Your success story could be next!
            </p>

            <div className="d-flex gap-2">
              <button
                className="btn btn-outline-secondary rounded-circle"
                onClick={handlePrev}
                aria-label="Previous"
                disabled={isAnimating}
                style={{ width: 44, height: 44 }}
              >
                ‹
              </button>
              <button
                className="btn btn-success rounded-circle"
                onClick={handleNext}
                aria-label="Next"
                disabled={isAnimating}
                style={{ width: 44, height: 44 }}
              >
                ›
              </button>
            </div>
          </div>

          <div className="col-md-8">
            {/* VIEWPORT */}
            <div className="slider-viewport" ref={viewportRef}>
              {/* TRACK (will slide left/right) */}
              <div className="slider-track" ref={trackRef}>
                {visible.map((c, idx) => (
                  <div className="slider-card" key={idx}>
                    <TestimonialCard {...c} />
                  </div>
                ))}
              </div>
            </div>

            {/* progress bar */}
            <div className="progress mt-3" style={{ height: 6 }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${progressPercent}%`,
                  transition: 'width 0.35s linear',
                  background: '#ff5a60',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealStoriesSection;
