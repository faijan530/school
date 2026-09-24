import type {
  SchoolProfile,
  Notice,
  SchoolEvent,
  GalleryItem,
  FacultyMember,
  Achievement,
  CareerOpening
} from './types';

export interface SchoolContentRepository {
  getSchoolProfile(): SchoolProfile;
  listNotices(): Notice[];
  listEvents(): SchoolEvent[];
  listGalleryItems(): GalleryItem[];
  listFaculty(): FacultyMember[];
  listAchievements(): Achievement[];
  listCareerOpenings(): CareerOpening[];
}
