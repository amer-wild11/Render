import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username } = body;
  const user = await prisma.user.create({ data: { username } });
  return { user };
});
