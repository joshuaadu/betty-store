import { CredentialUser } from "@prisma/client";

//
export const filterUserForClient = (user: CredentialUser) => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    image: user.image,
    role: user.role,
  };
};
