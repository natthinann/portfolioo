"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiBookOpen } from 'react-icons/fi';
import { SiGithub, SiFacebook, SiLine, SiVercel, SiFigma } from 'react-icons/si';

const Portfolio = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const skills = [
    { name: 'HTML/CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: 'from-[#FF0080] to-[#7928CA]' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: 'from-[#FAD961] to-[#F76B1C]' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', color: 'from-[#42B883] to-[#004733]' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: 'from-[#000000] to-[#434343]' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'from-[#007ACC] to-[#1E90FF]' },
    { name: 'Tailwind', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', color: 'from-[#00DFD8] to-[#007CF0]' },
    { name: 'Github', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: 'from-[#FFFFFF] to-[#888888]' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', color: 'from-[#007ACC] to-[#1E90FF]' },
    { name: 'Figma', icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg', color: 'from-[#FF4D4D] to-[#F9CB28]' },
    { name: 'Canva', icon: 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg', color: 'from-[#00C4CC] to-[#7D2AE8]' }
  ];

  const projects = [
    {
      title: "SECOND-UP",
      tech: "Vue.js / UI Design",
      desc: "An easy way to buy and sell secondhand clothes. Simple and stylish.",
      image: "/secondup.png",
      color: "hover:shadow-pink-200/50 hover:border-pink-200",
      github: "https://github.com/suphawidasadao/web.git",
      figma: "https://www.figma.com/design/MWOchG9fuPZdihhe9zZSW8/Project-Web-9-Second-UP?node-id=54-178&t=oqAYxuTcGn7V5t4z-1"
    },
    {
      title: "T-POP HUB",
      tech: "Next.js / Dashboard",
      desc: "A stylish platform for following Thai artists and tracking monthly music charts.",
      image: "/t-pop hub.png",
      color: "hover:shadow-cyan-200/50 hover:border-cyan-200",
      github: "https://github.com/suphawidasadao/tpop-web.git",
      figma: "https://www.figma.com/design/XKGRX820VBEZX0J3pTe4mx/T-pop?node-id=1445-294&t=XaBEHbEh2U9d4CoU-1"
    },
    {
      title: "DIVERFLEX",
      tech: "Next.js / Rental System",
      desc: "A car rental application that focuses on a simple booking process.",
      image: "/diverflex.png",
      color: "hover:shadow-violet-200/50 hover:border-violet-200",
      github: "https://github.com/suphawidasadao/myproject.git",
      figma: "https://www.figma.com/design/Ix6MZLHuxLTG1M9PvLekH4/%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A%E0%B9%80%E0%B8%8A%E0%B9%88%E0%B8%B2%E0%B8%A3%E0%B8%96?node-id=218-35&t=rzwJPsJINW9sjPP3-1"
    },
    {
      title: "ClassBoard",
      tech: "Next.js / Learning System",
      desc: "An online learning platform where you can create your own lessons or take quizzes.",
      image: "/classboard.png",
      color: "hover:shadow-orange-200/50 hover:border-orange-200",
      github: "https://github.com/suphawidasadao/classboard.git",
      figma: "https://www.figma.com/design/KCWMon17mlCmngXjrzEP6w/%E0%B8%A3%E0%B8%B0%E0%B8%9B%E0%B9%81%E0%B8%AA%E0%B8%94%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%A5%E0%B9%84%E0%B8%97%E0%B8%A1%E0%B9%8C?node-id=0-1&t=Hhy774urw2ayZemF-1"
    },
    {
      title: "Real-time Media Display",
      tech: "Figma / Next.js / Vercel",
      desc: "Interactive dashboard for real-time media monitoring and display management.",
      image: "/realtime.png",
      color: "hover:shadow-green-200/50 hover:border-green-200",
      figma: "https://www.figma.com/design/03plrOVueunrmc1Zy0fzBH/%E0%B8%A3%E0%B8%B0%E0%B8%9B%E0%B9%81%E0%B8%AA%E0%B8%94%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%A5%E0%B9%84%E0%B8%97%E0%B8%A1%E0%B9%8C?node-id=41-285&t=MXILv2ZA6RpIBSPx-1",
      vercel: "https://rtmedia.vercel.app/"
    },
  ];

  const contactInfo = [
    { icon: <FiMail className="text-pink-500" size={18} />, text: "Phanmart08@gmail.com" },
    { icon: <FiPhone className="text-violet-500" size={18} />, text: "098-825-3724" },
    { icon: <SiLine className="text-emerald-500" size={18} />, text: "LINE ID: 0988253724" },
    { icon: <SiFacebook className="text-blue-500" size={18} />, text: "Natthinan Phanmart" },
    { icon: <FiMapPin className="text-cyan-500" size={18} />, text: "Chiang Mai, Thailand" },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-sans selection:bg-pink-500 selection:text-white overflow-x-hidden">
      <Navbar />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/20 blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-pink-600/20 blur-[150px] animate-pulse" />
      </div>

      <section className="relative pt-44 pb-24 px-6 z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div className="flex-[1.2] text-center md:text-left order-2 md:order-1" initial="initial" animate="whileInView" variants={fadeIn}>
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 backdrop-blur-md text-pink-400 rounded-full text-[11px] font-black tracking-[0.2em] mb-8 uppercase">
              <span className="inline-block w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
              OPEN FOR OPPORTUNITIES
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.85] mb-8">
              <span className="text-white">Natthinan</span> <br />
              <span className="bg-linear-to-r from-pink-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">Phanmart</span>
            </h1>

            <div className="flex items-center justify-center md:justify-start gap-4 mb-10">
              <div className="h-2 w-16 bg-linear-to-r from-pink-500 to-violet-500 rounded-full" />
              <h2 className="text-2xl md:text-3xl font-black text-cyan-400 uppercase tracking-tighter">UX/UI Design</h2>
            </div>

            <p className="text-lg text-slate-400 max-w-lg mb-12 leading-relaxed font-medium mx-auto md:mx-0">
              "Hello, my name is Natthinan Phanmart, a 3rd-year Software Engineering student. I am seeking an opportunity as a UX/UI Designer. I am passionate about user-centric design and, with my technical background, I can effectively bridge design and development. I am a collaborative team player, ready to learn, and eager to contribute to your team. Thank you!"
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <a
                href="mailto:Phanmart08@gmail.com"
                className="group relative px-10 py-5 flex items-center justify-center gap-3 overflow-hidden rounded-4xl font-black tracking-[0.15em] uppercase transition-all duration-500 hover:scale-105 active:scale-95 shadow-lg shadow-pink-500/20">
                <div className="absolute inset-0 bg-linear-to-r from-pink-500 via-violet-600 to-indigo-600 transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-pink-500/50" />
                <span className="relative z-10 text-white">Send Email</span>
                <FiMail size={22} className="relative z-10 text-white group-hover:rotate-12 transition-transform duration-300" />
              </a>

              <a
                href="tel:0988253724"
                className="group relative px-10 py-5 flex items-center justify-center gap-3 overflow-hidden rounded-4xl font-black tracking-[0.15em] uppercase border-2 border-cyan-400/50 transition-all duration-500 hover:bg-cyan-400/10 hover:border-cyan-400 shadow-lg">
                <span className="text-cyan-400 transition-colors duration-300">Call Me</span>
                <FiPhone size={20} className="text-cyan-400 group-hover:animate-bounce transition-transform" />
                <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-5 transition-opacity" />
              </a>
            </div>
          </motion.div>

          <motion.div className="flex-1 relative order-1 md:order-2" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <div className="relative mx-auto w-fit">
              <div className="absolute inset-0 bg-linear-to-tr from-pink-600 to-cyan-500 rounded-[4rem] blur-[60px] opacity-30 animate-pulse" />
              <div className="relative z-10 w-64 md:w-80 aspect-4/5 bg-linear-to-tr from-pink-500 to-violet-600 p-1 rounded-[3.8rem] overflow-hidden">
                <div className="w-full h-full overflow-hidden rounded-[3.5rem] bg-slate-900">
                  <img src="/profile.JPG" alt="Profile" className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="py-24 bg-slate-900/50 backdrop-blur-sm border-y border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <h2 className="text-5xl font-black tracking-tighter mb-2 italic uppercase">My<span className="text-pink-500">Toolkit</span></h2>
          <p className="text-cyan-400 font-bold tracking-[0.3em] uppercase text-xs">Skills & Technologies</p>
        </div>
        <div className="relative flex overflow-hidden py-4">
          <motion.div className="flex flex-nowrap gap-8" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 30, ease: "linear", repeat: Infinity }} style={{ width: "max-content" }}>
            {[...skills, ...skills].map((skill, index) => (
              <div key={index} className="w-44 md:w-52 p-8 bg-slate-800/30 backdrop-blur-md rounded-[2.5rem] flex flex-col items-center justify-center gap-6 shrink-0 border border-white/5 group transition-all duration-500 hover:border-white/20">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className={`absolute inset-0 bg-linear-to-tr ${skill.color} blur-xl opacity-20 group-hover:opacity-50 transition-opacity duration-500`} />
                  <img src={skill.icon} alt={skill.name} className={`w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-110 ${skill.name === 'Github' ? 'brightness-0 invert' : ''}`} />
                </div>
                <span className="font-black text-white/70 tracking-[0.2em] text-[10px] uppercase group-hover:text-white transition-colors">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase leading-tight text-white">
              Project <br />
              <span className="inline-block pr-3 bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                and Works
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {projects.map((p, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className={`group bg-slate-900 border border-white/5 rounded-[2.5rem] transition-all duration-500 shadow-2xl relative overflow-hidden flex flex-col ${p.color}`}>
                <div className="aspect-video w-full bg-slate-800 overflow-hidden relative border-b border-white/5">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8 flex flex-col relative z-10">
                  <h3 className="text-xl font-black tracking-tighter uppercase text-white group-hover:text-pink-500 transition-colors mb-4">{p.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed font-bold text-[13px] italic">{p.desc}</p>
                  <div className="mb-8">
                    <span className="px-3 py-1 bg-white/5 rounded-full text-[9px] font-black uppercase tracking-widest text-cyan-400 border border-white/10">{p.tech}</span>
                  </div>
                  <div className="flex gap-2 pt-6 border-t border-white/5 flex-wrap">
                    {p.github && <a href={p.github} target="_blank" className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/10 hover:bg-white hover:text-slate-900 rounded-xl transition-all text-[9px] font-black tracking-widest border border-white/10 text-white min-w-20"><SiGithub size={14} /> GITHUB</a>}
                    {p.figma && <a href={p.figma} target="_blank" className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/10 hover:bg-[#F24E1E] text-white rounded-xl transition-all text-[9px] font-black tracking-widest border border-white/10 min-w-20"><SiFigma size={14} /> FIGMA</a>}
                    {p.vercel && <a href={p.vercel} target="_blank" className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/10 hover:bg-black text-white rounded-xl transition-all text-[9px] font-black tracking-widest border border-white/10 min-w-20"><SiVercel size={12} /> VERCEL</a>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-section" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-slate-900/40 rounded-[4rem] p-8 md:p-20 border border-white/5 backdrop-blur-md">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-12 tracking-tighter uppercase italic leading-none">
                Contact &<br />
                <span className="inline-block pr-6 pb-2 bg-linear-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">EDUCATION</span>
              </h2>
              <div className="flex flex-wrap gap-3 mb-10">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white/5 rounded-full border border-white/10">
                    {item.icon}
                    <span className="text-[10px] md:text-[11px] font-black tracking-widest text-white/90">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-linear-to-br from-pink-600 to-indigo-800 p-10 md:p-12 rounded-[4rem] text-white shadow-2xl">
              <FiBookOpen className="mb-8 opacity-50" size={50} />
              <h3 className="text-3xl font-black mb-3 uppercase tracking-tighter underline decoration-cyan-400">University of Phayao</h3>
              <p className="text-pink-100 text-lg font-bold italic"> Faculty of Information and Communication Technology</p> <br/>
              <p className="text-pink-100 text-lg font-bold italic">Software Engineering</p> 
              <div className="pt-8 border-t border-white/20 uppercase mt-10">
                <p className="text-3xl font-black italic">2023 <span className="text-cyan-400">—</span> NOW</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <style jsx global>{`
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
};

export default Portfolio;