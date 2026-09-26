const translations = {
  en: {
    nav_specializations:"Specializations",nav_skills:"Skills",nav_library:"Library",nav_about:"About",nav_contact:"Contact",
    hero_eyebrow:"Educational & career guide",hero_title:"Choose your path<br><strong>with clarity.</strong>",
    hero_text:"A practical guide to university specializations, study subjects, skills and career paths — without exaggerated promises.",
    hero_cta:"Explore specializations",hero_contact:"Contact us",hero_card:"Information before the decision.",hero_small:"A specialization is more than its name: understand its study, skills and opportunities.",
    spec_eyebrow:"Specializations",spec_title:"Understand the field before choosing it",spec_text:"A practical look at what you study, the skills you need, and the paths each specialization may open.",
    business_title:"Business Administration",business_desc:"A broad field combining management, human resources, marketing, finance, operations and decision-making, with an understanding of how organizations work and grow.",
    econ_title:"Economics",econ_desc:"The study of how limited resources are used to meet needs, and how production, consumption, markets, prices, money and economic decisions interact.",
    media_title:"Media & Communication",media_desc:"Covers information, content creation and audience communication across journalism, television, radio and digital platforms, with writing, production, editing and visual skills.",
    lang_title:"Languages & Translation",lang_desc:"This page is currently being completed with organized content on language study, general and specialized translation, interpreting, editing, culture and professional applications.",
    status:"Coming soon",details:"Details",
    business_m1:"Management principles and organizational behavior",business_m2:"Accounting and finance",business_m3:"Marketing and sales management",business_m4:"Project and operations management",business_m5:"Data analysis and decision-making",
    econ_m1:"Microeconomics and macroeconomics",econ_m2:"Statistics and mathematics",econ_m3:"International economics",econ_m4:"Money, banking and financial economics",econ_m5:"Development and economic policy",
    media_m1:"Media, communication and editing principles",media_m2:"Media production, photography and editing",media_m3:"Public relations and advertising",media_m4:"Digital media and platform management",media_m5:"Media ethics and regulation",
    library_eyebrow:"Library",library_title:"Visual content, page by page",library_text:"Browse the supplied materials while preserving each image’s original aspect ratio.",booklet_about:"Afaq",booklet_about_d:"Introduction to the initiative and its idea.",booklet_law:"Law booklet",booklet_law_d:"Cover first, followed by the remaining pages.",booklet_business:"Business Administration",booklet_business_d:"Study, skills and career-path pages.",booklet_econ:"Economics",booklet_econ_d:"Study content, subjects and career fields.",booklet_media:"Media",booklet_media_d:"Introduction, study, challenges and AI in media.",booklet_lang:"Languages & Translation",booklet_lang_d:"Coming soon",skills_eyebrow:"Transferable skills",skills_title:"Skills that help in any specialization",
    skill1:"Communication",skill1d:"Clear expression, listening and working with others.",skill2:"Analysis",skill2d:"Reading information, understanding data and connecting causes with results.",skill3:"Leadership & teamwork",skill3d:"Responsibility, collaboration and team organization.",skill4:"Digital tools",skill4d:"Using modern tools and technologies relevant to your field.",skill5:"Continuous learning",skill5d:"Developing knowledge and keeping up with changes in the job market.",skill6:"Problem solving",skill6d:"Defining the problem, evaluating options and choosing a practical solution.",
    about_eyebrow:"About the initiative",about_title:"Afaq Initiative",about_text:"An initiative that simplifies information about specializations, study, skills and career fields so students can make decisions based on a clearer understanding of the field — not its name alone.",
    about_note:"Educational information is for guidance. Subjects, admission systems and study duration can vary by university and country. Always check the university's official source.",
    contact_eyebrow:"Contact",contact_title:"Let's stay connected",contact_text:"For questions and communication about the initiative and its content.",footer:"Educational guidance content — always check official sources."
  }
};

const root=document.documentElement, toggle=document.getElementById('langToggle');
const original={};
document.querySelectorAll('[data-i18n]').forEach(el=>original[el.dataset.i18n]=el.innerHTML);

function setLang(lang){
  const en=lang==='en';
  document.body.classList.toggle('en',en);
  root.lang=en?'en':'ar'; root.dir=en?'ltr':'rtl';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.dataset.i18n;
    el.innerHTML=en && translations.en[key] ? translations.en[key] : original[key];
  });
  toggle.textContent=en?'العربية':'English';
  localStorage.setItem('afaq_lang',lang);
}
toggle.addEventListener('click',()=>setLang(localStorage.getItem('afaq_lang')==='en'?'ar':'en'));
setLang(localStorage.getItem('afaq_lang')||'ar');
document.getElementById('year').textContent=new Date().getFullYear();
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".booklet").forEach(function (booklet) {
    const grid = booklet.querySelector(".page-grid");
    if (!grid) return;

    const pages = grid.querySelectorAll("a");
    if (pages.length <= 1) return;

    // إخفاء كل الصفحات ما عدا الغلاف
    pages.forEach(function (page, index) {
      if (index > 0) {
        page.classList.add("hidden-page");
      }
    });

    // جعل الغلاف قابلًا للضغط
    const cover = pages[0];
    cover.classList.add("booklet-cover");

    cover.addEventListener("click", function (event) {
      event.preventDefault();

      const isOpen = booklet.classList.toggle("booklet-open");

      pages.forEach(function (page, index) {
        if (index > 0) {
          page.classList.toggle("hidden-page", !isOpen);
        }
      });
    });
  });
});
