import { useRef, useCallback } from 'react'

function scrollToPercent(el, container, percentOfElement, offsetPX, percentOfContainer) {
    const rect = el.current.getBoundingClientRect()
    const refSize = rect.height
    const elemScroll = rect.y

    const scrollSize = container === window
        ? container.innerHeight
        : container.scrollHeight

    let addOffset = (refSize * percentOfElement) / 100
    if (offsetPX) {
        addOffset += offsetPX
    }

    const containerScroll = container.scrollY
    const newScroll = elemScroll + containerScroll - (scrollSize * percentOfContainer) / 100 + addOffset

    const scrollObj = { top: newScroll }

    window.scrollTo({
        ...scrollObj,
        behavior: 'smooth'
    })
}

export default function useScroll(
    percentOfElement = 50,
    offsetPX = 0,
    percentOfContainer = 50,
) {
    const elementRef = useRef(null)

    const scroll = useCallback(() => {
        if (elementRef.current) {
            scrollToPercent(elementRef, window, percentOfElement, offsetPX, percentOfContainer)
        }
    }, [elementRef.current])

    return { elementRef, scroll }
}