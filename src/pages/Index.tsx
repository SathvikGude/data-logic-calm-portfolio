import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Github, Linkedin, Mail, Music, ArrowDown, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({
    objective: false,
    skills: false,
    'data-focus': false,
    projects: false,
    timeline: false,
    hobbies: false,
    contact: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? "dark" : ""}`}>
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="bg-background/20 backdrop-blur-md border border-border/20 hover:bg-background/30"
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/30 dark:bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="text-center z-10 px-4 max-w-4xl mx-auto">
          {/* Profile Picture */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl animate-bounce">
              SG
            </div>
            <div className="absolute inset-0 w-32 h-32 mx-auto bg-gradient-to-br from-blue-400/50 to-purple-500/50 rounded-full blur-xl animate-pulse"></div>
          </div>

          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6 animate-fade-in">
            Sathvik Gude
          </h1>

          {/* Animated Tagline */}
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-8">
            <span className="inline-block animate-fade-in delay-500">
              "Driven by logic, led by heart."
            </span>
          </div>

          {/* CTA Button */}
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in delay-1000"
          >
            Explore My Work
            <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>

      {/* Objective Section */}
      <section id="objective" className={`py-24 px-4 ${isVisible.objective ? "animate-fade-in" : "opacity-0"}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            I'm a recent Data Science graduate from KL University with a passion for building insight-driven solutions. 
            I believe that clarity emerges from data when structured with care — and that calm focus leads to strong impact.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-24 px-4 bg-muted/30 ${isVisible.skills ? "animate-fade-in" : "opacity-0"}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Programming", skills: ["Python", "Java", "C", "SQL"], color: "from-blue-500 to-cyan-500" },
              { title: "Big Data", skills: ["Hadoop", "Hive", "Spark"], color: "from-purple-500 to-pink-500" },
              { title: "Tools", skills: ["Power BI", "Tableau"], color: "from-green-500 to-emerald-500" },
              { title: "Soft Skills", skills: ["Leadership", "Communication", "Project Management"], color: "from-orange-500 to-red-500" }
            ].map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-background/60 backdrop-blur-sm border-border/20">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mb-4 flex items-center justify-center`}>
                    <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="inline-block bg-muted px-3 py-1 rounded-full text-sm mr-2 mb-2">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Science Focus Section */}
      <section id="data-focus" className={`py-24 px-4 ${isVisible["data-focus"] ? "animate-fade-in" : "opacity-0"}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Data Science Journey
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            {["Raw Data", "Cleaning", "Transformation", "Visualization", "Decision Support"].map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium shadow-lg">
                  {step}
                </div>
                {index < 4 && <ArrowRight className="h-6 w-6 text-muted-foreground mx-4 hidden md:block" />}
              </div>
            ))}
          </div>
          
          <p className="text-xl text-muted-foreground italic max-w-2xl mx-auto">
            "I find joy in making sense of messy datasets and turning them into clear stories."
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-24 px-4 bg-muted/30 ${isVisible.projects ? "animate-fade-in" : "opacity-0"}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Heart Simulation",
                subtitle: "Educational Tech",
                icon: "🫀",
                description: "Built an interactive simulation based on the 10th-grade NCERT science curriculum. The project visually demonstrates heart anatomy and blood flow, helping school students understand the concept through animation.",
                purpose: "Visual learning for high school education",
                tools: "Python + animation"
              },
              {
                title: "Survey Data Analysis",
                subtitle: "Power BI",
                icon: "📊",
                description: "Led survey analysis on village cleanliness, well-being, and education. Designed interactive dashboards to visualize trends and key findings, highlighting real-world community insights.",
                purpose: "Social impact through data",
                tools: "Excel, Power BI"
              },
              {
                title: "Sentiment Analysis",
                subtitle: "NLP",
                icon: "💬",
                description: "Developed a text-based sentiment classifier to detect emotional tone in customer reviews and feedback. Implemented preprocessing, feature extraction, and sentiment modeling for classification.",
                purpose: "Extract meaning from language",
                tools: "Python, NLTK, TextBlob"
              }
            ].map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-background/80 backdrop-blur-sm border-border/20">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{project.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 font-medium">{project.subtitle}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">💡 Purpose:</span>
                      <span className="text-sm text-muted-foreground">{project.purpose}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">🔧 Tools:</span>
                      <span className="text-sm text-muted-foreground">{project.tools}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className={`py-24 px-4 ${isVisible.timeline ? "animate-fade-in" : "opacity-0"}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Journey
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            {[
              { icon: "🎓", title: "Graduated", description: "KL University, 2025", side: "left" },
              { icon: "📈", title: "Major Projects", description: "Heart Simulation, Survey Analysis, Sentiment Analysis", side: "right" },
              { icon: "💼", title: "Job Offer", description: "C5i, Coimbatore", side: "left" },
              { icon: "🎯", title: "Road Ahead", description: "To grow in Data Engineering & Analysis, aiming to launch a startup in future", side: "right" }
            ].map((item, index) => (
              <div key={index} className={`relative flex ${item.side === "left" ? "justify-start" : "justify-end"} mb-12`}>
                <div className={`w-5/12 ${item.side === "left" ? "text-right pr-8" : "text-left pl-8"}`}>
                  <Card className="bg-background/80 backdrop-blur-sm border-border/20 shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-background shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className={`py-24 px-4 bg-muted/30 ${isVisible.hobbies ? "animate-fade-in" : "opacity-0"}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Personal Touch
          </h2>
          
          <div className="bg-background/80 backdrop-blur-sm border border-border/20 rounded-3xl p-12 shadow-xl">
            <Music className="h-16 w-16 mx-auto mb-6 text-blue-500 animate-pulse" />
            <p className="text-xl text-muted-foreground leading-relaxed italic">
              "Outside of the data world, music helps me focus, reflect, and reset. It's my go-to companion during late-night problem-solving."
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-24 px-4 ${isVisible.contact ? "animate-fade-in" : "opacity-0"}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <div className="flex justify-center gap-8 mb-12">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/sathvik-gude-894a61239/", label: "LinkedIn" },
              { icon: Github, href: "http://github.com/SathvikGude", label: "GitHub" },
              { icon: Mail, href: "mailto:sathvikgude347@gmail.com", label: "Email" }
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-background/60 backdrop-blur-sm border border-border/20 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <contact.icon className="h-8 w-8 mx-auto mb-2 group-hover:text-blue-500 transition-colors" />
                <span className="text-sm font-medium">{contact.label}</span>
              </a>
            ))}
          </div>
          
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Let's Connect
            <div className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/20 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Sathvik Gude. Crafted with care and precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
