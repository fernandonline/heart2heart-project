declare module '#auth-utils' {
  interface User {
    id: string
    email: string
    nome: string
    urlPic?: string
  }

  interface UserSession {
    user: User
  }
}

export {}