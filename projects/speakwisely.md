---
title: "SpeakWisely"
description: "AI-powered instant personalised feedback, and structured practice for IELTS Speaking."
tags: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "OpenAI", "Whisper", "Google Analytics"]
images: ["/speakwisely/thumbnail.png"]
layout: "imageRight"
brandIcon: "/svg/speakwiselylogo.svg"
category: "project"
date: "2025-12-15"
liveUrl: "https://speakwisely.vercel.app"
priority: 1
---

# Overview

SpeakWisely is an IELTS Speaking prep tool that gives you instant, personalised feedback on your speaking practice. You record yourself answering real IELTS questions, and the platform scores you on fluency, vocabulary, grammar, pronunciation, and task achievement, all based on official IELTS criteria.

The goal was to make quality speaking practice accessible to anyone, not just people who can afford private tutors.

## The Problem

Preparing for IELTS Speaking is harder than it should be. Good tutors are expensive and hard to find. Cheaper alternatives are inconsistent. Scheduling is a pain. And a lot of students feel too nervous practicing with a real person, which defeats the purpose.

There was a clear gap: students needed honest, reliable feedback they could get on their own time, without the pressure.

## What It Does

You pick a question set, hit record, and speak. Once you're done, the platform transcribes your response using OpenAI Whisper and runs it through a feedback model that breaks down your performance across IELTS scoring dimensions. You get specific, actionable notes, not a generic "good job."

There's also a live AI Examiner mode. It simulates a real IELTS Speaking test with a voice agent that asks follow-up questions, manages the three-part test flow, and adapts to your responses in real time. Response times sit under 200ms using OpenAI's Realtime API over WebRTC, so the conversation feels natural.

Every session gets recorded and saved. You can go back, compare your scores, and track how you're improving over time.

## How the AI Examiner Works

The examiner runs as a multi-agent system where different agents handle different parts of the test. Handoffs between agents are seamless, so from the student's side it feels like one continuous conversation. Topics are randomised from 12+ IELTS categories, and the full session audio (both sides) gets captured for review.

## Tech Stack

The frontend is Next.js with React and TypeScript, styled with Tailwind CSS and animated with Framer Motion. Voice streaming runs over WebRTC. The backend uses Supabase for the database and auth, OpenAI for feedback generation and the Realtime API for voice, and Whisper for transcription. Everything is deployed on Vercel with edge functions handling the API layer.
