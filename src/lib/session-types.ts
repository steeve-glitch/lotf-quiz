// Client-safe session types. No server-only imports here so client components
// can use these without pulling in next/headers.

export type Role = "student" | "teacher";

/** The subset of the session that is safe to expose to client components. */
export interface ClientSession {
  role: Role;
  name: string;
  email: string;
}
