declare namespace Express {
  interface Request {
    authUser: {
      id: string;
      name: string;
      email: string;
      role: string;
    };
  }
}
