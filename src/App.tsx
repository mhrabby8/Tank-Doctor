/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Wrench, 
  Droplets, 
  ShieldCheck, 
  Clock, 
  MessageCircle, 
  Camera, 
  Bike, 
  MapPin, 
  CheckCircle2, 
  AlertTriangle,
  Flame,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/50 backdrop-blur-md border-b border-white/5">
    <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center font-bold text-xl skew-x-[-12deg] shadow-lg shadow-red-600/20">
          <Wrench className="w-5 h-5 text-white" />
        </div>
        <div className="leading-tight">
          <h1 className="text-xl font-black tracking-tight text-white uppercase">ট্যাংক <span className="text-red-500">ডক্টর</span></h1>
          <p className="text-[10px] text-red-500 font-bold tracking-[0.2em] uppercase">Bike Tank Specialists</p>
        </div>
      </div>
      <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
        <a href="#" className="hover:text-red-500 transition-colors">হোম</a>
        <a href="#contact" className="hover:text-red-500 transition-colors">সার্ভিস</a>
        <a href="#contact" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">ইনবক্স করুন</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-40 pb-20 overflow-hidden">
    {/* Background Glow */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 blur-[150px] -z-10 rounded-full" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-800/10 blur-[150px] -z-10 rounded-full" />

    <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
      <motion.div 
        initial="initial"
        animate="animate"
        variants={stagger}
        className="lg:col-span-7 space-y-8"
      >
        <motion.div variants={fadeIn} className="inline-block px-3 py-1 bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
          #১ বাইক ট্যাংক রিপেয়ার সল্যুশন
        </motion.div>
        
        <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl font-black text-white leading-[1] tracking-tighter italic skew-x-[-2deg]">
          বাইক ট্যাংকে <span className="text-red-600 underline decoration-white/10">ফুটো</span> বা লিক?
        </motion.h1>
        
        <motion.p variants={fadeIn} className="text-xl text-slate-400 max-w-lg leading-relaxed font-medium">
          নতুন ট্যাংক কেনার আগে রিপেয়ার করে খরচ বাঁচান। আমরা দিচ্ছি ১০০% লিক প্রুফ গ্যারান্টি।
        </motion.p>
        
        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-6">
          <a 
            href="#contact" 
            className="flex items-center justify-center gap-4 bg-red-600 text-white px-10 py-5 rounded-xl font-black text-xl shadow-2xl shadow-red-600/40 transform hover:scale-[1.02] active:scale-95 transition-all group"
          >
            ইনবক্স করুন এখনই
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex items-center gap-4 px-6 py-3 rounded-xl bg-slate-900 border border-white/5">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800" />
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-white text-sm font-bold tracking-tight">৫০০+ বাইক</span>
              <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">মেরামত হয়েছে</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-5 relative"
      >
        <div className="relative bg-slate-900 border border-white/5 rounded-[40px] p-2 shadow-inner group overflow-hidden">
          <div className="aspect-[4/5] rounded-[36px] overflow-hidden">
            <img 
              src="https://raw.githubusercontent.com/md-rabby/bike-tank-doctor/main/images/10.jpg" 
              alt="Repaired bike tanks" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600/20 text-red-500 rounded-full flex items-center justify-center shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-black tracking-widest text-red-500 mb-0.5">গ্যারান্টি</p>
                <p className="text-xs text-slate-200 font-bold leading-relaxed">অত্যাধুনিক প্রযুক্তিতে লিক রিপেয়ার এবং কোটিং</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const ProblemSection = () => {
  const problems = [
    { title: "ফুয়েল লিক", icon: Droplets, img: "https://raw.githubusercontent.com/md-rabby/bike-tank-doctor/main/images/5.jpg" },
    { title: "মরিচা পড়া", icon: AlertTriangle, img: "https://raw.githubusercontent.com/md-rabby/bike-tank-doctor/main/images/4.jpg" },
    { title: "ছোট ফুটো", icon: Wrench, img: "https://raw.githubusercontent.com/md-rabby/bike-tank-doctor/main/images/11.jpg" },
    { title: "ওয়েল্ডিং ক্র্যাক", icon: Flame, img: "https://raw.githubusercontent.com/md-rabby/bike-tank-doctor/main/images/8.jpg" },
  ];

  return (
    <section className="py-24 bg-slate-900/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-6">
          <p className="text-red-500 text-[10px] font-black uppercase tracking-[0.3em] italic">সমস্যা শনাক্তকরণ</p>
          <h2 className="text-4xl md:text-6xl font-black text-white italic skew-x-[-2deg]">আপনার ট্যাংকে কি এই <span className="text-red-600">সমস্যাগুলো</span> আছে?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {problems.map((prob, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="group relative h-80 rounded-[2.5rem] overflow-hidden border border-white/5 bg-slate-900/40"
            >
              <img src={prob.img} alt={prob.title} className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-500 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent">
                <div className="w-12 h-12 rounded-xl bg-red-600/20 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
                  <prob.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-white italic">{prob.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const benefits = [
    { title: "সাশ্রয়ী খরচ", desc: "নতুন ট্যাংক কেনার তুলনায় ৯০% পর্যন্ত খরচ বাঁচে।", icon: Clock },
    { title: "অরিজিনাল ট্যাংক", desc: "আপনার বাইকের আসল ফিটিংস এবং কোয়ালিটি বজায় থাকে।", icon: ShieldCheck },
    { title: "দ্রুত ডেলিভারি", desc: "খুব অল্প সময়ে কাজ শেষ করে ডেলিভারি দেওয়া হয়।", icon: Bike },
    { title: "লিক টেস্ট", desc: "হস্তান্তরের আগে আমরা ২ ধাপে লিক টেস্ট নিশ্চিত করি।", icon: CheckCircle2 },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <p className="text-red-500 text-[10px] font-black uppercase tracking-[0.3em] italic">সেরা কেন আমরা?</p>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-[1] italic skew-x-[-2deg]">কেন আমাদের কাছে <span className="text-red-500">রিপেয়ার</span> করবেন?</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-10">
              {benefits.map((item, idx) => (
                <div key={idx} className="group p-6 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-red-600/20 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-500 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white mb-2 italic">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600 rounded-full blur-[80px] opacity-20" />
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/5 bg-slate-900 relative">
              <img src="https://raw.githubusercontent.com/md-rabby/bike-tank-doctor/main/images/1.jpg" alt="Service quality" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-slate-950/20" />
            </div>
            
            <div className="absolute -right-6 bottom-12 hidden xl:block">
              <div className="bg-slate-900 p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6 skew-x-[-2deg]">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-8 bg-red-600 rounded-full" />
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Live Support</span>
                </div>
                <div className="space-y-4">
                  <div className="w-56 h-3 bg-slate-800 rounded-full relative overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-red-600 w-3/4 rounded-full" />
                  </div>
                  <div className="w-40 h-3 bg-slate-800 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessSteps = () => {
  const steps = [
    { title: "পরিদর্শন", desc: "ট্যাংকের ভেতর ও বাহির সূক্ষ্মভাবে দেখা হয়।" },
    { title: "পরিষ্কার", desc: "মরিচা এবং ফুয়েল নিখুতভাবে সরানো হয়।" },
    { title: "মেরামত", desc: "অত্যাধুনিক পদ্ধতিতে লিক রিপেয়ার করা হয়।" },
    { title: "পরীক্ষা", desc: "চাপ প্রয়োগ করে চেক করা হয়।" },
    { title: "ডেলিভারি", desc: "পেন্টিং বা কোটিং করে প্রস্তুত করা হয়।" }
  ];

  return (
    <section className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="space-y-6 mb-20">
          <p className="text-red-500 text-[10px] font-black uppercase tracking-[0.3em] italic">মেরামত পদ্ধতি</p>
          <h2 className="text-4xl md:text-6xl font-black text-white italic skew-x-[-2deg]">কিভাবে কাজ <span className="text-red-500">সম্পন্ন</span> হয়?</h2>
        </div>
        
        <div className="grid md:grid-cols-5 gap-10">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="relative z-10 space-y-6">
                <div className="w-20 h-20 rounded-[2rem] bg-slate-900 border border-white/5 flex items-center justify-center text-red-500 font-black text-3xl mx-auto shadow-2xl group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 skew-x-[-4deg]">
                  {idx + 1}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white italic">{step.title}</h3>
                  <p className="text-slate-500 text-xs px-2 leading-relaxed">{step.desc}</p>
                </div>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-full h-[1px] bg-white/5 -z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-red-600/5 blur-[160px] -z-10 rounded-full" />
      
      <div className="max-w-4xl mx-auto px-4 text-center space-y-16">
        <div className="space-y-6">
          <p className="text-red-500 text-[10px] font-black uppercase tracking-[0.3em] italic">সরাসরি কথা বলুন</p>
          <h2 className="text-5xl md:text-8xl font-black text-white italic skew-x-[-2deg]">ইনবক্স করুন <span className="text-red-600 underline underline-offset-8 decoration-white/5">আজই</span></h2>
          <p className="text-xl text-slate-400 font-medium italic">আপনার বাইকের মডেল এবং সমস্যার ছবি পাঠিয়ে আমাদের থেকে পরামর্শ নিন।</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Bike, label: "মডেল বলুন" },
            { icon: Camera, label: "ছবি দিন" },
            { icon: MapPin, label: "লোকেশন জানান" }
          ].map((item, idx) => (
            <div key={idx} className="p-10 rounded-[3rem] bg-slate-900/40 border border-white/5 space-y-6 hover:bg-slate-900 transition-colors">
              <item.icon className="w-12 h-12 text-red-500 mx-auto" />
              <p className="font-black text-white italic tracking-tight">{item.label}</p>
            </div>
          ))}
        </div>

        <button className="w-full bg-red-600 hover:bg-red-700 text-white p-12 rounded-[3rem] flex flex-col items-center gap-6 group transition-all shadow-2xl shadow-red-600/40 transform hover:scale-[1.01]">
          <MessageCircle className="w-16 h-16 animate-bounce" />
          <div className="space-y-2">
            <span className="text-3xl font-black uppercase tracking-[0.1em] italic">ইনবক্স করুন এখনই</span>
            <div className="flex gap-4 opacity-70 text-xs font-bold uppercase tracking-widest justify-center">
              <span>ছবি তুলুন</span>
              <span>|</span>
              <span>সেন্ড করুন</span>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-white/5 bg-slate-950">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-3 opacity-80">
        <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center skew-x-[-12deg]">
          <Wrench className="w-4 h-4 text-white" />
        </div>
        <div className="leading-tight">
          <span className="font-black text-lg tracking-tighter text-white block uppercase">TANKDOCTOR</span>
          <span className="text-[8px] text-red-500 font-bold uppercase tracking-widest">Premium Repair</span>
        </div>
      </div>
      <p className="text-slate-600 text-sm font-medium italic">© ২০২৪ বাইক ট্যাংক ডক্টর। সকল স্বত্ব সংরক্ষিত।</p>
      <div className="flex gap-8">
        <a href="#" className="text-slate-600 hover:text-red-500 text-xs font-bold uppercase tracking-widest transition-colors">Facebook</a>
        <a href="#" className="text-slate-600 hover:text-red-500 text-xs font-bold uppercase tracking-widest transition-colors">YouTube</a>
      </div>
    </div>
  </footer>
);

const MobileCTA = () => (
  <div className="fixed bottom-6 left-6 right-6 z-[100] md:hidden">
    <a 
      href="#contact"
      className="flex items-center justify-between bg-red-600 text-white px-8 py-5 rounded-[2rem] shadow-2xl shadow-red-600/40 font-black italic skew-x-[-2deg]"
    >
      <div className="flex items-center gap-4">
        <MessageCircle className="w-7 h-7" />
        <span className="text-lg uppercase tracking-tight">ইনবক্স করুন</span>
      </div>
      <ChevronRight className="w-6 h-6 opacity-50" />
    </a>
  </div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-red-500/30 selection:text-red-500">
      <Nav />
      <main>
        <Hero />
        <ProblemSection />
        <WhyChooseUs />
        <ProcessSteps />
        <ContactSection />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
