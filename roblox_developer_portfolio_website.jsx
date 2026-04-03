import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Gamepad2, ExternalLink } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Zombie Survival Arena",
      desc: "Wave-based survival game with upgrades and combat system.",
      link: "https://www.roblox.com/",
      image: "https://via.placeholder.com/400x200",
    },
    {
      title: "Obby Challenge X",
      desc: "Fast-paced obby with checkpoints and unique mechanics.",
      link: "https://www.roblox.com/",
      image: "https://via.placeholder.com/400x200",
    },
    {
      title: "Horror Escape",
      desc: "Atmospheric horror game with puzzles and jump scares.",
      link: "https://www.roblox.com/",
      image: "https://via.placeholder.com/400x200",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Glow Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(120,0,255,0.2),transparent_60%)] pointer-events-none" />

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 relative"
      >
        <div className="flex justify-center mb-4">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-500 shadow-lg shadow-purple-500/30">
            <Gamepad2 size={40} />
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-4">Blitzkrieg</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Roblox Developer creating immersive gameplay systems, combat mechanics,
          and engaging player experiences.
        </p>
      </motion.div>

      {/* Projects */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">🎮 My Games</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.07 }}
              className="transition"
            >
              <Card className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-purple-500/20">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-40 w-full object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
                  <a href={p.link} target="_blank">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 flex items-center gap-2">
                      Play Game <ExternalLink size={16} />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold mb-6">⚡ Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Lua Scripting",
            "Roblox Studio",
            "UI Design",
            "Combat Systems",
            "Game Mechanics",
          ].map((skill) => (
            <motion.span
              whileHover={{ scale: 1.15 }}
              key={skill}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm hover:border-purple-500"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* About */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">👤 About Me</h2>
        <p className="text-gray-400">
          I'm a passionate Roblox developer focused on building fun and engaging
          gameplay systems. I enjoy designing combat, progression, and interactive
          mechanics that keep players coming back.
        </p>
      </div>

      {/* Contact */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">📩 Contact</h2>
        <div className="flex justify-center gap-4">
          <a href="https://www.roblox.com/" target="_blank">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Roblox Profile
            </Button>
          </a>
          <Button variant="outline">Discord</Button>
        </div>
      </div>
    </div>
  );
}
