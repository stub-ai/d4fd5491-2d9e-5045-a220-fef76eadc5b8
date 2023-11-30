import React, { ChangeEvent, useState } from 'react';
import Header from '../components/Header';

const Home = () => {
  const [text, setText] = useState('');
  const [audioSrc, setAudioSrc] = useState('');

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleGenerateAudio = async () => {
    const response = await fetch('/api/tts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    const { audio } = await response.json();
    setAudioSrc(audio);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Header />
      <main className="flex flex-col items-center justify-center w-9/12">
        <textarea
          className="p-2 mt-10 border-2 border-gray-300 rounded-md w-full"
          rows={4}
          value={text}
          onChange={handleTextChange}
        />
        <button
          className="p-2 mt-5 bg-blue-500 text-white rounded-md"
          onClick={handleGenerateAudio}
        >
          Generate Audio
        </button>
        {audioSrc && (
          <audio className="mt-10" controls>
            <source src={audioSrc} type="audio/mpeg" />
          </audio>
        )}
      </main>
    </div>
  );
};

export default Home;