import React, { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import LoadingSpinner from "../components/LoadingSpinner";
import ResponsiveImage from "../components/ResponsiveImage";

interface Player {
  id: number;
  name: string;
  position: string;
  team: string;
  image: string;
}

const SearchPlayer: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [players, setPlayers] = useState<Player[]>([]);
  const [suggestions, setSuggestions] = useState<Player[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Mock data - in real app, this would come from an API
  const mockPlayers: Player[] = [
    {
      id: 1,
      name: "John Doe",
      position: "Boxing",
      team: "Fitness Club A",
      image: "https://source.unsplash.com/random/400x400?boxing",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Tennis",
      team: "Tennis Club B",
      image: "https://source.unsplash.com/random/400x400?tennis",
    },
    {
      id: 3,
      name: "Mike Johnson",
      position: "Basketball",
      team: "City League",
      image: "https://source.unsplash.com/random/400x400?basketball",
    },
    {
      id: 4,
      name: "Sarah Williams",
      position: "Martial Arts",
      team: "Dojo C",
      image: "https://source.unsplash.com/random/400x400?martial-arts",
    },
  ];

  // Load initial data
  useEffect(() => {
    setPlayers(mockPlayers);
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = mockPlayers.filter(
        (player) =>
          player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          player.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
          player.position.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setShowSuggestions(false);

    // Simulate API call
    setTimeout(() => {
      setPlayers(mockPlayers);
      setIsLoading(false);
    }, 1000);
  };

  const handleSuggestionClick = (player: Player) => {
    setSearchQuery(player.name);
    setShowSuggestions(false);
    setPlayers([player]);
    searchInputRef.current?.blur();
  };

  return (
    <div className="min-h-screen p-4 md:p-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-2 text-center text-text">
          SparringPlayer
        </h1>
        <p className="text-center text-white/60 mb-8">
          Find your perfect sparring partner
        </p>

        <div ref={searchContainerRef} className="relative mb-8">
          <form onSubmit={handleSearch}>
            <div className="relative max-w-2xl mx-auto">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                placeholder="Search by name, sport, or location..."
                className="w-full px-4 py-3 pl-12 rounded-lg bg-white/10 border border-white/20 focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all text-text placeholder-white/50"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5" />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-secondary text-white px-4 py-1.5 rounded-md transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          {/* Suggestions dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute z-10 w-full max-w-2xl mx-auto mt-1 bg-slate-800 border border-slate-700 rounded-lg shadow-lg max-h-[250px] overflow-y-auto">
              {suggestions.map((player) => (
                <button
                  key={player.id}
                  onClick={() => handleSuggestionClick(player)}
                  className="w-full px-4 py-2 hover:bg-slate-700 cursor-pointer flex items-center gap-2 border-b border-slate-700 last:border-b-0"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-slate-600">
                    <img
                      src={player.image}
                      alt={player.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-white truncate">
                      {player.name}
                    </div>
                    <div className="text-xs text-slate-400 truncate">
                      {player.position} • {player.team}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {isLoading ? (
          <LoadingSpinner size="lg" />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {players.map((player) => (
              <div
                key={player.id}
                className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
              >
                <ResponsiveImage
                  src={player.image}
                  alt={player.name}
                  aspectRatio="1/1"
                />
                <div className="p-4">
                  <h3 className="text-xl font-display font-semibold mb-2 text-text">
                    {player.name}
                  </h3>
                  <div className="space-y-1 text-white/80">
                    <p>Sport: {player.position}</p>
                    <p>Location: {player.team}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPlayer;
