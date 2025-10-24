interface Certificate {
  id: number;
  title: string;
  issuer: string;
  pdfUrl: string;
}

export const myCertificates: Certificate[] = [
  {
    id: 1,
    title: "Praktikumszeugnis - Softwareentwickler",
    issuer: "Check24 GmbH",
    pdfUrl: "/certificates/pdfs/Praktikumszeugnis_Sah_Saroj.pdf",
  },

  {
    id: 2,
    title: "Complete Web Developer Bootcamp - Udemy",
    issuer: "Udemy",
    pdfUrl: "/certificates/pdfs/UC-BLKY1DX7.pdf",
  },
  {
    id: 3,
    title: "Java Spring Framework 6, Spring Boot 3, Spring AI Telusko",
    issuer: "Udemy",
    pdfUrl: "/certificates/pdfs/UC-cdce7864-66fa-4900-a7dc-5deef60f76ef.pdf",
  },
  {
    id: 4,
    title: "Huawei HCNA | HCIA Certification",
    issuer: "Huawei",
    pdfUrl: "/certificates/pdfs/huawei_certificate.pdf",
  },
];
