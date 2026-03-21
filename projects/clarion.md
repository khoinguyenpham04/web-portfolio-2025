---
title: "Clarion"
description: "Enterprise go-to-market research app that turns uploaded documents into executive-ready reports."
tags: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "OpenAI"]
images: ["/clarion/348shots_so.jpeg"]
layout: "imageLeft"
brandIcon: "/clarion/logo.png"
category: "project"
date: "2026-03-15"
priority: 2
---

# Overview

Clarion is a research tool built for go-to-market teams. You upload your internal documents, scope a workspace around a specific market or initiative, and let an agentic workflow do the heavy lifting: planning the research, gathering evidence, validating claims, and writing the final report.

The idea is simple: your documents are the source of truth, and the system works outward from there.

## How It Works

You start by creating a workspace, basically a project folder scoped to a specific market, product, or launch. Then you upload your source material: PDFs, Word docs, plain text, whatever you have. From there, you can either ask quick questions against your documents or kick off a deep research run.

The deep research is where things get interesting. The system breaks your question into a research plan, searches your uploaded documents first, fills gaps with web research, extracts structured evidence, and writes a report with clear support and gaps called out. No hallucinated confidence. If something isn't backed by evidence, it says so.

Generated reports get saved back into the workspace, so they become part of the knowledge base for future research. It compounds over time.

## The Research Pipeline

1. Clarify the request when scope is vague
2. Convert the prompt into a structured research brief
3. Build a pre-research plan, then adapt it as evidence comes in
4. Search workspace documents before touching the open web
5. Extract structured evidence and flag conflicts
6. Write a final report with explicit citations and gaps

This isn't a chatbot that happens to read files. It's a workflow with a clear hierarchy: documents first, web second, synthesis last.

## Tech Stack

The frontend is Next.js with React and TypeScript, styled with Tailwind and shadcn/ui. The research orchestration runs on LangGraph with a supervisor/researcher pattern. OpenAI handles embeddings and report generation. Tavily covers web validation when the uploaded corpus falls short. Everything persists in Supabase: files in Storage, everything else in Postgres.
