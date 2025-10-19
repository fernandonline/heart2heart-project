declare module '#auth-utils' {
  interface User {
    id: string
    email: string
    name: string
    urlPic?: string
  }

  interface UserSession {
    user: User
  }
}

export {}