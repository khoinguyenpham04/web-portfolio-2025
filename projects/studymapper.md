---
title: "StudyMapper"
description: "Interactive web app helping University of Manchester students find available study spaces across campus."
tags: ["Next.js", "React", "TypeScript", "MongoDB", "Tailwind CSS", "Mapbox GL"]
images: ["/studymapper/Component 3.png"]
layout: "imageRight"
brandIcon: "/svg/studdymapperlogo.svg"
category: "project"
liveUrl: "https://studymapper.vercel.app"
date: "2024-12-21"
priority: 3
---

# Overview

StudyMapper helps University of Manchester students find open study spaces on campus. You open the app, see a map of every study location, and instantly know what's open, how far it is, and what amenities it has. Built it because I got tired of walking around campus during exam season looking for somewhere to sit.

## The Problem

There was no single place to check which study spaces were available. You'd just walk to the library, find it full, try another building, and repeat. During exams it got worse. New students had it even harder because they didn't know half the spots existed.

## What It Does

The app centres on an interactive Mapbox map showing every study location across campus. Each spot is colour-coded by availability. You can tap any location to see its opening hours, amenities (power outlets, quiet zones, group tables), and Google ratings.

There's a proximity feature that finds the nearest open spaces to your current location and shows walking distances. You can also filter and sort by distance, availability, or amenities. The data updates daily with current opening hours, and special schedules during exam periods and holidays are handled automatically.

## What Worked

The app hit 100+ daily active users during exam periods and 1,500+ monthly users across the academic year. Students told me it saved them time and helped them discover spaces they never knew about.

The biggest technical challenge was getting Mapbox to run smoothly on lower-end phones. That took a lot of optimisation around progressive data loading and keeping the initial bundle small.

## Tech Stack

The frontend is Next.js with React, TypeScript, and Tailwind CSS. Maps run on Mapbox GL JS. The backend uses MongoDB for study space data and Next.js API Routes for the server layer. Deployed on Vercel.
