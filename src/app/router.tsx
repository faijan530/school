import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet } from 'react-router-dom';
import { staticRepository } from '../content/staticRepository';
import { AdmissionEnquiryForm } from '../components/forms/AdmissionEnquiryForm';
import { GalleryExplorer } from '../components/gallery/GalleryExplorer';
import { 
  Home,
  Users, 
  BookOpen, 
  GraduationCap, 
  Image as ImageIcon, 
  Calendar, 
  Phone, 
  Search, 
  ArrowRight, 
  Play,
  Award,
  Lightbulb,
  Heart,
  Shield,
  Megaphone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  HelpCircle,
  CheckCircle2,
  ChevronDown,
  FileCheck,
  CheckSquare,
  Sparkles,
  Menu,
  X
} from 'lucide-react';

/* Animated Counter Component */
function AnimatedCounter({ target, suffix = "" }: { target: number, suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

function HomePage() {
  const profile = staticRepository.getSchoolProfile();

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section-container">
        <div className="hero-inner">
          {/* Hero Left Content */}
          <div className="hero-left">
            <div className="hero-badge-pill">
              <span>🌱</span> Shaping Young Minds Since 2005
            </div>

            <h1 className="hero-main-title">
              Nurturing <br />
              <span className="highlight-text-wrapper">
                Bright Minds
                <svg className="wavy-underline-svg" viewBox="0 0 240 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 12.5C40 3.5 80 18.5 120 7.5C160 -3.5 200 16.5 237.5 7.5" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span> <br />
              for a Better Tomorrow
            </h1>

            <p className="hero-description">
              Gyan Deep Convent School is dedicated to providing quality education, character building, and holistic development in a safe and nurturing environment.
            </p>

            <div className="hero-btn-group">
              <Link to="/admissions" className="btn-hero-primary">
                Apply for Admission <ArrowRight size={18} />
              </Link>

              <a href="#video-tour" onClick={(e) => { e.preventDefault(); alert("Virtual Tour Video: Welcome to Gyan Deep Convent School!"); }} className="btn-hero-video">
                <span className="video-play-icon">
                  <Play size={14} fill="currentColor" />
                </span>
                Watch Our Video
              </a>
            </div>

            {/* Social Proof Row */}
            <div className="social-proof-row">
              <div className="avatar-stack">
                <img src="/images/hero.jpg" alt="Parent 1" className="avatar-img" />
                <img src="/images/lab.jpg" alt="Parent 2" className="avatar-img" />
                <img src="/images/school_hero_kids.jpg" alt="Parent 3" className="avatar-img" />
                <img src="/images/hero.jpg" alt="Parent 4" className="avatar-img" />
              </div>
              <div className="social-proof-text">
                <div className="social-proof-label">Trusted by 1000+ Parents</div>
                <div className="stars-rating">
                  <span className="star-gold">★★★★★</span> 4.8/5 Rating
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Image with Floating Stat Cards */}
          <div className="hero-right-container">
            {/* Handwriting Doodle */}
            <div className="doodle-handwriting">
              Good Values <br />
              Bright Futures ☀️
            </div>

            <div className="hero-main-card">
              <img src="/images/school_hero_kids.jpg" alt="Gyan Deep Convent School Students" className="hero-img-display" />
            </div>

            {/* Vertical Floating Stat Badges */}
            <div className="floating-stats-stack">
              <div className="floating-stat-card">
                <div className="floating-stat-icon" style={{ background: '#ede9fe', color: '#7c3aed' }}>
                  <GraduationCap size={22} />
                </div>
                <div>
                  <div className="floating-stat-val">
                    <AnimatedCounter target={1000} suffix="+" />
                  </div>
                  <div className="floating-stat-lbl">Happy Students</div>
                </div>
              </div>

              <div className="floating-stat-card">
                <div className="floating-stat-icon" style={{ background: '#dcfce7', color: '#16a34a' }}>
                  <Users size={22} />
                </div>
                <div>
                  <div className="floating-stat-val">
                    <AnimatedCounter target={50} suffix="+" />
                  </div>
                  <div className="floating-stat-lbl">Experienced Faculty</div>
                </div>
              </div>

              <div className="floating-stat-card">
                <div className="floating-stat-icon" style={{ background: '#fef3c7', color: '#d97706' }}>
                  <Award size={22} />
                </div>
                <div>
                  <div className="floating-stat-val">
                    <AnimatedCounter target={100} suffix="%" />
                  </div>
                  <div className="floating-stat-lbl">Holistic Development</div>
                </div>
              </div>
            </div>

            {/* Slider Dots */}
            <div className="slider-dots-row">
              <span className="dot-item active"></span>
              <span className="dot-item"></span>
              <span className="dot-item"></span>
              <span className="dot-item"></span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Feature Pillars Row */}
      <div className="pillars-row-container">
        <div className="pillar-card pillar-card-blue">
          <div className="pillar-icon-box pillar-blue-icon">
            <BookOpen size={24} />
          </div>
          <div>
            <div className="pillar-title">Academic Excellence</div>
            <div className="pillar-desc">Strong foundation for lifelong success</div>
          </div>
        </div>

        <div className="pillar-card pillar-card-purple">
          <div className="pillar-icon-box pillar-purple-icon">
            <Users size={24} />
          </div>
          <div>
            <div className="pillar-title">Character Building</div>
            <div className="pillar-desc">Values, discipline and leadership skills</div>
          </div>
        </div>

        <div className="pillar-card pillar-card-yellow">
          <div className="pillar-icon-box pillar-yellow-icon">
            <Lightbulb size={24} />
          </div>
          <div>
            <div className="pillar-title">Holistic Development</div>
            <div className="pillar-desc">Academics, sports, arts and life skills.</div>
          </div>
        </div>

        <div className="pillar-card pillar-card-red">
          <div className="pillar-icon-box pillar-red-icon">
            <Heart size={24} />
          </div>
          <div>
            <div className="pillar-title">Safe & Caring Environment</div>
            <div className="pillar-desc">A second home for every child</div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="about-section-container">
        <div>
          <div className="about-left-tag">
            <span>▶</span> ABOUT US —————
          </div>
          <h2 className="about-main-title">
            A Legacy of <span style={{ color: 'var(--color-primary)' }}>Excellence</span>
          </h2>
          <p className="about-description">
            At {profile.name}, we believe in nurturing every child's unique potential through quality education, moral values, and a supportive environment. Our dedicated educators inspire curiosity, critical thinking, and character development.
          </p>
          <Link to="/about" className="btn-hero-primary" style={{ padding: '0.75rem 1.6rem', fontSize: '0.92rem' }}>
            Learn More About Us <ArrowRight size={16} />
          </Link>
        </div>

        {/* 4 Stat Boxes Grid */}
        <div className="about-stats-grid">
          <div className="about-stat-box">
            <div className="about-stat-icon" style={{ background: '#dbeafe', color: '#2563eb' }}>
              <Shield size={24} />
            </div>
            <div className="about-stat-num">
              <AnimatedCounter target={18} suffix="+" />
            </div>
            <div className="about-stat-lbl">Years of Excellence</div>
          </div>

          <div className="about-stat-box">
            <div className="about-stat-icon" style={{ background: '#fee2e2', color: '#dc2626' }}>
              <GraduationCap size={24} />
            </div>
            <div className="about-stat-num">
              <AnimatedCounter target={1000} suffix="+" />
            </div>
            <div className="about-stat-lbl">Students</div>
          </div>

          <div className="about-stat-box">
            <div className="about-stat-icon" style={{ background: '#dcfce7', color: '#16a34a' }}>
              <Users size={24} />
            </div>
            <div className="about-stat-num">
              <AnimatedCounter target={50} suffix="+" />
            </div>
            <div className="about-stat-lbl">Expert Faculty</div>
          </div>

          <div className="about-stat-box">
            <div className="about-stat-icon" style={{ background: '#fef3c7', color: '#d97706' }}>
              <Award size={24} />
            </div>
            <div className="about-stat-num">
              <AnimatedCounter target={100} suffix="%" />
            </div>
            <div className="about-stat-lbl">Holistic Growth</div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutPage() {
  const profile = staticRepository.getSchoolProfile();
  const faculty = staticRepository.listFaculty();
  const achievements = staticRepository.listAchievements();

  return (
    <div className="page-main-container">
      <div style={{ background: 'linear-gradient(135deg, var(--color-navy), #1c2541)', color: 'white', borderRadius: '24px', padding: '3.5rem 2.5rem', marginBottom: '3.5rem' }}>
        <h1 style={{ fontSize: '2.75rem', color: 'white', marginBottom: '1rem' }}>Welcome to {profile.name}</h1>
        <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '750px', lineHeight: 1.7 }}>
          Established with a vision of nurturing global citizens, {profile.name} combines rigorous academic curricula with holistic character development, athletic facilities, and STEM robotics laboratories.
        </p>
      </div>

      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0f172a' }}>Our Distinguished Faculty</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {faculty.map(member => (
            <div key={member.id} style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', color: '#0f172a' }}>{member.name}</h3>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.75rem' }}>{member.role}</div>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{member.biography}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#0f172a' }}>Recognitions & Honors</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {achievements.map(ach => (
            <div key={ach.id} style={{ background: '#fffbeb', padding: '1.5rem', borderRadius: '16px', border: '1px solid #fef3c7' }}>
              <div style={{ color: '#d97706', fontWeight: 700, marginBottom: '0.5rem' }}>🏆 {ach.category}</div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: '#0f172a' }}>{ach.title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{ach.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function AcademicsPage() {
  return (
    <div className="page-main-container">
      <div style={{ background: 'linear-gradient(135deg, var(--color-navy), #1c2541)', color: 'white', borderRadius: '24px', padding: '3.5rem 2.5rem', marginBottom: '3.5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.8rem', color: 'white', marginBottom: '1rem' }}>Academic Excellence</h1>
        <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
          Comprehensive CBSE curriculum designed to foster critical thinking, creativity, problem-solving, and lifelong learning habits.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem', marginBottom: '4rem' }}>
        <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#dbeafe', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <BookOpen size={24} />
          </div>
          <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.5rem' }}>Primary Education</h3>
          <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6 }}>
            Foundational literacy, numeracy, experiential learning through interactive games, storytelling, and creative arts.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#ede9fe', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <Lightbulb size={24} />
          </div>
          <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.5rem' }}>STEM & Robotics Labs</h3>
          <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6 }}>
            State-of-the-art physics, chemistry, biology laboratories and autonomous robotics workshops equipped with modern sensors and AI modules.
          </p>
        </div>

        <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <Award size={24} />
          </div>
          <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.5rem' }}>Senior Secondary Streams</h3>
          <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6 }}>
            Specialized tracks for Science (PCM/PCB), Commerce, and Humanities guided by experienced board examination mentors.
          </p>
        </div>
      </div>
    </div>
  );
}

function GalleryPage() {
  const items = staticRepository.listGalleryItems();
  return (
    <div className="page-main-container">
      <h1 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '0.5rem' }}>Campus Life Gallery</h1>
      <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '2rem' }}>Explore state-of-the-art facilities, classroom activities, robotics labs, and athletic grounds.</p>
      <GalleryExplorer items={items} />
    </div>
  );
}

function EventsPage() {
  const events = staticRepository.listEvents();
  return (
    <div className="page-main-container">
      <h1 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '0.5rem' }}>School Events & Calendar</h1>
      <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '2rem' }}>Mark your calendars for our annual athletics meets, science expositions, and cultural fests.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {events.map(event => (
          <div key={event.id} className="event-card-grid" style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
            <div style={{ background: 'var(--color-primary)', color: 'white', padding: '1rem 1.25rem', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, lineHeight: 1 }}>{new Date(event.startsAt).getDate()}</div>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 600, marginTop: '0.2rem' }}>{new Date(event.startsAt).toLocaleString('default', { month: 'short' })}</div>
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.4rem' }}>{event.title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '0.5rem' }}>{event.description}</p>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>📍 {event.location}</div>
            </div>
            <div>
              <button className="btn-hero-primary" style={{ padding: '0.65rem 1.25rem', fontSize: '0.88rem' }}>
                Register / RSVP
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdmissionsPage() {
  const profile = staticRepository.getSchoolProfile();

  const eligibility = [
    { grade: "Nursery / Pre-School", age: "3 to 4 Years", desc: "Interactive play-way learning & sensory development" },
    { grade: "Kindergarten (KG1 - KG2)", age: "4 to 6 Years", desc: "Foundational phonics, numbers, and socialization" },
    { grade: "Primary School (Grades 1 - 5)", age: "6 to 11 Years", desc: "Core academics, languages, sports & computer basics" },
    { grade: "Middle & High (Grades 6 - 10)", age: "11 to 16 Years", desc: "CBSE curriculum, STEM robotics, and lab practicals" },
    { grade: "Senior Secondary (Grades 11 - 12)", age: "16+ Years", desc: "Science (PCM/PCB), Commerce & Humanities streams" }
  ];

  const documentChecklist = [
    "Original Birth Certificate & self-attested photocopy",
    "Transfer Certificate (TC) from previous recognized school",
    "Report card & marksheet of previous academic year",
    "4 passport size recent photographs of student & parents",
    "Aadhaar card photocopy of student and both parents"
  ];

  return (
    <div className="page-main-container">
      {/* Admissions Hero Header */}
      <div style={{ background: 'linear-gradient(135deg, var(--color-navy), #1c2541)', color: 'white', borderRadius: '24px', padding: '3.5rem 2.5rem', marginBottom: '3.5rem', textAlign: 'center', position: 'relative' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(245, 158, 11, 0.2)', border: '1px solid rgba(245,158,11,0.5)', color: '#fde047', padding: '0.35rem 1rem', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1.25rem' }}>
          <Sparkles size={16} /> Admissions Open for Academic Session 2027-28
        </div>
        <h1 style={{ fontSize: '3rem', color: 'white', marginBottom: '1rem', fontWeight: 800 }}>Join the Gyan Deep Family</h1>
        <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
          Give your child the gift of holistic education, world-class STEM robotics laboratories, and character building. Apply online or visit our admissions desk today.
        </p>
      </div>

      {/* 4-Step Admission Journey */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Simple & Transparent</span>
          <h2 style={{ fontSize: '2.25rem', color: '#0f172a', marginTop: '0.3rem' }}>4-Step Admission Process</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          <div style={{ background: '#f8fafc', padding: '1.75rem', borderRadius: '20px', border: '1px solid #e2e8f0', position: 'relative' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', marginBottom: '1rem' }}>1</div>
            <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.4rem' }}>Online Enquiry</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5 }}>Fill out the digital form below to receive prospectus & counseling call.</p>
          </div>

          <div style={{ background: '#f8fafc', padding: '1.75rem', borderRadius: '20px', border: '1px solid #e2e8f0', position: 'relative' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#d97706', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', marginBottom: '1rem' }}>2</div>
            <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.4rem' }}>Campus Tour</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5 }}>Visit our campus, inspect smart classrooms, labs & athletic grounds.</p>
          </div>

          <div style={{ background: '#f8fafc', padding: '1.75rem', borderRadius: '20px', border: '1px solid #e2e8f0', position: 'relative' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#16a34a', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', marginBottom: '1rem' }}>3</div>
            <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.4rem' }}>Student Interaction</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5 }}>Informal aptitude readiness check for appropriate class placement.</p>
          </div>

          <div style={{ background: '#f8fafc', padding: '1.75rem', borderRadius: '20px', border: '1px solid #e2e8f0', position: 'relative' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#dc2626', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', marginBottom: '1rem' }}>4</div>
            <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.4rem' }}>Final Seat Confirmation</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5 }}>Submit required documents & complete enrollment formalities.</p>
          </div>
        </div>
      </div>

      {/* Grade Eligibility & Criteria Matrix */}
      <section style={{ marginBottom: '4.5rem' }}>
        <h2 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '1.5rem', textAlign: 'center' }}>Grade Eligibility & Age Criteria</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {eligibility.map((item, idx) => (
            <div key={idx} style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Age Criteria: {item.age}</div>
              <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '0.5rem' }}>{item.grade}</h3>
              <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Document Checklist */}
      <section style={{ background: '#f8fafc', padding: '3rem 2.5rem', borderRadius: '24px', border: '1px solid #e2e8f0', marginBottom: '4.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
          <FileCheck size={24} />
          <h2 style={{ fontSize: '1.75rem', color: '#0f172a' }}>Document Checklist for Admissions</h2>
        </div>
        <p style={{ color: '#64748b', marginBottom: '1.75rem' }}>Please keep the following documents ready when visiting the admission desk:</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          {documentChecklist.map((doc, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'white', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <CheckSquare size={20} style={{ color: '#16a34a', flexShrink: 0 }} />
              <span style={{ fontSize: '0.92rem', color: '#0f172a', fontWeight: 600 }}>{doc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Admission Enquiry Form */}
      <section style={{ marginBottom: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2.25rem', color: '#0f172a', marginBottom: '0.5rem' }}>Online Enquiry Form</h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem' }}>Fill out student details to request a callback & prospectus.</p>
        </div>
        <AdmissionEnquiryForm contactEmail={profile.email} contactPhone={profile.phone} />
      </section>
    </div>
  );
}

function ContactPage() {
  const profile = staticRepository.getSchoolProfile();
  const [formSent, setFormSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  const faqs = [
    { q: "What are the school visiting hours for prospective parents?", a: "Our admissions office is open Monday through Saturday from 8:00 AM to 4:30 PM. Walk-in campus tours are conducted at 10:00 AM and 2:00 PM daily." },
    { q: "Which transport routes are covered by school buses?", a: "We operate GPS-tracked air-conditioned buses across all major sectors within a 25km radius of Knowledge Hub, Sector 62." },
    { q: "What documents are required for admission enquiry?", a: "For initial enquiry, student date of birth certificate copy and previous academic report cards (for Grade 1 and above) are required." }
  ];

  return (
    <div className="page-main-container">
      {/* Header Banner */}
      <div style={{ background: 'linear-gradient(135deg, var(--color-navy), #1c2541)', color: 'white', borderRadius: '24px', padding: '3.5rem 2.5rem', marginBottom: '3.5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.8rem', color: 'white', marginBottom: '1rem' }}>Contact Our Desk</h1>
        <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
          Have questions about admissions, academics, or campus tours? Our dedicated team is here to assist you every step of the way.
        </p>
      </div>

      {/* 4 Contact Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
        <div style={{ background: '#f8fafc', padding: '1.75rem', borderRadius: '20px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#dbeafe', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <Phone size={24} />
          </div>
          <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.4rem' }}>Call Us Directly</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '0.75rem' }}>Speak to our counselor desk</p>
          <a href={`tel:${profile.phone}`} style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none', fontSize: '1.05rem' }}>{profile.phone}</a>
        </div>

        <div style={{ background: '#f8fafc', padding: '1.75rem', borderRadius: '20px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#ede9fe', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <Mail size={24} />
          </div>
          <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.4rem' }}>Email Inquiries</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '0.75rem' }}>For official communication</p>
          <a href={`mailto:${profile.email}`} style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>{profile.email}</a>
        </div>

        <div style={{ background: '#f8fafc', padding: '1.75rem', borderRadius: '20px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <MapPin size={24} />
          </div>
          <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.4rem' }}>Campus Address</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5 }}>{profile.address}</p>
        </div>

        <div style={{ background: '#f8fafc', padding: '1.75rem', borderRadius: '20px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <Clock size={24} />
          </div>
          <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.4rem' }}>Visiting Hours</h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5 }}>{profile.officeHours}</p>
        </div>
      </div>

      {/* Main Grid: Form + Location Map Container */}
      <div className="contact-grid-container">
        {/* Contact Form */}
        <div style={{ background: 'white', padding: '2.5rem', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 8px 30px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
            <MessageSquare size={20} />
            <span style={{ fontWeight: 700, fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Send Us a Message</span>
          </div>
          <h2 style={{ fontSize: '1.85rem', color: '#0f172a', marginBottom: '1.5rem' }}>How Can We Help You?</h2>

          {formSent ? (
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
              <CheckCircle2 size={44} style={{ color: '#16a34a', margin: '0 auto 1rem' }} />
              <h3 style={{ color: '#166534', marginBottom: '0.5rem' }}>Message Sent Successfully!</h3>
              <p style={{ color: '#15803d', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Thank you for reaching out. Our representative will contact you shortly.
              </p>
              <button onClick={() => setFormSent(false)} className="btn-hero-primary" style={{ padding: '0.65rem 1.4rem', fontSize: '0.9rem' }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>Your Full Name *</label>
                <input type="text" required placeholder="e.g. Ramesh Kumar" style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '10px', border: '1.5px solid #cbd5e1', background: '#f8fafc', fontSize: '0.95rem' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>Email Address *</label>
                  <input type="email" required placeholder="name@example.com" style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '10px', border: '1.5px solid #cbd5e1', background: '#f8fafc', fontSize: '0.95rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>Phone Number *</label>
                  <input type="tel" required placeholder="+91 98765 43210" style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '10px', border: '1.5px solid #cbd5e1', background: '#f8fafc', fontSize: '0.95rem' }} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>Inquiry Category *</label>
                <select required style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '10px', border: '1.5px solid #cbd5e1', background: '#f8fafc', fontSize: '0.95rem' }}>
                  <option value="">Select Topic...</option>
                  <option value="admissions">Admissions & Prospectus</option>
                  <option value="academics">Academics & Curriculum</option>
                  <option value="fees">Fee Structure & Transport</option>
                  <option value="careers">Careers & Faculty Openings</option>
                  <option value="general">General Support</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>Your Message *</label>
                <textarea required rows={4} placeholder="Write your question or request..." style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '10px', border: '1.5px solid #cbd5e1', background: '#f8fafc', fontSize: '0.95rem' }}></textarea>
              </div>

              <button type="submit" className="btn-hero-primary" style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', justifyContent: 'center' }}>
                <Send size={18} /> Send Inquiry Message
              </button>
            </form>
          )}
        </div>

        {/* Location & Interactive Map Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ background: '#f8fafc', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 8px 30px rgba(0,0,0,0.05)' }}>
            <div style={{ padding: '1.5rem 1.75rem', background: '#0f172a', color: 'white' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'white', marginBottom: '0.2rem' }}>Campus Location</h3>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Near Knowledge Hub Metro Station, Sector 62</p>
            </div>
            
            <div style={{ position: 'relative', height: '280px', background: '#e2e8f0' }}>
              <img src="/images/hero.jpg" alt="Campus Map Location" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ background: 'white', padding: '1rem 1.5rem', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', textAlign: 'center' }}>
                  <MapPin size={28} style={{ color: 'var(--color-primary)', margin: '0 auto 0.4rem' }} />
                  <div style={{ fontWeight: 800, color: '#0f172a' }}>{profile.name}</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Main Administrative Block</div>
                </div>
              </div>
            </div>

            <div style={{ padding: '1.5rem', background: 'white', borderTop: '1px solid #e2e8f0' }}>
              <h4 style={{ fontSize: '1rem', color: '#0f172a', marginBottom: '0.6rem' }}>Nearby Transport Connections</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.88rem', color: '#64748b' }}>
                <li>🚇 <strong>Metro Station:</strong> Knowledge Park (800m)</li>
                <li>🚌 <strong>Bus Stand:</strong> Sector 62 Main Circle (300m)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <section style={{ maxWidth: '900px', margin: '0 auto 4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.88rem', textTransform: 'uppercase' }}>
            <HelpCircle size={18} /> Quick Assistance
          </div>
          <h2 style={{ fontSize: '2rem', color: '#0f172a', marginTop: '0.4rem' }}>Frequently Asked Questions</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '1.25rem 1.5rem', cursor: 'pointer', transition: 'all 0.2s' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 700, color: '#0f172a', fontSize: '1.05rem' }}>
                <span>{faq.q}</span>
                <ChevronDown size={20} style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }} />
              </div>
              {openFaq === idx && (
                <p style={{ marginTop: '0.85rem', color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, borderTop: '1px solid #e2e8f0', paddingTop: '0.85rem' }}>
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function AppShell() {
  const profile = staticRepository.getSchoolProfile();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Topmost Announcement Bar */}
      <div className="top-ticker-bar">
        <div className="top-ticker-inner">
          <div className="top-ticker-left">
            <span className="top-ticker-badge">
              <Megaphone size={13} /> Admissions Open for 2027–28
            </span>
            <span>Give your child a brighter tomorrow ✨</span>
          </div>

          <div className="top-ticker-right">
            <div className="top-ticker-info">
              <Calendar size={14} /> Parent-Teacher Meeting: Oct 4th
            </div>
            <div className="top-ticker-info">
              <Award size={14} /> Annual Sports Meet: Nov 15th
            </div>
            <div style={{ display: 'flex', gap: '0.4rem', marginLeft: '0.5rem', alignItems: 'center' }}>
              <a href="#facebook" className="social-icon-btn" aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#instagram" className="social-icon-btn" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#youtube" className="social-icon-btn" aria-label="YouTube">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="main-header">
        <div className="header-inner">
          <Link to="/" className="brand-container">
            <div className="brand-logo-circle">GD</div>
            <div className="brand-title-group">
              <div className="brand-title">{profile.name}</div>
              <div className="brand-subtitle">Learn • Grow • Lead</div>
            </div>
          </Link>

          <nav>
            <ul className="nav-menu">
              <li>
                <NavLink to="/" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`} end>
                  <Home size={16} /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                  <Users size={16} /> About
                </NavLink>
              </li>
              <li>
                <NavLink to="/academics" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                  <BookOpen size={16} /> Academics
                </NavLink>
              </li>
              <li>
                <NavLink to="/admissions" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                  <GraduationCap size={16} /> Admissions
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                  <ImageIcon size={16} /> Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                  <Calendar size={16} /> Events
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                  <Phone size={16} /> Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <button className="search-btn" aria-label="Search" onClick={() => alert("Search site...")}>
              <Search size={18} />
            </button>
            <Link to="/admissions" className="enquire-pill-btn">
              Enquire Now <ArrowRight size={16} />
            </Link>
            <button className="mobile-menu-toggle" aria-label="Toggle navigation" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileNavOpen && (
        <div className="mobile-nav-drawer">
          <NavLink to="/" onClick={() => setMobileNavOpen(false)} className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`} end>
            <Home size={16} /> Home
          </NavLink>
          <NavLink to="/about" onClick={() => setMobileNavOpen(false)} className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
            <Users size={16} /> About
          </NavLink>
          <NavLink to="/academics" onClick={() => setMobileNavOpen(false)} className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
            <BookOpen size={16} /> Academics
          </NavLink>
          <NavLink to="/admissions" onClick={() => setMobileNavOpen(false)} className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
            <GraduationCap size={16} /> Admissions
          </NavLink>
          <NavLink to="/gallery" onClick={() => setMobileNavOpen(false)} className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
            <ImageIcon size={16} /> Gallery
          </NavLink>
          <NavLink to="/events" onClick={() => setMobileNavOpen(false)} className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
            <Calendar size={16} /> Events
          </NavLink>
          <NavLink to="/contact" onClick={() => setMobileNavOpen(false)} className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
            <Phone size={16} /> Contact
          </NavLink>
          <div style={{ marginTop: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid #f1f5f9' }}>
            <Link to="/admissions" onClick={() => setMobileNavOpen(false)} className="btn-hero-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Enquire Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}

      {/* Main Page Outlet */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-container">
          <div>
            <div className="footer-brand-title">{profile.name}</div>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem', color: '#94a3b8' }}>
              {profile.shortDescription}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>📍 {profile.address}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>📞 {profile.phone}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✉️ {profile.email}</span>
            </div>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1.2rem', fontSize: '1.1rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><Link to="/about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About Our School</Link></li>
              <li><Link to="/academics" style={{ color: '#94a3b8', textDecoration: 'none' }}>Academics & STEM</Link></li>
              <li><Link to="/admissions" style={{ color: '#94a3b8', textDecoration: 'none' }}>Admissions 2027</Link></li>
              <li><Link to="/gallery" style={{ color: '#94a3b8', textDecoration: 'none' }}>Campus Gallery</Link></li>
              <li><Link to="/events" style={{ color: '#94a3b8', textDecoration: 'none' }}>Event Calendar</Link></li>
              <li><Link to="/contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact Desk</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1.2rem', fontSize: '1.1rem' }}>Office Hours</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: '#94a3b8' }}>
              ⏰ {profile.officeHours}
            </p>
          </div>
        </div>

        <div className="footer-copyright">
          <p>&copy; 2026 {profile.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="academics" element={<AcademicsPage />} />
          <Route path="admissions" element={<AdmissionsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
