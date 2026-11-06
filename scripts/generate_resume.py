import os
import sys
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from docx import Document
from docx.shared import Pt, Inches, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from pypdf import PdfReader

def generate_pdf(output_path):
    # ATS-friendly single-column layout: standard margins 0.5 in
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    # Custom styles
    name_style = ParagraphStyle(
        'DocName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=colors.HexColor('#0f172a'),
        alignment=0, # Left-aligned single-column
        spaceAfter=2
    )

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=colors.HexColor('#0284c7'), # Professional Cyan/Blue
        alignment=0,
        spaceAfter=4
    )

    contact_style = ParagraphStyle(
        'DocContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=colors.HexColor('#334155'),
        alignment=0,
        spaceAfter=8
    )

    heading_style = ParagraphStyle(
        'DocHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=colors.HexColor('#0f172a'),
        spaceBefore=8,
        spaceAfter=3,
        keepWithNext=True
    )

    subheading_style = ParagraphStyle(
        'DocSubHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12.5,
        textColor=colors.HexColor('#1e293b'),
        keepWithNext=True
    )

    meta_style = ParagraphStyle(
        'DocMeta',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#475569'),
        keepWithNext=True
    )

    body_style = ParagraphStyle(
        'DocBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        textColor=colors.HexColor('#1e293b'),
        spaceAfter=4
    )

    bullet_style = ParagraphStyle(
        'DocBullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=colors.HexColor('#1e293b'),
        leftIndent=12,
        firstLineIndent=-8,
        spaceAfter=2
    )

    story = []

    # 1. Header (Name, Title, Contact Info)
    story.append(Paragraph("<b>NAVINJITH K</b>", name_style))
    story.append(Paragraph("<b>EC-Council Certified SOC Analyst (CSA) | Cybersecurity</b>", title_style))
    contact_line = (
        "Kozhikode, Kerala, India &bull; "
        "Email: <a href='mailto:navinjith5@gmail.com' color='#0284c7'>navinjith5@gmail.com</a> &bull; "
        "Phone: +91 8289975405 &bull; "
        "LinkedIn: <a href='https://www.linkedin.com/in/navinjith-k-871107254' color='#0284c7'>linkedin.com/in/navinjith-k-871107254</a> &bull; "
        "GitHub: <a href='https://github.com/navinjith5-oss' color='#0284c7'>github.com/navinjith5-oss</a>"
    )
    story.append(Paragraph(contact_line, contact_style))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#cbd5e1'), spaceBefore=2, spaceAfter=6))

    # 2. Professional Summary
    story.append(Paragraph("<b>PROFESSIONAL SUMMARY</b>", heading_style))
    summary_text = (
        "EC-Council Certified SOC Analyst (CSA) and Cyber Forensics graduate currently pursuing Master of Computer "
        "Applications (MCA). Demonstrated internship experience supporting real-time Security Operations Center (SOC) "
        "threat monitoring, SIEM log analysis, vulnerability assessments, and Tier 1 incident triage. Creator of "
        "SecureLoop AI, an open-source security assessment prototype integrating Nuclei scanning and JSONL normalization. "
        "Strong foundation in digital forensics, MITRE ATT&CK framework mapping, and defensive security workflows."
    )
    story.append(Paragraph(summary_text, body_style))

    # 3. Certifications
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#e2e8f0'), spaceBefore=4, spaceAfter=4))
    story.append(Paragraph("<b>CERTIFICATIONS &amp; CREDENTIALS</b>", heading_style))
    story.append(Paragraph("&bull; <b>EC-Council Certified SOC Analyst (CSA)</b> &ndash; EC-Council", bullet_style))
    story.append(Paragraph("&bull; <b>Certified IT Infrastructure and Cyber SOC Analyst (CICSA)</b> &ndash; RedTeam Hacker Academy", bullet_style))
    story.append(Paragraph("&bull; <b>IBM Advanced Cybersecurity Certificate</b> &ndash; IBM", bullet_style))

    # 4. Technical Skills
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#e2e8f0'), spaceBefore=4, spaceAfter=4))
    story.append(Paragraph("<b>TECHNICAL SKILLS</b>", heading_style))
    story.append(Paragraph("<b>Security Operations:</b> SOC Monitoring (Tier 1), Threat Detection &amp; Triage, SIEM Log Analysis, Network Security Monitoring, Incident Response Support, Threat Intelligence, Vulnerability Assessment &amp; Management, Security Reporting.", body_style))
    story.append(Paragraph("<b>SIEM &amp; Security Tools:</b> Splunk, IBM QRadar, Microsoft Sentinel, Wireshark, Nessus, Kali Linux, Maltego, SpiderFoot, Basic Burp Suite knowledge, Nuclei.", body_style))
    story.append(Paragraph("<b>Frameworks &amp; Fundamentals:</b> MITRE ATT&CK (Familiarity), Malware Analysis Fundamentals, Firewall &amp; IDS/IPS Management Fundamentals, Risk Assessment &amp; Mitigation Fundamentals, Disaster Recovery Planning Fundamentals.", body_style))
    story.append(Paragraph("<b>Development &amp; Systems:</b> Python (FastAPI), React, JavaScript, Vite, Docker (Lab/Container Management), JSON/JSONL, HTTPX, Git.", body_style))

    # 5. Experience
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#e2e8f0'), spaceBefore=4, spaceAfter=4))
    story.append(Paragraph("<b>CYBERSECURITY EXPERIENCE</b>", heading_style))
    story.append(Paragraph("<b>Cybersecurity Intern</b> &ndash; RedTeam Hacker Academy | Kerala, India", subheading_style))
    story.append(Paragraph("<i>August 2024 &ndash; March 2025</i>", meta_style))
    story.append(Paragraph("&bull; Assisted with real-time threat monitoring and Tier 1 incident response procedures within training and simulated SOC environments.", bullet_style))
    story.append(Paragraph("&bull; Analyzed authentication logs, network event streams, and endpoint telemetry to assist in identifying anomalies and triaging security events.", bullet_style))
    story.append(Paragraph("&bull; Conducted vulnerability assessments using industry scanners and drafted structured security assessment and incident reports.", bullet_style))
    story.append(Paragraph("&bull; Gained operational hands-on exposure to SIEM tools (Splunk, IBM QRadar, Microsoft Sentinel) and standard SOC triage workflows.", bullet_style))

    # 6. Featured Project
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#e2e8f0'), spaceBefore=4, spaceAfter=4))
    story.append(Paragraph("<b>FEATURED CYBERSECURITY PROJECT</b>", heading_style))
    story.append(Paragraph("<b>SecureLoop AI | Web Security Assessment Prototype</b> &ndash; Open Source", subheading_style))
    story.append(Paragraph("<i>Public Code Repository: https://github.com/navinjith5-oss/secureloop-ai1</i>", meta_style))
    story.append(Paragraph("&bull; Built a Python/FastAPI prototype integrating Nuclei scanning, JSONL finding normalization, and a React results interface.", bullet_style))
    story.append(Paragraph("&bull; Implemented scan authorization confirmation, background execution, status tracking, severity filtering, and Docker lab management.", bullet_style))
    story.append(Paragraph("&bull; Prototyped rule-based CWE attack-chain mapping and Groq-generated explanations and remediation suggestions in a separate workflow with PostgreSQL storage.", bullet_style))

    # 7. Education
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#e2e8f0'), spaceBefore=4, spaceAfter=4))
    story.append(Paragraph("<b>EDUCATION</b>", heading_style))
    story.append(Paragraph("<b>Master of Computer Applications (MCA)</b> &ndash; Adi Shankara Institute of Engineering and Technology (In Progress)", body_style))
    story.append(Paragraph("<b>Bachelor of Computer Applications (BCA) in Cyber Forensics</b> &ndash; Yenepoya University (2021 &ndash; 2024)", body_style))

    # 8. Languages
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#e2e8f0'), spaceBefore=4, spaceAfter=4))
    story.append(Paragraph("<b>LANGUAGES</b>", heading_style))
    story.append(Paragraph("English, Malayalam, Hindi", body_style))

    doc.build(story)
    print(f"[+] Successfully generated PDF: {output_path}")

def generate_docx(output_path):
    doc = Document()

    # Set 0.5 in margins
    for section in doc.sections:
        section.top_margin = Inches(0.5)
        section.bottom_margin = Inches(0.5)
        section.left_margin = Inches(0.5)
        section.right_margin = Inches(0.5)

    # Name
    p_name = doc.add_paragraph()
    r_name = p_name.add_run("NAVINJITH K")
    r_name.font.name = "Calibri"
    r_name.font.size = Pt(18)
    r_name.font.bold = True
    p_name.paragraph_format.space_after = Pt(2)

    # Title
    p_title = doc.add_paragraph()
    r_title = p_title.add_run("EC-Council Certified SOC Analyst (CSA) | Cybersecurity")
    r_title.font.name = "Calibri"
    r_title.font.size = Pt(11)
    r_title.font.bold = True
    r_title.font.color.rgb = RGBColor(2, 132, 199)
    p_title.paragraph_format.space_after = Pt(4)

    # Contact line
    p_contact = doc.add_paragraph()
    p_contact.paragraph_format.space_after = Pt(8)
    p_contact.add_run("Kozhikode, Kerala, India | Email: navinjith5@gmail.com | Phone: +91 8289975405\n")
    p_contact.add_run("LinkedIn: https://www.linkedin.com/in/navinjith-k-871107254 | GitHub: https://github.com/navinjith5-oss")

    def add_section_header(title):
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(8)
        p.paragraph_format.space_after = Pt(3)
        p.paragraph_format.keep_with_next = True
        run = p.add_run(title.upper())
        run.font.name = "Calibri"
        run.font.size = Pt(11)
        run.font.bold = True
        run.font.color.rgb = RGBColor(15, 23, 42)

    # Professional Summary
    add_section_header("Professional Summary")
    p_sum = doc.add_paragraph()
    p_sum.paragraph_format.space_after = Pt(4)
    p_sum.add_run(
        "EC-Council Certified SOC Analyst (CSA) and Cyber Forensics graduate currently pursuing Master of Computer "
        "Applications (MCA). Demonstrated internship experience supporting real-time Security Operations Center (SOC) "
        "threat monitoring, SIEM log analysis, vulnerability assessments, and Tier 1 incident triage. Creator of "
        "SecureLoop AI, an open-source security assessment prototype integrating Nuclei scanning and JSONL normalization. "
        "Strong foundation in digital forensics, MITRE ATT&CK framework mapping, and defensive security workflows."
    )

    # Certifications
    add_section_header("Certifications & Credentials")
    for cert in [
        ("EC-Council Certified SOC Analyst (CSA)", "EC-Council"),
        ("Certified IT Infrastructure and Cyber SOC Analyst (CICSA)", "RedTeam Hacker Academy"),
        ("IBM Advanced Cybersecurity Certificate", "IBM")
    ]:
        p = doc.add_paragraph(style='List Bullet')
        p.paragraph_format.space_after = Pt(2)
        r = p.add_run(cert[0] + " – ")
        r.bold = True
        p.add_run(cert[1])

    # Technical Skills
    add_section_header("Technical Skills")
    skills = [
        ("Security Operations: ", "SOC Monitoring (Tier 1), Threat Detection & Triage, SIEM Log Analysis, Network Security Monitoring, Incident Response Support, Threat Intelligence, Vulnerability Assessment & Management, Security Reporting."),
        ("SIEM & Security Tools: ", "Splunk, IBM QRadar, Microsoft Sentinel, Wireshark, Nessus, Kali Linux, Maltego, SpiderFoot, Basic Burp Suite knowledge, Nuclei."),
        ("Frameworks & Fundamentals: ", "MITRE ATT&CK (Familiarity), Malware Analysis Fundamentals, Firewall & IDS/IPS Management Fundamentals, Risk Assessment & Mitigation Fundamentals, Disaster Recovery Planning Fundamentals."),
        ("Development & Systems: ", "Python (FastAPI), React, JavaScript, Vite, Docker (Lab/Container Management), JSON/JSONL, HTTPX, Git.")
    ]
    for cat, val in skills:
        p = doc.add_paragraph()
        p.paragraph_format.space_after = Pt(2)
        r = p.add_run(cat)
        r.bold = True
        p.add_run(val)

    # Cybersecurity Experience
    add_section_header("Cybersecurity Experience")
    p_exp = doc.add_paragraph()
    p_exp.paragraph_format.space_after = Pt(1)
    p_exp.paragraph_format.keep_with_next = True
    r_exp_role = p_exp.add_run("Cybersecurity Intern – RedTeam Hacker Academy | Kerala, India\n")
    r_exp_role.bold = True
    r_exp_date = p_exp.add_run("August 2024 – March 2025")
    r_exp_date.italic = True

    exp_bullets = [
        "Assisted with real-time threat monitoring and Tier 1 incident response procedures within training and simulated SOC environments.",
        "Analyzed authentication logs, network event streams, and endpoint telemetry to assist in identifying anomalies and triaging security events.",
        "Conducted vulnerability assessments using industry scanners and drafted structured security assessment and incident reports.",
        "Gained operational hands-on exposure to SIEM tools (Splunk, IBM QRadar, Microsoft Sentinel) and standard SOC triage workflows."
    ]
    for b in exp_bullets:
        p = doc.add_paragraph(b, style='List Bullet')
        p.paragraph_format.space_after = Pt(2)

    # Featured Project
    add_section_header("Featured Cybersecurity Project")
    p_proj = doc.add_paragraph()
    p_proj.paragraph_format.space_after = Pt(1)
    p_proj.paragraph_format.keep_with_next = True
    r_proj_title = p_proj.add_run("SecureLoop AI | Web Security Assessment Prototype – Open Source\n")
    r_proj_title.bold = True
    r_proj_url = p_proj.add_run("Public Code Repository: https://github.com/navinjith5-oss/secureloop-ai1")
    r_proj_url.italic = True

    proj_bullets = [
        "Built a Python/FastAPI prototype integrating Nuclei scanning, JSONL finding normalization, and a React results interface.",
        "Implemented scan authorization confirmation, background execution, status tracking, severity filtering, and Docker lab management.",
        "Prototyped rule-based CWE attack-chain mapping and Groq-generated explanations and remediation suggestions in a separate workflow with PostgreSQL storage."
    ]
    for b in proj_bullets:
        p = doc.add_paragraph(b, style='List Bullet')
        p.paragraph_format.space_after = Pt(2)

    # Education
    add_section_header("Education")
    p_edu1 = doc.add_paragraph()
    p_edu1.paragraph_format.space_after = Pt(2)
    r1 = p_edu1.add_run("Master of Computer Applications (MCA) – ")
    r1.bold = True
    p_edu1.add_run("Adi Shankara Institute of Engineering and Technology (In Progress)")

    p_edu2 = doc.add_paragraph()
    p_edu2.paragraph_format.space_after = Pt(2)
    r2 = p_edu2.add_run("Bachelor of Computer Applications (BCA) in Cyber Forensics – ")
    r2.bold = True
    p_edu2.add_run("Yenepoya University (2021 – 2024)")

    # Languages
    add_section_header("Languages")
    p_lang = doc.add_paragraph("English, Malayalam, Hindi")
    p_lang.paragraph_format.space_after = Pt(2)

    doc.save(output_path)
    print(f"[+] Successfully generated DOCX: {output_path}")

def verify_extracted_text(pdf_path):
    reader = PdfReader(pdf_path)
    total_pages = len(reader.pages)
    print(f"[i] PDF Total Pages: {total_pages}")
    full_text = ""
    for idx, page in enumerate(reader.pages):
        text = page.extract_text()
        print(f"--- Page {idx+1} ({len(text)} characters) ---")
        full_text += text

    # Verifications
    assert "NAVINJITH K" in full_text, "Name missing"
    assert "Certified SOC Analyst" in full_text, "CSA title missing"
    assert "Aspiring" not in full_text, "ERROR: Found forbidden word 'Aspiring'!"
    assert "SecureLoop AI" in full_text, "SecureLoop AI missing"
    assert "https://github.com/navinjith5-oss/secureloop-ai1" in full_text, "GitHub link missing"
    assert "August 2024" in full_text, "Internship start missing"
    assert "March 2025" in full_text, "Internship end missing"
    assert "RedTeam Hacker Academy" in full_text, "Internship organization missing"
    assert "Yenepoya University" in full_text, "BCA university missing"
    assert "Adi Shankara Institute" in full_text, "MCA institute missing"
    print("[+] All verification checks PASSED for PDF!")

if __name__ == "__main__":
    os.makedirs("public", exist_ok=True)
    pdf_path = os.path.join("public", "Navinjith_K_Resume.pdf")
    docx_path = os.path.join("public", "Navinjith_K_Resume.docx")

    generate_pdf(pdf_path)
    generate_docx(docx_path)
    verify_extracted_text(pdf_path)
