import backgroundImage from '../../Nền.png'

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen px-6 pt-8 pb-16 lg:px-12 lg:pt-10">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'brightness(1.35) saturate(1.2)'
        }}
      />
      <div className="relative mx-auto flex min-h-[92vh] max-w-[1480px] items-center">
        <div className="max-w-2xl space-y-8 text-white lg:max-w-xl" style={{ textShadow: '0 8px 30px rgba(0,0,0,0.6)' }}>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold/90">
            DIGITAL HERITAGE PROJECT
          </span>
          <div>
            <h1 className="text-5xl font-black leading-[0.92] tracking-[-0.04em] text-ivory md:text-6xl lg:text-7xl">
              THE <span className="text-[#c94a35]">PHAN</span> LEGACY
            </h1>
            <div className="mt-4 h-0.5 w-24 rounded-full bg-gold/80" />
          </div>
          <p className="max-w-xl text-base leading-8 text-white/75 md:text-lg">
            Dự án số hóa di sản của trường THPT Chuyên Phan Bội Châu, tôn vinh ký ức lịch sử qua một trải nghiệm số sang trọng.
          </p>
          <a
            href="#introduction"
            className="inline-flex items-center justify-center rounded-full bg-[#c94a35] px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_24px_70px_rgba(201,74,53,0.24)] transition duration-300 hover:bg-[#9d3128]"
          >
            BẮT ĐẦU HÀNH TRÌNH
          </a>
          <div className="space-y-1 text-sm text-white/60">
            <p className="uppercase tracking-[0.35em] text-white/40">EST. 1897</p>
            <p>Hơn 125 năm hình thành &amp; phát triển</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
