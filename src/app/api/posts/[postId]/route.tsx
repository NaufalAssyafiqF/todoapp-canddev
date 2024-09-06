
import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

interface contextProps {
    params: {
        postId: string
    }
}

export async function DELETE(req: Request, context: contextProps) {
  try {
    const {params} = context

    await db.post.delete({
      where: {
        id: params.postId
      }
    });
    return NextResponse.json({message: "successfully delete"}, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request, context: contextProps) {
  try {
    const { params } = context;
    const body = await req.json();

    await db.post.update({
      where: {
        id: params.postId,
      },
      data: {
        title: body.title,
        content: body.content,
        tagId: body.tagId,
      }
    });
    return NextResponse.json(
      { message: "successfully update" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request, context: contextProps) {
  try {
    const {params} = context;
    const post = await db.post.findFirst({
        where: {
            id: params.postId
        },
        include: {
            tag: true,
        }
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
