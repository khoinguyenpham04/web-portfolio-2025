---
title: "DNS Directory"
description: "Public DNS server monitoring platform with 20,000+ servers globally and real-time analytics."
tags: ["Next.js", "TypeScript", "Python", "Flask", "PostgreSQL", "SQLAlchemy", "REST API", "Tailwind CSS"]
images: ["/dnsdirectory/DNS Thumbnail (1).jpg"]
brandIcon: "/svg/dns-logo.svg"
layout: "imageLeft"
category: "project"
date: "2025-12-20"
liveUrl: "https://dnsdirectory.com"
priority: 4
---

# Overview

DNS Directory is a public monitoring platform that tracks 20,000+ DNS servers worldwide. You can look up any server, check its uptime history, see where it's located, and filter by status, features, or region. Built for [Ping](https://pingproxies.com).

The core challenge was making a dataset this large feel fast and browsable. Nobody wants to wait around while 20k records load.

## What It Does

The main surface is a searchable, filterable directory of public DNS servers. Each server has a detail page showing its current status, 90-day uptime history, reliability metrics, and location on an interactive map. You can filter by IP, domain, country, status, or supported features.

There's also an analytics dashboard that aggregates the data into trends and breakdowns, so you can see things like global uptime distributions or which regions have the most reliable servers.

## Performance

Speed was the main constraint. The backend runs 10+ REST APIs on Flask with PostgreSQL and SQLAlchemy. Every expensive query is cached with TTL-based layers, and aggregation results are memoised so repeated requests skip the database entirely. Pagination keeps response times under 100ms even across the full dataset.

On the frontend, server-side rendering cut initial load times by 60%. Heavy components like the map and charts are lazy-loaded. Next.js cache components with the `cacheLife` API handle near real-time data without hammering the backend.

## Security

All API endpoints are hidden from the client. Every request goes through Next.js Server Actions, so external URLs are never exposed. Rate limiting is IP-based: 100 requests per minute for searches, 50 for filters. Inputs are validated and sanitised before they hit the database.

## SEO

Every server and country page gets dynamic metadata with JSON-LD structured data for rich snippets. The sitemap is auto-generated and covers the full directory. All pages are server-rendered for indexing.

## Tech Stack

The frontend is Next.js 16 with TypeScript, Tailwind CSS v4, and Radix UI. The backend is Python with Flask and SQLAlchemy ORM on PostgreSQL. Maps use Mapbox GL with React Map GL. Charts are built with Recharts. Tables use TanStack Table v8.
