import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


// Basic in-memory rate limit.
// This helps prevent repeated submissions from the same IP.
// For larger production traffic, use a persistent rate-limit service.
const submissions = new Map();

const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes
const MAX_SUBMISSIONS = 3;


export async function POST(request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const startDate = String(formData.get("startDate") || "").trim();
    const endDate = String(formData.get("endDate") || "").trim();
    const guests = String(formData.get("guests") || "").trim();
    const property = String(formData.get("property") || "").trim();
    const medicalNeeds = String(
      formData.get("medicalNeeds") || ""
    ).trim();
    const message = String(
      formData.get("message") || ""
    ).trim();

    // Honeypot
    const website = String(
      formData.get("website") || ""
    ).trim();


    /*
      If the hidden website field contains anything,
      assume it is a bot.
    */
    if (website) {
      return NextResponse.json({
        success: true,
        message: "Inquiry received.",
      });
    }


    // Basic validation
    if (!name || !email || !startDate || !endDate || !guests || !property) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }


    // Email validation
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }


    // Limit guest selection server-side too
    const guestNumber = Number(guests);

    if (
      !Number.isInteger(guestNumber) ||
      guestNumber < 1 ||
      guestNumber > 6
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid guest count.",
        },
        { status: 400 }
      );
    }


    // Get visitor IP
    const forwardedFor =
      request.headers.get("x-forwarded-for");

    const ip =
      forwardedFor?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";


    // Rate limiting
    const now = Date.now();

    const previous = submissions.get(ip);

    if (previous) {
      const timePassed = now - previous.firstSubmission;

      if (timePassed < RATE_LIMIT_WINDOW) {
        if (previous.count >= MAX_SUBMISSIONS) {
          return NextResponse.json(
            {
              success: false,
              message:
                "Too many inquiries have been submitted. Please try again later.",
            },
            { status: 429 }
          );
        }

        previous.count += 1;
      } else {
        submissions.set(ip, {
          count: 1,
          firstSubmission: now,
        });
      }
    } else {
      submissions.set(ip, {
        count: 1,
        firstSubmission: now,
      });
    }


    // Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });


    const emailSubject =
      `Medical Stay Inquiry - ${name} - ${property}`;


    const emailHtml = `
      <div style="
        font-family: Arial, sans-serif;
        max-width: 700px;
        margin: 0 auto;
        color: #20271d;
      ">

        <div style="
          padding: 25px;
          background: #4c5b3d;
          color: #fffdf8;
        ">
          <h2 style="
            margin: 0;
            font-family: Georgia, serif;
            font-weight: normal;
          ">
            New Medical Stay Inquiry
          </h2>
        </div>


        <div style="padding: 30px; background: #f7f2e9;">

          <h3 style="
            margin-top: 0;
            font-family: Georgia, serif;
            font-weight: normal;
          ">
            Guest Information
          </h3>

          <table style="
            width: 100%;
            border-collapse: collapse;
          ">

            <tr>
              <td style="padding: 9px 0; font-weight: bold;">
                Name
              </td>
              <td style="padding: 9px 0;">
                ${escapeHtml(name)}
              </td>
            </tr>

            <tr>
              <td style="padding: 9px 0; font-weight: bold;">
                Email
              </td>
              <td style="padding: 9px 0;">
                <a href="mailto:${escapeHtml(email)}">
                  ${escapeHtml(email)}
                </a>
              </td>
            </tr>

            <tr>
              <td style="padding: 9px 0; font-weight: bold;">
                Start Date
              </td>
              <td style="padding: 9px 0;">
                ${escapeHtml(startDate)}
              </td>
            </tr>

            <tr>
              <td style="padding: 9px 0; font-weight: bold;">
                End Date
              </td>
              <td style="padding: 9px 0;">
                ${escapeHtml(endDate)}
              </td>
            </tr>

            <tr>
              <td style="padding: 9px 0; font-weight: bold;">
                Guests
              </td>
              <td style="padding: 9px 0;">
                ${escapeHtml(guests)}
              </td>
            </tr>

            <tr>
              <td style="padding: 9px 0; font-weight: bold;">
                Preferred Property
              </td>
              <td style="padding: 9px 0;">
                ${escapeHtml(property)}
              </td>
            </tr>

          </table>


          <h3 style="
            margin-top: 30px;
            font-family: Georgia, serif;
            font-weight: normal;
          ">
            Special Medical Needs
          </h3>

          <div style="
            padding: 18px;
            background: #fffdf8;
            border: 1px solid #ddd6ca;
            line-height: 1.7;
            white-space: pre-wrap;
          ">
            ${escapeHtml(
              medicalNeeds || "Not provided"
            )}
          </div>


          <h3 style="
            margin-top: 30px;
            font-family: Georgia, serif;
            font-weight: normal;
          ">
            Message
          </h3>

          <div style="
            padding: 18px;
            background: #fffdf8;
            border: 1px solid #ddd6ca;
            line-height: 1.7;
            white-space: pre-wrap;
          ">
            ${escapeHtml(
              message || "No additional message."
            )}
          </div>

        </div>

      </div>
    `;


    await transporter.sendMail({
      from: `"Scottsdale Medical Stays" <${process.env.GMAIL_USER}>`,
      to: "krish.sandaru@gmail.com",
      replyTo: email,
      subject: emailSubject,
      html: emailHtml,

      text: `
New Medical Stay Inquiry

Name: ${name}
Email: ${email}

Start Date: ${startDate}
End Date: ${endDate}
Guests: ${guests}
Preferred Property: ${property}

Special Medical Needs:
${medicalNeeds || "Not provided"}

Message:
${message || "No additional message."}
      `,
    });


    return NextResponse.json({
      success: true,
      message: "Your inquiry has been sent successfully.",
    });


  } catch (error) {

    console.error("CONTACT FORM ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to send your inquiry right now. Please contact us directly.",
      },
      { status: 500 }
    );
  }
}


/*
  Escape user input before putting it into HTML email.
*/
function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}