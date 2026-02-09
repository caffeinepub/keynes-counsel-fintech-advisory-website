import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface FaqEntry {
    question: string;
    lastUpdated: bigint;
    answer: string;
    isActive: boolean;
}
export interface TeamMember {
    bio: string;
    name: string;
    photoUrl: string;
    position: string;
}
export interface PricingDetail {
    lastUpdated: bigint;
    description: string;
    isActive: boolean;
    price: string;
}
export interface backendInterface {
    addFaqEntry(question: string, answer: string): Promise<void>;
    addTeamMember(name: string, position: string, bio: string, photoUrl: string): Promise<void>;
    getAllActiveFaqEntries(): Promise<Array<FaqEntry>>;
    getPricingDetails(): Promise<PricingDetail | null>;
    getTeamMembers(): Promise<Array<TeamMember>>;
    registerUser(name: string, email: string, phone: string, hasConsented: boolean): Promise<void>;
    setPricingDetails(description: string, price: string): Promise<void>;
    submitContactMessage(name: string, email: string, message: string): Promise<void>;
    updateFaqEntry(question: string, answer: string, isActive: boolean): Promise<void>;
}
