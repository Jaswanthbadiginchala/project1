// Student Management System - Interactive JavaScript

// Application Data from JSON
const appData = {
  "students": [
    {
      "id": "STU001",
      "name": "Alice Johnson",
      "email": "alice.johnson@email.com",
      "phone": "+1-555-0123",
      "course": "Computer Science",
      "grade": "A",
      "attendance": 95,
      "enrollmentDate": "2024-09-01",
      "gpa": 3.8
    },
    {
      "id": "STU002", 
      "name": "Bob Smith",
      "email": "bob.smith@email.com",
      "phone": "+1-555-0124",
      "course": "Mathematics",
      "grade": "B+",
      "attendance": 87,
      "enrollmentDate": "2024-09-01",
      "gpa": 3.4
    },
    {
      "id": "STU003",
      "name": "Carol Davis",
      "email": "carol.davis@email.com", 
      "phone": "+1-555-0125",
      "course": "Physics",
      "grade": "A-",
      "attendance": 92,
      "enrollmentDate": "2024-09-01",
      "gpa": 3.7
    },
    {
      "id": "STU004",
      "name": "David Wilson",
      "email": "david.wilson@email.com",
      "phone": "+1-555-0126",
      "course": "Chemistry",
      "grade": "B",
      "attendance": 83,
      "enrollmentDate": "2024-09-01",
      "gpa": 3.2
    },
    {
      "id": "STU005",
      "name": "Emma Brown",
      "email": "emma.brown@email.com",
      "phone": "+1-555-0127", 
      "course": "Biology",
      "grade": "A",
      "attendance": 98,
      "enrollmentDate": "2024-09-01",
      "gpa": 3.9
    }
  ],
  "courses": [
    {
      "id": "CS101",
      "name": "Introduction to Programming",
      "code": "CS101",
      "instructor": "Dr. Thompson",
      "credits": 3,
      "duration": "16 weeks",
      "enrolled": 45,
      "capacity": 50
    },
    {
      "id": "MATH201",
      "name": "Calculus II", 
      "code": "MATH201",
      "instructor": "Prof. Martinez",
      "credits": 4,
      "duration": "16 weeks",
      "enrolled": 32,
      "capacity": 40
    },
    {
      "id": "PHYS301",
      "name": "Quantum Mechanics",
      "code": "PHYS301", 
      "instructor": "Dr. Anderson",
      "credits": 3,
      "duration": "16 weeks",
      "enrolled": 28,
      "capacity": 35
    },
    {
      "id": "CHEM201",
      "name": "Organic Chemistry",
      "code": "CHEM201",
      "instructor": "Prof. Lee",
      "credits": 4,
      "duration": "16 weeks",
      "enrolled": 38,
      "capacity": 40
    },
    {
      "id": "BIO101",
      "name": "Cell Biology",
      "code": "BIO101",
      "instructor": "Dr. Garcia", 
      "credits": 3,
      "duration": "16 weeks",
      "enrolled": 42,
      "capacity": 45
    }
  ],
  "attendance": [
    {"date": "2025-01-15", "studentId": "STU001", "status": "present"},
    {"date": "2025-01-15", "studentId": "STU002", "status": "present"},
    {"date": "2025-01-15", "studentId": "STU003", "status": "absent"},
    {"date": "2025-01-15", "studentId": "STU004", "status": "late"},
    {"date": "2025-01-15", "studentId": "STU005", "status": "present"},
    {"date": "2025-01-16", "studentId": "STU001", "status": "present"},
    {"date": "2025-01-16", "studentId": "STU002", "status": "absent"},
    {"date": "2025-01-16", "studentId": "STU003", "status": "present"},
    {"date": "2025-01-16", "studentId": "STU004", "status": "present"},
    {"date": "2025-01-16", "studentId": "STU005", "status": "present"}
  ],
  "grades": [
    {"studentId": "STU001", "course": "CS101", "assignment": "Midterm Exam", "score": 92, "date": "2025-01-10"},
    {"studentId": "STU001", "course": "CS101", "assignment": "Project 1", "score": 88, "date": "2025-01-05"},
    {"studentId": "STU002", "course": "MATH201", "assignment": "Quiz 1", "score": 85, "date": "2025-01-08"},
    {"studentId": "STU003", "course": "PHYS301", "assignment": "Lab Report", "score": 90, "date": "2025-01-12"},
    {"studentId": "STU004", "course": "CHEM201", "assignment": "Homework 3", "score": 78, "date": "2025-01-14"},
    {"studentId": "STU005", "course": "BIO101", "assignment": "Final Project", "score": 96, "date": "2025-01-11"}
  ],
  "announcements": [
    {
      "id": 1,
      "title": "Spring Semester Registration Open",
      "content": "Registration for Spring 2025 semester is now open. Please register before February 1st.",
      "date": "2025-01-20",
      "priority": "high"
    },
    {
      "id": 2,
      "title": "Library Hours Extended",
      "content": "Library will be open until 11 PM during exam week to support student studies.",
      "date": "2025-01-18", 
      "priority": "medium"
    },
    {
      "id": 3,
      "title": "Career Fair - February 15th",
      "content": "Annual career fair will be held in the main auditorium. Don't miss this opportunity!",
      "date": "2025-01-15",
      "priority": "high"
    }
  ],
  "stats": {
    "totalStudents": 247,
    "totalCourses": 28,
    "averageAttendance": 91,
    "averageGPA": 3.4,
    "activeEnrollments": 1205,
    "completionRate": 89
  }
};

// Application State
let currentSection = 'dashboard';
let editingStudent = null;
let editingCourse = null;
let performanceChart = null;
let gradeChart = null;
let attendanceChart = null;

// Chart colors for glassmorphism theme
const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

// DOM Elements
const navItems = document.querySelectorAll('.nav-item');
const contentSections = document.querySelectorAll('.content-section');
const globalSearch = document.getElementById('global-search');
const searchOverlay = document.getElementById('search-overlay');
const toastContainer = document.getElementById('toast-container');

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupNavigation();
  setupSearch();
  setupModals();
  setupSettings();
  loadDashboard();
  loadStudents();
  loadCourses();
  setupAttendanceDate();
  
  // Initialize charts
  setTimeout(() => {
    initializeCharts();
  }, 100);
  
  // Setup glassmorphism effects
  setupGlassmorphism();
  
  showToast('Welcome to EduGlass Student Management System!', 'info');
}

// Navigation System
function setupNavigation() {
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const section = item.dataset.section;
      navigateToSection(section);
    });
  });
}

function navigateToSection(section) {
  // Update active nav item
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.dataset.section === section) {
      item.classList.add('active');
    }
  });
  
  // Update active content section
  contentSections.forEach(contentSection => {
    contentSection.classList.remove('active');
    if (contentSection.id === section) {
      contentSection.classList.add('active');
    }
  });
  
  currentSection = section;
  
  // Load section-specific data
  switch(section) {
    case 'dashboard':
      loadDashboard();
      break;
    case 'students':
      loadStudents();
      break;
    case 'courses':
      loadCourses();
      break;
    case 'attendance':
      loadAttendance();
      break;
    case 'performance':
      loadPerformanceCharts();
      break;
  }
}

// Dashboard Functions
function loadDashboard() {
  // Update stats
  document.getElementById('total-students').textContent = appData.stats.totalStudents;
  document.getElementById('total-courses').textContent = appData.stats.totalCourses;
  document.getElementById('average-attendance').textContent = appData.stats.averageAttendance + '%';
  document.getElementById('average-gpa').textContent = appData.stats.averageGPA;
  
  // Load announcements
  loadAnnouncements();
  
  // Initialize dashboard chart
  if (performanceChart) {
    performanceChart.destroy();
  }
  
  const ctx = document.getElementById('performanceChart');
  if (ctx) {
    performanceChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Average GPA',
          data: [3.2, 3.3, 3.4, 3.5, 3.4, 3.6],
          borderColor: chartColors[0],
          backgroundColor: chartColors[0] + '20',
          fill: true,
          tension: 0.4
        }, {
          label: 'Attendance %',
          data: [88, 90, 91, 89, 92, 91],
          borderColor: chartColors[1],
          backgroundColor: chartColors[1] + '20',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: getComputedStyle(document.documentElement).getPropertyValue('--color-text')
            }
          }
        },
        scales: {
          x: {
            ticks: { color: getComputedStyle(document.documentElement).getPropertyValue('--color-text-secondary') },
            grid: { color: 'rgba(255,255,255,0.1)' }
          },
          y: {
            ticks: { color: getComputedStyle(document.documentElement).getPropertyValue('--color-text-secondary') },
            grid: { color: 'rgba(255,255,255,0.1)' }
          }
        }
      }
    });
  }
}

function loadAnnouncements() {
  const container = document.getElementById('announcements-list');
  container.innerHTML = '';
  
  appData.announcements.forEach(announcement => {
    const item = document.createElement('div');
    item.className = 'announcement-item';
    item.innerHTML = `
      <div class="announcement-header">
        <h4>${announcement.title}</h4>
        <span class="priority priority-${announcement.priority}">${announcement.priority}</span>
      </div>
      <p>${announcement.content}</p>
      <small>${new Date(announcement.date).toLocaleDateString()}</small>
    `;
    container.appendChild(item);
  });
}

// Students Management
function loadStudents() {
  const container = document.getElementById('students-grid');
  container.innerHTML = '';
  
  appData.students.forEach(student => {
    const card = createStudentCard(student);
    container.appendChild(card);
  });
}

function createStudentCard(student) {
  const card = document.createElement('div');
  card.className = 'student-card';
  card.innerHTML = `
    <div class="student-header">
      <div class="student-avatar">${student.name.charAt(0)}</div>
      <div class="student-info">
        <h4>${student.name}</h4>
        <p>${student.id}</p>
      </div>
    </div>
    <div class="student-details">
      <div class="detail-item">
        <span class="detail-label">Course</span>
        <span class="detail-value">${student.course}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Grade</span>
        <span class="detail-value">${student.grade}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Attendance</span>
        <span class="detail-value">${student.attendance}%</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">GPA</span>
        <span class="detail-value">${student.gpa}</span>
      </div>
    </div>
    <div class="student-actions">
      <button class="btn btn--sm btn--secondary" onclick="editStudent('${student.id}')">Edit</button>
      <button class="btn btn--sm btn--secondary" onclick="viewStudentDetails('${student.id}')">View</button>
    </div>
  `;
  
  // Add hover blur effect
  card.addEventListener('mouseenter', () => {
    card.style.backdropFilter = 'blur(15px)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.backdropFilter = 'blur(10px)';
  });
  
  return card;
}

// Courses Management
function loadCourses() {
  const container = document.getElementById('courses-grid');
  container.innerHTML = '';
  
  appData.courses.forEach(course => {
    const card = createCourseCard(course);
    container.appendChild(card);
  });
}

function createCourseCard(course) {
  const card = document.createElement('div');
  card.className = 'course-card';
  const enrollmentPercentage = Math.round((course.enrolled / course.capacity) * 100);
  
  card.innerHTML = `
    <div class="course-header">
      <div class="course-icon">📚</div>
      <div class="course-info">
        <h4>${course.name}</h4>
        <p>${course.code}</p>
      </div>
    </div>
    <div class="course-details">
      <div class="detail-item">
        <span class="detail-label">Instructor</span>
        <span class="detail-value">${course.instructor}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Credits</span>
        <span class="detail-value">${course.credits}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Enrollment</span>
        <span class="detail-value">${course.enrolled}/${course.capacity}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Duration</span>
        <span class="detail-value">${course.duration}</span>
      </div>
    </div>
    <div class="enrollment-bar">
      <div class="enrollment-fill" style="width: ${enrollmentPercentage}%"></div>
    </div>
    <div class="course-actions">
      <button class="btn btn--sm btn--secondary" onclick="editCourse('${course.id}')">Edit</button>
      <button class="btn btn--sm btn--secondary" onclick="viewCourseDetails('${course.id}')">View</button>
    </div>
  `;
  
  return card;
}

// Attendance Management
function setupAttendanceDate() {
  const dateInput = document.getElementById('attendance-date');
  dateInput.value = new Date().toISOString().split('T')[0];
}

function loadAttendance() {
  const selectedDate = document.getElementById('attendance-date').value;
  const tbody = document.getElementById('attendance-tbody');
  tbody.innerHTML = '';
  
  // Filter attendance by selected date
  const dayAttendance = appData.attendance.filter(record => record.date === selectedDate);
  
  dayAttendance.forEach(record => {
    const student = appData.students.find(s => s.id === record.studentId);
    if (student) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.course}</td>
        <td><span class="status-badge status-${record.status}">${record.status}</span></td>
        <td>
          <select class="attendance-select" onchange="updateAttendance('${record.studentId}', '${selectedDate}', this.value)">
            <option value="present" ${record.status === 'present' ? 'selected' : ''}>Present</option>
            <option value="absent" ${record.status === 'absent' ? 'selected' : ''}>Absent</option>
            <option value="late" ${record.status === 'late' ? 'selected' : ''}>Late</option>
          </select>
        </td>
      `;
      tbody.appendChild(row);
    }
  });
}

function updateAttendance(studentId, date, status) {
  const record = appData.attendance.find(r => r.studentId === studentId && r.date === date);
  if (record) {
    record.status = status;
    loadAttendance(); // Refresh the table
    showToast(`Attendance updated for ${studentId}`, 'success');
  }
}

// Performance Charts
function loadPerformanceCharts() {
  setTimeout(() => {
    initializePerformanceCharts();
  }, 100);
}

function initializePerformanceCharts() {
  // Grade Distribution Chart
  if (gradeChart) gradeChart.destroy();
  const gradeCtx = document.getElementById('gradeChart');
  if (gradeCtx) {
    gradeChart = new Chart(gradeCtx, {
      type: 'doughnut',
      data: {
        labels: ['A', 'A-', 'B+', 'B', 'B-', 'C+'],
        datasets: [{
          data: [2, 1, 1, 1, 0, 0],
          backgroundColor: chartColors.slice(0, 6),
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: getComputedStyle(document.documentElement).getPropertyValue('--color-text'),
              padding: 15
            }
          }
        }
      }
    });
  }
  
  // Attendance Trends Chart
  if (attendanceChart) attendanceChart.destroy();
  const attendanceCtx = document.getElementById('attendanceChart');
  if (attendanceCtx) {
    attendanceChart = new Chart(attendanceCtx, {
      type: 'bar',
      data: {
        labels: appData.students.map(s => s.name),
        datasets: [{
          label: 'Attendance %',
          data: appData.students.map(s => s.attendance),
          backgroundColor: chartColors[0] + '80',
          borderColor: chartColors[0],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: getComputedStyle(document.documentElement).getPropertyValue('--color-text')
            }
          }
        },
        scales: {
          x: {
            ticks: { color: getComputedStyle(document.documentElement).getPropertyValue('--color-text-secondary') },
            grid: { color: 'rgba(255,255,255,0.1)' }
          },
          y: {
            ticks: { color: getComputedStyle(document.documentElement).getPropertyValue('--color-text-secondary') },
            grid: { color: 'rgba(255,255,255,0.1)' },
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  }
  
  // Load performance summary
  loadPerformanceSummary();
}

function loadPerformanceSummary() {
  const container = document.getElementById('performance-stats');
  const avgGPA = appData.students.reduce((sum, s) => sum + s.gpa, 0) / appData.students.length;
  const avgAttendance = appData.students.reduce((sum, s) => sum + s.attendance, 0) / appData.students.length;
  
  container.innerHTML = `
    <div class="performance-stat">
      <h4>Average GPA</h4>
      <p>${avgGPA.toFixed(2)}</p>
    </div>
    <div class="performance-stat">
      <h4>Average Attendance</h4>
      <p>${Math.round(avgAttendance)}%</p>
    </div>
    <div class="performance-stat">
      <h4>Top Performer</h4>
      <p>${appData.students.reduce((prev, current) => (prev.gpa > current.gpa) ? prev : current).name}</p>
    </div>
  `;
}

// Chart initialization helper
function initializeCharts() {
  if (currentSection === 'dashboard') {
    loadDashboard();
  }
}

// Search Functionality
function setupSearch() {
  const searchBtn = document.querySelector('.search-btn');
  
  globalSearch.addEventListener('input', handleSearch);
  searchBtn.addEventListener('click', handleSearch);
  
  globalSearch.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  });
}

function handleSearch() {
  const query = globalSearch.value.trim().toLowerCase();
  
  if (query.length < 2) {
    closeSearchOverlay();
    return;
  }
  
  const results = searchAll(query);
  displaySearchResults(results);
  openSearchOverlay();
}

function searchAll(query) {
  const results = {
    students: [],
    courses: [],
    announcements: []
  };
  
  // Search students
  results.students = appData.students.filter(student =>
    student.name.toLowerCase().includes(query) ||
    student.id.toLowerCase().includes(query) ||
    student.course.toLowerCase().includes(query) ||
    student.email.toLowerCase().includes(query)
  );
  
  // Search courses
  results.courses = appData.courses.filter(course =>
    course.name.toLowerCase().includes(query) ||
    course.code.toLowerCase().includes(query) ||
    course.instructor.toLowerCase().includes(query)
  );
  
  // Search announcements
  results.announcements = appData.announcements.filter(announcement =>
    announcement.title.toLowerCase().includes(query) ||
    announcement.content.toLowerCase().includes(query)
  );
  
  return results;
}

function displaySearchResults(results) {
  const container = document.getElementById('search-results-content');
  container.innerHTML = '';
  
  const totalResults = results.students.length + results.courses.length + results.announcements.length;
  
  if (totalResults === 0) {
    container.innerHTML = '<p class="no-results">No results found</p>';
    return;
  }
  
  // Students results
  if (results.students.length > 0) {
    const studentsSection = document.createElement('div');
    studentsSection.innerHTML = `<h4>Students (${results.students.length})</h4>`;
    results.students.forEach(student => {
      const item = document.createElement('div');
      item.className = 'search-result-item';
      item.innerHTML = `
        <div class="result-info">
          <strong>${student.name}</strong>
          <p>${student.id} • ${student.course}</p>
        </div>
        <button class="btn btn--sm" onclick="viewStudentFromSearch('${student.id}')">View</button>
      `;
      studentsSection.appendChild(item);
    });
    container.appendChild(studentsSection);
  }
  
  // Courses results
  if (results.courses.length > 0) {
    const coursesSection = document.createElement('div');
    coursesSection.innerHTML = `<h4>Courses (${results.courses.length})</h4>`;
    results.courses.forEach(course => {
      const item = document.createElement('div');
      item.className = 'search-result-item';
      item.innerHTML = `
        <div class="result-info">
          <strong>${course.name}</strong>
          <p>${course.code} • ${course.instructor}</p>
        </div>
        <button class="btn btn--sm" onclick="viewCourseFromSearch('${course.id}')">View</button>
      `;
      coursesSection.appendChild(item);
    });
    container.appendChild(coursesSection);
  }
}

function openSearchOverlay() {
  searchOverlay.classList.remove('hidden');
}

function closeSearchOverlay() {
  searchOverlay.classList.add('hidden');
  globalSearch.value = '';
}

function viewStudentFromSearch(studentId) {
  closeSearchOverlay();
  navigateToSection('students');
  // Highlight the student card
  setTimeout(() => {
    const studentCards = document.querySelectorAll('.student-card');
    studentCards.forEach(card => {
      if (card.textContent.includes(studentId)) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 16px 48px rgba(31, 184, 205, 0.3)';
        setTimeout(() => {
          card.style.transform = '';
          card.style.boxShadow = '';
        }, 2000);
      }
    });
  }, 300);
}

function viewCourseFromSearch(courseId) {
  closeSearchOverlay();
  navigateToSection('courses');
  // Similar highlighting for courses
  setTimeout(() => {
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
      if (card.textContent.includes(courseId)) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 16px 48px rgba(31, 184, 205, 0.3)';
        setTimeout(() => {
          card.style.transform = '';
          card.style.boxShadow = '';
        }, 2000);
      }
    });
  }, 300);
}

// Modal Management
function setupModals() {
  // Student form submission
  document.getElementById('student-form').addEventListener('submit', handleStudentSubmit);
  document.getElementById('course-form').addEventListener('submit', handleCourseSubmit);
  
  // Close modals when clicking backdrop
  document.querySelectorAll('.modal-backdrop, .search-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', () => {
      closeAllModals();
    });
  });
}

function openStudentModal(studentId = null) {
  const modal = document.getElementById('student-modal');
  const title = document.getElementById('student-modal-title');
  
  if (studentId) {
    const student = appData.students.find(s => s.id === studentId);
    if (student) {
      title.textContent = 'Edit Student';
      fillStudentForm(student);
      editingStudent = studentId;
    }
  } else {
    title.textContent = 'Add New Student';
    clearStudentForm();
    editingStudent = null;
  }
  
  modal.classList.remove('hidden');
}

function closeStudentModal() {
  document.getElementById('student-modal').classList.add('hidden');
  clearStudentForm();
  editingStudent = null;
}

function openCourseModal(courseId = null) {
  const modal = document.getElementById('course-modal');
  const title = document.getElementById('course-modal-title');
  
  if (courseId) {
    const course = appData.courses.find(c => c.id === courseId);
    if (course) {
      title.textContent = 'Edit Course';
      fillCourseForm(course);
      editingCourse = courseId;
    }
  } else {
    title.textContent = 'Add New Course';
    clearCourseForm();
    editingCourse = null;
  }
  
  modal.classList.remove('hidden');
}

function closeCourseModal() {
  document.getElementById('course-modal').classList.add('hidden');
  clearCourseForm();
  editingCourse = null;
}

function closeAllModals() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.add('hidden');
  });
  closeSearchOverlay();
}

// Form Handling
function fillStudentForm(student) {
  document.getElementById('student-id').value = student.id;
  document.getElementById('student-name').value = student.name;
  document.getElementById('student-email').value = student.email;
  document.getElementById('student-phone').value = student.phone;
  document.getElementById('student-course').value = student.course;
  document.getElementById('student-enrollment-date').value = student.enrollmentDate;
}

function clearStudentForm() {
  document.getElementById('student-form').reset();
}

function fillCourseForm(course) {
  document.getElementById('course-code').value = course.code;
  document.getElementById('course-name').value = course.name;
  document.getElementById('course-instructor').value = course.instructor;
  document.getElementById('course-credits').value = course.credits;
  document.getElementById('course-duration').value = course.duration;
  document.getElementById('course-capacity').value = course.capacity;
}

function clearCourseForm() {
  document.getElementById('course-form').reset();
}

function handleStudentSubmit(e) {
  e.preventDefault();
  
  const formData = {
    id: document.getElementById('student-id').value,
    name: document.getElementById('student-name').value,
    email: document.getElementById('student-email').value,
    phone: document.getElementById('student-phone').value,
    course: document.getElementById('student-course').value,
    enrollmentDate: document.getElementById('student-enrollment-date').value,
    grade: editingStudent ? appData.students.find(s => s.id === editingStudent).grade : 'N/A',
    attendance: editingStudent ? appData.students.find(s => s.id === editingStudent).attendance : 0,
    gpa: editingStudent ? appData.students.find(s => s.id === editingStudent).gpa : 0.0
  };
  
  if (editingStudent) {
    // Update existing student
    const index = appData.students.findIndex(s => s.id === editingStudent);
    if (index !== -1) {
      appData.students[index] = { ...appData.students[index], ...formData };
      showToast('Student updated successfully!', 'success');
    }
  } else {
    // Add new student
    appData.students.push(formData);
    showToast('Student added successfully!', 'success');
  }
  
  closeStudentModal();
  loadStudents();
}

function handleCourseSubmit(e) {
  e.preventDefault();
  
  const formData = {
    id: document.getElementById('course-code').value,
    code: document.getElementById('course-code').value,
    name: document.getElementById('course-name').value,
    instructor: document.getElementById('course-instructor').value,
    credits: parseInt(document.getElementById('course-credits').value),
    duration: document.getElementById('course-duration').value,
    capacity: parseInt(document.getElementById('course-capacity').value),
    enrolled: editingCourse ? appData.courses.find(c => c.id === editingCourse).enrolled : 0
  };
  
  if (editingCourse) {
    // Update existing course
    const index = appData.courses.findIndex(c => c.id === editingCourse);
    if (index !== -1) {
      appData.courses[index] = { ...appData.courses[index], ...formData };
      showToast('Course updated successfully!', 'success');
    }
  } else {
    // Add new course
    appData.courses.push(formData);
    showToast('Course added successfully!', 'success');
  }
  
  closeCourseModal();
  loadCourses();
}

// CRUD Operations
function editStudent(studentId) {
  openStudentModal(studentId);
}

function editCourse(courseId) {
  openCourseModal(courseId);
}

function viewStudentDetails(studentId) {
  const student = appData.students.find(s => s.id === studentId);
  if (student) {
    showToast(`Viewing details for ${student.name}`, 'info');
    // In a real app, this would open a detailed view modal
  }
}

function viewCourseDetails(courseId) {
  const course = appData.courses.find(c => c.id === courseId);
  if (course) {
    showToast(`Viewing details for ${course.name}`, 'info');
    // In a real app, this would open a detailed view modal
  }
}

// Settings Management
function setupSettings() {
  const themeSelector = document.getElementById('theme-selector');
  const blurIntensity = document.getElementById('blur-intensity');
  
  themeSelector.addEventListener('change', (e) => {
    setTheme(e.target.value);
  });
  
  blurIntensity.addEventListener('input', (e) => {
    setBlurIntensity(e.target.value);
  });
}

function setTheme(theme) {
  if (theme === 'auto') {
    document.documentElement.removeAttribute('data-color-scheme');
  } else {
    document.documentElement.setAttribute('data-color-scheme', theme);
  }
  showToast(`Theme changed to ${theme}`, 'info');
}

function setBlurIntensity(intensity) {
  document.documentElement.style.setProperty('--blur-intensity', intensity + 'px');
  showToast(`Blur intensity set to ${intensity}px`, 'info');
}

// Glassmorphism Effects
function setupGlassmorphism() {
  // Add enhanced blur effects on scroll
  let ticking = false;
  
  function updateHeaderBlur() {
    const scrollY = window.scrollY;
    const header = document.querySelector('.header');
    const blurAmount = Math.min(scrollY / 5, 20);
    header.style.backdropFilter = `blur(${10 + blurAmount}px)`;
    ticking = false;
  }
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateHeaderBlur);
      ticking = true;
    }
  });
  
  // Add interactive blur effects to cards
  const cards = document.querySelectorAll('.stat-card, .student-card, .course-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.backdropFilter = 'blur(15px)';
      card.style.transform = 'translateY(-4px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.backdropFilter = 'blur(10px)';
      card.style.transform = '';
    });
  });
}

// Toast Notifications
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `
    <div class="toast-content">
      <span class="toast-icon">${getToastIcon(type)}</span>
      <span class="toast-message">${message}</span>
      <button class="toast-close" onclick="closeToast(this)">×</button>
    </div>
  `;
  
  toastContainer.appendChild(toast);
  
  // Show toast
  setTimeout(() => {
    toast.classList.add('show');
  }, 100);
  
  // Auto hide after 4 seconds
  setTimeout(() => {
    closeToast(toast.querySelector('.toast-close'));
  }, 4000);
}

function getToastIcon(type) {
  switch(type) {
    case 'success': return '✅';
    case 'error': return '❌';
    case 'warning': return '⚠️';
    default: return 'ℹ️';
  }
}

function closeToast(button) {
  const toast = button.closest('.toast');
  toast.classList.remove('show');
  setTimeout(() => {
    toast.remove();
  }, 300);
}

// Utility Functions
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString();
}

function getInitials(name) {
  return name.split(' ').map(word => word.charAt(0)).join('').toUpperCase();
}

// Enhanced animations and interactions
function addShimmerEffect(element) {
  element.classList.add('shimmer');
  setTimeout(() => {
    element.classList.remove('shimmer');
  }, 2000);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey || e.metaKey) {
    switch(e.key) {
      case 'k':
        e.preventDefault();
        globalSearch.focus();
        break;
      case '1':
        e.preventDefault();
        navigateToSection('dashboard');
        break;
      case '2':
        e.preventDefault();
        navigateToSection('students');
        break;
      case '3':
        e.preventDefault();
        navigateToSection('courses');
        break;
    }
  }
  
  if (e.key === 'Escape') {
    closeAllModals();
  }
});

// Add loading states for better UX
function showLoading(element) {
  element.classList.add('loading');
  element.style.pointerEvents = 'none';
}

function hideLoading(element) {
  element.classList.remove('loading');
  element.style.pointerEvents = '';
}

// Initialize performance monitoring
let performanceMetrics = {
  loadTime: 0,
  renderTime: 0
};

window.addEventListener('load', () => {
  performanceMetrics.loadTime = performance.now();
  console.log(`EduGlass loaded in ${performanceMetrics.loadTime.toFixed(2)}ms`);
});

// Add CSS for missing styles
const additionalStyles = `
.announcement-item {
  padding: 16px;
  border-bottom: 1px solid var(--glass-border);
  transition: background var(--duration-fast) ease;
}

.announcement-item:hover {
  background: rgba(255, 255, 255, 0.05);
}

.announcement-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.announcement-header h4 {
  margin: 0;
  font-size: var(--font-size-md);
  color: var(--color-text);
}

.priority {
  padding: 4px 8px;
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  font-weight: var(--font-weight-medium);
}

.priority-high {
  background: rgba(var(--color-error-rgb), 0.2);
  color: var(--color-error);
}

.priority-medium {
  background: rgba(var(--color-warning-rgb), 0.2);
  color: var(--color-warning);
}

.enrollment-bar {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-sm);
  margin: 12px 0;
  overflow: hidden;
}

.enrollment-fill {
  height: 100%;
  background: var(--gradient-primary);
  transition: width var(--duration-normal) ease;
}

.search-result-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid var(--glass-border);
  transition: background var(--duration-fast) ease;
}

.search-result-item:hover {
  background: rgba(255, 255, 255, 0.05);
}

.result-info strong {
  color: var(--color-text);
  display: block;
  margin-bottom: 4px;
}

.result-info p {
  color: var(--color-text-secondary);
  margin: 0;
  font-size: var(--font-size-sm);
}

.attendance-select {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--color-text);
  padding: 4px 8px;
  border-radius: var(--radius-sm);
  backdrop-filter: blur(5px);
}

.performance-stat {
  text-align: center;
  padding: 16px;
  border-bottom: 1px solid var(--glass-border);
}

.performance-stat:last-child {
  border-bottom: none;
}

.performance-stat h4 {
  margin: 0 0 8px 0;
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

.performance-stat p {
  margin: 0;
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
}

.no-results {
  text-align: center;
  color: var(--color-text-secondary);
  padding: 40px;
  font-style: italic;
}

.toast-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.toast-icon {
  font-size: var(--font-size-lg);
}

.toast-message {
  flex: 1;
  color: var(--color-text);
}

.toast-close {
  background: none;
  border: none;
  color: var(--color-text-secondary);
  cursor: pointer;
  font-size: var(--font-size-lg);
  padding: 4px;
  border-radius: var(--radius-base);
  transition: all var(--duration-fast) ease;
}

.toast-close:hover {
  color: var(--color-text);
  background: rgba(255, 255, 255, 0.1);
}
`;

// Add the additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);