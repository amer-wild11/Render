import prisma from "~/lib/prisma.server";

export default defineEventHandler(async (event) => {
  const users = await prisma.user.findMany();
  return { users };
});
