import { useState } from "react";
import { DrumPad } from "../DrumMachine/drumpContainer"; // Ensure the import path is correct

export default function DrumMachine(): JSX.Element {
  const [displayText, setDisplayText] = useState("");

  const sounds = [
    {
      id: "Q",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    },
    {
      id: "W",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
    },
    {
      id: "E",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    },
    {
      id: "A",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4.mp3",
    },
    {
      id: "S",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    },
    {
      id: "D",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    },
    {
      id: "Z",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    },
    {
      id: "X",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    },
    {
      id: "C",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
    },
  ];

  const handleClick = (id: string) => {
    const audio = document.getElementById(id) as HTMLAudioElement;
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
    setDisplayText(id);
  };

  return (
    <div id="drum-machine">
      <div id="display">{displayText}</div>
      <div
        id="drum-pad"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "10px",
        }}
      >
        {sounds.map((sound) => (
          <DrumPad
            key={sound.id}
            id={sound.id}
            url={sound.url}
            handleClick={handleClick} // Ensure this is passed correctly
          />
        ))}
      </div>
    </div>
  );
}
