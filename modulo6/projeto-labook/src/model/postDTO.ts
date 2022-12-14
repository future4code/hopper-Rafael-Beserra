export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export type postInputDTO = {
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
}