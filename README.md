# Travel Booking App

A modern AI-powered travel discovery app blending intuitive swiping, map-based exploration, and intelligent assistant features.

## Features

* **Tourism Genre Selection**: Choose from 17 curated tourism categories via smooth horizontal swiping
* **Tinder-Style Discovery**: Swipe right to like a place, left to skip — just like Tinder, but for travel
* **AI Cultural Avatar**: Ask our AI avatar for nearby recommendations or hidden gems
* **Speech-to-Text Interface**: Interact using your voice to search or request suggestions
* **Interactive Map**: See liked destinations on an interactive map powered by Leaflet and STB Map API
* **Wishlist Management**: Keep track of places you've liked and revisit them later
* **Mobile-First Design**: Beautiful red-themed UI optimized for mobile devices

## Tech Stack

* **Next.js 15** - React framework
* **TypeScript** - Type-safe development
* **Tailwind CSS** - Utility-first styling
* **React Tinder Card** - Swipe interface
* **Leaflet + STB Map API** - Lightweight and flexible map rendering with Singapore Tourism Board data integration
* **Google Maps JavaScript API** - Map functionality and fallback for global coverage
* **React Icons** - Clean and simple icons
* **Amazon Bedrock + LLMs (Open Source)** - Backend AI infrastructure for recommendations and reasoning
* **Speech-to-Text (Web Speech API)** - Enables voice commands and AI interaction
* **Alook Avatar Integration** - AI assistant for interactive discovery and guided support

## Setup Instructions

1. **Clone and Install**

   ```bash
   npm install --legacy-peer-deps
   ```

2. **Set up Environment Variables**

   * Copy `.env.local` and include the following:

     ```
     NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_google_maps_key
     NEXT_PUBLIC_STB_MAP_API_KEY=your_stb_api_key
     NEXT_PUBLIC_BEDROCK_REGION=us-west-2
     NEXT_PUBLIC_BEDROCK_MODEL_ID=your_model_id_or_endpoint
     ```

3. **Run the Development Server**

   ```bash
   npm run dev
   ```

4. **Open Your Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Usage

1. **Tourism Preferences**: Start by selecting your preferred tourism genres (e.g., nature, food, arts)
2. **Swipe to Discover**: Swipe through a curated list of destinations based on your interests
3. **Talk to the AI Avatar**: Ask for nearby attractions or hidden gems via voice or text
4. **Explore the Map**:

   * View all liked places on the interactive Leaflet map with STB POI overlays
   * Toggle Google Maps for international views
5. **Wishlist**: Access and manage your liked places at any time

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Genre selection
│   ├── swipe/page.tsx        # Swipe interface
│   ├── map/page.tsx          # Map with STB/Leaflet/Google integration
│   └── avatar/page.tsx       # AI Avatar interface
├── components/
│   ├── PreferenceForm.tsx    # Genre selection UI
│   ├── SwipeStack.tsx        # Swipeable cards
│   ├── LocationCard.tsx      # Location details
│   ├── LikedCards.tsx        # Wishlist management
│   └── AvatarChat.tsx        # Speech + Bedrock AI chat
└── globals.css               # Global styles
```

## API Integration Overview

* **Google Maps JavaScript API**: Used as a fallback for global map coverage
* **STB Map API**: Retrieves real-time location data and tourism POIs in Singapore
* **Leaflet.js**: Lightweight, customizable map rendering (used for in-country experience)
* **Amazon Bedrock**: Hosts large language models (LLMs) such as Claude, Mistral, or Titan for personalized travel suggestions and user interaction
* **Web Speech API**: Handles real-time speech recognition to convert voice input into commands for the AI assistant
* **Alook Avatar SDK**: Powers the visual AI avatar interface for engaging, guided experiences

## AI Capabilities

* **LLM-Driven Reasoning**: The app leverages open-source and proprietary LLMs through Bedrock to:

  * Recommend places based on multi-turn dialogue
  * Filter attractions intelligently based on mood, time of day, and user preferences
* **Conversational Guidance**: AI avatar can answer questions like “Where can I go for a relaxing walk nearby?” or “Find me vegetarian food places open now.”

## Security Notes

* All API keys are securely stored in `.env.local` and are **not** committed to source control
* Use **domain-restricted keys** for production deployment (especially for Google Maps and STB APIs)

## Future Enhancements

* Real-time weather and traffic overlays
* Travel itinerary generation
* Booking integration (hotels, tours, transport)
* User profiles and cloud-stored wishlists
* Social sharing, reviews, and friend tagging

---

Let me know if you'd like a badge, project logo, or markdown formatting enhancements like collapsible sections or visuals!
