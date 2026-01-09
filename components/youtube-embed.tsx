"use client"

import { useState } from "react"

interface YouTubeEmbedProps {
  videoId: string
  title: string
}

export function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-border bg-black">
      {!isLoaded && (
        <button
          onClick={() => setIsLoaded(true)}
          className="absolute inset-0 flex items-center justify-center bg-black/80 hover:bg-black/70 transition-colors group cursor-pointer"
          aria-label={`Charger la vidéo: ${title}`}
        >
          <div className="text-center space-y-3">
            <div className="h-20 w-20 rounded-full bg-red-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
              <svg className="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-white text-sm">Cliquer pour charger la vidéo</p>
          </div>
        </button>
      )}
      {isLoaded && (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  )
}
