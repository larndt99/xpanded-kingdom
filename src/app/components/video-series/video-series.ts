export interface VideoSeries {
    title: string;
    description: string;
    logo: string;
    backgroundImage: string;
    episodes: VideoEpisode[];

}

export interface VideoEpisode {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    link: string;
}