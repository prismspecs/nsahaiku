# NSA Haiku Generator

> *"Make your own haiku out of the NSA search term database they use to keep track of YOU!"*

A satirical, interactive web application created by **Grayson Earle** (with design collaboration by **Britt Boyd**) that randomly generates 5-7-5 haikus using domestic surveillance keyword databases released by the US Department of Homeland Security (DHS) and leaked NSA surveillance program documents.

Rather than approaching mass electronic surveillance with doom and gloom, the project turns watch-lists into generative poetry—saturating communication channels with sensitive keywords while raising awareness about digital civil liberties.

---

## Background and Sources

The vocabulary driving the generator is compiled and syllable-tagged in [`terms.csv`](terms.csv) (over 700 curated entries). The terms originate from two primary sources:

1. **Department of Homeland Security (DHS) Analyst's Desktop Binder (2011)**: A 366-word keyword list released pursuant to a Freedom of Information Act (FOIA) request filed by the Electronic Privacy Information Center (EPIC), documented by [Forbes](https://www.forbes.com/sites/reuvencohen/2012/05/26/department-of-homeland-security-forced-to-release-list-of-keywords-used-to-monitor-social-networking-sites/) and [The Huffington Post](https://www.huffingtonpost.com/2012/02/24/homeland-security-manual_n_1299908.html).
2. **NSA PRISM & Domestic Spying Interception Keywords**: Published in *Business Insider* referencing investigative reporting by Wired's James Bamford and *Attrition.org*.

Learn more by visiting `terms.html` and `about.html` directly in the project.

---

## How It Works

- **Static Frontend**: Built entirely with HTML5, CSS, and client-side JavaScript (jQuery).
- **Asynchronous Data Loading**: On page load, `js/main.js` fetches [`terms.csv`](terms.csv), parses each keyword and syllable count into arrays, and populates the marquee ticker.
- **Generator Algorithm**: When the user clicks or taps the haiku container (or generate area), the generator constructs three lines satisfying the traditional 5-7-5 syllable constraint:
  - Line 1: 5 syllables
  - Line 2: 7 syllables
  - Line 3: 5 syllables
- **Responsive Layout**: Adjusts typography and layout dynamically for desktop screens, and includes dedicated templates for mobile (`mobile.html`) and tablet/display installations (`ipad.html`, `feed.html`).

---

## Running as a GitHub Page

This project is 100% compatible with GitHub Pages.

Because the core application (the haiku generator, dictionary ticker, terms list, and about pages) is purely client-side static HTML, CSS, and JavaScript with no build step required, it can be hosted directly on GitHub Pages.

> **Note on Email Sharing**: Email sharing uses native client-side `mailto:` links with pre-filled haiku text, meaning it works on GitHub Pages without requiring any server or email backend. (The legacy `send_form_email.php` is kept only as an optional artifact).

### How to Enable GitHub Pages:

1. Go to repository settings on GitHub:
   `https://github.com/prismspecs/nsahaiku/settings/pages`
2. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main`, and choose `/ (root)` folder
3. Click **Save**.
4. The site will be published at your configured GitHub Pages URL or custom domain (e.g. `nsahaiku.graysonearle.com`).

---

## Local Development

To run and preview the project locally, start any static HTTP server from the repository root:

### Python 3:
```bash
python3 -m http.server 8000
```
Then navigate to [http://localhost:8000](http://localhost:8000).

### Node.js (`npx serve`):
```bash
npx serve .
```

### Docker (Optional Apache/PHP environment):
If you want to run with the bundled Docker container including PHP support:
```bash
docker build -t nsahaiku .
docker run -p 8080:80 nsahaiku
```
Then navigate to [http://localhost:8080](http://localhost:8080).

---

## Repository Structure

```text
.
├── index.html            # Main desktop application & haiku generator
├── mobile.html           # Dedicated mobile layout
├── terms.html            # Documentation of DHS & NSA source wordlists
├── about.html            # Artist statement, project background, and advocacy links
├── feed.html             # Hall of fame & live stream layout
├── ipad.html             # Gallery / iPad display mode
├── terms.csv             # Raw database of surveillance keywords & syllable counts
├── js/
│   ├── main.js           # Core desktop logic (CSV parser, generator, resizer)
│   ├── mobile.js         # Mobile generator logic
│   ├── social.js         # Social sharing popup triggers
│   └── detectmobile.js   # Client-side mobile device redirection
├── css/                  # Styling & typography
├── images/               # UI graphics, arrows, icons
├── Dockerfile            # Optional container configuration for PHP/Apache
└── send_form_email.php   # Legacy server-side email handler (optional)
```

---

## Credits and License

- **Concept & Code**: [Grayson Earle](https://www.graysonearle.com)
- **Design Collaborator**: Britt Boyd
- Advocated in solidarity with [Fight for the Future](https://www.fightforthefuture.org) and the [Electronic Frontier Foundation (EFF)](https://www.eff.org).
