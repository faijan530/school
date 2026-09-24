export type ISODate = `${number}-${number}-${number}`;
export type ContentStatus = "approved" | "draft";

export interface ImageAsset {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  width?: number;
  height?: number;
}

export interface SchoolProfile {
  name: string;
  shortDescription?: string;
  logo?: ImageAsset;
  phone?: string;
  email?: string;
  address?: string;
  officeHours?: string;
  socialLinks?: Array<{ label: string; href: string }>;
  principalMessage?: { name: string; role: string; text: string; photo?: ImageAsset };
  statistics?: Array<{ id: string; value: string; label: string }>;
}

export interface Notice {
  id: string;
  title: string;
  date: ISODate;
  category: string;
  summary: string;
  attachment?: { label: string; href: string; fileType?: string; sizeLabel?: string };
  status: ContentStatus;
}

export interface SchoolEvent {
  id: string;
  title: string;
  startsAt: string;
  endsAt?: string;
  location?: string;
  description: string;
  image?: ImageAsset;
  status: ContentStatus;
}

export interface GalleryItem {
  id: string;
  category: string;
  image: ImageAsset;
  date?: ISODate;
  status: ContentStatus;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  department?: string;
  biography?: string;
  photo?: ImageAsset;
  status: ContentStatus;
}

export interface Achievement {
  id: string;
  title: string;
  category: string;
  date?: ISODate;
  description: string;
  image?: ImageAsset;
  status: ContentStatus;
}

export interface CareerOpening {
  id: string;
  position: string;
  department?: string;
  qualifications?: string;
  experience?: string;
  location?: string;
  description: string;
  applicationInstructions: string;
  status: ContentStatus;
}
