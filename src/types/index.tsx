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

export interface BlogDataTypes {
    _id: string,
    title: string,
    body: string,
    tags: string[],
    image: string,
    author_name: string,
    createdAt: string,
    updatedAt: string,
    __v: number,
    updated_at: string
}