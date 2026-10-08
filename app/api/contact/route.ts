import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const ALLOWED_PATHWAYS = [
  "Product MVP Sprint",
  "Product Transformation",
] as const;

type Pathway = (typeof ALLOWED_PATHWAYS)[number];

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function field(label: string, value: unknown) {
  if (!value) return "";

  return `
    <tr>
      <td
        style="
          padding: 10px 0;
          color: #64748b;
          font-size: 13px;
          width: 180px;
          vertical-align: top;
        "
      >
        ${escapeHtml(label)}
      </td>

      <td
        style="
          padding: 10px 0;
          color: #0f172a;
          font-size: 14px;
          font-weight: 500;
          vertical-align: top;
        "
      >
        ${escapeHtml(value)}
      </td>
    </tr>
  `;
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_EMAIL) {
      console.error("CONTACT_EMAIL is missing");

      return NextResponse.json(
        { error: "Contact email is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();

    const {
      pathway,
      name,
      email,
      company,
      website,

      // MVP
      product,
      stage,
      help,
      developmentTeam,

      // Transformation
      improvement,
      challenge,

      // Shared
      budget,
      timeline,
      message,
    } = body;

    // -------------------------------------------------------------------------
    // Basic validation
    // -------------------------------------------------------------------------

    if (!name || !email || !company || !pathway) {
      return NextResponse.json(
        {
          error: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    if (!ALLOWED_PATHWAYS.includes(pathway as Pathway)) {
      return NextResponse.json(
        {
          error: "Invalid project pathway.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(String(email))) {
      return NextResponse.json(
        {
          error: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // Prevent excessively large submissions
    const values = Object.values(body);

    const tooLarge = values.some(
      (value) => typeof value === "string" && value.length > 5000
    );

    if (tooLarge) {
      return NextResponse.json(
        {
          error: "One or more fields are too long.",
        },
        { status: 400 }
      );
    }

    // -------------------------------------------------------------------------
    // Build project-specific fields
    // -------------------------------------------------------------------------

    const isMVP = pathway === "Product MVP Sprint";

    const projectFields = isMVP
      ? `
          ${field("Product", product)}
          ${field("Current stage", stage)}
          ${field("Help needed", help)}
          ${field("Development team", developmentTeam)}
        `
      : `
          ${field("Product", product)}
          ${field("What they want to improve", improvement)}
          ${field("Main challenge", challenge)}
          ${field("Current stage", stage)}
        `;

    // -------------------------------------------------------------------------
    // Send email
    // -------------------------------------------------------------------------

    const { data, error } = await resend.emails.send({
      from: "Arcady Design <hello@arcadydesign.com>",

      to: ["rajeev@arcadydesign.com", "bitmasteratj@gmail.com"],

      replyTo: email,

      subject: `New ${pathway} inquiry from ${name}`,

      html: `
        <!DOCTYPE html>
        <html>
          <body
            style="
              margin: 0;
              padding: 0;
              background: #f1f5f9;
              font-family: Arial, Helvetica, sans-serif;
            "
          >
            <div style="padding: 40px 20px;">

              <div
                style="
                  max-width: 680px;
                  margin: 0 auto;
                  background: #ffffff;
                  border-radius: 20px;
                  overflow: hidden;
                  border: 1px solid #e2e8f0;
                "
              >

                <!-- Header -->

                <div
                  style="
                    background: #0b1733;
                    padding: 32px;
                  "
                >
                  <div
                    style="
                      color: #60a5fa;
                      font-size: 11px;
                      font-weight: 700;
                      letter-spacing: 0.18em;
                      text-transform: uppercase;
                      margin-bottom: 12px;
                    "
                  >
                    New project inquiry
                  </div>

                  <div
                    style="
                      color: #ffffff;
                      font-size: 26px;
                      font-weight: 600;
                      line-height: 1.3;
                    "
                  >
                    ${escapeHtml(pathway)}
                  </div>

                  <div
                    style="
                      color: #94a3b8;
                      font-size: 14px;
                      margin-top: 8px;
                    "
                  >
                    Submitted through Arcady Design
                  </div>
                </div>


                <!-- Content -->

                <div style="padding: 32px;">

                  <div
                    style="
                      font-size: 11px;
                      color: #2563eb;
                      font-weight: 700;
                      text-transform: uppercase;
                      letter-spacing: 0.14em;
                      margin-bottom: 12px;
                    "
                  >
                    Contact
                  </div>

                  <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    style="border-collapse: collapse;"
                  >
                    ${field("Name", name)}
                    ${field("Email", email)}
                    ${field("Company", company)}
                    ${field("Website", website)}
                  </table>


                  <div
                    style="
                      height: 1px;
                      background: #e2e8f0;
                      margin: 28px 0;
                    "
                  ></div>


                  <div
                    style="
                      font-size: 11px;
                      color: #2563eb;
                      font-weight: 700;
                      text-transform: uppercase;
                      letter-spacing: 0.14em;
                      margin-bottom: 12px;
                    "
                  >
                    Product
                  </div>

                  <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    style="border-collapse: collapse;"
                  >
                    ${projectFields}
                  </table>


                  <div
                    style="
                      height: 1px;
                      background: #e2e8f0;
                      margin: 28px 0;
                    "
                  ></div>


                  <div
                    style="
                      font-size: 11px;
                      color: #2563eb;
                      font-weight: 700;
                      text-transform: uppercase;
                      letter-spacing: 0.14em;
                      margin-bottom: 12px;
                    "
                  >
                    Project details
                  </div>

                  <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    style="border-collapse: collapse;"
                  >
                    ${field("Budget", budget)}
                    ${field("Timeline", timeline)}
                  </table>

                  ${
                    message
                      ? `
                        <div
                          style="
                            margin-top: 24px;
                            padding: 20px;
                            background: #f8fafc;
                            border-radius: 12px;
                          "
                        >
                          <div
                            style="
                              color: #64748b;
                              font-size: 11px;
                              font-weight: 700;
                              text-transform: uppercase;
                              letter-spacing: 0.12em;
                              margin-bottom: 10px;
                            "
                          >
                            Additional details
                          </div>

                          <div
                            style="
                              color: #334155;
                              font-size: 14px;
                              line-height: 1.7;
                              white-space: pre-wrap;
                            "
                          >${escapeHtml(message)}</div>
                        </div>
                      `
                      : ""
                  }

                </div>
              </div>

            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "Unable to send your inquiry. Please try again.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
