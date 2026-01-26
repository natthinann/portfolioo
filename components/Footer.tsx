"use client";

export default function Footer() {
    return (
      <footer className="py-24 text-center">
        <div className="h-px w-20 bg-slate-200 mx-auto mb-10" role="presentation" />
        <p
          className="text-xl font-black mb-4 bg-clip-text text-transparent italic"
          style={{ backgroundImage: 'linear-gradient(to right, #2563eb, #4f46e5)' }}
        >
          "Pixel Perfect, Code Reliable."
        </p>
        <p className="text-slate-400 text-[10px] font-black tracking-[0.4em] uppercase">
          © 2026 NATTHINAN PHANMART
        </p>
      </footer>
    );
  }