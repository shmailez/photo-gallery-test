export interface photoItem {
    id: string
    alt_description: string
    description: string
    likes: number
    links: {
        download: string
    }
    user: {
        name: string
        profile_image: {
            small: string
        }
    }
    urls: {
        small: string
        regular: string

    }
}