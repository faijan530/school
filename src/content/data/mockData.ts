import type { SchoolProfile, Notice, SchoolEvent, GalleryItem, FacultyMember, Achievement, CareerOpening } from '../types';

export const mockSchoolProfile: SchoolProfile = {
  name: "Gyan Deep Convent School",
  shortDescription: "Empowering young minds through academic excellence, character building, and holistic development.",
  phone: "+91 9876543210",
  email: "admissions@gyandeepschool.edu",
  address: "123 Education Boulevard, Knowledge Hub, Sector 62",
  officeHours: "Mon-Sat: 8:00 AM - 4:30 PM"
};

export const mockNotices: Notice[] = [
  { id: "n1", title: "Admissions Open for Academic Year 2027-28", date: "2026-09-20", category: "Admissions", summary: "Online & offline application forms are now available for Nursery to Grade IX.", status: "approved" },
  { id: "n2", title: "National STEM Robotics Competition Victory", date: "2026-09-18", category: "Achievements", summary: "Our Senior Robotics Team won 1st Place at the National Inter-School STEM Conclave.", status: "approved" },
  { id: "n3", title: "Parent-Teacher Conference (PTC) Schedule", date: "2026-09-12", category: "Academics", summary: "Quarterly assessment reports will be discussed on Saturday, Oct 4th.", status: "approved" }
];

export const mockEvents: SchoolEvent[] = [
  { id: "e1", title: "Annual Sports & Athletics Meet", startsAt: "2026-11-15T09:00:00Z", location: "Main Athletic Complex", description: "A day of track events, inter-house relays, gymnastics showcases, and award ceremonies.", status: "approved" },
  { id: "e2", title: "Global Innovation & Science Expo", startsAt: "2026-12-05T10:00:00Z", location: "Grand Auditorium", description: "Interactive exhibits featuring student projects in AI, renewable energy, and biotechnology.", status: "approved" },
  { id: "e3", title: "Winter Cultural & Music Fest", startsAt: "2026-12-20T17:00:00Z", location: "Open Air Amphitheatre", description: "Enchanting performances by the school orchestra, choir groups, and drama club.", status: "approved" }
];

export const mockGallery: GalleryItem[] = [
  { id: "g1", category: "Campus", image: { src: "/images/hero.jpg", alt: "Main Academic Block and Gardens", caption: "Our modern eco-friendly campus in full bloom" }, status: "approved" },
  { id: "g2", category: "Academics", image: { src: "/images/lab.jpg", alt: "Robotics and STEM Laboratory", caption: "Students working on autonomous robotics prototypes" }, status: "approved" },
  { id: "g3", category: "Campus", image: { src: "/images/hero.jpg", alt: "School Library and Study Hub", caption: "State-of-the-art digital library and quiet learning zone" }, status: "approved" },
  { id: "g4", category: "Activities", image: { src: "/images/lab.jpg", alt: "Science and Innovation Workshop", caption: "Hands-on experimentation in our advanced lab facilities" }, status: "approved" }
];

export const mockFaculty: FacultyMember[] = [
  { id: "f1", name: "Dr. Ananya Sharma", department: "Sciences", role: "Head of Science Department", biography: "Ph.D. in Physics with 15+ years of teaching excellence and published STEM research.", status: "approved" },
  { id: "f2", name: "Prof. Rajesh Verma", department: "Mathematics", role: "Senior Mathematics Educator", biography: "Olympiad mentor with over two decades of guiding students to national ranks.", status: "approved" },
  { id: "f3", name: "Ms. Sarah Jenkins", department: "Languages", role: "Faculty Head - English & Literature", biography: "Passionate about creative writing, public speaking, and parliamentary debating.", status: "approved" }
];

export const mockAchievements: Achievement[] = [
  { id: "a1", title: "100% CBSE Board Pass Rate", category: "Academics", date: "2026-05-15", description: "Over 85% of our graduating batch scored above 90% distinction marks.", status: "approved" },
  { id: "a2", title: "National Green School Award", category: "Sustainability", date: "2025-11-20", description: "Recognized as top zero-carbon eco campus for solar power & rainwater harvesting.", status: "approved" }
];

export const mockCareers: CareerOpening[] = [
  { id: "c1", position: "PGT Physics Educator", department: "Sciences", qualifications: "M.Sc Physics + B.Ed with 3+ yrs experience", description: "Lead senior secondary physics theory and lab practicals.", applicationInstructions: "Email CV to careers@gyandeepschool.edu", status: "approved" },
  { id: "c2", position: "Robotics & AI Instructor", department: "Technology", qualifications: "B.Tech/B.E in Computer Science / Mechatronics", description: "Mentor middle and high school students in robotics and Python.", applicationInstructions: "Email CV to careers@gyandeepschool.edu", status: "approved" }
];
