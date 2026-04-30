import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Contact form handler (used by app/api/contact/route.ts)
export async function handleContactForm(data: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}): Promise<{ success: boolean; error?: string }> {
  // In production, integrate Resend or Nodemailer here.
  // For now, log and return success (mock).
  console.log("[Contact Form]", data);
  if (!data.name || !data.email || !data.message) {
    return { success: false, error: "Missing required fields" };
  }
  return { success: true };
}
