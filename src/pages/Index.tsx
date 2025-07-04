import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800">
      {/* Logo Area */}
      <div className="pt-8 pb-4 flex justify-center">
        <div className="text-white text-2xl font-bold">LOGO</div>
      </div>

      {/* Main Container - 50% width, centered */}
      <div className="flex justify-center px-4">
        <div className="w-full max-w-4xl bg-gradient-to-r from-black to-pink-800 rounded-lg shadow-2xl overflow-hidden">
          <div className="flex h-[calc(100vh-8rem)]">
            {/* Left Navigation - takes left portion */}
            <div className="w-1/3 bg-black/20 backdrop-blur-sm p-8">
              <nav className="space-y-6">
                <div className="text-white/90 text-sm font-medium tracking-wider uppercase mb-8">
                  Navigation
                </div>

                <a
                  href="#home"
                  className="flex items-center space-x-3 text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition-all duration-300 group p-3 rounded-lg"
                >
                  <Icon
                    name="Home"
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="text-lg font-medium">Home</span>
                </a>

                <a
                  href="#about"
                  className="flex items-center space-x-3 text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition-all duration-300 group p-3 rounded-lg"
                >
                  <Icon
                    name="User"
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="text-lg font-medium">About</span>
                </a>

                <a
                  href="#blog"
                  className="flex items-center space-x-3 text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition-all duration-300 group p-3 rounded-lg"
                >
                  <Icon
                    name="BookOpen"
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="text-lg font-medium">Blog</span>
                </a>

                <a
                  href="#art"
                  className="flex items-center space-x-3 text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition-all duration-300 group p-3 rounded-lg"
                >
                  <Icon
                    name="Palette"
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="text-lg font-medium">Art</span>
                </a>
              </nav>
            </div>

            {/* Right Content Area */}
            <div className="flex-1 p-8 text-white animate-fade-in">
              <div className="max-w-lg">
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent font-inter">
                  Welcome to My Space
                </h1>

                <p className="text-lg text-white/90 mb-8 leading-relaxed font-open-sans">
                  This is where I share my thoughts, creativity, and journey.
                  Explore different sections to discover more about me and my
                  work.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-200">
                    <Icon name="Sparkles" size={18} />
                    <span className="font-open-sans">
                      Creative content and insights
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-200">
                    <Icon name="Heart" size={18} />
                    <span className="font-open-sans">
                      Personal stories and experiences
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-200">
                    <Icon name="Star" size={18} />
                    <span className="font-open-sans">
                      Artistic projects and showcases
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
