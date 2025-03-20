"use client"

import {
  forwardRef,useCallback,useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react"
import {
  AnimatePresence,
  AnimatePresenceProps,
  motion,
  MotionProps,
  Transition,
  LayoutGroup,
} from "motion/react"
import { FaHeart, FaGhost, FaUser, FaBug, FaRobot } from 'react-icons/fa';

import { cn } from "@/lib/utils"

interface TextRotateProps {
  texts: (string | { text: string; icon: JSX.Element })[];
  rotationInterval?: number
  initial?: MotionProps["initial"]
  animate?: MotionProps["animate"]
  exit?: MotionProps["exit"]
  animatePresenceMode?: AnimatePresenceProps["mode"]

  
  animatePresenceInitial?: boolean
  staggerDuration?: number
  staggerFrom?: "first" | "last" | "center" | number | "random"
  transition?: Transition
  loop?: boolean // Whether to start from the first text when the last one is reached
  auto?: boolean // Whether to start the animation automatically
  splitBy?: "words" | "characters" | "lines" | string
  onNext?: (index: number) => void
  mainClassName?: string
  splitLevelClassName?: string
  elementLevelClassName?: string
}

export interface TextRotateRef {
  next: () => void
  previous: () => void
  jumpTo: (index: number) => void
  reset: () => void
}

interface WordObject {
  characters: string[]
  needsSpace: boolean
  icon?: JSX.Element
}

const TextRotate = forwardRef<TextRotateRef, TextRotateProps>(
  (
    {
      texts,
      transition = { type: "spring", damping: 25, stiffness: 300 },
      initial = { y: "100%", opacity: 0 },
      animate = { y: 0, opacity: 1 },
      exit = { y: "-120%", opacity: 0 },
      animatePresenceMode = "wait",
      animatePresenceInitial = false,
      rotationInterval = 2000,
      staggerDuration = 0,
      staggerFrom = "first",
      loop = true,
      auto = true,
      splitBy = "characters",
      onNext,
      mainClassName,
      splitLevelClassName,
      elementLevelClassName,
      ...props
    },
    ref
  ) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0)

    // handy function to split text into characters with support for unicode and emojis
    const splitIntoCharacters = (text: string): string[] => {
      if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
        const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" })
        return Array.from(segmenter.segment(text), ({ segment }) => segment)
      }
      // Fallback for browsers that don't support Intl.Segmenter
      return Array.from(text)
    }

    const elements = useMemo(() => {
      const currentText = texts[currentTextIndex];
      const text = typeof currentText === 'string' ? currentText : currentText.text;
      const icon = typeof currentText === 'string' ? null : currentText.icon;

      if (splitBy === "characters") {
        const words = text.split(" ");
        return words.map((word, i) => ({
          characters: splitIntoCharacters(word),
          needsSpace: i !== words.length - 1,
          icon: i === 0 ? icon : null,
        }));
      }
      return splitBy === "words"
        ? text.split(" ")
        : splitBy === "lines"
          ? text.split("\n")
          : text.split(splitBy);
    }, [texts, currentTextIndex, splitBy])

    const getStaggerDelay = useCallback(
      (index: number, totalChars: number) => {
        const total = totalChars
        if (staggerFrom === "first") return index * staggerDuration
        if (staggerFrom === "last") return (total - 1 - index) * staggerDuration
        if (staggerFrom === "center") {
          const center = Math.floor(total / 2)
          return Math.abs(center - index) * staggerDuration
        }
        if (staggerFrom === "random") {
          const randomIndex = Math.floor(Math.random() * total)
          return Math.abs(randomIndex - index) * staggerDuration
        }
        return Math.abs(staggerFrom - index) * staggerDuration
      },
      [staggerFrom, staggerDuration]
    )

    // Helper function to handle index changes and trigger callback
    const handleIndexChange = useCallback((newIndex: number) => {
      setCurrentTextIndex(newIndex)
      onNext?.(newIndex)
    }, [onNext])

    const next = useCallback(() => {
      const nextIndex = currentTextIndex === texts.length - 1
        ? (loop ? 0 : currentTextIndex)
        : currentTextIndex + 1
      
      if (nextIndex !== currentTextIndex) {
        handleIndexChange(nextIndex)
      }
    }, [currentTextIndex, texts.length, loop, handleIndexChange])

    const previous = useCallback(() => {
      const prevIndex = currentTextIndex === 0
        ? (loop ? texts.length - 1 : currentTextIndex)
        : currentTextIndex - 1
      
      if (prevIndex !== currentTextIndex) {
        handleIndexChange(prevIndex)
      }
    }, [currentTextIndex, texts.length, loop, handleIndexChange])

    const jumpTo = useCallback((index: number) => {
      const validIndex = Math.max(0, Math.min(index, texts.length - 1))
      if (validIndex !== currentTextIndex) {
        handleIndexChange(validIndex)
      }
    }, [texts.length, currentTextIndex, handleIndexChange])

    const reset = useCallback(() => {
      if (currentTextIndex !== 0) {
        handleIndexChange(0)
      }
    }, [currentTextIndex, handleIndexChange])

    // Expose all navigation functions via ref
    useImperativeHandle(ref, () => ({
      next,
      previous,
      jumpTo,
      reset,
    }), [next, previous, jumpTo, reset])


    useEffect(() => {
      if (!auto) return
      const intervalId = setInterval(next, rotationInterval)
      return () => clearInterval(intervalId)
    }, [next, rotationInterval, auto])

    return (
      <motion.span
        className={cn("flex flex-wrap whitespace-pre-wrap mx-auto w-2/4 justify-center", mainClassName)}
        {...props}
        layout
        transition={transition}
      >
        <span className="sr-only">
          {typeof texts[currentTextIndex] === 'string' 
            ? texts[currentTextIndex] 
            : texts[currentTextIndex].text}
        </span>

        <AnimatePresence
          mode={animatePresenceMode}
          initial={animatePresenceInitial}
        >
          <motion.div
            key={currentTextIndex}
            className={cn(
              "flex flex-wrap",
              splitBy === "lines" && "flex-col w-full"
            )}
            layout
            aria-hidden="true"
            style={{ overflow: "hidden" }}
          >
            {(splitBy === "characters"
              ? (elements as WordObject[])
              : (elements as string[]).map((el, i) => ({
                  characters: [el],
                  needsSpace: i !== elements.length - 1,
                }))
            ).map((wordObj, wordIndex, array) => {
              const previousCharsCount = array
                .slice(0, wordIndex)
                .reduce((sum, word) => sum + word.characters.length, 0)

              return (
                <motion.span
                  key={wordIndex}
                  className={cn("inline-flex items-center", splitLevelClassName)}
                  style={{ overflow: "hidden" }}
                >
                  {wordObj.icon && (
                    <motion.span
                      className="inline-flex items-center mr-2"
                      initial={initial}
                      animate={animate}
                      exit={exit}
                      transition={transition}
                    >
                      {wordObj.icon}
                    </motion.span>
                  )}
                  {wordObj.characters.map((char, charIndex) => (
                    <motion.span
                      initial={{ ...initial, y: "100%" }}
                      animate={{ ...animate, y: 0 }}
                      exit={{ ...exit, y: "-100%" }}
                      key={charIndex}
                      transition={{
                        ...transition,
                        delay: getStaggerDelay(
                          previousCharsCount + charIndex,
                          array.reduce(
                            (sum, word) => sum + word.characters.length,
                            0
                          )
                        ),
                      }}
                      className={cn("inline-block", elementLevelClassName)}
                      style={{ display: "inline-block", whiteSpace: "pre" }}
                    >
                      {char}
                    </motion.span>
                  ))}
                  {wordObj.needsSpace && (
                    <span className="whitespace-pre"> </span>
                  )}
                </motion.span>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </motion.span>
    )
  }
)

TextRotate.displayName = "TextRotate"

export { TextRotate }

function Preview() {
  return (
    <div className="w-full h-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl flex flex-col items-center justify-center font-overusedGrotesk text-white font-bold overflow-hidden p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <LayoutGroup>
        <motion.div className="flex flex-col whitespace-pre" layout>
          <motion.span
            className="pt-0.5 sm:pt-1 md:pt-1.5 lg:pt-2"
            layout
            transition={{ type: "spring", damping: 10, stiffness: 400 }}
          >
            Bienvenue dans mon univers,magnifique  <br />
          </motion.span>
          <TextRotate
            texts={[
              { text: "Âme", icon: <FaHeart className="inline- w-12 h-12 m-4"  /> },
              { text: "Entité", icon: <FaGhost className="inline-block w-12 h-12 m-4" /> },
              { text: "Humain", icon: <FaUser className="inline-block w-12 h-12 m-4" /> },
              { text: "Créature", icon: <FaBug className="inline-block w-12 h-12 m-4" /> },
              { text: "Ami", icon: <FaHeart className="inline-block w-12 h-12 m-4" /> },
              { text: "IA", icon: <FaRobot className="inline-block w-12 h-12 m-4"  /> },
            ]}
            mainClassName="text-white px-2 sm:px-3 md:px-4 lg:px-5 bg-black/50 backdrop-blur-md overflow-hidden py-0.5 sm:py-1 md:py-1.5 lg:py-2 justify-center rounded-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1.5 lg:pb-2"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
          <motion.span
            className="pt-0.5 sm:pt-1 md:pt-1.5 lg:pt-2"
            layout
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          >
            {" "}
          </motion.span>
        </motion.div>
      </LayoutGroup>
    </div>
  );
}

export { Preview };
