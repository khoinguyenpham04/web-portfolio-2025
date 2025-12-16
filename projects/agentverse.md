---
title: "Delego"
description: "Autonomous team planning system using digital twins that debate, align, and assign tasks intelligently."
tags: ["Node.js", "Redis", "GPT-4.1", "Multi-Agent", "RAG", "MCP", "TypeScript"]
images: ["/Delego.jpeg"]
layout: "imageRight"
date: "2025-12-14"
brandIcon:
category: "hackathon"
hackathonName: "AgentVerse Hackathon"
displayDate: "December 2025"
priority: 4
awards:
  - label: "1st Place"
    variant: "gold"
---

# Delego: Autonomous Team Planning with Digital Twins

## Overview

We won **1st place** at the **AgentVerse Hackathon** by UCL Artificial Intelligence Society, sponsored by Anthropic, Amazon Web Services (AWS), Cisco, Entrepreneurs First, and more!

In just 24 hours, we built **Delego**, a system that tackles a problem every team faces. Even with advanced tools, project managers spend hours in meetings assigning tasks and tracking progress. We wanted to make planning fully autonomous.

## The Problem

Project managers and team leads spend countless hours in:
- Task assignment meetings
- Progress tracking sessions
- Resource allocation discussions
- Coordination overhead

This friction slows down teams and limits their ability to scale effectively.

## What Delego Does

Delego automates team planning using **digital twins** that debate, align, and assign tasks intelligently.

- **No meetings** required for task assignment
- **No micromanagement** needed
- **Frictionless scaling** across teams

## Key Technical Highlights

### Multi-Agent Backend with RAG Modeling
Deployed the system as a **multi-agent backend** with **RAG modeling** and **CAIPE**, enabling scalable, autonomous collaboration across teams.

### Agentic Digital Twin Data Pipeline
Built an **agentic digital twin data pipeline** with **Node** and **Redis** to model each team member's:
- Skills and expertise
- Availability windows
- Working preferences
- Historical performance

### Fine-Tuned Language Model
**Fine-tuned GPT-4.1 Nano** with digital twin data for realistic decision patterns that match how real team members would respond.

### Modular Workflow Agents
Designed modular **workflow agents** and integrated **MCP servers** (e.g., GitHub MCP) for seamless task delegation and project management integration.

## Architecture

```
                    +------------------+
                    |   Task Input     |
                    +--------+---------+
                             |
                    +--------v---------+
                    |  Digital Twins   |
                    |  (Debate Phase)  |
                    +--------+---------+
                             |
              +--------------+--------------+
              |              |              |
      +-------v------+ +-----v------+ +-----v------+
      | Twin Agent 1 | | Twin Agent 2| | Twin Agent N|
      | (Skills/Avail)| | (Skills/Avail)| | (Skills/Avail)|
      +-------+------+ +-----+------+ +-----+------+
              |              |              |
              +--------------+--------------+
                             |
                    +--------v---------+
                    |  Consensus &     |
                    |  Assignment      |
                    +--------+---------+
                             |
                    +--------v---------+
                    |  MCP Integration |
                    |  (GitHub, etc.)  |
                    +------------------+
```

## Impact

This marks my **4th consecutive hackathon win** and demonstrates the power of multi-agent systems for real-world productivity challenges.

## Team

Huge thanks to the amazing team that made this win possible:
- Salman Chishti
- Katie Lam
- Joe Clinton
- Ryan Lin
- Suleiman Khan

And appreciation to the UCL Artificial Intelligence Society's committees and volunteers for organizing such a well-run event!

## Tech Stack

- **Backend**: Node.js, Redis
- **AI/ML**: GPT-4.1 Nano (fine-tuned), RAG, CAIPE
- **Integration**: MCP Servers (GitHub MCP)
- **Architecture**: Multi-agent system with digital twins
