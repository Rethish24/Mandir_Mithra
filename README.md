# 📄 SOAI 2025 Project Report: Mandir__Mithra

## 1. Team Information
- **Team Name**: TempleGuardians
- **Members**: K.Rethish Reddy and Ram Sai Varma
- **GitLab Repo**:https://code.swecha.org/Rethish24/mandir_mithra
- **Live App**:https://huggingface.co/spaces/Rethish24/Mandir_Mithra

## 2. Application Overview
**App Name**: Mandir__Mithra – Crowdsourced Temple Stories & Local Lore  
**Problem**: Indian cultural knowledge (especially in regional languages) is disappearing.  
**Solution**: A bilingual (Telugu + English) web app that lets users learn about temples and **contribute stories, proverbs, and rituals** to a growing cultural corpus.

**MVP Scope**: Built in 1 week using HTML, CSS, JS. Deployed on Hugging Face.

## 3. AI Integration Details
- Uses Wikipedia API to fetch AI-like summaries for unknown temples
- Text-to-Speech (Web Speech API) for AI voice guide in Telugu & English
- Future: Integrate open-source LLM (e.g., IndicBERT) to summarize stories

## 4. Technical Architecture
- Frontend: HTML, CSS, JavaScript
- Data: `temples.json` + user contributions (logged)
- Hosting: Hugging Face Static Spaces
- Offline-First: All core data is bundled → works on low bandwidth

## 5. User Testing & Feedback
- Tested with 5 family members and 3 friends
- Feedback: Loved Telugu support, suggested more temples
- Fixed: Image loading, response clarity

## 6. Project Lifecycle & Roadmap

### A. Week 1: Rapid Development Sprint
- Built chatbot interface
- Added 20+ temples
- Integrated AI fallback and TTS

### B. Week 2: Beta Testing
- Shared with local community
- Collected 12 story contributions (simulated)
- Improved UI and error handling

### C. Weeks 3-4: User Acquisition
- Shared in WhatsApp groups (Telugu Devotional Groups)
- Posted on Reddit (r/Telugu, r/IndianCulture)
- Reached ~50 users (est.)
- Collected 8 real contributions

### D. Post-Internship Vision
- Add AI summarization of stories
- Build mobile app (PWA)
- Partner with temples for oral history collection

## 7. Conclusion
Mandir__Mithra is a step toward preserving Telugu cultural heritage through open-source, AI-powered technology.
