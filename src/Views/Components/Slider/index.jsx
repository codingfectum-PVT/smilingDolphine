import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "@popmotion/popcorn"

import "./sliderstyle.css"

import { IMAGES } from "./Images"

const sliderVariants = {
  incoming: direction => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: direction => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2
  })
}

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04]
}

const TweetSlider = () => {
  const [[imageCount, direction], setImageCount] = useState([0, 0])
  const activeImageIndex = wrap(0, IMAGES.length, imageCount)

  // Auto Slide Functionality
  useEffect(() => {
    const interval = setInterval(() => {
      swipeToImage(1) // Change this to -1 for reverse auto sliding
    }, 2500) // Change the duration as needed

    return () => clearInterval(interval) // Cleanup on component unmount
  }, [imageCount]) // Add dependencies to ensure effect runs when imageCount changes

  const swipeToImage = swipeDirection => {
    setImageCount([imageCount + swipeDirection, swipeDirection])
  }

  const dragEndHandler = dragInfo => {
    const draggedDistance = dragInfo.offset.x
    const swipeThreshold = 50
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1)
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1)
    }
  }

  const skipToImage = imageId => {
    let changeDirection
    if (imageId > activeImageIndex) {
      changeDirection = 1
    } else if (imageId < activeImageIndex) {
      changeDirection = -1
    }
    setImageCount([imageId, changeDirection])
  }

  return (
    <main>
      <div className="slider-container">
        <div className="slider">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={imageCount}
              style={{
                backgroundImage: `url(${IMAGES[activeImageIndex].imageSrc})`
              }}
              custom={direction}
              variants={sliderVariants}
              initial="incoming"
              animate="active"
              exit="exit"
              transition={sliderTransition}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
              className="image"
            />
          </AnimatePresence>
        </div>

        <div className="buttons">
          <button onClick={() => swipeToImage(-1)}>PREV</button>
          <button onClick={() => swipeToImage(1)}>NEXT</button>
        </div>
      </div>
    </main>
  )
}

export default TweetSlider
