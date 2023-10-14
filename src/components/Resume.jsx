"use client";
import React, { useState } from "react";
import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const Resume = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getPDFData = () => {
    const data = [
      { text: "Form Data", style: "header" },
      { text: `Name: ${formData.name || "Joe Doe"}` },
      { text: `Email: ${formData.email || "joe@gmail.com"}` },
      { text: `Message: ${formData.message}` },
    ];
    return data;
  };

  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      padding: 10,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    header: {
      fontSize: 32,
      bold: true,
    },
  });

  return (
    <div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <PDFViewer width={400} height={400}>
        <Document>
          <Page style={styles.page}>
            <View style={styles.section}>
              <Text className='font-bold text-green-500'>{` ${
                formData.name || "Joe Doe"
              }`}</Text>
              <Text style={styles.contactInfo}>
                <p className="font-bold">keezhillam p.o</p>
              </Text>
              <Text style={styles.contactInfo}>
                Email: john@example.com | Phone: (123) 456-7890
              </Text>
              <Text style={styles.summary}>
                A dedicated and experienced software engineer with a strong
                background in web development.
              </Text>
              <Text style={styles.jobTitle}>Software Engineer - XYZ Tech</Text>
              <Text style={styles.jobDescription}>
                Developed web applications using React, Node.js, and MongoDB.
              </Text>
              <Text style={styles.jobDescription}>
                Collaborated with cross-functional teams to deliver high-quality
                software products.
              </Text>
              <Text style={styles.jobTitle}>
                Front-End Developer - ABC Corp
              </Text>
              <Text style={styles.jobDescription}>
                Designed and implemented user interfaces for e-commerce
                websites.
              </Text>
              <Text style={styles.jobDescription}>
                Utilized HTML, CSS, and JavaScript to create responsive web
                pages.
              </Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default Resume;
