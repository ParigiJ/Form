import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const hashtags = await prisma.hashtag.findMany();
    return NextResponse.json(hashtags);
  } catch (error) {
    return NextResponse.json({ error: "fetch error" }, { status: "500" });
  } finally {
    await prisma.$disconnect();
  }
}
