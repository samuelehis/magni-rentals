# Magnicarz Lead Capture — HTML/CSS Prototype

Open `index.html` in a browser.

## Build structure
- `index.html` — responsive landing page
- `styles.css` — responsive visual system
- `app.js` — menu behavior + QR attribution persistence
- `hero-bg.jpg` — extracted vehicle/architectural hero imagery from the supplied design reference
- `workflows/` — initial service workflow pages

## QR attribution
The landing page accepts and stores:
`source`, `campaign`, `rep`, `location`, `qr`

Example:
`index.html?source=qr&campaign=lagos-showroom&rep=rep-001&location=ikeja&qr=ikeja-001`

## Next production tasks
1. Replace placeholder contact numbers/links.
2. Build each workflow as a validated form.
3. Add server API + database.
4. Add Zoho CRM OAuth and lead/contact/deal mapping.
5. Add sales-rep routing and duplicate-lead detection.
6. Add analytics for QR code, campaign, rep and conversion.
