import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const feedback = await prisma.feedback.findMany();
    return NextResponse.json(feedback);
  } catch (error) {
    return NextResponse.json({ error: "fetch error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(request) {
  try {
    const { brand, feedback } = await request.json();

    if (!brand || !feedback) {
      return NextResponse.json(
        { error: "Brand and text are required" },
        { status: 400 }
      );
    }

    const postFeedback = await prisma.feedback.create({
      data: { brand, feedback },
    });

    return NextResponse.json(postFeedback, { status: 201 });
  } catch (error) {
    console.error("ERROR in POST /api/feedbacks:", error);
    return NextResponse.json(
      { error: "Database error", details: error.message },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
