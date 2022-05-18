export interface ICategory {
    id: string;
    title: string;
}

export interface IPost {
    id: string;
    title: string;
    content: string;
    status: "published" | "draft" | "rejected";
    category: ICategory;
}

export interface IArticle {
    id: string;
    title: string;
    authors: string;
    journalName: string;
    publicationYear: string;
    volume: string;
    pages: string;
    doi: string;
    practice: string;
    status: "Awaiting Moderation" | "Awaiting Analysis"| "Accepted" | "Rejected";
    rating: string;
}
