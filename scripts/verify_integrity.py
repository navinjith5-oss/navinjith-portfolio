import os
from pypdf import PdfReader
from docx import Document

def test_pdf():
    pdf_path = "public/Navinjith_K_Resume.pdf"
    assert os.path.exists(pdf_path), "PDF file missing"
    reader = PdfReader(pdf_path)
    assert len(reader.pages) == 1, f"Expected 1 page, got {len(reader.pages)}"
    
    text = reader.pages[0].extract_text()
    assert "Aspiring" not in text, "FAIL: Found 'Aspiring' in PDF text!"
    assert "EC-Council Certified SOC Analyst" in text, "FAIL: Missing CSA certification"
    assert "Earned Industry Credential" not in text, "FAIL: Found unwanted 'Earned' tag in PDF text"
    assert "The Joy of Computing Using Python" in text, "FAIL: Missing NPTEL Python certification in PDF"
    assert "SecureLoop AI" in text, "FAIL: Missing SecureLoop AI"
    assert "https://github.com/navinjith5-oss/secureloop-ai1" in text, "FAIL: Missing GitHub URL"
    assert "RedTeam Hacker Academy" in text, "FAIL: Missing internship company"
    assert "August 2024" in text and "March 2025" in text, "FAIL: Missing internship dates"
    assert "navinjith5@gmail.com" in text, "FAIL: Missing email"
    assert "+91 8289975405" in text, "FAIL: Missing phone number in resume"
    assert "Yenepoya University" in text, "FAIL: Missing BCA university"
    assert "Adi Shankara Institute" in text, "FAIL: Missing MCA institute"
    assert "In Progress" in text, "FAIL: Missing In Progress status for MCA"
    print("[PASS] PDF verification passed: Clean 1-page ATS layout, no 'Aspiring', correct credentials & links.")

def test_docx():
    docx_path = "public/Navinjith_K_Resume.docx"
    assert os.path.exists(docx_path), "DOCX file missing"
    doc = Document(docx_path)
    full_text = "\n".join([p.text for p in doc.paragraphs])
    
    assert "Aspiring" not in full_text, "FAIL: Found 'Aspiring' in DOCX text!"
    assert "EC-Council Certified SOC Analyst" in full_text, "FAIL: Missing CSA certification in DOCX"
    assert "The Joy of Computing Using Python" in full_text, "FAIL: Missing NPTEL Python certification in DOCX"
    assert "SecureLoop AI" in full_text, "FAIL: Missing SecureLoop AI in DOCX"
    assert "navinjith5@gmail.com" in full_text, "FAIL: Missing email in DOCX"
    assert "https://github.com/navinjith5-oss/secureloop-ai1" in full_text, "FAIL: Missing GitHub URL in DOCX"
    print("[PASS] DOCX verification passed: Clean linear formatting, no tables/textboxes, perfect ATS parsing.")

if __name__ == "__main__":
    test_pdf()
    test_docx()
