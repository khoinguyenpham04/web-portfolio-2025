---
title: "StudyMapper"
description: "Interactive web app helping University of Manchester students find available study spaces across campus."
tags: ["Next.js", "React", "TypeScript", "MongoDB", "Tailwind CSS", "Mapbox GL"]
images: ["/studymapper/Component 3.png"]
layout: "imageLeft"
brandIcon: "/svg/studdymapperlogo.svg"
category: "project"
liveUrl: "https://studymapper.vercel.app"
date: "2025-06-21"
---
# StudyMapper: Finding Study Spaces at the University of Manchester

## Overview

StudyMapper is an interactive web application designed to help University of Manchester students locate available study spaces across campus. Built during my Computer Science studies, this project addresses the common frustration of wandering around campus searching for open study spots, especially during busy exam periods.

## The Challenge

University students face several obstacles when trying to find suitable study environments:

- **Limited Visibility**: No centralized way to see which study spaces are currently available
- **Time Wasted**: Students often spend valuable study time searching for a place to work
- **Lack of Information**: Difficulty finding details about amenities, opening hours, and capacity
- **Exam Season Crowding**: Increased competition for spaces during peak periods
- **Campus Navigation**: New students struggle to locate buildings and facilities

## The Solution

StudyMapper transforms how students find study spaces through an intuitive, feature-rich platform:

### 🗺️ Interactive Campus Map
A real-time visualization of all study locations across the University of Manchester campus, with:
- Color-coded availability indicators
- Building outlines and campus landmarks
- Custom-curated study locations based on personal experience

### 📍 Smart Location Features
- **One-Click Navigation**: Instant "fly to" functionality to any study location
- **Proximity Search**: Find the closest available study spaces to your current location
- **Walking Distances**: Estimated travel times between your location and study spots
- **Transit Connections**: Integration with public transportation options nearby

### ⏰ Real-Time Status Updates
- Current opening/closing times updated daily
- Occupancy estimates where available
- Special hours during exam periods and holidays
- Temporary closures and maintenance alerts

### 🔍 Advanced Filtering & Sorting
- Filter by amenities (power outlets, quiet zones, group tables)
- Sort by distance, availability, or ratings
- Personalized recommendations based on study preferences
- Google ratings integration for community feedback

## Technical Architecture

### Frontend Stack
- **Next.js**: Server-side rendering for optimal performance
- **React**: Component-based UI for interactive elements
- **TypeScript**: Type-safe development ensuring code reliability
- **Tailwind CSS**: Responsive design with utility-first styling
- **Mapbox GL JS**: Interactive mapping capabilities

### Backend Infrastructure
- **MongoDB**: Storage for study space data and user preferences
- **Next.js API Routes**: Serverless functions for data operations
- **Vercel**: Hosting and continuous deployment

### Key Implementation Features

#### Interactive Map Integration
```typescript
// Map initialization with custom styling
const initializeMap = () => {
  const map = new mapboxgl.Map({
    container: 'map-container',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-2.2374, 53.4668], // University of Manchester coordinates
    zoom: 15,
    minZoom: 14,
    maxZoom: 19
  });
  
  // Add custom layers for buildings, study spaces, and navigation
  map.on('load', () => {
    // Add building outlines
    map.addSource('buildings', { type: 'geojson', data: buildingData });
    map.addLayer({ ... });
    
    // Add study space markers with availability status
    addStudySpaceMarkers(map, studySpaces);
  });
};
```

#### Real-Time Availability Algorithm
```typescript
// Calculate and display real-time availability
const calculateAvailability = (studySpace: StudySpace): AvailabilityStatus => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const currentHour = now.getHours();
  
  // Check if space is currently open
  const isOpen = isWithinOpeningHours(studySpace, dayOfWeek, currentHour);
  
  // Estimate occupancy based on historical data and time of day
  const occupancy = estimateCurrentOccupancy(studySpace, dayOfWeek, currentHour);
  
  return {
    isOpen,
    occupancy,
    status: determineStatus(isOpen, occupancy)
  };
};
```

## User Experience Design

### Intuitive Interface
- **Clean, Minimalist Design**: Focus on the map and essential information
- **Mobile-Responsive Layout**: Fully functional on smartphones for on-the-go use
- **Contextual Information**: Location details appear when needed without cluttering the interface
- **Familiar Navigation Patterns**: Inspired by popular mapping applications for instant usability

### Performance Optimization
- **Fast Initial Load**: Critical path optimization for quick startup
- **Progressive Data Loading**: Study spaces load dynamically as users explore the map
- **Offline Capabilities**: Basic functionality works without an internet connection
- **Low Data Usage**: Optimized for students using mobile data

## Impact and Results

### User Adoption
- **100+ Daily Active Users** during exam periods
- **1,500+ Monthly Users** across the academic year

### Student Feedback
- "Saved me hours of walking around campus looking for a place to study"
- "I discovered study spaces I never knew existed"

### Academic Value
This project allowed me to apply classroom knowledge to a real-world problem:
- Implementing mapping algorithms and geospatial data structures
- Creating responsive user interfaces with modern frameworks
- Managing real-time data synchronization
- Optimizing application performance for various devices

## Technical Challenges Overcome

### Map Data Processing
Converting university building data into usable GeoJSON format required custom processing scripts and manual verification.

### Performance on Mobile Devices
Mapbox rendering required significant optimization for smooth performance on lower-end devices commonly used by students.

## Conclusion

StudyMapper demonstrates how technology can solve everyday student problems. By applying web development skills to create a practical tool for the university community, I gained valuable experience in full-stack development while providing a genuinely useful service to my peers.

This project exemplifies my approach to software development: identifying real-world problems, applying appropriate technologies, and creating intuitive user experiences. The positive reception from the student community validates both the initial concept and the technical implementation decisions made throughout development.

As StudyMapper continues to grow, I plan to incorporate user feedback, expand coverage to additional campuses, and explore integration with the university's official systems to provide even more accurate and helpful information to students.