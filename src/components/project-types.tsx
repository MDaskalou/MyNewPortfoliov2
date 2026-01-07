// Denna fil innehåller delade typer för projektkomponenterna
export type Project = {
    title: string;
    description: string;
    longDescription: string;
    imageUrl: string;
    tags: string[];
    githubUrl: string;
    liveUrl?: string;
};