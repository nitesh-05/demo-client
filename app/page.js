import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Ecommerce SaaS UI",
      desc: "Multi-vendor ecommerce dashboard with analytics and order management.",
      link: "/ecommerce",
      icon: "🛒",
    },
    {
      title: "Admin Analytics Dashboard",
      desc: "Real-time analytics dashboard with charts and performance tracking.",
      link: "/dashboard",
      icon: "📊",
    },
    {
      title: "Cloud Kitchen POS",
      desc: "POS system for restaurant order management and billing.",
      link: "/pos",
      icon: "🍔",
    },
    {
      title: "AI Chatbot Dashboard",
      desc: "AI chatbot admin panel with conversation tracking.",
      link: "/chatbot",
      icon: "🤖",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 mt-10">
      {projects.map((project, index) => (
        <Link key={index} href={project.link}>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 cursor-pointer">
            <div className="text-4xl mb-4">{project.icon}</div>

            <h2 className="text-xl font-bold mb-2">{project.title}</h2>

            <p className="text-gray-600">{project.desc}</p>

            <div className="mt-4 text-blue-600 font-semibold">
              View Project →
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
