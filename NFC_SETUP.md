# NFC setup

- Public connections: `/connect`
- Resume sticker: `/resume`
- Networking card: `/tap/<NFC_ACCESS_TOKEN>`

Set `NFC_ACCESS_TOKEN` to a long, randomly generated URL-safe value and `NFC_PHONE` to the desired international phone number in Vercel environment variables. Redeploy after changing them. Do not commit either value. The page and vCard require both values.

The NFC URL is private by distribution, not authenticated: anyone who receives or copies the URL can share it. Treat it like a password. Rotating the token invalidates the old link and requires reprogramming the card. Do not put the URL into a public page, sitemap, or QR code. The resume sticker uses the public `/resume` route and does not include a phone number. A downloadable public resume remains unavailable until a phone-free PDF is prepared.
