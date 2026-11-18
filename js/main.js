document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const featured = document.getElementById("featured-courses");
  if (featured && Array.isArray(window.COURSES)) {
    featured.innerHTML = window.COURSES.slice(0, 6).map(course => `
      <article class="course-card">
        <div class="course-icon" aria-hidden="true">${course.icon}</div>
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <div class="course-meta">
          <span class="level">${course.level}</span>
          <a class="text-link" href="pages/courses/${course.slug}.html">View syllabus →</a>
        </div>
      </article>`).join("");
  }

  document.querySelectorAll("[data-current-year]").forEach(el => el.textContent = new Date().getFullYear());
});
