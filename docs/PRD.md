# mateusbrg.com - PRD (Summary)

## My Personal Corner of the Internet | Tech Blog & Digital Portfolio

---

## 1. Executive Summary

### 1.1 Core Vision

**"My personal space on the internet"**

> **"Free your thoughts and watch them fly."** — Kendrick Lamar

This blog is the digital manifestation of my physical spaces: a comfortable place to spend hours, with everything within easy reach, with moments of pause for creative thinking, and with views of nature horizons that calm thoughts and bring clarity of ideas.

**Dual Purposes:**

1. **Personal Digital Sanctuary:** Share thoughts, learnings, and world visions about technology, systems, and computing
2. **Professional Portfolio:** Digital visit card showcasing my work and expertise

**Core Philosophy:**

- Like a **beach horizon** → creates space for contemplation
- Like a **comfortable reading room** → everything accessible and well-organized
- Like **moments of creative pause** → encourages readers to slow down and think

### 1.2 Goals

- Create my personal corner of the internet — a space that reflects who I am
- Share technical knowledge, thoughts, learnings, and world visions
- Build portfolio-like professional presence (visit card)
- Foster thoughtful engagement with systems, computing, and technology
- Provide calm, clarity-inducing reading experience
- **Content ENTIRELY in pt-BR (for now)**
- Work beautifully on both web and mobile

### 1.3 Success Metrics

**Technical Excellence:**

- Page load time < 2 seconds (Lighthouse Performance > 90)
- Mobile responsiveness > 95 (critical: MUST work beautifully on mobile)
- SEO score > 90
- Accessible design (WCAG 2.1 AA)

**Experience & Feel ("Horizon" Metrics):**

- Visitors feel comfortable spending time here
- Reading experience feels calm and clarity-inducing
- Content easy to find ("everything within reach")
- Design creates "moments of pause" for reflection
- Typography optimal for extended reading sessions
- Mobile experience as comfortable as desktop

---

## 2. Target Audience

### Primary Purpose

**First and foremost: This is MY space.**
The primary audience is me — this blog exists to share my thoughts, learnings, and visions.

**Secondarily: Professional Visit Card**
Also serves as portfolio and professional presence.

### Who Will Read

1. **Tech Enthusiasts & Developers**
   - Developers, engineers, system architects
   - Seeking learnings, new approaches, solutions

2. **Potential Collaborators & Employers**
   - Recruiters, hiring managers, clients, collaborators
   - Evaluating capabilities, work quality, cultural fit

3. **Curious Minds Interested in Technology**
   - People passionate about technology (even if not developers)
   - Seeking insights, learning something new, inspiration

4. **Future Me**
   - Returning to reference past learnings
   - Need clear documentation and dated context

---

## 3. Design Philosophy & Visual Direction

### 3.1 Design Aesthetic

**Calm Horizons Meet Digital Systems**

**Key Principles:**

1. **Calm & Spacious** (Like Nature Horizons)
   - Generous whitespace letting thoughts breathe
   - Uncluttered layouts
   - Colors inspired by calm environments

2. **Comfortable & Accessible** (Like Well-Organized Library)
   - Everything within easy reach
   - Clear navigation
   - Readable typography for long sessions

3. **Moments of Pause** (Creative Leisure)
   - Design encouraging slowdown
   - Thoughtful transitions
   - Space for contemplation

4. **Systems & Technology** (My Passion)
   - Clean, systematic approach
   - Precision in spacing and alignment
   - Technical excellence in code structure

### 3.2 Visual Requirements

**Typography:**

- IBM Plex Mono for code blocks
- Noto Serif for body text
- Space Grotesk for display/headings
- Optimal line height (1.6-1.8 for body)

**Layout:**

- Max content width: ~1200px
- Generous padding and margins
- Grid for blog listing (1 column mobile, adaptable desktop)
- Sticky navigation
- Clear visual separation between sections

**Imagery:**

- High-quality featured images
- Various aspect ratios
- Optimized (WebP with fallbacks)
- Lazy loading

---

## 4. Technical Stack

### 4.1 Core Technologies

- **Framework:** Astro (SSG, optimized performance)
- **Component Library:** Vue 3 (interactive components)
- **UI Library:** PrimeVue (pre-built accessible components)
- **Styling:** PrimeVue theming + **TailwindCSS** (need to add to project)

---

## 12. Out of Scope (NOT Building in MVP)

- **User accounts/authentication** - Not needed for static blog
- **Comment system** - Add later
- **Search functionality** - Add later
- **Newsletter integration** - Add later
- **English support** - **pt-BR only for now**
- **Admin panel** - Not applicable
- **E-commerce/monetization** - Not applicable
- **Complex filtering** - Add later
- **API endpoints** - Static site, no backend needed

---

## 14. Success Criteria

MVP will be considered successful when:

1. **Functionality:**
   - All pages load correctly
   - Navigation works smoothly
   - Posts display with proper formatting
   - Code syntax highlighting works
   - Social sharing buttons work

2. **Performance:**
   - Lighthouse Performance score > 90
   - Page load time < 2 seconds
   - Mobile-friendly

3. **SEO:**
   - Lighthouse SEO score > 90
   - Proper meta tags on all pages
   - Sitemap generated

4. **Accessibility:**
   - Lighthouse Accessibility score > 90
   - Keyboard navigation works
   - Screen reader friendly

5. **Design:**
   - Matches design inspirations
   - Responsive on all devices
   - Consistent theming

---

## 16. References

### 16.1 Reference Links

- Astro Documentation: https://docs.astro.build
- PrimeVue Documentation: https://primevue.org
- Vue 3 Documentation: https://vuejs.org
- Web.dev Performance Guide: https://web.dev/performance
- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/

### 16.2 Design Inspiration Sources

Provided screenshots showcase:

- Modern design aesthetic
- Card-based blog listing with prominent imagery
- Minimal, text-focused list views
- Clear typography hierarchy
- Professional portfolio approach
- Effective use of whitespace

---

## Notes for AGENTS

When implementing this PRD:

### Understanding the Vision

This is NOT just another blog — it's **Mateus's personal corner of the internet.** Every design decision should reflect this.

**Key Principles:**

1. **Create calm, not chaos** — generous whitespace, clean layouts
2. **Everything within reach** — excellent navigation and organization
3. **Encourage pause** — don't rush the reader
4. **Mobile is critical** — MUST be as beautiful on phone as desktop
5. **Passion for systems** — clean, systematic, precise implementation

**Design Philosophy:**
Think of designing a physical space with:

- Comfortable seating for extended stays
- Books organized and within reach
- Windows with nature/horizon views (= generous whitespace)
- Calm, contemplative atmosphere
- Everything designed for clarity of thought

**Technical Excellence:**
Mateus is passionate about systems, computing, and technology — implementation should reflect this:

- Clean, well-organized code
- Systematic approach to components
- Technical precision
- Performance optimization
- Thoughtful architecture

### Implementation Approach

1. **Start with foundation** - Set up Astro + Vue + PrimeVue + TailwindCSS first
2. **Build incrementally** - Focus on one page at a time (Home → Blog List → Blog Post)
3. **Use design inspirations** - Reference screenshots for layout, spacing, styling
4. **Prioritize performance** - Implement image optimization and lazy loading from the start
5. **Test as you go** - Verify responsive design on each component
6. **Follow Astro best practices** - Use content collections, SSG, minimal client-side JS
7. **Keep it simple** - Start with MVP features, add complexity later

### Design SHOULD Feel Like:

✅ A calm beach horizon (spacious, clear)
✅ A comfortable library (organized, accessible)
✅ A moment of creative pause (thoughtful, not rushed)
✅ A passion for systems (precise, technical)

### Design Should NOT Feel Like:

❌ A busy newsstand (cluttered, overwhelming)
❌ A race to finish (rushed, stressful)
❌ Generic template (impersonal, cookie-cutter)
❌ Compromised on mobile (desktop-only thinking)

---

**Remember:** This is MY corner of the internet. It should feel like me, represent my thinking, and provide value to others while serving as my personal digital sanctuary.
