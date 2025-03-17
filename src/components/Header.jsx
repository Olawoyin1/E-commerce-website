import React, { useState, useEffect } from "react";
import { CiMicrophoneOn, CiMicrophoneOff } from "react-icons/ci";
import { FiUser, FiSearch } from "react-icons/fi";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const Header = ({ count, setSearchQuery }) => {

const navigate = useNavigate(); 
  const { transcript, listening, browserSupportsSpeechRecognition, resetTranscript } =
    useSpeechRecognition();

  const [searchText, setSearchText] = useState("");
  const [isListening, setIsListening] = useState(false);


    useEffect(() => {
        // Remove trailing full stop if present
        let cleanedTranscript = transcript.trim();
        if (cleanedTranscript.endsWith(".")) {
        cleanedTranscript = cleanedTranscript.slice(0, -1);
        }
    
        setSearchText(cleanedTranscript);
        setSearchQuery(cleanedTranscript); // Ensure query updates without a full stop
    }, [transcript, setSearchQuery]);

  const startListening = () => {
    setSearchText("");
    SpeechRecognition.stopListening(); // Ensure any ongoing session is stopped
    resetTranscript(); 
    setIsListening(true);
    SpeechRecognition.startListening({ continuous: true, language: "en-US" });
  };

  const stopListening = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
    if (searchText.trim()) {
        setSearchQuery(searchText);
        navigate(`/shop?search=${encodeURIComponent(searchText)}`);
      }
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevents page reload
      setSearchQuery(searchText); // Ensure searchQuery updates
      navigate(`/shop?search=${encodeURIComponent(searchText)}`);
    }
  };

  const handleVoiceSearch = () => {
    setSearchQuery(searchText); // Trigger search after speaking
    navigate(`/shop?search=${encodeURIComponent(searchText)}`);
  };

  return (
    <header>
      {!browserSupportsSpeechRecognition && (
        <p>Your browser does not support speech recognition. Try Chrome.</p>
      )}
      <div className="sales p-1 bg-dark text-center">
        <small className="text-white">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! Shop Now
        </small>
      </div>
      <div className="container2">
        <nav className="navbar m-0">
          <Link to="/">
            <h3 className="fw-bold navbar-brand">E-Commerce</h3>
          </Link>
          <ul className="d-none d-md-flex align-items-center gap-3 m-0 p-0">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/contact">Contact</Link></li>
            <li><Link className="nav-link" to="/about">About</Link></li>
            <li><Link className="nav-link" to="/signup">Signup</Link></li>
          </ul>
          <div className="others d-flex align-items-center gap-3">
            {/* Search Box */}
            <div className="d-lg-flex d-none  align-items-center header-search">
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={handleSearch}
                // value={searchText}
                // onChange={handleSearch}
                className="search-input"
                placeholder="What are you looking for?"
              />
              {/* Microphone Button */}
              <button
                type="button"
                onClick={isListening ? stopListening : startListening}
                className="mic-btn"
              >
                {isListening ? <CiMicrophoneOff size={17} className="icon icon2" /> : <CiMicrophoneOn size={17}  className="icon icon2"/>}
              </button>
              {/* Search Icon Button */}
              <button type="button" onClick={handleVoiceSearch} className="search-btn">
                <FiSearch size={17} className="icon" />
              </button>
            </div>
            <Link className="nav-link liked" to="/wishlist">
              <FaRegHeart size={20} />
              <span className={count ? "likedd" : ""}>{count > 0 ? count : ""}</span>
            </Link>
            <Link className="nav-link" to="/cart">
              <GrCart size={20} />
            </Link>
            <Link className="nav-link" to="/user">
              <FiUser size={20} />
            </Link>
          </div>
        </nav>



        {/* mobile view search */}
        <div className="d-lg-none d-flex align-items-center header-search">
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={handleSearch}
                // value={searchText}
                // onChange={handleSearch}
                className="search-input2"
                placeholder="What are you looking for?"
              />
              {/* Microphone Button */}
              <button
                type="button"
                onClick={isListening ? stopListening : startListening}
                className="mic-btn"
              >
                {isListening ? <CiMicrophoneOff size={24} color="#000000" className="icon icon3" /> : <CiMicrophoneOn size={24}  className="icon icon3"/>}
              </button>
              {/* Search Icon Button */}
              <button type="button" onClick={handleVoiceSearch} className="search-btn">
                <FiSearch size={24} color="#000000" className="icon icon4" />
              </button>
            </div>
      </div>
    </header>
  );
};

export default Header;
