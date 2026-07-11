import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { passcode } = await request.json();
    const correctPasscode = process.env.ADMIN_PASSCODE || "unicore123";

    if (passcode === correctPasscode) {
      return NextResponse.json({ success: true, token: "unicore_admin_session_active" });
    }

    return NextResponse.json({ success: false, error: "Incorrect passcode" }, { status: 401 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
