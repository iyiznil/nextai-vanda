# AI-Powered Travel Discovery & Itinerary App

An intelligent travel discovery platform featuring AI avatars, voice interaction, and comprehensive map integration with Singapore Tourism Board (STB) data.

## Key Features

- **AI Cultural Guide**: Interactive AI avatar powered by Akool for personalized travel recommendations
- **Voice-Enabled Interface**: Browser-based Speech-to-Text for natural conversation with AI guide
- **Multi-Map Integration**: Combined Google Maps and Leaflet with STB Map API data
- **Smart Discovery**: Tinder-style swiping with AI-enhanced recommendations
- **Real-time Data**: Live tourism data from Singapore Tourism Board API
- **Proximity Alerts**: Location-based notifications and suggestions

## Technology Stack

### Core Framework
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and development experience
- **Tailwind CSS** - Utility-first styling

### AI & Machine Learning
- **AWS Bedrock** - Large Language Model integration for AI conversations
- **Open Source LLM** - Alternative AI models for diverse responses
- **Akool AI** - AI avatar generation and animation

### Maps & Location Services
- **Google Maps JavaScript API** - Primary mapping service
- **Leaflet** - Open-source mapping library for enhanced features
- **STB Map API** - Singapore Tourism Board official map data and attractions

### Voice & Communication
- **Browser Speech-to-Text** - Native web speech recognition
- **Agora.io** - Real-time voice and video communication
- **Audio Processing Pipeline** - Voice command processing and response

## API Integration

### Singapore Tourism Board (STB) API
- **Official Tourism Data**: Access to verified attractions, events, and points of interest
- **Real-time Updates**: Live information about opening hours, availability, and pricing
- **Comprehensive Coverage**: Complete database of Singapore's tourism offerings
- **Map Integration**: Seamless integration with both Google Maps and Leaflet

### Google Maps API
- **Geocoding & Reverse Geocoding**: Convert addresses to coordinates and vice versa
- **Places API**: Detailed place information, photos, and reviews
- **Directions API**: Route planning and navigation
- **Street View**: Immersive location previews

### AWS Bedrock Integration
- **Claude/GPT Models**: Advanced language understanding for cultural insights
- **Streaming Responses**: Real-time AI conversation experience
- **Context Awareness**: Location-based and culturally relevant responses
- **Multi-language Support**: Conversations in multiple languages

### Akool AI Avatar
- **Realistic AI Avatars**: Lifelike digital guides for enhanced user experience
- **Voice Synthesis**: Natural speech generation matching avatar appearance
- **Gesture Recognition**: Interactive avatar responses to user inputs
- **Cultural Customization**: Avatars adapted for different cultural contexts

## Setup Instructions

1. **Environment Setup**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **API Keys Configuration**
   Create `.env.local` with the following variables:
   ```env
   # Google Maps API
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key

   # STB Tourism API
   STB_API_KEY=your_stb_api_key
   STB_USER_ID=your_stb_user_id

   # AWS Bedrock
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   AWS_REGION=your_aws_region

   # Akool AI
   AKOOL_API_KEY=your_akool_api_key

   # Agora (Voice Communication)
   AGORA_APP_ID=your_agora_app_id
   ```

3. **Required API Setups**
   - **Google Cloud Console**: Enable Maps JavaScript API, Places API, Geocoding API
   - **STB Developer Portal**: Register for tourism data access
   - **AWS Console**: Set up Bedrock model access permissions
   - **Akool Platform**: Create account for AI avatar services
   - **Agora Console**: Set up real-time communication project

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Usage Guide

### Voice Interaction
1. **Activate Voice Mode**: Click the microphone button to start voice conversation
2. **Natural Speech**: Ask questions about destinations, culture, or travel plans
3. **AI Responses**: Receive intelligent responses from the AI cultural guide
4. **Avatar Interaction**: Watch the AI avatar respond with gestures and expressions

### Map Features
1. **Dual Map System**: 
   - Google Maps for familiar navigation
   - Leaflet with STB data for detailed tourism information
2. **Real-time Data**: Live updates from Singapore Tourism Board
3. **Proximity Alerts**: Get notified about nearby attractions
4. **Custom Markers**: Different icons for various tourism categories

### Discovery & Planning
1. **AI-Enhanced Swiping**: Get personalized recommendations based on preferences
2. **Cultural Insights**: Learn about local customs, history, and significance
3. **Smart Suggestions**: AI considers your location, time, and interests
4. **Wishlist Integration**: Save and organize your travel plans


## Key Technologies Deep Dive

### Speech-to-Text Implementation
- **AWS Transcribe**: Real-time streaming transcription with high accuracy
- **Multi-language Support**: Automatic language detection and transcription
- **Audio Enhancement**: Built-in noise reduction and audio filtering
- **Custom Vocabulary**: Tourism-specific terminology and place names recognition

### Leaflet Integration
- **Custom Tile Layers**: STB-specific map tiles and overlays
- **Interactive Markers**: Dynamic markers with rich popup content
- **Clustering**: Efficient handling of multiple points of interest
- **Mobile Optimization**: Touch-friendly controls and gestures

### LLM & AI Features
- **Contextual Awareness**: AI remembers conversation history and user preferences
- **Cultural Intelligence**: Specialized knowledge about Singapore and regional culture
- **Real-time Streaming**: Live response generation for natural conversation flow
- **Fallback Systems**: Multiple LLM providers for reliability

### Akool AI Avatar Features
- **Real-time Animation**: Live avatar responses synchronized with voice
- **Emotion Recognition**: Avatar expressions match conversation tone
- **Custom Avatars**: Multiple avatar options for different cultural backgrounds
- **Voice Matching**: Synthesized voice that matches avatar appearance

## Security & Best Practices

### API Key Management
- All sensitive keys stored in `.env.local` (gitignored)
- Server-side API calls for sensitive operations
- Domain restrictions applied in production
- Rate limiting implemented for all external APIs

### Data Privacy
- No personal data stored without consent
- Voice data processed locally when possible
- STB API compliance with Singapore data protection laws
- GDPR-compliant data handling for international users

## Development & Deployment

### Local Development
```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev

# Run with specific environment
NODE_ENV=development npm run dev
```

### Production Deployment
- Optimized for Vercel deployment
- Edge functions for AI processing
- CDN integration for avatar videos
- Environment-specific configurations

## Performance Optimizations

- **Lazy Loading**: Components and maps load on demand
- **API Caching**: Intelligent caching of STB and Google Maps data
- **Image Optimization**: Next.js automatic image optimization
- **Voice Processing**: Efficient audio buffer management
- **Avatar Streaming**: Optimized video streaming for AI avatars

## Contributing

This project integrates multiple cutting-edge APIs and AI services. When contributing:

1. Test all API integrations thoroughly
2. Ensure voice features work across different browsers
3. Validate map functionality with both Google Maps and Leaflet
4. Test AI avatar responsiveness and synchronization
5. Verify STB data accuracy and real-time updates

## Troubleshooting

### Common Issues
- **Speech-to-Text not working**: Check browser permissions and HTTPS requirement
- **Maps not loading**: Verify API keys and domain restrictions
- **AI responses slow**: Check AWS Bedrock quotas and region settings
- **Avatar not displaying**: Ensure Akool API credits and video formats
- **STB data missing**: Verify API credentials and rate limits

## License & Attribution

- Singapore Tourism Board API: Used with official permission
- Google Maps: Commercial license required for production
- AWS Bedrock: Pay-per-use model
- Akool AI: Subscription-based avatar service
- Leaflet: Open-source mapping library (BSD 2-Clause License)
