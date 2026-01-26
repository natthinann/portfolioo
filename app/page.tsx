"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Github, Mail, MapPin, Phone,
  Code2, BookOpen, Facebook,
  Layout, Smartphone, Cpu, Globe2, Palette,
  ArrowUpRight, MessageCircle, Terminal, Database, Sparkles, ExternalLink
} from 'lucide-react';
import Footer from '@/components/Footer';

const Portfolio = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const skills = [
    { name: 'HTML/CSS', icon: <Globe2 size={22} />, color: 'from-[#FF0080] to-[#7928CA]' },
    { name: 'JavaScript', icon: <Terminal size={22} />, color: 'from-[#FAD961] to-[#F76B1C]' },
    { name: 'Vue.js', icon: <Layout size={22} />, color: 'from-[#42B883] to-[#004733]' },
    { name: 'Next.js', icon: <Cpu size={22} />, color: 'from-[#000000] to-[#434343]' },
    { name: 'Tailwind', icon: <Palette size={22} />, color: 'from-[#00DFD8] to-[#007CF0]' },
    { name: 'Figma', icon: <Layout size={22} />, color: 'from-[#FF4D4D] to-[#F9CB28]' },
    { name: 'Github', icon: <Github size={22} />, color: 'from-[#24292F] to-[#4B5563]' },
    { name: 'Postman', icon: <Database size={22} />, color: 'from-[#FF6C37] to-[#FF3D00]' },
    { name: 'VS Code', icon: <Code2 size={22} />, color: 'from-[#007ACC] to-[#1E90FF]' },
  ];

  const projects = [
    {
      title: "SECOND-UP",
      tech: "Vue.js / UI Design",
      desc: "A sleek secondhand marketplace designed for Gen-Z style.",
      icon: <Smartphone size={28} className="text-pink-500" />,
      color: "hover:shadow-pink-200/50 hover:border-pink-200",
      github: "https://github.com/suphawidasadao/web.git",
      figma: "https://www.figma.com/design/MWOchG9fuPZdihhe9zZSW8/Project-Web-9-Second-UP?node-id=54-178&t=oqAYxuTcGn7V5t4z-1"
    },
    {
      title: "T-POP HUB",
      tech: "Next.js / Dashboard",
      desc: "Tracking music charts with real-time data visualization.",
      icon: <Globe2 size={28} className="text-cyan-500" />,
      color: "hover:shadow-cyan-200/50 hover:border-cyan-200",
      github: "https://github.com/suphawidasadao/tpop-web.git",
      figma: "https://www.figma.com/design/XKGRX820VBEZX0J3pTe4mx/T-pop?node-id=1445-294&t=XaBEHbEh2U9d4CoU-1"
    },
    {
      title: "DIVERFLEX",
      tech: "Next.js / Rental System",
      desc: "A car rental application focusing on seamless booking flow.",
      icon: <Cpu size={28} className="text-violet-500" />,
      color: "hover:shadow-violet-200/50 hover:border-violet-200",
      github: "https://github.com/suphawidasadao/myproject.git",
      figma: "https://www.figma.com/design/Ix6MZLHuxLTG1M9PvLekH4/%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A%E0%B9%80%E0%B8%8A%E0%B9%88%E0%B8%B2%E0%B8%A3%E0%B8%96?node-id=218-35&t=rzwJPsJINW9sjPP3-1"
    },
    {
      title: "ClassBoard",
      tech: "Next.js / Rental System",
      desc: "A streamlined car rental management system for class operations.",
      icon: <Cpu size={28} className="text-orange-500" />,
      color: "hover:shadow-orange-200/50 hover:border-orange-200",
      github: "https://github.com/suphawidasadao/classboard.git",
      figma: "https://www.figma.com/design/KCWMon17mlCmngXjrzEP6w/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B8%9A%E0%B8%97%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%97%E0%B8%94%E0%B8%AA%E0%B8%AD%E0%B8%9A%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C?node-id=0-1&t=Hhy774urw2ayZemF-1"
    },
    {
      title: "Real-time Media Display",
      tech: "Figma / Prototype",
      desc: "Interactive dashboard prototype for real-time media monitoring.",
      icon: <Cpu size={28} className="text-green-500" />,
      color: "hover:shadow-green-200/50 hover:border-green-200",
      github: null,
      figma: "https://www.figma.com/design/03plrOVueunrmc1Zy0fzBH/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%AA%E0%B8%94%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%A5%E0%B9%84%E0%B8%97%E0%B8%A1%E0%B9%8C?node-id=41-285&t=MXILv2ZA6RpIBSPx-1"
    }
  ];

  const contactInfo = [
    { icon: <Mail className="text-pink-500" size={18} />, text: "Phanmart08@gmail.com" },
    { icon: <Phone className="text-cyan-500" size={18} />, text: "098-825-3724" },
    { icon: <MessageCircle className="text-violet-500" size={18} />, text: "LINE ID: 0988253724" },
    { icon: <Facebook className="text-blue-500" size={18} />, text: "Natthinan Phanmart" },
    { icon: <MapPin className="text-pink-500" size={18} />, text: "Chiang Mai, Thailand" },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-sans selection:bg-pink-500 selection:text-white overflow-x-hidden">
      {/* Dynamic Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/20 blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-pink-600/20 blur-[150px] animate-pulse" />
      </div>

      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 px-6 py-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-4 bg-slate-900/60 backdrop-blur-3xl border border-white/10 shadow-2xl rounded-3xl">
          <span className="text-2xl font-black tracking-tighter italic bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            PORTFOLIO.
          </span>
          <div className="hidden md:flex gap-10 text-[11px] font-extrabold uppercase tracking-[0.3em] text-slate-400">
            <a href="#about" className="hover:text-pink-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-violet-400 transition-colors">Projects</a>
          </div>
          <div className="px-5 py-2 bg-linear-to-r from-pink-600 to-violet-600 text-white text-[10px] font-black rounded-full tracking-widest shadow-lg shadow-pink-900/20">S.E. STUDENT</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-44 md:pt-56 pb-24 px-6 z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div className="flex-[1.2] text-center md:text-left order-2 md:order-1" initial="initial" animate="whileInView" variants={fadeIn}>
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 backdrop-blur-md text-pink-400 rounded-full text-[11px] font-black tracking-[0.2em] mb-8">
              <Sparkles size={14} className="animate-spin-slow" />
              OPEN FOR OPPORTUNITIES
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.85] mb-8">
              <span className="text-white">Natthinan</span> <br />
              <span className="bg-linear-to-r from-pink-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">Phanmart</span>
            </h1>

            <div className="flex items-center justify-center md:justify-start gap-4 mb-10">
              <div className="h-2 w-16 bg-linear-to-r from-pink-500 to-violet-500 rounded-full" />
              <h2 className="text-2xl md:text-3xl font-black text-cyan-400 uppercase tracking-tighter text-balance">UX/UI Designer & Developer</h2>
            </div>

            <p className="text-lg md:text-xl text-slate-400 max-w-lg mb-12 leading-relaxed font-medium mx-auto md:mx-0">
              My core strengths include dedication and commitment to work, a strong sense of teamwork, a passion to enjoy learning new things, and the perseverance and patience to succeed.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
              <a href="mailto:Phanmart08@gmail.com" className="group bg-white text-slate-900 px-10 py-5 rounded-2xl font-black hover:bg-pink-500 hover:text-white transition-all shadow-xl shadow-white/5 flex items-center justify-center gap-3">
                LET'S TALK
                <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
              </a>
              <div className="flex gap-4">
                <a href="#" className="p-5 bg-slate-800/50 border border-white/10 rounded-2xl hover:bg-pink-500/10 hover:border-pink-500 transition-all"><Github size={24} /></a>
                <a href="#" className="p-5 bg-slate-800/50 border border-white/10 rounded-2xl hover:bg-violet-500/10 hover:border-violet-500 transition-all text-violet-400"><Facebook size={24} /></a>
              </div>
            </div>
          </motion.div>

          <motion.div className="flex-1 relative order-1 md:order-2" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <div className="relative mx-auto w-fit">
              <div className="absolute inset-0 bg-linear-to-tr from-pink-600 to-cyan-500 rounded-[4rem] blur-[60px] opacity-30 animate-pulse" />
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="relative z-10 w-64 md:w-80 aspect-4/5 bg-linear-to-tr from-pink-500 to-violet-600 p-1 shadow-2xl rounded-[3.8rem] overflow-hidden">
                <div className="w-full h-full overflow-hidden rounded-[3.5rem] relative bg-slate-900">
                  <img src="/นักศึกษา.jpg" alt="Profile" className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-900/50 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-5xl font-black tracking-tighter mb-2 italic uppercase">My<span className="text-pink-500">Toolkit</span></h2>
            <p className="text-cyan-400 font-bold tracking-[0.3em] uppercase text-xs">Skills & Technologies</p>
          </div>
          <p className="text-slate-500 font-bold max-w-[300] text-sm md:text-right italic">Pushing the boundaries of what's possible in the browser.</p>
        </div>

        <div className="relative flex overflow-hidden py-4">
          <motion.div className="flex flex-nowrap gap-8" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 30, ease: "linear", repeat: Infinity }} style={{ width: "max-content" }}>
            {[...skills, ...skills].map((skill, index) => (
              <div key={index} className="w-44 md:w-56 p-10 bg-slate-800/40 backdrop-blur-md rounded-[3rem] flex flex-col items-center justify-center gap-6 shrink-0 hover:bg-slate-700/50 transition-all border border-white/5 hover:border-pink-500/50 group">
                <div className={`p-5 rounded-3xl bg-linear-to-tr ${skill.color} text-white shadow-2xl group-hover:scale-110 transition-transform`}>
                  {skill.icon}
                </div>
                <span className="font-black text-white tracking-widest text-xs uppercase">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto bg-linear-to-br from-slate-900 to-black rounded-[4rem] p-8 md:p-20 relative overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 right-0 w-[500] h-[500] bg-pink-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[500] h-[500] bg-cyan-600/10 blur-[120px] rounded-full" />

          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-12 tracking-tighter uppercase italic leading-[0.9]">
                Software <br />
                <span className="inline-block py-2 pr-4 bg-linear-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">Engineering</span>
              </h2>

              <div className="flex flex-wrap gap-3 mb-10">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 md:p-5 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 hover:border-white/30 transition-all w-fit">
                    <div className="shrink-0">{item.icon}</div>
                    <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest whitespace-nowrap text-white/90">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-linear-to-br from-pink-600 via-violet-700 to-indigo-800 p-10 md:p-12 rounded-[4rem] text-white shadow-2xl relative group overflow-hidden self-start">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
              <BookOpen className="mb-8 opacity-50" size={50} />
              <h3 className="whitespace-nowrap text-4xl font-black mb-3 uppercase tracking-tighter leading-tight text-balance underline decoration-cyan-400">University of Phayao</h3>
              <div className="text-pink-200 text-lg font-bold mb-10 italic opacity-90  decoration-4 underline-offset-8">
                <p className="whitespace-nowrap">Information Technology and Communication</p>
                <p>Software Engineering</p>
              </div>
              <div className="pt-8 border-t border-white/20">
                <p className="text-[11px] font-black tracking-[0.5em] uppercase opacity-60 mb-2">EDUCATION</p>
                <p className="text-3xl font-black italic tracking-tighter">2023 <span className="text-cyan-400">—</span> NOW</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-4">
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter italic uppercase leading-[0.8]">
              Project <br />
              <span className="inline-block pr-[0.2em] bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">and Works</span>
            </h2>
            <div className="text-cyan-400 font-black text-xs uppercase tracking-[0.5em] mb-4 border-b-4 border-cyan-400 pb-2">Project.</div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className={`group p-10 bg-slate-900 border border-white/5 rounded-[3.5rem] transition-all duration-500 shadow-2xl relative overflow-hidden flex flex-col ${p.color}`}
              >
                <div className="mb-8 flex justify-between items-start relative z-10">
                  <div className="p-5 bg-slate-800 rounded-2xl group-hover:bg-white group-hover:text-slate-900 transition-all duration-500 shadow-xl">
                    {p.icon}
                  </div>
                  <div className="text-white/20 group-hover:text-pink-500 transition-colors">
                    <Sparkles size={20} />
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-3 tracking-tighter uppercase group-hover:text-white transition-colors">{p.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed font-bold text-xs h-12 overflow-hidden italic">
                    {p.desc}
                  </p>
                  <div className="mb-8 inline-block px-4 py-1.5 bg-white/5 rounded-full text-[9px] font-black uppercase tracking-widest text-cyan-400 border border-white/10 group-hover:border-cyan-400/50 transition-all">
                    {p.tech}
                  </div>
                </div>

                {/* Separate Action Buttons */}
                <div className="mt-auto flex gap-3 pt-6 border-t border-white/5 relative z-10">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white hover:text-slate-900 rounded-xl transition-all text-[10px] font-black tracking-widest border border-white/10"
                    >
                      <Github size={14} /> GITHUB
                    </a>
                  )}
                  {p.figma && (
                    <a
                      href={p.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-pink-600 text-white rounded-xl transition-all text-[10px] font-black tracking-widest border border-white/10"
                    >
                      <Layout size={14} /> FIGMA
                    </a>
                  )}
                </div>

                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-pink-500/10 transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
};

export default Portfolio;