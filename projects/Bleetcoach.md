---
title: "LeetCoach"
description: "AI-powered coding companion for interview preparation with voice-enabled support and real-time feedback."
tags: ["Next.js", "TypeScript", "Tailwind CSS", "Python", "AIOHTTP", "Gemini API", "Neuphonic API", "CodeMirror", "Docker", "Cloudflare", "Vercel"]
images: ["/leetcoach-thumbnail.png", "/blue-bg.jpg", "/blue-gradient-placeholder.jpg"]
layout: "imageRight"
brandIcon: "/svg/leetcoach.svg"
category: "hackathon"
date: "2025-06-21"
liveUrl: "https://leetcoach.app"
githubUrl: "https://github.com/username/leetcoach"
---

# Overview

LeetCoach is an innovative AI-powered platform developed during a hackathon to transform coding interview preparation. Designed to assist students and professionals, it integrates real-time guidance, voice-enabled AI support, and secure code execution, offering an engaging and effective solution for mastering technical interviews, particularly with LeetCode problems.

## The Challenge

Preparing for coding interviews poses significant obstacles for many students:

- **Lack of Direction**: Beginners often struggle to identify a starting point or structure their practice effectively.
- **Isolation**: Solo practice can feel demotivating without immediate feedback or interaction.
- **Limited Feedback**: Standard solutions lack personalized insights into code quality and optimization.
- **Accessibility Gaps**: Traditional tools rarely accommodate diverse learning preferences, such as auditory learners.

## The Solution

LeetCoach addresses these pain points with a robust set of features:

- **Practice Problems with Code Execution**: Write and run code directly within the platform.
- **Voice-Enabled AI Support**: Hands-free guidance via an interactive AI assistant.
- **Real-Time Feedback**: Instant insights on code quality, complexity, and edge cases.
- **Natural Voice Responses**: Powered by Neuphonic’s text-to-speech for an immersive experience.
- **Progress Tracking**: Built-in timer to monitor and enhance problem-solving speed.

## Technical Architecture

LeetCoach leverages a modern tech stack for performance and scalability:

- **Frontend**: Next.js, TypeScript, and Tailwind CSS for a responsive, user-friendly interface.
- **Backend**: Python AIOHTTP service ("codedriver") for secure code execution.
- **AI Integration**: Gemini API via Google AI client for intelligent, real-time feedback.
- **Voice Technology**: Web Speech API for transcription, paired with Neuphonic API for natural responses.
- **Code Editor**: CodeMirror for an intuitive coding environment.
- **Security**: Sandboxed execution environment with restricted imports to ensure safety.

## Key Features Implementation

### Voice Interaction

A standout feature is the voice-enabled AI assistant, implemented as follows:

```typescript
const setupVoiceInteraction = () => {
  const recognition = new webkitSpeechRecognition();
  recognition.onresult = async (event) => {
    const transcript = event.results[0][0].transcript;
    const response = await getAIResponse(transcript);
    speak(response);
  };
  recognition.start();
};

const speak = async (text) => {
  const audioUrl = await neuphonicAPI.textToSpeech(text);
  const audio = new Audio(audioUrl);
  audio.play();
};
```

This enables users to interact hands-free, receiving natural-sounding feedback.

## User Experience Design

- **Intuitive Layout**: Clean design with easy navigation to problems, editor, and AI assistant.
- **Accessibility**: Voice support enhances usability for diverse learners.
- **Motivational Tools**: Timers and feedback scores encourage continuous improvement.

## Challenges and Learnings

The development process presented valuable lessons:

- **Secure Code Execution**: Built a sandboxed environment to safely run user code.
- **Prompt Engineering**: Refined AI prompts for concise, actionable feedback.
- **API Integration**: Overcame documentation challenges with Neuphonic and cloud services.

These hurdles deepened our understanding of secure coding, AI optimization, and third-party integrations.

## Future Enhancements

- **Expanded Problem Set**: Additional questions across varying difficulty levels.
- **Language Support**: Extend beyond Python to other programming languages.
- **Collaborative Mode**: Enable pair programming functionality.
- **Advanced AI Coaching**: Tailored guidance for specific interview strategies.
- **Interview Simulation**: Timed challenges mimicking real interview scenarios.

## Conclusion

LeetCoach redefines coding interview preparation by blending AI-driven insights with voice technology and a secure, user-centric design. Developed during a hackathon, it showcases innovative problem-solving and technical expertise, making it a standout addition to my portfolio as a Computer Science student at the University of Manchester.