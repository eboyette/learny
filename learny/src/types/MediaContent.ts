export interface MediaContent {
    id: string;
    name: string;
    whoRecommended: string;
    contentType: 'book' | 'podcast' | 'article' | 'video'
    url: string;
    isInProgress: boolean;
}
