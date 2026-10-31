import { NextResponse } from "next/server";
import { Resend } from "resend";

const ALLOWED_PATHWAYS = [
  "Product MVP Sprint",
  "Product Transformation",
] as const;

type Pathway = (typeof ALLOWED_PATHWAYS)[number];

type Inquiry = {
  pathway: Pathway;
  name: string;
  email: string;
  product?: string;
  stage?: string;
  website?: string;
  challenge?: string;
};

const EMAIL_RECIPIENTS = ["rajeev@arcadydesign.com", "bitmasteratj@gmail.com"];

const EMAIL_FROM = "Arcady Design <hello@arcadydesign.com>";

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidWebsite(website: string): boolean {
  if (!website) return true;

  try {
    const url = new URL(website);

    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function formatWebsite(website: string): string {
  if (!website) return "";

  if (!isValidWebsite(website)) return escapeHtml(website);

  const safeUrl = escapeHtml(website);

  return `
    <a
      href="${safeUrl}"
      target="_blank"
      style="
        color: #2563eb;
        text-decoration: none;
        font-weight: 600;
      "
    >
      ${safeUrl}
    </a>
  `;
}

/* -------------------------------------------------------------------------- */
/* Email Components                                                           */
/* -------------------------------------------------------------------------- */

function emailField(label: string, value: string) {
  if (!value) return "";

  return `
    <tr>
      <td
        style="
          padding: 12px 0;
          width: 150px;
          color: #64748b;
          font-size: 13px;
          vertical-align: top;
          border-bottom: 1px solid #f1f5f9;
        "
      >
        ${escapeHtml(label)}
      </td>

      <td
        style="
          padding: 12px 0;
          color: #0f172a;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.6;
          vertical-align: top;
          border-bottom: 1px solid #f1f5f9;
          word-break: break-word;
        "
      >
        ${escapeHtml(value)}
      </td>
    </tr>
  `;
}

function emailSection(title: string, content: string) {
  if (!content) return "";

  return `
    <div style="margin-bottom: 30px;">

      <div
        style="
          margin-bottom: 12px;
          color: #2563eb;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        "
      >
        ${escapeHtml(title)}
      </div>

      <table
        width="100%"
        cellpadding="0"
        cellspacing="0"
        style="border-collapse: collapse;"
      >
        ${content}
      </table>

    </div>
  `;
}

function challengeTags(challenge: string) {
  if (!challenge) return "";

  const selected = challenge
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return `
    <div style="margin-top: 8px;">

      ${selected
        .map(
          (item) => `
            <span
              style="
                display: inline-block;
                margin: 0 6px 8px 0;
                padding: 8px 12px;
                border-radius: 8px;
                background: #eff6ff;
                color: #1d4ed8;
                font-size: 12px;
                font-weight: 600;
              "
            >
              ${escapeHtml(item)}
            </span>
          `
        )
        .join("")}

    </div>
  `;
}

/* -------------------------------------------------------------------------- */
/* Email Template                                                             */
/* -------------------------------------------------------------------------- */

function buildEmail(inquiry: Inquiry) {
  const isMVP = inquiry.pathway === "Product MVP Sprint";

  const title = isMVP
    ? "New MVP project inquiry"
    : "New product transformation inquiry";

  const projectContent = isMVP
    ? emailField("Product idea", inquiry.product || "") +
      emailField("Current stage", inquiry.stage || "")
    : `
        ${emailField("Product website", inquiry.website || "")}

        <tr>
          <td
            colspan="2"
            style="
              padding: 18px 0 8px;
              color: #64748b;
              font-size: 13px;
              border-bottom: 1px solid #f1f5f9;
            "
          >
            Product challenges
          </td>
        </tr>

        <tr>
          <td colspan="2" style="padding: 12px 0;">
            ${challengeTags(inquiry.challenge || "")}
          </td>
        </tr>
      `;

  const subject = isMVP
    ? `New MVP inquiry | ${inquiry.name}`
    : `New product transformation inquiry | ${inquiry.name}`;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body
        style="
          margin: 0;
          padding: 0;
          background: #f1f5f9;
          font-family: Arial, Helvetica, sans-serif;
        "
      >

        <div style="padding: 40px 16px;">

          <div
            style="
              max-width: 620px;
              margin: 0 auto;
              overflow: hidden;
              background: #ffffff;
              border: 1px solid #e2e8f0;
              border-radius: 20px;
            "
          >

            <!-- Header -->

            <div
              style="
                padding: 32px;
                background: #0b1733;
              "
            >

              <div
                style="
                  margin-bottom: 18px;
                  color: #60a5fa;
                  font-size: 11px;
                  font-weight: 700;
                  letter-spacing: 0.2em;
                  text-transform: uppercase;
                "
              >
                ARCADY DESIGN
              </div>

              <div
                style="
                  margin-bottom: 10px;
                  color: #94a3b8;
                  font-size: 11px;
                  font-weight: 600;
                  letter-spacing: 0.14em;
                  text-transform: uppercase;
                "
              >
                ${escapeHtml(title)}
              </div>

              <div
                style="
                  color: #ffffff;
                  font-size: 26px;
                  font-weight: 600;
                  line-height: 1.3;
                "
              >
                ${escapeHtml(inquiry.name)}
              </div>

              <div
                style="
                  margin-top: 12px;
                  color: #94a3b8;
                  font-size: 13px;
                "
              >
                Submitted through arcadydesign.com
              </div>

            </div>

            <!-- Content -->

            <div style="padding: 32px;">

              <!-- Pathway badge -->

              <div style="margin-bottom: 28px;">

                <span
                  style="
                    display: inline-block;
                    padding: 9px 14px;
                    border-radius: 30px;
                    background: #eff6ff;
                    color: #1d4ed8;
                    font-size: 12px;
                    font-weight: 700;
                  "
                >
                  ${escapeHtml(inquiry.pathway)}
                </span>

              </div>

              <!-- Contact -->

              ${emailSection(
                "Contact information",
                `
                  ${emailField("Name", inquiry.name)}
                  ${emailField("Email", inquiry.email)}
                `
              )}

              <!-- Product -->

              ${emailSection(
                isMVP ? "Product idea" : "Product information",
                projectContent
              )}

              <!-- Reply CTA -->

              <div
                style="
                  margin-top: 30px;
                  padding: 24px;
                  border-radius: 14px;
                  background: #f8fafc;
                  text-align: center;
                "
              >

                <div
                  style="
                    margin-bottom: 8px;
                    color: #0f172a;
                    font-size: 16px;
                    font-weight: 600;
                  "
                >
                  Ready to start a conversation?
                </div>

                <div
                  style="
                    margin-bottom: 18px;
                    color: #64748b;
                    font-size: 13px;
                    line-height: 1.6;
                  "
                >
                  Reply directly to this email to contact ${escapeHtml(inquiry.name)}.
                </div>

                <a
                  href="mailto:${escapeHtml(inquiry.email)}?subject=${encodeURIComponent(
                    "Re: Your Arcady Design inquiry"
                  )}"
                  style="
                    display: inline-block;
                    padding: 13px 24px;
                    border-radius: 30px;
                    background: #0b1733;
                    color: #ffffff;
                    font-size: 13px;
                    font-weight: 600;
                    text-decoration: none;
                  "
                >
                  Reply to inquiry &rarr;
                </a>

              </div>

            </div>

            <!-- Footer -->

            <div
              style="
                padding: 20px 32px;
                border-top: 1px solid #e2e8f0;
                color: #94a3b8;
                font-size: 11px;
                line-height: 1.7;
              "
            >
              Arcady Design<br />
              Your Product's Systems Architect<br />
              <a
                href="https://arcadydesign.com"
                style="
                  color: #2563eb;
                  text-decoration: none;
                "
              >
                arcadydesign.com
              </a>
            </div>

          </div>

        </div>

      </body>
    </html>
  `;

  const text = `
New ${inquiry.pathway} inquiry

Name: ${inquiry.name}
Email: ${inquiry.email}

${
  isMVP
    ? `
Product idea:
${inquiry.product}

Current stage:
${inquiry.stage}
`
    : `
Product website:
${inquiry.website || "Not provided"}

Product challenges:
${inquiry.challenge}
`
}

Reply to: ${inquiry.email}

Submitted through arcadydesign.com
  `.trim();

  return { subject, html, text };
}

/* -------------------------------------------------------------------------- */
/* API Route                                                                  */
/* -------------------------------------------------------------------------- */

export async function POST(request: Request) {
  try {
    // Check email configuration

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");

      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    // Parse request

    let body: Record<string, unknown>;

    try {
      const parsed = await request.json();

      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        return NextResponse.json(
          { error: "Invalid inquiry data." },
          { status: 400 }
        );
      }

      body = parsed as Record<string, unknown>;
    } catch {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    // Common fields

    const pathway = getString(body.pathway);
    const name = getString(body.name);
    const email = getString(body.email);
    const website = getString(body.website);

    // Validate pathway

    if (!ALLOWED_PATHWAYS.includes(pathway as Pathway)) {
      return NextResponse.json(
        { error: "Invalid project pathway." },
        { status: 400 }
      );
    }

    const isMVP = pathway === "Product MVP Sprint";

    // Validate common required fields

    if (!name || !email) {
      return NextResponse.json(
        { error: "Please provide your name and email." },
        { status: 400 }
      );
    }

    if (name.length > 150 || email.length > 254) {
      return NextResponse.json(
        { error: "One or more fields are too long." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (website.length > 500 || !isValidWebsite(website)) {
      return NextResponse.json(
        { error: "Please enter a valid product website." },
        { status: 400 }
      );
    }

    // Build pathway-specific inquiry

    let inquiry: Inquiry;

    if (isMVP) {
      const product = getString(body.product);
      const stage = getString(body.stage);

      if (!product || !stage) {
        return NextResponse.json(
          {
            error:
              "Please describe your product idea and select its current stage.",
          },
          { status: 400 }
        );
      }

      if (product.length > 3000 || stage.length > 150) {
        return NextResponse.json(
          { error: "One or more fields are too long." },
          { status: 400 }
        );
      }

      const allowedStages = [
        "Idea / Concept",
        "Validating the idea",
        "Have a prototype",
        "Ready to build",
        "Existing business, launching a new product",
      ];

      if (!allowedStages.includes(stage)) {
        return NextResponse.json(
          { error: "Invalid product stage." },
          { status: 400 }
        );
      }

      inquiry = {
        pathway: "Product MVP Sprint",
        name,
        email,
        product,
        stage,
      };
    } else {
      const challenge = getString(body.challenge);

      if (!challenge) {
        return NextResponse.json(
          {
            error: "Please select at least one product challenge.",
          },
          { status: 400 }
        );
      }

      if (challenge.length > 1000) {
        return NextResponse.json(
          { error: "Selected challenges are too long." },
          { status: 400 }
        );
      }

      const allowedChallenges = [
        "Complex workflows",
        "Poor UX / usability",
        "Low user adoption",
        "Fragmented experience",
        "Scaling issues",
        "Inconsistent product systems",
        "Not sure yet",
      ];

      const selectedChallenges = challenge
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);

      const invalidChallenges = selectedChallenges.filter(
        (item) => !allowedChallenges.includes(item)
      );

      if (
        selectedChallenges.length === 0 ||
        invalidChallenges.length > 0 ||
        new Set(selectedChallenges).size !== selectedChallenges.length
      ) {
        return NextResponse.json(
          { error: "Invalid product challenge selection." },
          { status: 400 }
        );
      }

      inquiry = {
        pathway: "Product Transformation",
        name,
        email,
        website,
        challenge: selectedChallenges.join(", "),
      };
    }

    // Send email

    const resend = new Resend(apiKey);

    const { subject, html, text } = buildEmail(inquiry);

    const { data, error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_RECIPIENTS,
      replyTo: email,
      subject,
      html,
      text,
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
