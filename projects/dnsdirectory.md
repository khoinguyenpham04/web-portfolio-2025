---
title: "DNS Directory"
description: "Public DNS server monitoring platform with 77,000+ records and real-time analytics."
tags: ["Next.js", "TypeScript", "Python", "Flask", "PostgreSQL", "SQLAlchemy", "REST API", "Tailwind CSS"]
images: ["/dnsdirectory/DNS Thumbnail 1.svg"]
brandIcon: "/svg/dns-logo.svg"
layout: "imageLeft"
category: "project"
date: "2025-12-20"
liveUrl: "https://dnsdirectory.com"
priority: 2
---

# Overview

Led the end-to-end full-stack development of a public DNS Directory with 77,000+ records, improving load times via server-side rendering and memoized caching layers by 60%. Built for [Ping](https://pingproxies.com).

## Backend Architecture

### High-Performance REST APIs
- Engineered 10+ REST APIs with PostgreSQL and SQLAlchemy ORM
- Implemented TTL-based caching to reduce database load and improve response times
- Built aggregation queries powering analytics dashboards and dynamic filtering
- Designed efficient pagination handling 77k+ records with sub-100ms response times

### Database & Caching
- PostgreSQL database with optimized indexes for common query patterns
- SQLAlchemy ORM with connection pooling for concurrent request handling
- TTL-based caching layers reducing redundant database queries
- Memoized computation for expensive aggregation operations

### API Security
- IP-based rate limiting (100 req/min for searches, 50 req/min for filters)
- Request validation and sanitization
- Hidden API endpoints - external URLs never exposed to clients
- All requests proxied through Server Actions

## Frontend Architecture

### Performance Optimizations
- Server-side rendering improving initial load times by 60%
- Next.js 16 Cache Components with `cacheLife` API for near real-time data
- Lazy-loaded heavy components (maps, charts) for optimal Core Web Vitals
- Server-side pagination efficiently handling 77k+ records

### Real-time Monitoring Dashboard
- Track status, uptime, and reliability metrics for 77,000+ DNS servers
- 90-day uptime history charts with day-by-day reliability tracking
- Interactive map visualization with Mapbox GL
- Advanced filtering by IP, domain, location, status, and features

### SEO & Discoverability
- Dynamic metadata with JSON-LD structured data for rich snippets
- Auto-generated sitemap.xml covering all DNS servers and countries
- Server-side rendered pages for optimal search engine indexing

## Tech Stack

- **Frontend:** Next.js 16, TypeScript, Tailwind CSS v4, Radix UI
- **Backend:** Python, Flask, SQLAlchemy ORM
- **Database:** PostgreSQL with optimized indexes
- **Caching:** TTL-based caching, memoization layers
- **Maps:** Mapbox GL with React Map GL
- **Charts:** Recharts
- **Tables:** TanStack Table v8
