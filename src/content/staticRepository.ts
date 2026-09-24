import type { SchoolContentRepository } from './repository';
import {
  mockSchoolProfile,
  mockNotices,
  mockEvents,
  mockGallery,
  mockFaculty,
  mockAchievements,
  mockCareers
} from './data/mockData';

export const staticRepository: SchoolContentRepository = {
  getSchoolProfile: () => mockSchoolProfile,
  listNotices: () => mockNotices.filter(n => n.status === 'approved').sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
  listEvents: () => mockEvents.filter(e => e.status === 'approved').sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime()),
  listGalleryItems: () => mockGallery.filter(g => g.status === 'approved'),
  listFaculty: () => mockFaculty.filter(f => f.status === 'approved'),
  listAchievements: () => mockAchievements.filter(a => a.status === 'approved'),
  listCareerOpenings: () => mockCareers.filter(c => c.status === 'approved'),
};
