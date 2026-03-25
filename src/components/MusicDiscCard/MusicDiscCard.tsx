import { motion } from 'motion/react'
export type MusicDiscCardProps = {
  playing: boolean
  full?: boolean
  songTitle: string
  artistName: string
  albumCoverUrl: string
  songDurationMs: number
}

export function MusicDiscCard(props: MusicDiscCardProps) {
  return (
    <div className="bg-gray-400 md:rounded-[3rem] md:w-120 md:h-120 w-dvw h-dvh relative overflow-clip">
      {/* Disc */}
      <motion.div
        className={`
        bg-[url('${props.albumCoverUrl}')] 
        bg-cover bg-center rounded-full flex justify-center items-center
        border border-white
        w-[calc(100cqw+20rem)] h-[calc(100cqw+20rem)] absolute left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl
        md:h-120 md:w-120
        `}
        animate={{
          rotate: props.playing ? 360 : 0,
          transition: {
            type: 'tween',
            repeat: Infinity,
            ease: 'linear',
            duration: 10,
          },
        }}
      >
        {/* Outer Ring */}
        <div className="bg-white w-[21%] h-[21%] rounded-full absolute opacity-80" />
        <div className="bg-gray-500 w-[20%] h-[20%] rounded-full absolute opacity-80" />
        {/* Inner Ring */}
        <div className="bg-white w-[11%] h-[11%] rounded-full absolute" />
        <div className="bg-gray-400 w-[10%] h-[10%] rounded-full absolute" />
      </motion.div>

      {/* Detail Section */}
      <div className="w-full absolute bottom-12 font-inter">
        {/* Progress Bar */}
        {/* Track */}
        <div className="h-2 bg-gray-500 w-[20rem] mx-auto mb-10 rounded-full">
          <div className="h-2 bg-gray-800 w-[50%] rounded-full" />
        </div>

        <p className="text-center text-xl text-gray-500">{props.artistName}</p>
        <p className="text-center text-xl font-semibold">{props.songTitle}</p>
      </div>
    </div>
  )
}
