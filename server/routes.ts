import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download endpoint
  app.get("/api/resume/download", (req, res) => {
    try {
      const resumePath = path.join(process.cwd(), "attached_assets", "GN-Resume ...._1759745097024.pdf");
      
      if (!fs.existsSync(resumePath)) {
        return res.status(404).json({ message: "Resume not found" });
      }

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Abdul_Wahab_Resume.pdf"');
      
      const fileStream = fs.createReadStream(resumePath);
      fileStream.pipe(res);
    } catch (error) {
      console.error('Error serving resume:', error);
      res.status(500).json({ message: "Error downloading resume" });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // In a real application, you would:
      // 1. Send an email using a service like SendGrid, Mailgun, etc.
      // 2. Store the message in a database
      // 3. Send a notification to the site owner

      console.log('Contact form submission:', {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
      });

      // For now, we'll just log the message and return success
      res.json({ message: "Message sent successfully" });
    } catch (error) {
      console.error('Error processing contact form:', error);
      res.status(500).json({ message: "Error sending message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
