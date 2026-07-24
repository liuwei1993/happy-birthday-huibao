import { Stars } from "@/components/Stars";

const TRAITS = ["健身", "养花", "美食", "滑板", "星星眼"] as const;

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="hero-glow relative flex min-h-[100svh] flex-col items-center justify-center px-6 pb-20 pt-16 text-center">
        <Stars />
        <p className="fade-up font-[family-name:var(--font-display)] text-sm tracking-[0.35em] text-rose-deep uppercase">
          For Huibao · 2026.7.24
        </p>
        <h1 className="fade-up fade-up-delay-1 mt-6 font-[family-name:var(--font-script)] text-6xl leading-none text-ink sm:text-7xl md:text-8xl">
          惠宝
        </h1>
        <p className="fade-up fade-up-delay-2 mt-5 max-w-md font-[family-name:var(--font-body)] text-2xl font-medium tracking-wide text-ink sm:text-3xl">
          生日快乐
        </p>
        <p className="fade-up fade-up-delay-3 mt-6 max-w-sm text-base leading-relaxed text-ink-soft sm:text-lg">
          你一笑，眼睛里就像落满了星星。
        </p>
        <div className="fade-up fade-up-delay-4 mt-10 flex flex-col items-center gap-4">
          <div className="gold-line" aria-hidden />
          <a
            href="#letter"
            className="text-sm tracking-[0.2em] text-rose-deep transition-opacity hover:opacity-70"
          >
            往下读一封信 ↓
          </a>
        </div>
      </section>

      {/* Letter */}
      <section
        id="letter"
        className="section-band relative mx-auto max-w-2xl px-6 py-24 sm:py-32"
      >
        <p className="mb-10 font-[family-name:var(--font-script)] text-3xl text-rose-deep sm:text-4xl">
          惠惠
        </p>
        <div className="letter-body text-[1.05rem] text-ink-soft sm:text-lg">
          <p>
            昨晚你说肠胃不舒服，我心里一直悬着。
            <br />
            原来喜欢一个人，是会把她的难受，也一并记在自己身上。
            <br />
            今天只愿你舒服一点、轻快一点，把不舒服都留在昨天。
          </p>
          <p>
            你健身时的认真、养花时的专注、下厨时的厉害、滑板上的痛快——
            <br />
            都让我觉得：生活在你手里，会慢慢发光。
          </p>
          <p>
            今天你读亚里士多德，划到一句：
            <br />
            <span className="text-ink">婚姻，是友爱里极为强烈的一种形式。</span>
            <br />
            我也想慢慢学会那种爱——不是梦幻，是愿意努力、互相扶持；
            <br />
            选一个人，好好把日子过长。
          </p>
          <p>
            王夕惠，狮子座的女孩，
            <br />
            愿你被爱、被懂、被好好护着；
            <br />
            愿你笑起来的时候，世界都跟着亮一点。
          </p>
          <p className="font-medium text-ink">生日快乐，我的惠宝。</p>
        </div>
        <p className="mt-12 text-right font-[family-name:var(--font-display)] text-base italic tracking-wide text-ink-soft">
          —— 写给你 · 2026.7.24
        </p>
      </section>

      {/* About her */}
      <section className="relative px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-script)] text-4xl text-ink sm:text-5xl">
            关于你
          </h2>
          <p className="mt-4 text-ink-soft">那些让我喜欢上你的样子</p>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-1 gap-y-4">
            {TRAITS.map((trait, i) => (
              <li
                key={trait}
                className="font-[family-name:var(--font-body)] text-lg tracking-widest text-rose-deep sm:text-xl"
              >
                {i > 0 && (
                  <span className="mx-3 text-gold-soft" aria-hidden>
                    ·
                  </span>
                )}
                {trait}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Book easter egg */}
      <section className="relative px-6 pb-24 sm:pb-32">
        <div className="mx-auto max-w-xl border-y border-gold-soft/60 py-14 text-center">
          <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.4em] text-gold uppercase">
            Eudaimonia
          </p>
          <blockquote className="mt-6 text-lg leading-relaxed text-ink-soft sm:text-xl">
            「极为强烈的友爱」
            <br />
            <span className="mt-3 block text-base text-ink">
              ——我想朝这个方向走
            </span>
          </blockquote>
          <p className="mt-8 text-sm leading-relaxed text-ink-soft/90">
            幸福不是旁观的福祉，
            <br />
            而是我们一起实践的智慧。
          </p>
        </div>
      </section>

      {/* Closing */}
      <footer className="hero-glow relative px-6 pb-16 pt-10 text-center">
        <Stars />
        <p className="relative font-[family-name:var(--font-script)] text-3xl text-ink sm:text-4xl">
          今天，以及以后很多个今天
        </p>
        <p className="relative mt-4 text-ink-soft">都想陪你过。</p>
        <p className="relative mt-10 font-[family-name:var(--font-display)] text-sm tracking-[0.25em] text-rose-deep">
          Happy Birthday, Wang Xihui
        </p>
      </footer>
    </main>
  );
}
