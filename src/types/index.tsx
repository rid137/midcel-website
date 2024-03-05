export interface BlogDataType {
    id: number;
    blogImg: string;
    title: string;
    message: string;
    writerInfo: {
        name: string;
        img: string;
        occupation: string;
    };
}