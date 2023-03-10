export interface UserInterface {
    createdAt: string;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    lastActiveDate: string;
    profile: profileType;
    guarantor: guarantorType;
    accountBalance: number;
    accountNumber: string;
    socials: socialsType;
    education: educationType;
    id: number;
}

export type profileType = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: number;
    address: string;
    currency: string;
};

export type guarantorType = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
};
export type socialsType = {
    facebook: string;
    instagram: string;
    twitter: string;
};

export type educationType = {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: number[];
    loanRepayment: number;
};
export type menuItemProps = {
    isActive?: boolean;
    icon: string;
    iconAlt?: string;
    title: string;
    href?: string;
};

export type categoryProps = {
    id: number;
    lms_course_id: string;
    code: string;
    version: string;
    institution_id: string;
    semester: string;
    name: string;
    level: string;
    course_pacing: string;
    enrollment_source: string;
    language: string;
    thumbnail: string;
    card_image: string;
    price: string;
    instructors: string;
    subcategory_id: string;
};
export type categoryListProps = {
    category: string;
    subcategory: string;
};
