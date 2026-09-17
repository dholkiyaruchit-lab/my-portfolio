export default function DevWorkspace() {
  return (
    <div className="relative w-[460px] h-[380px] select-none">
      {/* Floating text — "Code Build Improve Repeat" */}
      <div className="absolute -top-2 right-0 z-30" style={{ animation: 'ambient-drift 8s ease-in-out infinite' }}>
        <div className="text-right">
          <p className="text-[13px] font-mono text-text-muted/80 leading-relaxed tracking-wide">
            Code<br />
            Build<br />
            Improve<br />
            Repeat
          </p>
          <svg className="w-14 h-14 ml-auto mt-1 text-accent/30" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M4 4 C18 4, 36 18, 52 48" strokeDasharray="3 3" />
            <path d="M44 44 L52 48 L48 40" />
          </svg>
        </div>
      </div>

      {/* === DESK === */}
      {/* Desk top surface — thick slab */}
      <div className="absolute bottom-[68px] left-[0px] right-[0px] h-[16px] bg-gradient-to-b from-[#1e1e24] via-[#1b1b21] to-[#18181e] rounded-t-sm border-t border-x border-border/30 z-10">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(255,255,255,0.03) 8px, rgba(255,255,255,0.03) 9px)',
        }} />
        <div className="absolute inset-x-0 top-0 h-px bg-white/[0.04] rounded-t" />
      </div>

      {/* Desk front face — visible depth */}
      <div className="absolute bottom-[24px] left-[0px] right-[0px] h-[44px] bg-gradient-to-b from-[#16161c] to-[#0e0e12] rounded-b-sm border-x border-b border-border/20 z-10">
        <div className="absolute left-1/2 top-2 bottom-2 w-px bg-white/[0.015]" />
      </div>

      {/* Desk legs */}
      <div className="absolute bottom-0 left-[24px] w-[8px] h-[24px] bg-gradient-to-b from-[#141418] to-[#0c0c10] border border-border/15 rounded-b-sm z-10" />
      <div className="absolute bottom-0 right-[24px] w-[8px] h-[24px] bg-gradient-to-b from-[#141418] to-[#0c0c10] border border-border/15 rounded-b-sm z-10" />

      {/* Crossbar between legs */}
      <div className="absolute bottom-[8px] left-[24px] right-[24px] h-[3px] bg-[#121216] border border-border/10 rounded-sm z-10" />

      {/* === MONITOR === */}
      <div className="absolute bottom-[84px] left-1/2 -translate-x-1/2 w-[320px] h-[210px] bg-[#0d0d10] rounded-xl border border-border/40 z-20 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6),0_0_60px_-12px_rgba(59,130,246,0.1)]">
        {/* Monitor screen */}
        <div className="absolute inset-[6px] bg-bg-primary rounded-lg overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-bg-secondary/80 border-b border-border/30">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 text-[9px] font-mono text-text-muted bg-bg-primary/60 rounded border border-border/20">
                <svg className="w-2.5 h-2.5 text-accent/50" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M3 3h10v2H3zm0 4h7v2H3zm0 4h10v2H3z" />
                </svg>
                app.tsx
              </div>
            </div>
            <div className="w-12" />
          </div>

          {/* Code area */}
          <div className="p-2.5 font-mono text-[10px] leading-[1.7] overflow-hidden">
            <div className="flex">
              <div className="text-text-muted/30 select-none text-right pr-2.5 w-5 border-r border-border/15 mr-2.5">
                1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13<br/>14
              </div>
              <div className="text-[9.5px]">
                <span className="text-[#c678dd]">import</span> <span className="text-[#e5c07b]">{"{ "}</span><span className="text-[#e5c07b]">motion</span><span className="text-[#e5c07b]">{" }"}</span> <span className="text-[#c678dd]">from</span> <span className="text-[#98c379]">'framer-motion'</span><br />
                <span className="text-[#c678dd]">import</span> <span className="text-[#e5c07b]">Button</span> <span className="text-[#c678dd]">from</span> <span className="text-[#98c379]">'./components/Button'</span><br />
                <span className="text-[#5c6370]">{"// Hero section component"}</span><br />
                <span className="text-[#c678dd]">export default function</span> <span className="text-[#61afef]">Hero</span><span className="text-[#abb2bf]">() {"{"}</span><br />
                <span className="text-[#abb2bf]">{"  "}</span><span className="text-[#c678dd]">const</span> <span className="text-[#e06c75]">title</span> <span className="text-[#56b6c2]">=</span> <span className="text-[#98c379]">"Building products"</span><br />
                <span className="text-[#abb2bf]">{"  "}</span><span className="text-[#c678dd]">return</span> <span className="text-[#abb2bf]">(</span><br />
                <span className="text-[#abb2bf]">{"    "}</span><span className="text-[#e06c75]">&lt;section</span> <span className="text-[#d19a66]">className</span><span className="text-[#abb2bf]">=</span><span className="text-[#98c379]">"hero"</span><span className="text-[#e06c75]">&gt;</span><br />
                <span className="text-[#abb2bf]">{"      "}</span><span className="text-[#e06c75]">&lt;motion.h1&gt;</span><br />
                <span className="text-[#abb2bf]">{"        "}</span><span className="text-[#abb2bf]">{"{"}</span><span className="text-[#e06c75]">title</span><span className="text-[#abb2bf]">{"}"}</span><br />
                <span className="text-[#abb2bf]">{"      "}</span><span className="text-[#e06c75]">&lt;/motion.h1&gt;</span><br />
                <span className="text-[#abb2bf]">{"      "}</span><span className="text-[#e06c75]">&lt;Button</span> <span className="text-[#d19a66]">variant</span><span className="text-[#abb2bf]">=</span><span className="text-[#98c379]">"primary"</span><span className="text-[#e06c75]">&gt;</span><br />
                <span className="text-[#abb2bf]">{"        "}</span><span className="text-[#abb2bf]">View Projects</span><br />
                <span className="text-[#abb2bf]">{"      "}</span><span className="text-[#e06c75]">&lt;/Button&gt;</span><br />
                <span className="text-[#abb2bf]">{"    "}</span><span className="text-[#e06c75]">&lt;/section&gt;</span><br />
                <span className="text-[#abb2bf]">{"  "}</span><span className="text-[#abb2bf]">)</span><br />
                <span className="text-[#abb2bf]">{"}"}</span>
                {/* Blinking cursor */}
                <span className="inline-block w-[6px] h-[10px] bg-accent/70 ml-0.5 -mb-[1px]" style={{ animation: 'cursor-blink 1.1s step-end infinite' }} />
              </div>
            </div>
          </div>

          {/* Screen reflection */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Monitor neck / stand */}
      <div className="absolute bottom-[72px] left-1/2 -translate-x-1/2 w-[14px] h-[14px] bg-gradient-to-b from-[#1a1a20] to-[#141418] border border-border/25 z-19" />

      {/* Monitor base */}
      <div className="absolute bottom-[68px] left-1/2 -translate-x-1/2 w-[80px] h-[6px] bg-gradient-to-b from-[#1a1a20] to-[#141418] border border-border/25 rounded-sm z-19" />

      {/* === KEYBOARD === */}
      <div className="absolute bottom-[50px] left-1/2 -translate-x-[30px] z-20">
        <div className="w-[160px] h-[10px] bg-gradient-to-b from-[#1c1c22] to-[#16161c] border border-border/30 rounded-[3px] relative">
          <div className="absolute inset-[2px] flex flex-col gap-[1px]">
            <div className="flex gap-[1px]">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="flex-1 h-[1.5px] bg-border/25 rounded-[0.5px]" />
              ))}
            </div>
            <div className="flex gap-[1px]">
              {[...Array(11)].map((_, i) => (
                <div key={i} className="flex-1 h-[1.5px] bg-border/20 rounded-[0.5px]" />
              ))}
            </div>
            <div className="flex gap-[1px]">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="flex-1 h-[1.5px] bg-border/20 rounded-[0.5px]" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* === MOUSE === */}
      <div className="absolute bottom-[52px] left-1/2 translate-x-[100px] z-20">
        <div className="w-[16px] h-[22px] bg-gradient-to-b from-[#1c1c22] to-[#16161c] border border-border/30 rounded-[6px_6px_8px_8px] relative">
          <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[2px] h-[6px] bg-border/20 rounded-full" />
        </div>
      </div>

      {/* === PLANT === */}
      <div className="absolute bottom-[84px] right-[24px] z-25" style={{ animation: 'desk-sway 6s ease-in-out infinite' }}>
        <div className="relative">
          <div className="relative w-[36px] h-[36px] -mb-1">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-[12px] bg-emerald-800/60" />
            <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-[8px] h-[14px] bg-emerald-600/90 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] -translate-y-full" />
            <div className="absolute bottom-[8px] left-[4px] w-[7px] h-[12px] bg-emerald-500/80 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] -rotate-[25deg] -translate-y-[85%]" />
            <div className="absolute bottom-[8px] right-[4px] w-[7px] h-[11px] bg-emerald-600/70 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] rotate-[20deg] -translate-y-[80%]" />
            <div className="absolute bottom-[6px] left-[1px] w-[6px] h-[9px] bg-emerald-700/60 rounded-[50%] -rotate-[40deg] -translate-y-[70%]" />
            <div className="absolute bottom-[16px] left-1/2 -translate-x-[2px] w-[5px] h-[8px] bg-emerald-400/50 rounded-[50%] rotate-[10deg] -translate-y-full" />
          </div>
          <div className="relative">
            <div className="w-[22px] h-[16px] mx-auto bg-gradient-to-b from-[#5c3d2e] to-[#4a2f22] rounded-b-md border border-[#6b4a38]/30" />
            <div className="w-[26px] h-[3px] mx-auto -mt-px bg-[#6b4a38]/60 rounded-t-sm border border-[#7a5842]/20" />
          </div>
        </div>
      </div>

      {/* === COFFEE MUG === */}
      <div className="absolute bottom-[84px] left-[20px] z-25">
        <div className="relative">
          {/* Steam */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex gap-[3px]">
            <div className="w-[1.5px] h-[8px] bg-text-muted/15 rounded-full" style={{ animation: 'float-particle 2.5s ease-in-out infinite' }} />
            <div className="w-[1.5px] h-[10px] bg-text-muted/10 rounded-full" style={{ animation: 'float-particle 3s ease-in-out infinite 0.4s' }} />
            <div className="w-[1.5px] h-[7px] bg-text-muted/15 rounded-full" style={{ animation: 'float-particle 2.8s ease-in-out infinite 0.8s' }} />
          </div>
          <div className="w-[20px] h-[18px] bg-gradient-to-b from-[#2a2a32] to-[#222228] border border-border/30 rounded-b-sm rounded-tr-lg relative">
            <div className="absolute top-[3px] right-[-6px] w-[5px] h-[10px] border-2 border-border/25 rounded-r-full border-l-0" />
            <div className="absolute top-[2px] left-[2px] right-[2px] h-[3px] bg-[#3d2b1f] rounded-full opacity-60" />
          </div>
          <div className="w-[28px] h-[3px] mx-auto -mt-px bg-gradient-to-b from-[#2a2a32] to-[#222228] border border-border/20 rounded-full" />
        </div>
      </div>

      {/* === AMBIENT EFFECTS === */}
      {/* Monitor glow on desk — pulsing */}
      <div className="absolute bottom-[60px] left-1/2 -translate-x-1/2 w-[280px] h-[20px] bg-accent/[0.04] blur-lg rounded-full z-15" style={{ animation: 'screen-glow-pulse 4s ease-in-out infinite' }} />

      {/* Subtle shadow under desk */}
      <div className="absolute bottom-[-4px] left-[10px] right-[10px] h-[10px] bg-black/25 blur-md rounded-full z-0" />

      {/* Side ambient glow */}
      <div className="absolute top-1/2 right-[-20px] w-[100px] h-[200px] bg-accent/[0.02] blur-2xl rounded-full z-0" />

      {/* Floating particles */}
      <div className="absolute top-12 left-[40%] w-1 h-1 bg-accent/25 rounded-full z-30" style={{ animation: 'float-particle 4s ease-in-out infinite' }} />
      <div className="absolute top-20 right-[15%] w-1.5 h-1.5 bg-accent/15 rounded-full z-30" style={{ animation: 'float-particle 5s ease-in-out infinite 1.2s' }} />
      <div className="absolute bottom-40 left-[15%] w-1 h-1 bg-emerald-500/20 rounded-full z-30" style={{ animation: 'float-particle 3.5s ease-in-out infinite 0.6s' }} />
      <div className="absolute top-[45%] right-[8%] w-0.5 h-0.5 bg-white/20 rounded-full z-30" style={{ animation: 'float-particle 3s ease-in-out infinite 2s' }} />
    </div>
  )
}
