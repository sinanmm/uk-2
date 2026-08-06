import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "UK Terms & Conditions | Pure Surface Solutions",
  description: "Read the terms and conditions of sale, supply, and nationwide delivery for Pure Surface Solutions outdoor porcelain paving products."
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <Reveal>
            <span className="eyebrow">Legal Information</span>
            <h1>UK Terms &amp; Conditions</h1>
            <p>Terms and conditions governing sales, orders, supply and delivery of Pure Surface Solutions outdoor porcelain products.</p>
          </Reveal>
        </div>
      </section>

      <section className="legal-section">
        <div className="container">
          <Reveal className="legal-container">
            <div className="legal-meta">
              <span><strong>Last Updated:</strong> January 1, 2026</span>
              <span><strong>Jurisdiction:</strong> Laws of England &amp; Wales (UK)</span>
            </div>

            <div className="legal-body">
              <h2>1. Agreement & Company Details</h2>
              <p>
                These Terms and Conditions apply to all quotations, sales, and deliveries of 20mm outdoor porcelain pavers, tiles, and associated products by <strong>Pure Surface Solutions</strong> ("we", "us", "our") to homeowners, trade contractors, commercial developers, and buyers ("customer", "you").
              </p>
              <p>
                By requesting a quotation, placing an order, or agreeing to supply, you accept and agree to be bound by these Terms and Conditions in full.
              </p>

              <h2>2. Product Specifications & Material Characteristics</h2>
              <p>
                Pure Surface Solutions specializes in high-performance 20mm outdoor porcelain pavers engineered for patio, garden, pathway, terrace, and driveway installations across the UK:
              </p>
              <ul>
                <li><strong>Anti-Slip Rating:</strong> Our outdoor porcelain tiles feature an R11 anti-slip surface rating designed for wet UK outdoor conditions.</li>
                <li><strong>Dimensions & Calibre:</strong> Nominal sizes (e.g., 600x600mm, 600x900mm, 900x900mm, 600x1200mm) are subject to standard manufacturing tolerances (+/- 1-2mm calibre variance standard in heavy-duty vitrified porcelain).</li>
                <li><strong>Batch & Shade Variations:</strong> Porcelain is produced in specific firing batches. Slight variations in tone, color shade, and surface texture between batches are inherent to ceramic & vitrified manufacturing. We recommend purchasing a 10% allowance for cuts, waste, and future repairs from the same production batch.</li>
              </ul>

              <h2>3. Quotations, Pricing & Payments</h2>
              <ul>
                <li>All quotations issued by Pure Surface Solutions are valid for 30 calendar days from issue unless otherwise stated in writing.</li>
                <li>Prices are quoted in Pounds Sterling (£ GBP) and clearly state applicable UK VAT.</li>
                <li>Full payment is required prior to order dispatch unless credit or commercial trade terms have been explicitly agreed in writing.</li>
              </ul>

              <h2>4. Nationwide UK Delivery & Kerbside Offloading</h2>
              <p>We provide nationwide delivery across the United Kingdom through third-party specialized pallet network carriers:</p>
              <ul>
                <li><strong>Kerbside Delivery Standard:</strong> Deliveries are strictly kerbside or to the nearest accessible hard standing ground (e.g., driveway apron) at the driver's discretion. Drivers cannot move goods into back gardens, through house premises, or over unpaved surfaces.</li>
                <li><strong>Access Requirements:</strong> Deliveries are performed using heavy vehicles (typically 18-tonne to 26-tonne rigid vehicles with tail-lifts and manual pallet trucks). You must ensure clear, hard, flat, level ground access free of steep inclines, gravel, grass, or weight restrictions.</li>
                <li><strong>Failed Delivery Charges:</strong> If delivery cannot be completed due to inaccessible roads, restricted entry, lack of offload capability, or customer absence on the scheduled delivery day, redelivery charges will apply.</li>
              </ul>

              <div className="legal-box">
                <strong>Crucial Inspection Requirement:</strong> All goods must be visually inspected upon arrival. Any transit damage or missing items must be noted on the delivery driver’s paperwork and reported to us within 48 hours.
              </div>

              <h2>5. Damages, Shortages & Claims Procedure</h2>
              <p>While outdoor porcelain is extremely tough once installed, individual unfixed tiles can suffer transit damage if mishandled:</p>
              <ul>
                <li><strong>Reporting Period:</strong> You must inspect your delivery immediately upon receipt. Any chips, breaks, or missing quantities must be photographed in their original packaging and reported via email to <a href="mailto:info@puresurface.co.uk">info@puresurface.co.uk</a> within 48 hours of delivery.</li>
                <li><strong>Replacements & Refunds:</strong> Damaged tiles will be credited or replaced as promptly as possible. Do not discard damaged tiles prior to receiving written confirmation from our customer support team.</li>
              </ul>

              <h2>6. Installation & Pre-Laying Verification</h2>
              <p>
                <strong>Pre-Installation Inspection is Mandatory:</strong> Tiles must be thoroughly unpacked, inspected for color, shade, calibre, and condition BEFORE laying or fixing. 
              </p>
              <p>
                Once tiles have been cut, installed, bedded in mortar, or adhered with grout/primer, <strong>no claims for shade, calibre, color variation, or visible pre-installation defects can be accepted</strong> under any circumstances.
              </p>

              <h2>7. Right to Cancel & Returns (Consumer Rights)</h2>
              <p>Under the UK Consumer Contracts Regulations 2013 and Consumer Rights Act 2015:</p>
              <ul>
                <li><strong>Cancellation Period:</strong> Residential consumers have the right to cancel their order within 14 days of delivery.</li>
                <li><strong>Return Condition:</strong> Returned items must be unused, in complete full-crate/original sealed packaging, and in resalable condition.</li>
                <li><strong>Return Transport Costs:</strong> The customer is responsible for the direct cost of returning bulky palletized porcelain goods, or the deduction of return haulage fees if collection is arranged by Pure Surface Solutions.</li>
              </ul>

              <h2>8. Limitation of Liability & Law</h2>
              <p>
                Nothing in these Terms excludes or limits liability for death or personal injury caused by negligence or fraud. Subject to this, Pure Surface Solutions shall not be liable for any indirect, incidental, or consequential losses, contractor delays, or labor costs incurred during installation.
              </p>
              <p>
                These Terms and Conditions are governed by and construed in accordance with the laws of <strong>England and Wales</strong>, and both parties submit to the exclusive jurisdiction of the Courts of England and Wales.
              </p>

              <h2>9. Contact Information</h2>
              <p>For questions or formal notices regarding these Terms &amp; Conditions, please contact us:</p>

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
                  <span>UK Nationwide Support</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
