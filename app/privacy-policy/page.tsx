import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "UK Privacy Policy | Pure Surface Solutions",
  description: "Read Pure Surface Solutions' UK GDPR privacy policy regarding the collection, handling, and protection of your personal data."
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <Reveal>
            <span className="eyebrow">Legal Information</span>
            <h1>UK Privacy Policy</h1>
            <p>How Pure Surface Solutions collects, processes and protects your personal data under UK GDPR.</p>
          </Reveal>
        </div>
      </section>

      <section className="legal-section">
        <div className="container">
          <Reveal className="legal-container">
            <div className="legal-meta">
              <span><strong>Effective Date:</strong> January 1, 2026</span>
              <span><strong>Compliance:</strong> UK General Data Protection Regulation (UK GDPR) & Data Protection Act 2018</span>
            </div>

            <div className="legal-body">
              <h2>1. Introduction & Data Controller</h2>
              <p>
                Pure Surface Solutions ("we", "us", "our") is committed to protecting and respecting your privacy. 
                This Privacy Policy explains how we collect, use, store and process your personal data when you visit our website, 
                enquire about our outdoor porcelain paving products, or engage our services across the United Kingdom.
              </p>
              <p>
                For the purpose of the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, 
                Pure Surface Solutions acts as the <strong>Data Controller</strong>.
              </p>

              <h2>2. Personal Data We Collect</h2>
              <p>We may collect and process the following categories of personal information:</p>
              <ul>
                <li><strong>Identity & Contact Details:</strong> Full name, billing address, UK delivery address, phone/WhatsApp number, and email address.</li>
                <li><strong>Project & Enquiry Information:</strong> Square meterage requirements, preferred tile styles/finishes, site access details, and custom quote notes.</li>
                <li><strong>Financial & Transaction Data:</strong> Payment details (processed securely via regulated UK payment providers), invoices, and order history.</li>
                <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, browser plug-in types, operating system, and platform used to access our website.</li>
                <li><strong>Communication Logs:</strong> Records of correspondence via phone, email, WhatsApp, or website submission forms.</li>
              </ul>

              <h2>3. How & Why We Use Your Data (Legal Basis)</h2>
              <p>Under UK data protection law, we only process your personal data where we have a valid lawful basis:</p>
              <ul>
                <li><strong>Performance of a Contract:</strong> To prepare quotes, process orders, arrange nationwide UK haulage delivery, and manage customer service.</li>
                <li><strong>Legitimate Interests:</strong> To respond to enquiries, improve our outdoor porcelain product range, manage business operations, and prevent fraud.</li>
                <li><strong>Legal Compliance:</strong> To maintain VAT, statutory accounting, tax records, and comply with UK regulatory obligations.</li>
                <li><strong>Consent:</strong> Where you explicitly consent to receive marketing updates or sample tile dispatch notifications.</li>
              </ul>

              <div className="legal-box">
                <strong>UK GDPR Commitment:</strong> We never sell, rent, or trade your personal information to third-party marketing companies under any circumstances.
              </div>

              <h2>4. Sharing Your Personal Data</h2>
              <p>To provide high-quality supply and delivery across the UK, we share necessary data with selected third parties who adhere to strict data security standards:</p>
              <ul>
                <li><strong>Haulage & Logistics Partners:</strong> UK transport and pallet delivery companies (solely to complete kerbside offloading to your address).</li>
                <li><strong>Payment Processors:</strong> Encrypted, PCI-compliant UK payment gateways for secure transaction processing.</li>
                <li><strong>IT Infrastructure & Hosting:</strong> Regulated cloud hosting, database management, and email communication services.</li>
                <li><strong>Professional Advisers:</strong> Auditors, legal counsel, and accountants for statutory compliance.</li>
              </ul>

              <h2>5. Data Retention & Security</h2>
              <p>
                We implement technical and organizational security measures to protect your personal data against unauthorized access, loss, or alteration. 
                We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including satisfying any legal, tax, accounting, or reporting requirements (typically 6 years for UK statutory tax records).
              </p>

              <h2>6. Your Rights Under UK GDPR</h2>
              <p>Under UK data protection laws, you possess the following rights regarding your personal information:</p>
              <ul>
                <li><strong>Right of Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete personal information.</li>
                <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request deletion of your personal data where there is no compelling legal reason for continued processing.</li>
                <li><strong>Right to Restrict Processing:</strong> Request suspension of processing under specific circumstances.</li>
                <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or direct marketing.</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service provider.</li>
              </ul>
              <p>
                To exercise any of these rights, please contact our Data Protection contact at <a href="mailto:info@puresurface.co.uk">info@puresurface.co.uk</a>.
              </p>
              <p>
                If you believe your data has been mismanaged, you also have the right to lodge a complaint with the UK supervisory authority: 
                <strong> Information Commissioner's Office (ICO)</strong> (<a href="https://ico.org.uk" target="_blank" rel="noreferrer">ico.org.uk</a>).
              </p>

              <h2>7. Cookies & Tracking</h2>
              <p>
                Our website utilizes essential cookies required for core site functionality and security navigation. We may also use privacy-friendly analytics tools to measure website performance and enhance user experience. You can adjust your browser settings to refuse non-essential cookies at any time.
              </p>

              <h2>8. Contact Us Regarding Privacy</h2>
              <p>If you have any questions about this Privacy Policy or how we handle your personal data, please reach out to our team:</p>
              
              <div className="legal-contact-card">
                <div className="legal-contact-item">
                  <Icon name="mail" size={20} />
                  <span>info@puresurface.co.uk</span>
                </div>
                <div className="legal-contact-item">
                  <Icon name="phone" size={20} />
                  <span>07407048979</span>
                </div>
                <div className="legal-contact-item">
                  <Icon name="truck" size={20} />
                  <span>Nationwide UK Coverage</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
