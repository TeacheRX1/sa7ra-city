function showSection(sectionId) {
  // إخفاء كل الأقسام
  const sections = document.querySelectorAll(".rules-section");
  sections.forEach(section => {
    section.style.display = "none";
  });

  // عرض القسم المطلوب
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = "block";
  }
}
