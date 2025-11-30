// Testimonials Data
const testimonialsData = [
  {
    name: "Dava Anugrah",
    role: "Siswa SMK",
    image: "https://i.pravatar.cc/150?img=12",
    message:
      "Pelayanan SoftFixer sangat cepat dan profesional. Laptop saya berhasil di-install Ubuntu dengan hasil yang memuaskan. Sangat puas dengan kualitas pelayanannya!",
  },
  {
    name: "Siti Nurhaliza",
    role: "Mahasiswa",
    image: "https://i.pravatar.cc/150?img=45",
    message:
      "Komputer saya terkena virus dan tidak bisa digunakan. Tim SoftFixer berhasil membersihkannya tanpa kehilangan data saya. Sangat recommended!",
  },
  {
    name: "Ahmad Fauzi",
    role: "Freelancer Designer",
    image: "https://i.pravatar.cc/150?img=33",
    message:
      "Instalasi ulang Windows + software design dalam waktu singkat. Hasilnya memuaskan dan harga terjangkau. Pasti akan pakai jasa ini lagi!",
  },
  {
    name: "Dewi Kartika",
    role: "Guru",
    image: "https://i.pravatar.cc/150?img=47",
    message:
      "Laptop untuk mengajar online sering error, setelah di-service oleh SoftFixer jadi lancar tanpa masalah. Terima kasih banyak!",
  },
  {
    name: "Rudi Hermawan",
    role: "Pengusaha",
    image: "https://i.pravatar.cc/150?img=15",
    message:
      "Jaringan WiFi kantor sering bermasalah, setelah dikonfigurasi ulang oleh tim SoftFixer sekarang stabil dan cepat. Pelayanan sangat memuaskan!",
  },
  {
    name: "Linda Wijaya",
    role: "Content Creator",
    image: "https://i.pravatar.cc/150?img=41",
    message:
      "PC saya untuk editing video sering crash, setelah dioptimasi oleh SoftFixer performanya jauh lebih baik. Sangat puas dengan hasilnya!",
  },
];
// Load Testimonials
function loadTestimonials() {
  const container = document.getElementById("testimonials-container");

  testimonialsData.forEach((testimonial, index) => {
    const testimonialCard = `
                    <div class="bg-slate-50 p-6 rounded-xl shadow-md hover:shadow-xl transition fade-in" style="animation-delay: ${
                      index * 0.1
                    }s">
                        <div class="flex items-center mb-4">
                            <img src="${testimonial.image}" alt="${
      testimonial.name
    }" class="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-400">
                            <div>
                                <h4 class="font-bold text-blue-900">${
                                  testimonial.name
                                }</h4>
                                <p class="text-sm text-slate-600">${
                                  testimonial.role
                                }</p>
                            </div>
                        </div>
                        <div class="flex mb-2">
                            ${Array(5)
                              .fill(
                                '<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>'
                              )
                              .join("")}
                        </div>
                        <p class="text-slate-700 italic">"${
                          testimonial.message
                        }"</p>
                    </div>
                `;
    container.innerHTML += testimonialCard;
  });
}

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      mobileMenu.classList.add("hidden");
    }
  });
});

// WhatsApp form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    // Format WhatsApp message
    const waMessage = `Halo SoftFixer,%0A%0ANama: ${encodeURIComponent(
      name
    )} %0AEmail: ${encodeURIComponent(email)} %0AService: ${encodeURIComponent(
      service
    )} %0APesan: ${encodeURIComponent(message)}`;

    // WhatsApp number (replace with actual number)
    const waNumber = "6285194919373"; // Replace XXXXXXXX with actual number

    // Redirect to WhatsApp
    window.open(`https://wa.me/${waNumber}?text=${waMessage}`, "_blank");

    // Reset form
    this.reset();
  });

// Load testimonials on page load
window.addEventListener("DOMContentLoaded", loadTestimonials);
